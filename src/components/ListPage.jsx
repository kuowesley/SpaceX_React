import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListItem from "./ListItem";
import { List } from "@mui/material";

function ListPage(props) {
    const { urlPage } = useParams();
    const [type, setType] = useState(props.type);
    const [listData, setListData] = useState([]);
    const [page, setPage] = useState(urlPage ? parseInt(urlPage) : 1);

    useEffect(() => {
        console.log("this is useEffect for ListPage.jsx");

        async function fetchData() {
            try {
                if (type == "launches") {
                    const { data } = await axios.get(
                        "https://api.spacexdata.com/v4/launches"
                    );
                    console.log("2");
                    console.log(data);
                    setListData(data);
                }
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
        console.log("1");
        console.log(listData);
        // console.log(listData);
        // console.log(lastPage);
    }, [page, type]);

    const lastPage = listData.length / 10 + 1;
    console.log("fuck");
    console.log(listData);
    console.log(page);

    return (
        <>
            <div>
                <ListItem />
                <h1>List of {type}</h1>
                <ul>
                    {listData
                        .slice((page - 1) * 10, (page - 1) * 10 + 10)
                        .map((item) => {
                            return <ListItem data={item} type={type} />;
                        })}
                </ul>
            </div>
            <div>
                {page > 1 && (
                    <button onClick={() => setPage(page - 1)}>Previous</button>
                )}
                {page < lastPage && (
                    <button onClick={() => setPage(page + 1)}>Next</button>
                )}
            </div>
        </>
    );
}

export default ListPage;
