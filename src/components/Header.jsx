



import React from "react"

import { Link } from "react-router-dom"

import "./Header.css"
function Header() {
 
    return (
        <>
        <header>
            <nav>
            <ul>
                <li><a>Home</a></li>
                {/* <li></li> */}
            </ul>
            </nav>
            <ul >
            <Link to="./login"><button className="btn">LOGIN</button></Link>
            <Link to="signup">  <button className="btn">SIGNUP</button></Link>
            </ul>
   
        </header>
        
      </>
    )
  
}

export default Header