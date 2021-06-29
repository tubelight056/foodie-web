import React from 'react';
import tele from  "../photos/noun_Telephone_3129133.png";
import email from "../photos/noun_Email_2817882.png";
import address from "../photos/noun_Address_2340040.png";
function Contactus(props) {
    const onsubmitHandler=()=>{
        alert("I have created  this for project purpose so there is no subscription " );
    }
    return (
        <div className="contactus-body" id="about">
            <div className="contactus-conatiner">
                <div className="sub-container">
                    <div className="sub-head">Subscribe</div>
                    <div className="sub-p">To get our latest promotion</div>
                    <form className="sub-holder" >
                    <input  className="inpt sub-inpt" type="email" placeholder="yuremail@gmail.com" />
                    <input className="sub-btn btn" type="button" onClick={()=>{onsubmitHandler()}} value="subscribe"/>
                    </form>
                </div>
                <div className="aboutus-container">
                <h1 className="about-h1">
                        Foodie
                    </h1>
                    <div className="details-container">
                    <img className="about-icon" alt="img" src={address} />
                    <p className="about-address">
                    Gandhi street,gandhi nagar,coimbatore.
                    </p>
                    </div>
                    <div className="details-container">
                    <img className="about-icon" alt="img" src={tele} />
                    <p className="about-tele">
                    9790616382
                    </p>    
                    </div>
                    <div className="details-container">
                    <img className="about-icon" alt="img" src={email} />
                    <p className="about-mail">
                    tubelightboy056@gmail.com
                    </p>                        
                    </div>                
                </div>
            </div>
        </div>
    );
}

export default Contactus;