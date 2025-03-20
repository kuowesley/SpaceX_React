import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ListItem from "./ListItem";
import { List } from "@mui/material";
import ErrorPage from "./ErrorPage";

function ListPage(props) {
    let { page } = useParams();
    page = page !== undefined && parseInt(page) > 0 ? parseInt(page) : 1;
    const [listData, setListData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                if (props.type == "launches") {
                    const { data } = await axios.get(
                        "https://api.spacexdata.com/v4/launches"
                    );
                    setListData(data);
                }
                if (props.type === "payloads") {
                    const { data } = await axios.get(
                        "https://api.spacexdata.com/v4/payloads"
                    );
                    setListData(data);
                }
                if (props.type === "cores") {
                    const { data } = await axios.get(
                        "https://api.spacexdata.com/v4/cores"
                    );
                    setListData(data);
                }
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, [props.type, page]);

    if (!listData || listData.length === 0) {
        return <div>Loading...</div>;
    }

    const lastPage = listData.length / 10 + 1;
    //console.log(currPage);
    if (page > lastPage) {
        return (
            <>
                <ErrorPage />
            </>
        );
    }

    return (
        <>
            <div>
                <h1>List of {props.type}</h1>
                <ul>
                    {listData
                        .slice((page - 1) * 10, (page - 1) * 10 + 10)
                        .map((item) => {
                            return (
                                <li key={item.id}>
                                    <ListItem
                                        key={item.id}
                                        data={item}
                                        type={props.type}
                                    />
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div>
                {page > 1 && (
                    <button
                        onClick={() => {
                            //setCurrPage(currPage - 1);
                            navigate(`/${props.type}/pages/${page - 1}`);
                        }}
                    >
                        Previous
                    </button>
                )}
                {page < lastPage && (
                    <button
                        onClick={() => {
                            //setCurrPage(currPage + 1);
                            navigate(`/${props.type}/pages/${page + 1}`);
                        }}
                    >
                        Next
                    </button>
                )}
            </div>
        </>
    );
}

export default ListPage;
