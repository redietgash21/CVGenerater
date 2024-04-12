



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
            <div className="right">
            <ul >
                <li><Link to="./login">LOGIN</Link></li>
                <li><Link to="signup">SIGNUP</Link></li>
            </ul>
            </div>
           
           
            
        </header>
        
      </>
    )
  
}

export default Header