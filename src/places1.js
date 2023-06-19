import React from "react";
import './home.css';
import { useNavigate } from "react-router-dom";

var Place1=()=>{
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
        <img id="img12" src="https://moustachescapes.com/blog/wp-content/uploads/2022/11/arif-khan-4hr8MStXT7s-unsplash-1.webp"></img>

        <h1 id="id5">Top 3 Tourist Places to Visit in Kashmir</h1>

        <h3 style={{fontSize:"0.5cm"}}>The beauty of Kashmir is something that no one has ever seen before. 
        From alpine lakes to frozen ones, from snow-capped peaks to the heavenly beauty of the valley, 
        there are plenty of famous places in jammu and kashmir. Something for everyone. The Kashmir 
        package covers the best of jammu and kashmir visiting places for a relaxing time at the paradise 
        on earth, with your loved ones. Here we will explore about the Tourist Places to Visit in Kashmir.

        But, don’t get us wrong: Kashmir isn’t all about exotic scenery. It has numerous places to eat, 
        enjoy water rides, explore nature, do photography, shop, and more. With the list of best places 
        in jammu and kashmir, you can now enjoy the places in both summer and winter, at the fullest. 
        With Moustache’s kashmir tour or a kashmir honeymoon packages, you can engage in some outstanding 
        thrilling and romantic activities making your trip even more enjoyable.</h3>

            <h1 style={{marginLeft:"3.5cm",fontSize:"1cm"}}><b>Top 3 Places To Visit
                 In Kashmir For A Soulful Experience</b></h1>

            <h2 style={{fontSize:"0.5cm",marginLeft:"1cm"}}>There are so many amazing places to visit in Kerala, so for the ease
             of travelers, we have curated this list to help them plan their itinerary.</h2>

             

             <h1 style={{marginLeft:"2.5cm",fontSize:"1.5cm",backgroundColor:"aliceblue",width:"30cm",color:"darkcyan"}}>
             <center>1. Gulmarg</center></h1>
             <div className="row3">
                <div className="left">

             <img id="img13" src="https://images.pexels.com/photos/8630102/pexels-photo-8630102.jpeg?cs=srgb&dl=pexels-imad-clicks-8630102.jpg&fm=jpg"></img>
              </div>
              <div className="right">
                <div className="content"> 
             <p><i>Described with snow-covered mountains, lush greenery, lakes, pine and fir forests, 
                and a variety of flowers, gulmarg kashmir is nestled in the Pir Panjal Valley. Where 
                its name is translated as “meadows of flowers.” Examine it for yourself.

                Aside from that, it is Asia’s best skiing destination, and it has the world’s highest 
                green golf course as well as the world’s highest cable car project.

                St. Mary’s Church, Baba Reshi Shrine, and Maharani Temple/Shiva Temple are among the 
                top tourist attractions in gulmarg tourism. Aside from its religious side, Gulmarg 
                also has a developed side, with the highest golf course in the world. You can also 
                take a gondola cable car ride to get a bird’s eye view of the best skiing spots in 
                Gulmarg. Also take a 3hrs ride from gulmarg to pahalgam which is another popular 
                tourist place nearby.</i></p>


               
                    </div>
                    </div>
                    </div>

                 
                    
                <h1 style={{marginLeft:"2.5cm",fontSize:"1.3cm",backgroundColor:"antiquewhite",width:"30cm",color:"darkolivegreen"}}>
                <center>2. Sonmarg</center></h1>

                <div className="row3">
                <div className="left">

             <p><i>Sonmarg, is one of the must visit places in kashmir tour package, meaning 
                “meadow of gold.” One of the best places to see in kashmir with a landscape marked 
                by a glacier, forests, and snow-capped mountains. It is also one of the fabulous 
                Tourist Places to Visit in Kashmir.

                Consider one of the famous tourist places in jammu and kashmir, the three Great 
                Lakes of Kashmir: Kishansar, Vishansar, and Gadsar. Other adventure activities 
                that will keep you comfortable include camping and trout fishing. And it serves 
                as the starting point for the Amarnath Trek, a popular Hindu pilgrimage destination.

                Thajiwas Glacier, Baltal Valley (near Sonmarg), Amarnath Cave, Naranag, Kishnasar 
                Lake, Vishansar Lake, and Gadsar Lake are a few honourable mentions on the list of 
                Top Sightseeing Attractions in Sonmarg.</i></p>


               
                    </div>
              <div className="right">
                <div className="content"> 
                    <img id="img14" src="https://e0.pxfuel.com/wallpapers/730/654/desktop-wallpaper-upper-sonmarg-kashmir-wildflowers-clouds-mountains-sky-water-reflections.jpg"></img>
                    </div>
                    </div>
                    </div>

                <h1 style={{marginLeft:"2.5cm",fontSize:"1.25cm",backgroundColor:"whitesmoke",width:"30cm",color:"darkmagenta"}}>
                <center>3. Pahalgam</center></h1>
                <div className="row3">
                <div className="left">

             <img id="img15" src="https://e1.pxfuel.com/desktop-wallpaper/874/419/desktop-wallpaper-magical-kashmir-with-sonamarg-travelxpress-sonamarg.jpg"></img>
             </div>
              <div className="right">
                <div className="content"> 
             <p><i>Pahalgam, also known as the “Village of Shepherds,” is one of the top ten tourist 
                destinations in Jammu and Kashmir. Located on the banks of the Lidder River, pahalgam 
                kashmir is a lovely picnic spot with trout fishing and pony rides.

                Pahalgom, in the Anantnag district, is a visual delight with its meadows, forests, 
                and pristine environment. Pahalgam is the best place in Kashmir for a sightseeing 
                tour because of places like Aru Valley, Betab Valley, and Baisaran.

                Also, the place is located close to Srinagar, with just a 2hrs driveway from pahalgam 
                to srinagar.</i></p>


                
                    </div>
                    </div>
                    </div>
                
        </div>
    )
}
export default Place1;