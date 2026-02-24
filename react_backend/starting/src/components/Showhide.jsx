import React, { useState } from 'react'

export const Showhide = () => {

    const [isVisibile,SetisVisibile] = useState(!true)

    const showMessage =()=>{
        SetisVisibile(true)
    }

     const hideMessage =()=>{
        SetisVisibile(false)
    }

  return (
    <>
    <button onClick={showMessage}>ShowMessage</button>
    <button onClick={hideMessage}>HideMessage</button>
    {isVisibile && <p>show & hide practice</p>}
    </>
  )
}    

export default Showhide
