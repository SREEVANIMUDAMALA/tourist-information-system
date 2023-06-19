import React from "react";
import './home.css';
import { useNavigate } from "react-router-dom";
var Home=()=>{
    let n=useNavigate()

    let GoHome=()=>{
       n('/Home')
    }
    let GoAbout=()=>{
        n('/About')
    }
    let GoContact=()=>{
        n('/Contact')
    }
    let GoService=()=>{
        n('/Service')
    }
    let Gologout=()=>{
        n("/gologout")
    }
    
    return(
        <div id="id1">   
        <header>
            <nav>
                <div className="inpbox">
                <ul>
                 
                    <li onClick={GoHome}><b><u>HOME</u></b></li>
                    <li onClick={GoAbout}><b><u>ABOUT</u></b></li>
                    <li onClick={GoContact}><b><u>CONTACT</u></b></li>
                    <li onClick={GoService}><b><u>DETAILS</u></b></li>
                    <li onClick={Gologout}><b><u>LOGOUT</u></b></li>
                   
                   
                    </ul>
                </div>
                </nav>
            </header>
            
            <div>
            
                <h1 style={{color:"orangered",marginLeft:"10.5cm",marginTop:"1cm"}}><i><p>WELCOME TO BEST TOURIST PLACES</p></i></h1>
                <h1 id="id2"><b>wonderfull places to enjoy your tour</b></h1>
            </div>
           
              </div>
        )
    }
    export default Home;
