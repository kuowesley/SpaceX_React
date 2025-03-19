import { useParams, useNavigate } from "react-router-dom";

function ListItem({ data, type, expanded, onToggle }) {
    const navigate = useNavigate();

    if (type == "launches") {
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
                        <img src={data.links.patch.small} alt={data.name}></img>
                    </div>
                </li>
            </>
        );
    }
}

export default ListItem;
