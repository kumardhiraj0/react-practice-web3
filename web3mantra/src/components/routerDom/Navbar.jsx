import React from "react";
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./navbar.css";
//import { Link } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
  //css style for navlink
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
      color : isActive ? "green" : ""
    };
  };
  return (
    <>
      {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul> */}

      <ul>
        <li>
          <NavLink to="/" style={navLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={navLinkStyles}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={navLinkStyles}>
            Contact
          </NavLink>
        </li>
        {/* <li><NavLink to="/post/mobile" style={({isActive})=>{return {color : isActive ? "red" : "",textDecoration: 'none' }}}>Post</NavLink></li>
                <li><NavLink to="/post/mobile/1" style={({isActive})=>{return {color : isActive ? "red" : "",textDecoration: 'none' }}}>Post with id</NavLink></li>
                <li><NavLink to="/dashboard" style={({isActive})=>{return {color:isActive?"red":"",textDecoration:"none"}}}>Dashboard </NavLink></li>
                <li><NavLink to="/login" style={({isActive})=>{return {color:isActive?"red":"",textDecoration:"none"}}}>Login</NavLink></li>
                <li><NavLink to="/search" style={({isActive})=>{return {color:isActive?"red":"",textDecoration:"none"}}}>Search</NavLink></li> */}
      </ul>

      <button onClick={()=> navigate("/order-place")}>place order</button>
    </>
  );
};
export default Navbar;
