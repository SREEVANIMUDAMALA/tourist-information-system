import React from "react";
import { BrowserRouter, Form, Link, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Place from "./places";
import Place1 from "./places1";
import Place2 from "./places2";
import Contact from "./contact";
import Login from "./login";
import Forms from "./form";
import Service from "./services";
import Signup from "./signup";
import Bookde from "./View";
var Path=()=>{
    return(
        <BrowserRouter>
        <Routes>
           <Route path="/" element={<Signup/>}></Route>
          <Route path="/dea" element={<Bookde/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Place" element={<Place/>}></Route>
            <Route path="/Place1" element={<Place1/>}></Route>
            <Route path="/Place2" element={<Place2/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Service" element={<Service/>}></Route>
            <Route path="/Form" element={<Forms/>}></Route>
            <Route path="/gologout" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>

            
            </Routes>
        </BrowserRouter>
    )
}
export default Path;