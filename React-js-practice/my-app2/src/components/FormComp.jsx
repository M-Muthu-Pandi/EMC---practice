import { useState } from "react";

const FormComp = () => {
    const [myname, setmyname] = useState("John");

    const handleChange = (e) => {
        setmyname(e.target.value);
        // setmyname("Mike");
    }

    return (
        <form>
            <input type="text" value={myname} onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}

export default FormComp;