import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ItemDetails({ type }) {
    let { id } = useParams();
    const [Itemtype, setType] = useState(type);
    const [ItemData, setItemData] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                if (Itemtype === "launches") {
                    const { data } = await axios.get(
                        `https://api.spacexdata.com/v4/launches/${id}`
                    );
                    setItemData(data);
                }
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, [Itemtype]);

    if (
        !ItemData ||
        ItemData === undefined ||
        Object.keys(ItemData).length === 0
    ) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {ItemData && Object.keys(ItemData).length !== 0 ? (
                <>
                    {type === "launches" && (
                        <>
                            <h1>Item Details</h1>
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
                                    navigate(`/launchpads/${payloadsId}`)
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
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export default ItemDetails;
