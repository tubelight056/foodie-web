import React, { useState } from 'react';

function Navbar(props) {
    const [classadder,setclassorder]=useState("hidden")
    const changehandler=()=>{
        if (classadder=="hidden"){
        setclassorder("visible")}
        else{
            setclassorder("hidden")
        }
    }
    return (                                                                                                                                                                                                                                                                    
        <div className="nav-body">
            <div className="nav-container" >
                <div className="nav-brand" >
                    <h1 className="nav-h1">
                        Foodie
                    </h1>
                </div>

                    <ul className={"nav-ul "+classadder}>
                        <li className="nav-li" ><a onClick={()=>{
                            (classadder=="visible" && changehandler())
                        }} href="#home">Home</a></li>
                        <li className="nav-li"><a href="#menu">Menu</a></li>
                        <li className="nav-li"><a href="#reserve">Reserve</a></li>
                        <li className="nav-li"><a href="#about">About us</a></li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    </ul>
            </div>
            <button onClick={()=>{
                changehandler()
            } } className={"menubtn"}>...</button>
        </div>
    );
}

export default Navbar;