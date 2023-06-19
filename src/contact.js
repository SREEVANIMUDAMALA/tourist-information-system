import React, { useState } from 'react'
import './home.css';
import { useNavigate, useSubmit } from 'react-router-dom'
import axios from 'axios';

export const Contact=()=> {
    let n=useNavigate()

    let [sname,setname]=useState("");
    let [semail,setemail]=useState("");
    let [lname,setlname]=useState("");
    let [smsg,setmsg]=useState("");
    let [snum,setnum]=useState("");
    
  

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
    var mes=async(e)=>{
        e.preventDefault();
        if(sname=="" && snum==""){
            alert("please enter the above information")
        }
        else{
            let mydata={firstname:sname,email:semail,lastname:lname,message:smsg,phonenumber:snum}
            alert(sname)
            let res=await axios.post("http://localhost:8080/cont/deatils",mydata)
            alert(res.data)
        }
    }
  return (
    <div>
        <header>
            <nav>
            <div className="inpbox">
                <ul>
                    <li onClick={GoHome}><b><u>HOME</u></b></li>
                    <li onClick={GoAbout}><b><u>ABOUT</u></b></li>
                    <li onClick={GoContact}><b><u>CONTACT</u></b></li>
                    <li onClick={GoService}><b><u>DETAILS</u></b></li>
                    </ul>
                    </div>
                </nav>
            </header>
    <div id="contact">
            <div>
                <div><h1 style={{paddingBottom:"20px",color:"crimson"}}>Contact Us</h1></div>
                
                <pre><b style={{color:"deeppink"}}>First name       Last name</b></pre>
                <input  value={sname} onChange={e=>setname(e.target.value)} id="d"type="text" placeholder="enter your first name" required></input>&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input  value={lname} onChange={e=>setlname(e.target.value)}  id="e"type="text" placeholder="enter your last name" required></input>
                
            </div>
            <div>
                <pre><b style={{color:"deeppink"}}>Email             phone number</b></pre>
                <input  id="f"type="text"  value={semail} onChange={e=>setemail(e.target.value)} placeholder="enter you mail" required></input>&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input id="g" type="text"  value={snum} onChange={e=>setnum(e.target.value)} placeholder="enter your phone number"required></input>
                
            </div>
            <div>
                <pre><b style={{color:'deeppink'}}>Write a Message</b></pre>
            </div>
            <div>
                
                <input  value={smsg} onChange={e=>setmsg(e.target.value)}  style={{height:"90px",width:"400px",border:"0.06cm solid black",borderRadius:"1cm"}}type="text" placeholder="send your message" ></input>
            </div>
            <div>
                <input onClick={mes} style={{backgroundColor:"gold",marginTop:"20px",borderRadius:"9px"}} type="button" value="Sent"></input>
            </div>
            <h3 style={{color:"deeppink"}}>if anything urgent contact to below number</h3>
           <h2 style={{color:"orange"}}>+918985297274</h2>
        </div>
        </div>
  )
}
export default Contact;

