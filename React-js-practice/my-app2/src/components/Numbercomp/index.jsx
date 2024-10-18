import { useState } from "react";
import ResultComp from "./Result";

const FormComptwo = () => {
    const [fnum,setfnum] = useState();
    const [lnum,setlnum] = useState();
    const [result,setResult] = useState("Result");

    const handleFnum = (e) => {
        setfnum(Number(e.target.value));
    }

    const handleLnum = (e) => {
        setlnum(Number(e.target.value));
    }

    const handleResult = (e) => {
        setResult(fnum + lnum);
    }

    return(
        <div>
            <form>
            <label htmlFor="fnum">First Number: </label>
                <input type="number" id="fnum" value={fnum} onChange={handleFnum}/>
                <br />
            <label htmlFor="lnum">Last Number: </label>
                <input type="number" id="lnum" value={lnum} onChange={handleLnum}/>
                <br />
                <input type="button" value='Add' onClick={handleResult} />
            </form>
            <ResultComp result={result} />
        </div>
    )
}

export default FormComptwo;