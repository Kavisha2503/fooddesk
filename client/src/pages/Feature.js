import cafemanagment from "../Images/cafemanagment.png";
import Customer from "../Images/Customer.jpeg";
import Easymanagment from "../Images/Easymanagment.png";
import flexible from "../Images/flexible.jpeg";
import payment from "../Images/payment.jpeg";
import "./feature.css";
const Feature = () => {
    return (
      <div>
        <div class="cards-list">
  
  <div class="card 1">
    <div class="card_image"> <img src={cafemanagment} /> </div>
    <div class="card_title title-black">
      <p>Cafeteria Inventory Management</p>
    </div>
  </div>
  
    <div class="card 2">
    <div class="card_image">
      <img classname="img"src={Customer}/>
      </div>
    <div class="card_title title-black">
      <p>Customer Relationship System</p>
    </div>
  </div>
  
  <div class="card 3">
    <div class="card_image">
      <img src={Easymanagment} />
    </div>
    <div class="card_title">
      <p>Easy Management</p>
    </div>
  </div>
    
    <div class="card 4">
    <div class="card_image">
      <img src={flexible}/>
      </div>
    <div class="card_title title-black">
      <p>Flexible</p>
    </div>
    </div>
  
  </div>

  
 
        
        </div>
    
    )
  }
  export default Feature ;