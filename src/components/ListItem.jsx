import { useParams, useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

function ListItem({ data, type }) {
    const navigate = useNavigate();
    if (type === "launches") {
        return (
            <>
                <li key={data.id}>
                    <div
                        onClick={() => {
                            navigate(`/launches/${data.id}`);
                        }}
                    >
                        <p>Name : {data.name}</p>
                        <p>Flight Number : {data.flight_number}</p>
                        <img
                            src={data.links?.patch?.small}
                            alt={data.name}
                        ></img>
                    </div>
                    {/* <Link to={`/launches/${data.id}`}>
                        <p>Name : {data.name}</p>
                        <p>Flight Number : {data.flight_number}</p>
                        <img src={data.links.patch.small} alt={data.name}></img>
                    </Link> */}
                </li>
            </>
        );
    }
    if (type === "payloads") {
        return (
            <>
                <li key={data.id}>
                    <div
                        onClick={() => {
                            navigate(`/payloads/${data.id}`);
                        }}
                    >
                        <p>Name : {data.name}</p>
                        <p>Type : {data.type}</p>
                    </div>
                </li>
            </>
        );
    }
}

export default ListItem;
