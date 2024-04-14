

import React from "react";

import "./Home.css"
import {Link} from "react-router-dom"
function Home() {

    return (
     <> 
        <main>
            <h1>DESIGN</h1>
            <h1>YOUR CV</h1>
            <Link to="/design"> <button className="start">Get Started </button></Link>
        </main>
     </>

    )
  
}
export default Home;
