import React from 'react';
import Rotti1 from '../photos/doublerotti.jpeg';
import Pannir from '../photos/pannir.jpeg';
import Rotti from '../photos/rotti.jpeg';

function Menu(props) {
    const dishdetails=[{
        imgsrc:Rotti1,
        dishname:"Double Rotti",
        price:150
    },{
        imgsrc:Pannir,
        dishname:"Pannir",
        price:250
    },{
        imgsrc:Rotti,
        dishname:"Rotti",
        price:50
    },{
        imgsrc:Rotti1,
        dishname:"Double Rotti",
        price:150
    }];

    const Item=(props)=>{
        console.log(props.item)
        return (
            <div className="item-container">
            <img className="item-img" src={props.item.imgsrc}/>
            <div className="item-details">
                <div className="item-name">{props.item.dishname}</div>
                <div className="item-price">{"$"+props.item.price}</div>
            </div>
        </div>
        );
    }
    return (
        <div id="menu" className="menu-body">
            <div className="menu-head">
                What’s special today? 
            </div>
            <div className="menu-p">
              special menus  will be  updated every day and every seasonal..... 
            </div>
            <div className="dish-container">
                {dishdetails.map((item)=>{
                    return (
                    <Item item={item}/>
                )})}
                
            </div>
        </div>
    );
}
export default Menu;