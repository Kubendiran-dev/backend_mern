import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {


    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const name = params.get("name");
    const age = params.get("age");
  return (
   <>
   <h1>Profile info</h1>
   <p>Name:{name}</p>
   <p>Age:{age}</p>
   </>
  )
}

export default Profile