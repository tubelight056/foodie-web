import React,{useEffect,useState} from 'react';
import homephoto from '../photos/plated-smoked-salmon.jpg'
function Home()
{
    
    const [index,setindex]=useState(0)

    function changeHandler(index){ 
        console.log(index)
           if(index==0) { 
               setindex(1);
            }
           else if(index==1) { 
               setindex(2);
            }
            else{
                setindex(0);
            }
    };
    return(
        <div className="home-body" id="home">
            <div className="home-container">
                <div className="home-text">
                    <h1 onMouseEnter={()=>{changeHandler(index)}}  className="home-h1">Discover and get {index==0 && <span onMouseEnter={()=>{changeHandler(index)}} className="span-details">tasty </span>}
                    {index==1 && <span onMouseEnter={()=>{changeHandler(index)}} className="span-details"> delicious </span>} 
                    {index==2 && <span onMouseEnter={()=>{changeHandler(index)}} className="span-details"> awesome </span>}
                      foods </h1>
                    <p className="home-p">Enjoy eating foods in a beautiful place </p>
                    <button  className="home-btn">Go to Menu</button>
                </div>
                <img className="home-img" src={homephoto} alt="homepng" />
            </div>
        </div>
    )
}

export default Home;