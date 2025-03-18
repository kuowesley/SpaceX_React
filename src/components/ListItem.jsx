function ListItem(props) {
    console.log("This is ListItenm");
    if (props.type == "launches") {
        return (
            <>
                <li>
                    <p>123</p>
                </li>
            </>
        );
    } else if (props.type == "") {
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
