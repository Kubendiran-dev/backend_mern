import { useState } from "react";

const Decrement=()=>{

const [less,setLess]= useState(10);

    return(
        <>
        <p>{less}</p>
        <button onClick={()=>{setLess(less-1)}}>Decrement</button>
        </>
    )
}


export default Decrement;