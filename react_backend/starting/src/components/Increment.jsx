import { useState } from "react";

const Increment = ()=>{

    const [count,setCount] = useState(0)
    return(

        <>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}


export default Increment;
