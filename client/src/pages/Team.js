import noprofile from "../Images/noprofile.jpeg"
import React from "react";
import "./feature.css";
const Team = () => {
    return (
      <div>
      <div class="cards-list">

<div class="card 1">
  <div class="card_image"> <img src={noprofile} /> </div>
  <div class="card_title title-black">
    <p>Kavisha Patel</p>
  </div>
</div>

  <div class="card 2">
  <div class="card_image">
    <img classname="img"src={noprofile}/>
    </div>
  <div class="card_title title-black">
    <p>Jeel Damor</p>
  </div>
</div>

<div class="card 3">
  <div class="card_image">
    <img src={noprofile} />
  </div>
  <div class="card_title">
    <p>Kharadi Alay</p>
  </div>
</div>
  
  

</div>



      
      </div>
      
    );
  }
  export default Team;