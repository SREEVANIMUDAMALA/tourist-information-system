import React, { useState } from "react";
import './home';
import { useNavigate } from "react-router-dom";
import axios from "axios";
var Login=()=>{


    let [sname,setname]=useState("");
    let [spass,setpass]=useState("");
    var n=useNavigate()
    var Logg=()=>{
        n('/')
    }
    const Login1 = async (e) => {  
        e.preventDefault()
        if(sname=='') {
            alert('please enter username')
        }
        else if(spass=='') {
                    alert('please enter password')
                }
                else {
                     
                    let result=await axios.post("http://localhost:8080/hostaa/login/"+sname+"/"+spass)
                    alert(result.data)
                    if(result.data=="Success"){
                        localStorage.setItem("uname",sname);
                    
                    n("/home")
                    }
                   
                }
        
    }


return(
<div id="div1">
<div id="div2">
    <div id="div3">
<h1><i><u>LOGIN PAGE</u></i></h1>
<input type="text" placeholder="username" value={sname} onChange={e=>setname(e.target.value)} id="inp1"></input><br></br><br></br>
<input type="password" placeholder="password" value={spass} onChange={e=>setpass(e.target.value)}  id="inp3"></input><br></br><br></br>


<button type="submit" onClick={Login1}>login</button>

<p id="inp5">
    <a>Don't Have An Account</a>  <a href="#" onClick={Logg}>Sign Up</a></p>
    
</div>
</div>
</div>

)
}

export default Login;