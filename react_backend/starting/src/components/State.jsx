import { useState } from "react";

const State =()=>{


const [state,setState] = useState("click me")


const handleClick =()=>{
    setState(prev=>
        prev === "click me" ? "clicked" : "click me"
    )
}

    return(

        <>
        <button className="bg-amber-500" onClick={handleClick}>
{state}
        </button>
        
        </>
    )
}


export default State;
