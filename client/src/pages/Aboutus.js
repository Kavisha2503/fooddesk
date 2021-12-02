import React from "react";

import Pic1 from '../Images/Pic1.jpeg'
const Aboutus = () => {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src={Pic1} className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p></p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <ul>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
  };
  export default Aboutus;