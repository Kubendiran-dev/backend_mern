import { useState } from "react";

const Array = ()=>{

    const [items, setItems] = useState([]);
    const addItem =()=>{
        setItems([...items,"new item"])
    }
    return(
        <>
        <button onClick={addItem}>Add</button>
        {items.map((item,index)=>(
            <p key={index}>{item}</p>
        ))}
        </>
    )
}

export default Array;
