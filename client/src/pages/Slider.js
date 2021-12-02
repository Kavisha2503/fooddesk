import React from 'react';
import {useHistory } from 'react-router-dom';


import './slider.css';

import Food1 from '../Images/Food1.png'




 export default function SlideShow() {

 const history = useHistory();

 const OnLoginClick = () =>{
     history.push({pathname : '/LogIn'});
 }
    return (
        
        <div class="slider-div">
      

            <img src={Food1} style={{"height":"100vh","width":"100vw"}} ></img>
            <button onClick ={()=>OnLoginClick ()}>Log In</button>
    </div>
        

       
        
      );


  }