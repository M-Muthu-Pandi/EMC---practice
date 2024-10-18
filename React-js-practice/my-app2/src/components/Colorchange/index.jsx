import { useState } from "react";

const ColorChange = () => {
    const [colorst,setcolorst] = useState(true);

    const changeColor = ()=> {
        setcolorst(!colorst);
    }

    return (
        <div>
            <div style={{backgroundColor:colorst?"red":"green", height:"100px", width:"100px"}}></div>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default ColorChange;