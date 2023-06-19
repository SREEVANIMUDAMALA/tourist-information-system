import React, { useState } from "react";
import './home.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
var Forms=()=>{
    let n=useNavigate();
    
    let [send,setend]=useState("");
    let [sstart,setstart]=useState("");
    let [smsg,setmsg]=useState("");
    let [splace,setplace]=useState("");
 
    var Change=async(e)=>{
        e.preventDefault();
        
      let user=localStorage.getItem("uname");
        let data={end:send,msg:smsg,name:user,place:splace,start:sstart}
        let res=await axios.post("http://localhost:8080/booking/posting",data)
        alert(res.data)
        n("/home")
    }
    return(
        <div id="dv1">
<div id="dv2">
    <div id="dv3">
<h1><i>Book Now</i></h1>
<label>From:</label><br></br>
<input type="date"  value={sstart} onChange={e=>setstart(e.target.value)} placeholder="From " id="ip4"></input><br></br><br></br>
<label>To:</label><br></br>
<input type="date"  value={send} onChange={e=>setend(e.target.value)} placeholder="To" id="ip5"></input><br></br><br></br>
<input type="text"  value={splace} onChange={e=>setplace(e.target.value)} placeholder="Place" id="ip5"></input><br></br><br></br>
<input type="text" value={smsg} onChange={e=>setmsg(e.target.value)}  placeholder="Send Your Message" id="ip7"></input><br></br><br></br>


<button type="submit" onClick={Change}>submit</button>


    
</div>
</div>
</div>
    )
}
export default Forms;