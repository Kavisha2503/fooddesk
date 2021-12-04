
import React from 'react';
import Slider from './Slider';
import Footer from './Footer';
import Feature from './Feature';
import Team from './Team'

//import  Food from '../Images/Food.png';

import Pic1 from "../Images/Pic1.jpeg"


export default function HomePage()
{
  

      return (
        <div>
          <title>Food Desk</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata" />
          <style dangerouslySetInnerHTML={{__html: "\nbody, html {\n  height: 100%;\n  font-family: \"Inconsolata\", sans-serif;\n}\n\n.bgimg {\n  background-position: center;\n  background-size: cover;\n  background-image: url(\"/w3images/coffeehouse.jpg\");\n  min-height: 75%;\n}\n\n.menu {\n  display: none;\n}\n" }} />
          {/* Menu */}
          <div className="w3-top">
        <div className="w3-row w3-padding w3-black">
    <div className="w3-col s3">
            {/*<img className="Food"  style={{width: "150px",height: "80px"}} src={Food} alt="Food" />*/}
            <div style={{"color":"black"}}>hello </div>
              </div>
              <div className="w3-col s1">
                <nav>
                <a href="#" className=" w3-block " style={{"textDecoration": "none" , "color":"white" }}>HOME</a>
                </nav>
              </div>
              
              <div className="w3-col s1">
                <nav>
                <a href="#about" className="w3-block" style={{"text-decoration": "none" , "color":"white" }}>ABOUT US </a>
                </nav>
              </div>
              <div className="w3-col s1">
                <nav>
                <a href="#Feature" className="w3-block"style={{"text-decoration": "none" , "color":"white" }}>FEATURE </a>
                </nav>
              </div>
             
             
              <div className="w3-col s1">
                <nav>
                <a href="#team" className="w3-block" style={{"text-decoration": "none" , "color":"white" }}>TEAM  </a>
                </nav>
              </div>
              <div className="w3-col s1">
                <nav>
                <a href="#footer" className="w3-block" style={{"text-decoration": "none" , "color":"white" }}>CONTACT US   </a>
                </nav>
              </div>

             
              
            </div>
          </div>
          <div>
          {/*Slidder */}
          <header className="bgimg w3-display-container w3-grayscale-min" id="home">
             <Slider/>
          </header>
          </div>
        


          <div className="w3-sand w3-grayscale w3-large">


            {/* About Us */}
            <div className="w3-container" id="about">
              <div className="w3-content" style={{maxWidth: '700px'}}>
                <h5 className="w3-center w3-padding-64">
                  
                <span className="w3-tag w3-wide"></span></h5>
               <h1>
                <nav>
                <center><a href="" className="w3-block" style={{"text-decoration": "underline" , "color":"black"}}>ABOUT US </a></center>
                </nav>
                </h1>
               
                <p>The Cafe was founded by Food desk  the adolescent and the youthful on a fundamental level quickly took to the cafe, and it keeps on being a standout amongst the most happening spots in the city.</p>
                <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
                <div className="w3-panel w3-leftbar w3-light-grey">
                  <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
                  <p>Chef, Coffeeist and Owner: Shreena Kapadiya</p>
                </div>
                <img src={Pic1} style={{width: '80%', maxWidth: '700px'}} className="w3-margin-top" />
                <p><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
                
              </div>
           
</div>
            {/*Feature*/}
              <br/> <br/> <br/> <br/> <br/>

            <div className="w3-container"  id="Feature">

            <div className="w3-content" style={{maxWidth: '1200px'}}>   
            <h5 className="w3-center w3-padding-64">  
            <span className="w3-tag w3-wide"></span></h5>        
                 <h1>
                  <nav>
                  <center><a href=""  style={{"text-decoration": "underline" , "color":"black" }}>FEATURE </a> </center>
                  </nav>
                  </h1>
                 
                  <Feature/>
                  
               
              </div>
              </div>
              <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
              
              

              {/*Team*/}
            
              <div className="w3-container" id="team">
              <div className="w3-content" style={{maxWidth: '1300px'}}>
              <h5 className="w3-center w3-padding-64">
                  
                  <span className="w3-tag w3-wide"></span></h5>
                 <h1>
                  <nav>
                  <center><a href="" className="w3-block" style={{"text-decoration": "underline" , "color":"black" }}>MEET THE TEAM </a> </center>
                  </nav>
                  </h1>
                 
                  <Team/>
                  
                </div>
              </div>
            {/* Contact/Area Container */}
            <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
          

            {/* End page content */}
          </div>

          <div id="footer" style={{"backgroundColor":"black"}}>
            <Footer/>
          </div>
          
        </div>
      );
    }

