import React from "react";
import logo from "../img/logo.png";
import {Link} from "react-router-dom"; 
const Footer = () => {
    return (
        <footer>
            <img src={logo} alt=""/>
            <span>Made with love and <b>React.js</b>.</span>
        </footer>
    )
 }
 export default Footer