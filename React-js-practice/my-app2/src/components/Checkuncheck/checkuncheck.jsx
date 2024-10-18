import { useState } from "react";

const List = (props) => {
    const [check, setcheck] = useState(false);

    const handleChange = () => {
        setcheck(!check);
    }

    return (
        <>
            <div>
                <input type="checkbox" id="checklist" onChange={handleChange} />
                <label htmlFor="checklist" style={{ textDecoration: check ? "line-through" : "none" }}>{props.activity}</label>
            </div>
        </>
    )
}

export default List;