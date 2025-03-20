import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ItemDetails({ type }) {
    let { id } = useParams();
    //const [Itemtype, setType] = useState(type);
    const [ItemData, setItemData] = useState({});

    const navigate = useNavigate();

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
                                    alt={ItemData.name}
                                />
                            )}
                            <p></p>
                            {ItemData.links?.webcast && (
                                <iframe
                                    width="560"
                                    height="315"
                                    src={ItemData.links.webcast.replace(
                                        "watch?v=",
                                        "embed/"
                                    )}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                            <p
                                onClick={() =>
                                    navigate(`/rockets/${ItemData.rocket}`)
                                }
                            >
                                Rocket Id : {ItemData.rocket}
                            </p>

                            <ul>
                                payloads Id :
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
                            <p
                                onClick={() =>
                                    navigate(
                                        `/launchpads/${ItemData.launchpad}`
                                    )
                                }
                            >
                                launchpad Id : {ItemData.launchpad}
                            </p>
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

                            <p></p>
                        </>
                    )}
                    {type === "payloads" && (
                        <>
                            <h2>Name : {ItemData.name}</h2>
                            <p>Type : {ItemData.type}</p>
                            <p>Reused : {ItemData.reused ? "Yes" : "No"}</p>
                            <p
                                onClick={() =>
                                    navigate(`/launches/${ItemData.launch}`)
                                }
                            >
                                Launch : {ItemData.launch}
                            </p>
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
