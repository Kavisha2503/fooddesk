import noprofile from "../Images/noprofile.jpeg"
import React from "react";
const Team = () => {
    return (
      <div className='text-center'>
        <div className='container'>
          <div className='col-md-10 col-md-offset-1 section-title'></div>
          <div key="" className='col-md-3 col-sm-6 team'>
                    <div className='thumbnail'style={{"width":"290px" , "height":"350px"}}>
                      {' '}
                      <img src={noprofile } alt='...'  />
                      <div className='caption'>
                        <h4><b>Alay Kharadi</b></h4>
                    
                      </div>
                    </div>
                  </div>

                 
                   <div key="" className='col-md-3 col-sm-6 team'>
                    <div className='thumbnail'style={{"width":"290px" , "height":"350px"}}>
                      {' '}
                      <img src={noprofile } alt='...'  />
                      <div className='caption'>
                      <h4><b>Jeel Damor</b></h4>
                        <p></p>
                      </div>
                    </div>
                  </div>

                  <div key="" className='col-md-3 col-sm-6 team'>
                    <div className='thumbnail' style={{"width":"290px" , "height":"350px"}}>
                      {' '}
                      <img src={noprofile} alt='...'   style={{"height":"240px"}}/>
                      <div className='caption'>
                          <br/>
                      <h4><b>Kavisha Patel</b></h4>
                      </div>
                    </div>
                  </div>
           
         
          </div>
        </div>
      
    );
  }
  export default Team;