import React from "react";
import './home.css';
import { useNavigate } from "react-router-dom";

var Place2=()=>{
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
                   
                    </ul>
                </div>
                
                </nav>
            </header>
        <img id="img16" src="https://www.touropia.com/gfx/d/best-places-to-visit-in-rajasthan/bundi.jpg"></img>

        <h1 id="id6">3 Best Places to Visit in Rajasthan</h1>

        <h3 style={{fontSize:"0.5cm"}}>In North India is Rajasthan, an Indian state close to the border 
        with Pakistan. This incredible state is a popular travel destination because of its landscape, 
        which includes the immense Thar Desert and the magnificent Aravallis Mountains. As a center of 
        Rajput culture, Rajasthan is also a wonderful place to explore palaces and temples created by 
        Rajput kings of the past. As you criss cross the state, aim to add as many of these incredible 
        places to visit in Rajasthan to your itinerary as possible.</h3>

            <h1 style={{marginLeft:"3.5cm",fontSize:"1cm"}}><b>Top 3 Places To Visit
                 In rajasthan For A Soulful Experience</b></h1>

            <h2 style={{fontSize:"0.5cm",marginLeft:"1cm"}}>There are so many amazing places to visit in Kerala, so for the ease
             of travelers, we have curated this list to help them plan their itinerary.</h2>

             <h1 style={{marginLeft:"2.5cm",fontSize:"1.5cm",backgroundColor:"aliceblue",width:"30cm",color:"darkcyan"}}>
             <center>1. Udaipur</center></h1>

              <div className="row4">
                <div className="left">

             <img id="img17" src="https://www.touropia.com/gfx/d/best-places-to-visit-in-rajasthan/udaipur.jpg"></img>
             </div>
             <div className="right">
                <div className="content"> 
             <p><i>Udaipur is known as the City of Lakes, so it should not come as a surprise that the lakes 
                are a main attraction. Two of the biggest lakes, Fateh Sagar and Pichola, are artificial, 
                but that makes them no less beautiful. The main reason to visit Udaipur is for the chance 
                to explore Udaipur City Palace, a collection of palaces, museums and gardens in a range of 
                architectural styles. Shrines, temples, royal residences and art collections are also 
                available to admire within the City Palace. Just north of the palace is Jagdish Temple, 
                Udaipur’s most famous temple. Dedicated to Lord Vishnu, the temple boasts stunning carvings, 
                and it is now an iconic landmark in the city.</i></p>


             
                    </div>
                    </div>
                    </div>


                <h1 style={{marginLeft:"2.5cm",fontSize:"1.3cm",backgroundColor:"antiquewhite",width:"30cm",color:"darkolivegreen"}}>
                <center>2. Jaisalmer</center></h1>

             

                <div className="row4">
                <div className="left">
             
             <p><i>Jaisalmer, nicknamed "The Golden city", is a city in the Indian state of Rajasthan, 
                located 575 kilometres (357 mi) west of the state capital Jaipur. The town stands on a 
                ridge of yellowish sandstone and is crowned by the ancient Jaisalmer Fort. This fort 
                contains a royal palace and several ornate Jain temples. Many of the houses and temples 
                of both the fort and of the town below are built of finely sculptured sandstone. The town 
                lies in the heart of the Thar Desert (the Great Indian Desert) and has a population, 
                including the residents of the fort, of about 78,000. It is the administrative headquarters 
                of Jaisalmer District. Jaisalmer was once the capital of Jaisalmer State.</i></p>
             
             
            
                </div>
             <div className="right">
                <div className="content">
                <img id="img18" src="https://www.touropia.com/gfx/d/tourist-attractions-in-india/jaisalmer.jpg"></img>
                </div>
                    </div>
                    </div>

                <h1 style={{marginLeft:"2.5cm",fontSize:"1.25cm",backgroundColor:"whitesmoke",width:"30cm",color:"darkmagenta"}}>
                <center>3. Jaipur</center></h1>

                <div className="row4">
                <div className="left">

             <img id="img19" src="https://www.touropia.com/gfx/d/best-places-to-visit-in-rajasthan/jaipur.jpg"></img>

             </div>
             <div className="right">
                <div className="content">
             <p><i>Jaipur, formerly Jeypore, is the capital and largest city of the Indian state of 
                Rajasthan. As of 2011, the city had a population of 3.1 million, making it the tenth 
                most populous city in the country. Jaipur is also known as the Pink City, due to the 
                dominant colour scheme of its buildings. It is also known as the Paris of India, 
                and C. V. Raman called it the Island of Glory. It is located 268 km (167 miles) from 
                the national capital New Delhi. Jaipur was founded in 1727 by the Kachhwaha Rajput 
                ruler Jai Singh II, the ruler of Amer, after whom the city is named. It was 
                one of the earliest planned cities of modern India, designed by Vidyadhar Bhattacharya. 
                During the British Colonial period, the city served as the capital of Jaipur State. 
                After independence in 1947, Jaipur was made the capital of the newly formed state of 
                Rajasthan.</i></p>
             
             
             
            
                </div>
                    </div>
                    </div>
                    </div>

                
        
    )
}
export default Place2;