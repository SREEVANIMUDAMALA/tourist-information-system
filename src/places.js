import React from "react";
import './home.css';
import { useNavigate } from "react-router-dom";

var Place=()=>{
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
    let dea=()=>{
n("/dea")
}
    return(
        <div >
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
        <img id="img3" src="https://c.myholidays.com/blog/blog/content/images/2021/03/Places-To-Visit-In-Kerala.jpg"></img>

        <h1 id="id3">3 Popular Places To Visit In Kerala That Will Bring You Close To Nature</h1>

        <p style={{fontSize:"0.5cm"}}>No other place in 
            India can be compared to the heavenly beauty of God’s Own 
            Country, Kerala. Nestled on tropical Malabar Coast with a coastline 
            stretching to around 600 km, Kerala offers a tropical getaway and a 
            heavenly retreat amidst nature. The lush green valleys, picturesque 
            backwaters, laid-back hamlets, mesmerizing hill stations, exotic wildlife,
            aromatic spice gardens and a lot more makes Kerala one of the best 
            Indian destinations be it for a honeymoon or a family vacation. With so many 
            enchanting places to visit in Kerala, it becomes really difficult for 
            tourist to decide which one to explore, hence we have made this list 
            of the best tourist places to visit here for a mesmerizing vacation 
            in the lap of nature.</p>

            <p style={{marginLeft:"3.5cm",fontSize:"1cm"}}><b>Top 3 Places To Visit
                 In Kerala For A Soulful Experience</b></p>
            <p style={{fontSize:"0.5cm",marginLeft:"1cm"}}>There are so many amazing places to visit in Kerala, so for the ease
             of travelers, we have curated this list to help them plan their itinerary.</p>

             <p style={{marginLeft:"2.5cm",fontSize:"1.5cm",backgroundColor:"aliceblue",width:"30cm",color:"darkcyan"}}>
                1. Wayanad - Known For Its Misty Valleys</p>

                <div className="row2">
                    <div className="left">

             <img id="img4" src="https://c.myholidays.com/blog/blog/content/images/2021/03/Wayanad---Known-For-Its-Misty-Valleys.jpg"></img>

              </div>
              <div className="right">
                <div className="content">
             <p>One of the best tourist places in Kerala is definitely Wayanad which 
                is a laid-back destination known for its pleasant weather throughout 
                the year. Kiss nature in its purest form in Wayanad where the sky is 
                dominated by misty mountains and land with lush green spice estates 
                and dense woods that looks spectacular. Owing to the natural beauty, 
                you will also find various national parks, reserve areas and sanctuaries 
                in Wayanad which are worth a visit.</p>


                <p><u>Popular Attractions:</u> Banasura Hill, Papanashini River, 
                Edakkal Caves, Banasura Sagar Dam, Pookode Lake, Kuruva Island, Chembra Peak.</p>

                <p><u>Things to Do:</u> Go on for spice garden tour, boating on 
                Pookode Lake, bamboo rafting, camping and cycling.</p>

                </div>
                </div>
                </div>



                <h1 style={{marginLeft:"2.5cm",fontSize:"1.3cm",backgroundColor:"antiquewhite",width:"30cm",color:"darkolivegreen"}}>
                2. Alleppey – Known For Its Exquisite Backwaters</h1>

                <div className="row2">
                    <div className="left">

             <p><i>One of the finest places to see in Kerala,Alleppey is a surreal destination
                that is also known as the Venice of the East for its stunning backwaters.Alleppey 
                is a gem of nature that is known for its serene houseboat stays, lush green surroundings, 
                dense woods and laid-back ambience. It is also known 
                for its coir industry and also for 
                hosting various race events throughout the year.</i></p>

             

                <p><u>Popular Attractions:</u> Kumarakom Bird Sanctuary, 
                Alappuzha Beach, Marari Beach, Vembanad Lake, Ambalappuzha Sree Krishna Temple, Mullakkal 
                Rajeshwari Temple, Punnapra Beach.</p>

                <p><u>Things to Do:</u> Explore various temples, 
                enjoy a serene stay in a houseboat, indulge in a rejuvenating spa session, enjoy beach 
                activities, shop for coir products.</p>

                

                </div>
              <div className="right">
                <div className="content">

                <img id="img5" src="https://c.myholidays.com/blog/blog/content/images/2021/03/Alleppey---Known-For-Its-Exquisite-Backwaters.jpg"></img>
                </div>
                </div>
                </div>


                <h1 style={{marginLeft:"2.5cm",fontSize:"1.25cm",backgroundColor:"whitesmoke",width:"30cm",color:"darkmagenta"}}>
                3. Munnar - Known For Its Lush Green Tea Estates</h1>
                <div className="row2">
                    <div className="left">
             <img id="img6" src="https://c.myholidays.com/blog/blog/content/images/2021/03/Munnar---Known-For-Its-Lush-Green-Tea-Estates.jpg"></img>
             </div>
              <div className="right">
                <div className="content">
             <p><i>One of the most beautiful places in Kerala, Munnar is famous destination in Kerala known 
                for its lush green aromatic tea estates, misty valleys
                and year-round pleasant weather. 
                Munnar is an idyllic hill station and also one of the
                 best honeymoon destinations in Asia
                as the ambience of the whole place is lit and charming. Munnar is also a popular trekking 
                and camping site as the pristine valleys and rocky terrains of Munnar offer a perfect 
                opportunity for various adventure.</i></p>

               

                <p><u>Popular Attractions:</u> Blossom Park, 
                TATA Tea Museum, Kundala Lake, Attukal Waterfalls, Mattupetty Dam, Anamudi, 
                Pothamedu View Point.</p>

                <p><u>Things to Do:</u> Take a tour of the 
                spice gardens, trek to the Echo Point, enjoy boating at Kundala Lake, admire 
                views from Pothamedu View Point.</p>

              
                </div>
                </div>
                </div>
                </div>
        
    )
}
export default Place;