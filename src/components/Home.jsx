

import React from "react";

import "./Home.css"
import {Link} from "react-router-dom"
function Home() {

    return (
     <> 
        <main>
        <div className="home">
           <div className="div1">DESIGN</div>
            <div className="div2">YOUR CV</div>
           
                <Link to="/design"> <button className="start">Get Started </button></Link>
           
        </div>
        </main>
     </>

    )
  
}
export default Home;
