import React from "react";
import './home.css';
import { useNavigate } from "react-router-dom";
var About=()=>{
    let n=useNavigate()

    let GoHome=()=>{
       n('/Home')
    }
    
    let GoContact=()=>{
        n('/Contact')
    }
    let GoService=()=>{
        n('/Service')
    }
    let GoPlace=()=>{
        n('/Place')
    }
    let GoPlace1=()=>{
        n('/Place1')
    }
    let GoPlace2=()=>{
        n('/Place2')
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
                    <li><b><u>ABOUT</u></b></li>
                    <li onClick={GoContact}><b><u>CONTACT</u></b></li>
                    <li onClick={GoService}><b><u>DETAILS</u></b></li>
                    <li onClick={dea}>YOUR BOOKING</li>

                    </ul>
                    </div>
                </nav>
            </header>
            <img id="img7" src="https://c.myholidays.com/blog/blog/content/images/2020/11/Places-To-Visit-In-India.jpg"></img>

<h1 id="id4">3 Stunning Places To Visit In India To Rejuvenate Your Senses</h1>
<h3>India is a land of diverse landscapes offering myriad experiences to people of all ages. 
            A city brimmed with natural heritage and numerous natural wonders welcome all the 
            tourists with an open heart. From the royal palaces to the iconic Taj Mahal, the 
            lush green picturesque beauty of Kerala to snow-capped mountains of Kashmir, India 
            is beautiful in many ways. The traditional and cultural vibes of this land are so 
            strong that would lure to know more of its vibrant culture and enriching history. 
            We have curated this list of best places to visit in India on your next holiday vacation here.</h3>

<h1 style={{marginLeft:"8cm",fontSize:"1cm"}}><b>Top 3 Tourist Places To Visit In India</b></h1>
            <h2 style={{fontSize:"0.5cm",marginLeft:"1cm"}}>We have curated this list of tourist places 
            in India to help you enjoy a great time in the country without getting confused about what 
            to see and what to do in this land of myriad offerings.</h2>

            <center> <h1 style={{marginLeft:"0.5cm",fontSize:"1.5cm",backgroundColor:"aliceblue",width:"30cm",color:"darkcyan"}}>
             1. Kerala</h1></center>
            
           <div className="row1">
           <div className="left">
            
         <img id="img1" src="https://live.staticflickr.com/65535/51277332424_6ebec1fc8b_b.jpg"></img>
         </div>
              <div className="right">
                <div className="content">
         
         <p>Kerala, a state on India's tropical Malabar Coast, 
                 has nearly 600km of Arabian Sea shoreline. It's 
                 known for its 
                 palm-lined beaches and backwaters,
                 a network of canals. Inland are the Western Ghats,
                 mountains whose slopes support 
                 tea, coffee and spice 
                 plantations as well as wildlife. National parks like 
                 Eravikulam and Periyar, 
                 plus Wayanad and other 
                 sanctuaries, are home to elephants, langur monkeys
                 and tigers.<br></br>
                 If you are someone who wants to escape into nature 
                 or feel the serenity of lush green landscape blessed 
                 with pleasant weather throughout the year, then we 
                 recommend you to visit Kerala, a gem in South India 
                 and also God’s own country.<br></br>
                 <u>Best Time to Visit:</u> It can be visited at any 
                time of the year, however, and the ideal time is December to February because its a good time to visit or to
                <b><i style={{color:"darkorange",margintop:"10cm"}}>
                 <u><ul onClick={GoPlace}>travel 
                in Kerala.</ul></u>  </i></b></p>
                </div>
                </div>
                </div>
                
               

              <div className="row1">
                <div className="left">
                
                

                <p><u>Main Airports:</u> Cochin International Airport, 
                Trivandrum International Airport, Kozhikode International Airport, Kannur International Airport.</p>

                <p><u>Things to do:</u> Enjoy houseboat stay, Witness 
                snake boat race, Visit coffee and tea plantations, Enjoy spice plantation tour, 
                Enjoy a relaxing spa.</p>

                <p><u>Adventures to Try:</u> Kayaking, Snorkeling, Cycling, 
                Mountain Climbing, Canoeing, Bamboo Rafting, Trekking.</p>

                <p><u>Best Places to Stay:</u> The Leela, Oberoi Vrinda, 
                Rainforest Boutique Resort, Somatheeram Ayurveda Resort, Brunton Boatyard.</p>

                <p><u>Best Shopping Markets:</u> Broadway Street Market in Kochi, 
                Chalai Bazaar in Trivandrum, Mattanchery Spice Market, Kochi, Ernakulam Market.</p>

              </div>
              <div className="right">
                <div className="content">
                    
                <img id="img2" src="https://wallpapers.com/images/hd/kerala-pictures-zg5hvryoorpiopfe.jpg"></img>

                
                </div>
                </div>
               </div>





                <center> <h1 style={{marginLeft:"0.5cm",fontSize:"1.5cm",backgroundColor:"aliceblue",width:"30cm",color:"darkcyan"}}>
                2. Kashmir</h1></center>
                <div className="row1">
                    <div className="left">
            
         <img id="img8" src="https://c.myholidays.com/blog/blog/content/images/2020/11/Kashmir.jpg"></img>
        </div>
        <div className="right">
            <div className="content">
    
         <p>One of the main tourist places in India is Kashmir which lies in the northernmost region
             of the country and is blessed with surreal natural beauty and myriad adventures. Kashmir 
             offers two different experiences, one during the summers when the whole valley looks 
             enthralling with its lush-green landscape and snow-capped mountains in the backdrop 
             and other during the winter season when it is all covered with white snow.</p>
                 

                <p><u>Best Time to Visit:</u> March to October 
                for lush green landscape and from December to February for snow these are the
                best time to visi or to stay or to <i style={{color:"darkorange",margintop:"10cm"}}>
                 <u><ul onClick={GoPlace1}>travel 
                in Kashmir.</ul></u>  </i></p>
                </div>
                 </div>
                 </div>
                 

                 <div className="row1">
                    <div className="left">
                 
                      

                <p><u>Things to do:</u> Shikara ride in Dal Lake, 
                Gondola ride, Pony rides in Pahalgam.</p>

                <p><u>Adventures to Try:</u> River rafting at 
                Lidder River, Trekking in Ladakh, Skiing and Snowboarding in Gulmarg, Golfing, 
                Hot Air Balloon Ride, Camping.</p>

                <p><u>Best Places to Stay:</u> The Heritage by Heevan, 
                Rah Villas Hotel, Lalit Grand Palace in Srinagar, The Khyber 
                Himalayan Resort & Spa in Gulmarg.</p>

                <p><u>Best Shopping Markets:</u> Lal Chowk, Residency Road, 
                Badshah Chowk, Tibetan Market, Polo View Market.</p>

                </div>
                <div className="right">
                    <div className="content">


                    <img id="img9" src="https://cdn.pixabay.com/photo/2017/03/26/19/37/landscape-2176348_640.jpg"></img>
                
             </div>
             </div>
             </div>




                  

                
                <center> <h1 style={{marginLeft:"0.5cm",fontSize:"1.5cm",backgroundColor:"aliceblue",width:"30cm",color:"darkcyan"}}>
                3. Rajasthan</h1></center>

                <div className="row1">
                    <div className="left">
                    
            
         <img id="img10" src="https://c.myholidays.com/blog/blog/content/images/2020/11/Rajasthan.jpg"></img>
        </div>
         <div className="right">
            <div className="content">
         <p>One of the most culturally rich places to go in India is undoubtedly Rajasthan 
            which is famous for its rich heritage, magnificent palaces and insightful history. 
            The vibrant and quirky markets of Rajasthan, majestic forts, welcoming people and 
            lively culture will lure you to spend more and more time in this state.</p>
                 

                <p><u>Best Time to Visit:</u> October to March is the best time
                to enjoy your wonderfull tour and this is the best placefo your family tour
                 to visit or to stay or to <i style={{color:"darkorange",margintop:"10cm"}}>
                 <u><ul onClick={GoPlace2}>travel
                in rajasthan.</ul></u>  </i></p>
                </div>
                </div>
                </div>
                

                <div className="row1">
                    <div className="left">
                

                <p><u>Things to do:</u>  Desert camping, Shop for 
                traditional products, Attend Pushkar Fair, Safari rides, Visit different temples, 
                Take a heritage tour.</p>

                <p><u>Best Places to Stay:</u> Amanbagh, 
                The Oberoi Udaivillas, Umaid Bhawan Palace, Tree House Resort.</p>

                <p><u>Best Shopping Markets:</u> Bada 
                Bazaar & Hathi Pol Bazaar in Udaipur, Bapu Bazaar & Johari Bazaar in Jaipur, 
                Nai Sadak & Clock Tower Market in Jodhpur.</p>
                </div>
                <div className="right">
                    <div className="content">
                <img id="img11" src="https://e1.pxfuel.com/desktop-wallpaper/34/140/desktop-wallpaper-rajasthan-vacation-travel-rajasthan-culture.jpg"></img>
                </div>
                </div>
                </div>
            
             </div>
    )
}
export default About;