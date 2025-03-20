import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ItemDetails({ type }) {
    let { id } = useParams();
    //const [Itemtype, setType] = useState(type);
    const [ItemData, setItemData] = useState({});

    const navigate = useNavigate();

    const getEmbeddedYouTubeUrl = (url) => {
        const videoIdMatch =
            url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/) ||
            url.match(/watch\?v=([a-zA-Z0-9_-]+)/);
        if (videoIdMatch) {
            return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
        }
        return null; // 如果網址格式不對，回傳 null
    };

    useEffect(() => {
        async function fetchData() {
            try {
                if (type === "launches") {
                    const { data } = await axios.get(
                        `https://api.spacexdata.com/v4/launches/${id}`
                    );
                    setItemData(data);
                }

                if (type === "payloads") {
                    const { data } = await axios.get(
                        `https://api.spacexdata.com/v4/payloads/${id}`
                    );
                    setItemData(data);
                }

                if (type === "cores") {
                    const { data } = await axios.get(
                        `https://api.spacexdata.com/v4/cores/${id}`
                    );
                    setItemData(data);
                }

                if (type === "rockets") {
                    const { data } = await axios.get(
                        `https://api.spacexdata.com/v4/rockets/${id}`
                    );
                    setItemData(data);
                }
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, [id, type]);

    if (
        !ItemData ||
        ItemData === undefined ||
        Object.keys(ItemData).length === 0
    ) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>{type} Item Details</h1>
            {ItemData && Object.keys(ItemData).length !== 0 ? (
                <>
                    {type === "launches" && (
                        <>
                            <h2>Name: {ItemData.name}</h2>

                            {ItemData.links?.patch?.small && (
                                <img
                                    src={ItemData.links.patch.small}
                                    alt={ItemData.name || "Mission Patch"}
                                />
                            )}
                            <p></p>
                            {ItemData.links?.webcast && (
                                <iframe
                                    width="560"
                                    height="315"
                                    src={getEmbeddedYouTubeUrl(
                                        ItemData.links.webcast
                                    )}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                            <button
                                onClick={() =>
                                    navigate(`/rockets/${ItemData.rocket}`)
                                }
                            >
                                Rocket Id : {ItemData.rocket}
                            </button>

                            <p>payloads Id :</p>
                            <ul>
                                {ItemData.payloads &&
                                    ItemData.payloads.map((payloadsId) => (
                                        <li
                                            key={payloadsId}
                                            onClick={() =>
                                                navigate(
                                                    `/payloads/${payloadsId}`
                                                )
                                            }
                                        >
                                            {payloadsId}
                                        </li>
                                    ))}
                            </ul>
                            <button
                                onClick={() =>
                                    navigate(
                                        `/launchpads/${ItemData.launchpad}`
                                    )
                                }
                            >
                                launchpad Id : {ItemData.launchpad}
                            </button>
                            <ul>
                                {ItemData.cores &&
                                    ItemData.cores.map((coresItem) => (
                                        <li
                                            key={coresItem.core}
                                            onClick={() =>
                                                navigate(
                                                    `/cores/${coresItem.core}`
                                                )
                                            }
                                        >
                                            cores Id : {coresItem.core}
                                        </li>
                                    ))}
                            </ul>
                        </>
                    )}
                    {type === "payloads" && (
                        <>
                            <h2>Name : {ItemData.name}</h2>
                            <p>Type : {ItemData.type}</p>
                            <p>Reused : {ItemData.reused ? "Yes" : "No"}</p>
                            <button
                                onClick={() =>
                                    navigate(`/launches/${ItemData.launch}`)
                                }
                            >
                                Launch : {ItemData.launch}
                            </button>
                        </>
                    )}
                    {type === "cores" && (
                        <>
                            <p>Serial : {ItemData.serial}</p>
                            <p>Status : {ItemData.status}</p>
                            <ul>
                                Launches
                                {ItemData.launches &&
                                    ItemData.launches.map((lunchId) => (
                                        <li
                                            key={lunchId}
                                            onClick={() =>
                                                navigate(`/launches/${lunchId}`)
                                            }
                                        >
                                            {lunchId}
                                        </li>
                                    ))}
                            </ul>
                        </>
                    )}
                    {type === "rockets" && (
                        <>
                            <p>Name : {ItemData.name}</p>
                            {ItemData.flickr_images &&
                                ItemData.flickr_images.length > 0 && (
                                    <img
                                        src={ItemData.flickr_images[0]}
                                        alt={ItemData.name || "Mission Patch"}
                                    />
                                )}
                            <p>Height-meters : {ItemData.height?.meters}</p>
                            <p>Height-feet : {ItemData.height?.feet}</p>
                            <p>diameter-meters : {ItemData.diameter?.meters}</p>
                            <p>diameter-feet : {ItemData.diameter?.feet}</p>
                        </>
                    )}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export default ItemDetails;
