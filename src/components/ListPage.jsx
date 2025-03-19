import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ListItem from "./ListItem";
import { List } from "@mui/material";
import ErrorPage from "./ErrorPage";

function ListPage(props) {
    const { page } = useParams();
    //const [type, setType] = useState(props.type);
    const [listData, setListData] = useState([]);
    const [currPage, setCurrPage] = useState(
        page !== undefined && parseInt(page) > 0 ? parseInt(page) : 1
    );
    const [expandedItem, setExpandedItem] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        //console.log("useEffect");
        setCurrPage(parseInt(page) > 0 ? parseInt(page) : 1);
        //setType(props.type);
        //console.log("useEffect 的 props.type  :" + props.type);
        //console.log("useEffect 的 type  :" + type);
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
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, [currPage, props.type, page]);

    //console.log(type);
    //console.log(currPage);
    //console.log(page);
    if (!listData || listData.length === 0) {
        return <div>Loading...</div>;
    }

    const lastPage = listData.length / 10 + 1;
    //console.log(currPage);
    if (currPage > lastPage) {
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
                        .slice((currPage - 1) * 10, (currPage - 1) * 10 + 10)
                        .map((item) => {
                            return (
                                <ListItem
                                    key={item.id}
                                    data={item}
                                    type={props.type}
                                />
                            );
                        })}
                </ul>
            </div>
            <div>
                {currPage > 1 && (
                    <button
                        onClick={() => {
                            setCurrPage(currPage - 1);
                            navigate(`/${props.type}/pages/${currPage - 1}`);
                        }}
                    >
                        Previous
                    </button>
                )}
                {currPage < lastPage && (
                    <button
                        onClick={() => {
                            setCurrPage(currPage + 1);
                            navigate(`/${props.type}/pages/${currPage + 1}`);
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
