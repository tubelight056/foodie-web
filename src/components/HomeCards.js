import React from 'react';

function HomeCards(props) {
    return (
        <div className="cardcontainer">
            <div className="home-card">
                <div className="card-head">
                 Organic food   
                </div>
                <div className="card-p">
                All foods are made with your invoice.
                </div>
                <button className="card-btn">
                    Find out
                </button>
            </div>
   
           
            <div className="home-card">
                <div className="card-head">
                     Top chefs   
                    </div>
                    <div className="card-p">
                    Good chefs from many countries.
                    </div>
                    <button className="card-btn">
                        Check list
                    </button>
                </div>
                <div className="home-card">
                    <div className="card-head">
                     More experience  
                    </div>
                    <div className="card-p">
                    Service as best for almost 20 years.
                    </div>
                    <button className="card-btn">
                        Find out More
                    </button>
                </div>                 
        </div>

    );
}

export default HomeCards;