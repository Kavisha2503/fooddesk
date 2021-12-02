import cafemanagment from "../Images/cafemanagment.png";
import Customer from "../Images/Customer.jpeg";
import Easymanagment from "../Images/Easymanagment.png";
import flexible from "../Images/flexible.jpeg";
import payment from "../Images/payment.jpeg";
const Feature = () => {
    return (
      <div id='features' className='text-center'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title'></div>
          <div key="" className='col-md-3 col-sm-6 team'>
                    <div className='thumbnail'style={{"width":"290px" , "height":"350px"}}>
                      {' '}
                      <img src={payment} alt='...'  />
                      <div className='caption'>
                        <h4><b>Payment Processing</b></h4>
                    
                      </div>
                    </div>
                  </div>

                 
                   <div key="" className='col-md-3 col-sm-6 team'>
                    <div className='thumbnail'style={{"width":"290px" , "height":"350px"}}>
                      {' '}
                      <img src={flexible} alt='...'  />
                      <div className='caption'>
                      <h4><b>Flexible</b></h4>
                        <p></p>
                      </div>
                    </div>
                  </div>

                  <div key="" className='col-md-3 col-sm-6 team'>
                    <div className='thumbnail' style={{"width":"290px" , "height":"350px"}}>
                      {' '}
                      <img src={ Customer} alt='...'   style={{"height":"240px"}}/>
                      <div className='caption'>
                          <br/>
                      <h4><b>Customer Relationship System</b></h4>
                      </div>
                    </div>
                  </div>
                  <div key="" className='col-md-3 col-sm-6 team'>
                    <div className='thumbnail'style={{"width":"290px" , "height":"350px"}}>
                      {' '}
                      <img src={cafemanagment} alt='...' style={{"height":"240px"}}/>
                      <div className='caption'>
                      <br/>
                      <h4><b>Cafeteria Inventory Management</b></h4>
                        
                     
                      </div>
                    </div>
                  </div>
            
                
               
          </div>
        </div>
    
    )
  }
  export default Feature ;