import { useState, useEffect } from "react";
import axios from "axios";

function Landing() {
    const [company, setCompany] = useState(null);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const companyRes = await axios.get(
                    "https://api.spacexdata.com/v4/company"
                );
                const historyRes = await axios.get(
                    "https://api.spacexdata.com/v4/history"
                );

                setCompany(companyRes.data);
                setHistory(historyRes.data);
            } catch (e) {
                console.error("Error fetching data:", e);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <h1>Lab 5</h1>
            <div>
                <h2>Company summary</h2>
                {company && company.summary ? company.summary : "Loading..."}
                <h2>Company history</h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {history.slice(0, 5).map((item) => {
                        return (
                            <li key={item.id}>
                                <p>
                                    Title :{" "}
                                    {item.links?.article ? (
                                        <a
                                            href={item.links.article}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item.title}
                                        </a>
                                    ) : (
                                        item.title
                                    )}
                                </p>
                                <p>Date : {item.event_date_utc}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Landing;
