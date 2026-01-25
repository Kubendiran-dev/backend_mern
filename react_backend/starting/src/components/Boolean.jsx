import { useState } from "react";

const Boolean =()=>{

    const [show,setShow]= useState(true);

    return(
        <>
        {show && <p>Hello</p>}
        <button onClick={()=>setShow(!show)}>Toggle</button>
        </>
    )
}


export default Boolean;
