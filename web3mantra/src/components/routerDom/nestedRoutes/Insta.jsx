import React from 'react'
import {Link,Outlet} from "react-router-dom"
const Insta = () => {
  return (
    <>
    <div>My Insta page</div><br />
    <Link to="user">insta user name</Link>
    <Outlet/>
    </>
  )
}

export default Insta;