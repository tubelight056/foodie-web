import React from 'react';
import Resimg1 from '../photos/resimg1.jpeg';
import Resimg2 from '../photos/resimg2.jpeg';
import Resimg3 from '../photos/resimage3.jpeg';
function Promotion(props) {
    const promotiondetails=[
        {
            text:"Discount upto 20% for Prebooking.",
            imgsrc:Resimg1
        },{
            text:"Discount upto 10% for people more than 6.",
            imgsrc:Resimg2
        },{
            text:"Discount upto 5% if you don't use mobile.",
            imgsrc:Resimg3
        }
    ]
    return (
        <div className="promotion-container">
            <div className="promotion-head">
            Exclusive Promotions
            </div>
            <div className="promotion-p">
            stay update to know more updates...
            </div>
            <div className="wrapper">
            <div className="promotion-carosal">
                {promotiondetails.map((item)=>{
                    return(
                        <div className="carosal-container"> 
                            <img className="carosal-img" src={item.imgsrc}/>
                            <div className="carosal-text">{item.text}</div>
                        </div>    
                    );
                })}
            </div>
            </div>
        </div>
    );
}

export default Promotion;