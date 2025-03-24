import { useParams, useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

function ListItem({ data, type }) {
    const navigate = useNavigate();
    if (type === "launches") {
        return (
            <>
                <div
                    role="button"
                    onClick={() => {
                        navigate(`/launches/${data.id}`);
                    }}
                >
                    <p>Name : {data.name}</p>
                    <p>Flight Number : {data.flight_number}</p>
                    <img src={data.links?.patch?.small} alt={data.name}></img>
                </div>
            </>
        );
    }
    if (type === "payloads") {
        return (
            <>
                <div
                    role="button"
                    onClick={() => {
                        navigate(`/payloads/${data.id}`);
                    }}
                >
                    <p>Name : {data.name}</p>
                    <p>Type : {data.type}</p>
                </div>
            </>
        );
    }
    if (type === "cores") {
        return (
            <>
                <div
                    role="button"
                    onClick={() => {
                        navigate(`/cores/${data.id}`);
                    }}
                >
                    <p>Serial : {data.serial}</p>
                    <p>Status : {data.status}</p>
                </div>
            </>
        );
    }
    if (type === "rockets") {
        return (
            <>
                <div
                    role="button"
                    onClick={() => {
                        navigate(`/rockets/${data.id}`);
                    }}
                >
                    <p>Name : {data.name}</p>
                </div>
            </>
        );
    }
    if (type === "ships") {
        return (
            <>
                <div
                    role="button"
                    onClick={() => {
                        navigate(`/ships/${data.id}`);
                    }}
                >
                    <p>Name : {data.name}</p>
                </div>
            </>
        );
    }
    if (type === "launchpads") {
        return (
            <>
                <div
                    role="button"
                    onClick={() => {
                        navigate(`/launchpads/${data.id}`);
                    }}
                >
                    <p>Name : {data.name}</p>
                </div>
            </>
        );
    }
}

export default ListItem;
