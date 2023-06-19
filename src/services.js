import React from "react";
import './home.css';
import { useNavigate } from "react-router-dom";

const Service=()=>{
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
    let GoForm=()=>{
        n('/Form')
    }
    let dea=()=>{
        n("/dea")
    }
    return(
        <div>   
        <header>
            <nav>
                <div className="inpbox">
                <ul>
                 
                    <li onClick={GoHome}><b><u>HOME</u></b></li>
                    <li onClick={GoAbout}><b><u>ABOUT</u></b></li>
                    <li onClick={GoContact}><b><u>CONTACT</u></b></li>
                    <li onClick={GoService}><b><u>DETAILS</u></b></li>
                    <li onClick={dea}>YOUR BOOKING</li>
     

                   
                    </ul>
                </div>
                </nav>
            </header>
            <div id="container">
                <div id="dash">
                    <p>Travlr</p>
                  <div id="dash-inner">
                   
                
                  </div>





                </div>
                <div id="place-cont">
                    <h2>Popular Tourist Places</h2>
                    <div id="block-cont">
                        
                        
                        
                        <div onClick={GoForm} id="blocks1"></div>
                        <div onClick={GoForm} id="blocks2"></div>
                        <div onClick={GoForm} id="blocks3"></div>
                        <div onClick={GoForm} id="blocks4"></div>
                        <div onClick={GoForm} id="blocks5"></div>
                        <div onClick={GoForm} id="blocks6"></div>
                    </div>

                </div>
                

            </div>

        </div>
    )
}
export default Service;