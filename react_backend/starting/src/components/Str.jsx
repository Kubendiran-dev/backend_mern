import { useState } from "react";

const Str=()=>{

    const [str,setStr] = useState("react")
    return(

        <>
        <p>{str}</p>
        <button onClick={()=>{setStr("node")}}>To change</button>
        </>
    )
}

export default Str;
