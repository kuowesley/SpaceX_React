function ListItem({ data, type, expanded, onToggle }) {
    console.log("This is ListItenm");
    if (type == "launches") {
        return (
            <>
                <li>
                    <p>123</p>
                    <div
                        onClick={onToggle}
                        style={{ cursor: "pointer", fontWeight: "bold" }}
                    >
                        {data.id} - {data.date_utc} 📌 {expanded ? "🔽" : "▶️"}
                    </div>
                    {expanded && (
                        <div
                            style={{
                                paddingLeft: "20px",
                                borderLeft: "2px solid gray",
                                marginTop: "5px",
                            }}
                        >
                            <p>
                                <strong>Name:</strong> {data.name}
                            </p>
                            <p>
                                <strong>Details:</strong>{" "}
                                {data.details || "No details available."}
                            </p>
                            <p>
                                <strong>Flight Number:</strong>{" "}
                                {data.flight_number}
                            </p>
                        </div>
                    )}
                </li>
            </>
        );
    } else if (type == "") {
        return (
            <>
                <li>
                    <p></p>
                </li>
            </>
        );
    }
}

export default ListItem;
