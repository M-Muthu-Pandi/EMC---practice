import { useState } from "react";
import ResultComp from "./Result";

const FormCompone = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [result, setResult] = useState("Full Name");

    const handleFname = (e) => {
        setfname((e.target.value));
    }

    const handleLname = (e) => {
        setlname((e.target.value));
    }

    const handleResult = (e) => {
        e.preventDefault();
        setResult(`${fname} ${lname}`);
    }

    return (
        <div>
            <form>
                <label htmlFor="fname">First Name: </label>
                <input type="text" id="fname" value={fname} onChange={handleFname} />
                <br />
                <label htmlFor="lname">Last Name: </label>
                <input type="text" id="lname" value={lname} onChange={handleLname} />
                <br />
                <input type="submit" onClick={handleResult} />
            </form>
            <ResultComp result={result} />
        </div>
    )
}

export default FormCompone;