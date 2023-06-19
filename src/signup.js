import React, { useState } from "react";
import './home.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

    var Signup=()=>{


        let [sname,setname]=useState("");
        let [semail,setemail]=useState("");
        let [pass,setpass]=useState("");
        let [snum,setnum]=useState("");

        var n=useNavigate()
        var Login2=()=>{
    
            n("/gologout")
        }
        var Login3=async(e)=>{
            e.preventDefault();
       
            if(sname=='')
            {
               
               alert('please enter username' )
            }
            else if(semail=='')
            {
               alert('please enter email id' )
            }
            else if(pass=='')
            {
               alert('please enter password' )
            }
          else
                    {
                        let data={name:sname,password:pass,email:semail,phnumber:snum}
                        let result=await axios.post('http://localhost:8080/hostaa/Signin',data)
                        alert(result.data)
                        n("/gologout")
                        
                    }
            
            
        }
 
    return(
            <div id="di1">
                <section id="container1">
                    <form>
                        <p id="signup">SignUp</p>
                        <input placeholder="Name" value={sname} onChange={e=>setname(e.target.value)} type="text" id="it1"></input>
                        <input placeholder="Ph.Number" value={snum} onChange={e=>setnum(e.target.value)}  type="number" id="it2" required></input>
                        <input placeholder="Email" value={semail} onChange={e=>setemail(e.target.value)}  type="email" id="it3"required></input>
                        <input placeholder="Password" value={pass} onChange={e=>setpass(e.target.value)}  type="password" id="it4"></input>
                        <button style={{backgroundColor:"azure"}} type="submit" onClick={Login3}>create Account</button>
                        <button style={{marginTop:"1cm",backgroundColor:"azure"}} type="submit" onClick={Login2}>login</button>
                    </form>
                </section>
                
            </div>
    )
}
 
 
 export default Signup;