import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ErrorPage from "./ErrorPage";
import "../App.css";

function ItemDetails({ type }) {
    let { id } = useParams();
    //const [Itemtype, setType] = useState(type);
    const [ItemData, setItemData] = useState({});
    const [isSuccess, setIsSuccess] = useState(true);
    const navigate = useNavigate();

    // const getEmbeddedYouTubeUrl = (url) => {
    //     const videoIdMatch =
    //         url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/) ||
    //         url.match(/watch\?v=([a-zA-Z0-9_-]+)/);
    //     if (videoIdMatch) {
    //         return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    //     }
    //     return null; // 如果網址格式不對，回傳 null
    // };

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

                if (type === "ships") {
                    const { data } = await axios.get(
                        `https://api.spacexdata.com/v4/ships/${id}`
                    );
                    setItemData(data);
                }

                if (type === "launchpads") {
                    const { data } = await axios.get(
                        `https://api.spacexdata.com/v4/launchpads/${id}`
                    );
                    setItemData(data);
                }
                //console.log("456");
                setIsSuccess(true);
            } catch (e) {
                setIsSuccess(false);
                console.log(e);
            }
        }

        fetchData();
    }, [id, type]);

    // console.log("123");
    // console.log(isSuccess);
    if (!isSuccess) {
        return (
            <>
                <ErrorPage />
            </>
        );
    }

    if (
        !ItemData ||
        ItemData === undefined ||
        Object.keys(ItemData).length === 0
    ) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="page-container">
                <h1>{type} Item Details</h1>
                {ItemData && Object.keys(ItemData).length !== 0 ? (
                    <>
                        {type === "launches" && (
                            <>
                                <h2>Name: {ItemData.name}</h2>
                                <div>
                                    {ItemData.links?.patch?.small && (
                                        <img
                                            className="responsive-image"
                                            src={ItemData.links.patch.small}
                                            alt={
                                                ItemData.name || "Mission Patch"
                                            }
                                        />
                                    )}
                                </div>

                                <p>Rocket Id : </p>
                                <Link
                                    to={`/rockets/${ItemData.rocket}`}
                                    className="btn"
                                >
                                    {ItemData.rocket}
                                </Link>

                                <p>payloads Id :</p>
                                {ItemData.payloads &&
                                    ItemData.payloads.length > 0 && (
                                        <ul className="centered-list">
                                            {ItemData.payloads &&
                                                ItemData.payloads.map(
                                                    (payloadsId) => (
                                                        <li key={payloadsId}>
                                                            <Link
                                                                to={`/payloads/${payloadsId}`}
                                                            >
                                                                {payloadsId}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                        </ul>
                                    )}
                                <p>launchpad Id : </p>
                                <Link to={`/launchpads/${ItemData.launchpad}`}>
                                    {ItemData.launchpad}
                                </Link>
                                <p>cores Id : </p>
                                {ItemData.cores &&
                                    ItemData.cores.length > 0 && (
                                        <ul className="centered-list">
                                            {ItemData.cores &&
                                                ItemData.cores.map(
                                                    (coresItem) => (
                                                        <li
                                                            key={coresItem.core}
                                                        >
                                                            <Link
                                                                to={`/cores/${coresItem.core}`}
                                                            >
                                                                {coresItem.core}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                        </ul>
                                    )}
                            </>
                        )}
                        {type === "payloads" && (
                            <>
                                <div className="center-content">
                                    <h2>Name : {ItemData.name}</h2>
                                    <p>Type : {ItemData.type}</p>
                                    <p>
                                        Reused :{" "}
                                        {ItemData.reused ? "Yes" : "No"}
                                    </p>
                                    {ItemData.customers &&
                                        ItemData.customers.length > 0 && (
                                            <ul className="centered-list">
                                                Customers
                                                {ItemData.customers.map(
                                                    (item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                {item}
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        )}
                                    {ItemData.nationalities &&
                                        ItemData.nationalities.length > 0 && (
                                            <ul className="centered-list">
                                                Nationalities
                                                {ItemData.nationalities.map(
                                                    (item, index) => {
                                                        return (
                                                            <li key={index}>
                                                                {item}
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        )}
                                    <p>Launch : </p>
                                    <Link to={`/launches/${ItemData.launch}`}>
                                        {ItemData.launch}
                                    </Link>
                                </div>
                            </>
                        )}
                        {type === "cores" && (
                            <>
                                <p>Serial : {ItemData.serial}</p>
                                <p>Status : {ItemData.status}</p>
                                {ItemData.launches &&
                                    ItemData.launches.length > 0 && (
                                        <ul className="centered-list">
                                            Launches
                                            {ItemData.launches &&
                                                ItemData.launches.map(
                                                    (lunchId) => (
                                                        <li key={lunchId}>
                                                            <Link
                                                                to={`/launches/${lunchId}`}
                                                            >
                                                                {lunchId}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                        </ul>
                                    )}
                            </>
                        )}
                        {type === "rockets" && (
                            <>
                                <p>Name : {ItemData.name}</p>
                                {ItemData.flickr_images &&
                                    ItemData.flickr_images.length > 0 && (
                                        <img
                                            className="responsive-image"
                                            src={ItemData.flickr_images[0]}
                                            alt={
                                                ItemData.name || "Mission Patch"
                                            }
                                        />
                                    )}
                                <p>Height-meters : {ItemData.height?.meters}</p>
                                <p>Height-feet : {ItemData.height?.feet}</p>
                                <p>
                                    diameter-meters :{" "}
                                    {ItemData.diameter?.meters}
                                </p>
                                <p>diameter-feet : {ItemData.diameter?.feet}</p>
                            </>
                        )}
                        {type === "ships" && (
                            <>
                                <p>Name : {ItemData.name}</p>
                                {ItemData.image && (
                                    <img
                                        className="responsive-image"
                                        src={ItemData.image}
                                        alt={ItemData.name || "Mission Patch"}
                                    />
                                )}
                                <p>Legacy_id : {ItemData.legacy_id}</p>
                                <p>Home_port : {ItemData.home_port}</p>

                                {ItemData.roles && (
                                    <ul className="centered-list">
                                        Roles
                                        {ItemData.roles.map((item, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                    </ul>
                                )}
                                {ItemData.launches && (
                                    <ul className="centered-list">
                                        Launches
                                        {ItemData.launches.map(
                                            (lunchId, index) => {
                                                return (
                                                    <li key={lunchId}>
                                                        <Link
                                                            to={`/launches/${lunchId}`}
                                                        >
                                                            {lunchId}
                                                        </Link>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                )}
                                {ItemData.link && (
                                    <p>
                                        <a
                                            href={ItemData.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Ship details on link
                                        </a>
                                    </p>
                                )}
                            </>
                        )}
                        {type === "launchpads" && (
                            <>
                                <p>Name : {ItemData.name}</p>
                                <p>full_name : {ItemData.full_name}</p>
                                {ItemData.images?.large && (
                                    <img
                                        className="responsive-image"
                                        src={ItemData.images?.large}
                                        alt={ItemData.name || "Mission Patch"}
                                    />
                                )}
                                <p>locality : {ItemData.locality}</p>

                                {ItemData.rockets &&
                                    ItemData.rockets.length > 0 && (
                                        <ul className="centered-list">
                                            {" "}
                                            Rockets
                                            {ItemData.rockets.map(
                                                (rocketId, index) => {
                                                    return (
                                                        <li key={rocketId}>
                                                            <Link
                                                                to={`/rockets/${rocketId}`}
                                                            >
                                                                {rocketId}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    )}
                                {ItemData.launches &&
                                    ItemData.launches.length > 0 && (
                                        <ul className="centered-list">
                                            {" "}
                                            Launches
                                            {ItemData.launches.map(
                                                (lunchId, index) => {
                                                    return (
                                                        <li key={lunchId}>
                                                            <Link
                                                                to={`/launches/${lunchId}`}
                                                            >
                                                                {lunchId}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    )}
                                {/* <button
                                    onClick={() => {
                                        navigate(
                                            `/launches/5eb87cd9ffd86e000604b32z`
                                        );
                                    }}
                                ></button> */}
                            </>
                        )}
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    );
}

export default ItemDetails;
