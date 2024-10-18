import { useState } from "react";

const ShoppingList = () => {
    const [shoplist, setshoplist] = useState(['Tomato', 'Potato', 'Shirt']);

    const [input, setinput] = useState("");

    const handleinput = (e) => {
        setinput(e.target.value);
    }

    const addList = () => {
        setshoplist([...shoplist, input]);
        setinput("");
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <form>
                <input type="text" value={input} onChange={handleinput} />
                <input type="button" value="Add" onClick={addList} />
            </form>
            <ul>
                {shoplist.map((item) => {
                    return (<li>{item}</li>);
                })}
            </ul>
        </div>
    );
}

export default ShoppingList;