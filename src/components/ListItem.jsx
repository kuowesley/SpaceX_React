import { useParams, useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

function ListItem({ data, type }) {
    const navigate = useNavigate();
    if (type === "launches") {
        return (
            <>
                {/* <div
                    role="button"
                    onClick={() => {
                        navigate(`/launches/${data.id}`);
                    }}
                >
                    <p>Name : {data.name}</p>
                    <p>Flight Number : {data.flight_number}</p>
                    <img src={data.links?.patch?.small} alt={data.name}></img>
                </div> */}
                <Link to={`/launches/${data.id}`}>
                    <div role="button">
                        <p>Name : {data.name}</p>
                        <p>Flight Number : {data.flight_number}</p>
                        <img src={data.links?.patch?.small} alt={data.name} />
                    </div>
                </Link>
            </>
        );
    }
    if (type === "payloads") {
        return (
            <Link to={`/payloads/${data.id}`}>
                <div role="button">
                    <p>Name : {data.name}</p>
                </div>
            </Link>
        );
    }

    if (type === "cores") {
        return (
            <Link to={`/cores/${data.id}`}>
                <div role="button">
                    <p>Serial : {data.serial}</p>
                </div>
            </Link>
        );
    }

    if (type === "rockets") {
        return (
            <Link to={`/rockets/${data.id}`}>
                <div role="button">
                    <p>Name : {data.name}</p>
                </div>
            </Link>
        );
    }

    if (type === "ships") {
        return (
            <Link to={`/ships/${data.id}`}>
                <div role="button">
                    <p>Name : {data.name}</p>
                </div>
            </Link>
        );
    }

    if (type === "launchpads") {
        return (
            <Link to={`/launchpads/${data.id}`}>
                <div role="button">
                    <p>Name : {data.name}</p>
                </div>
            </Link>
        );
    }
}

export default ListItem;
