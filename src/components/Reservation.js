import React from 'react';
import vegsticks from '../photos/vegsticks.jpeg';

function Reservation(props) {
    const onSubmitHandler=()=>{
        alert("I have created this for project purpose so no reservation ");
    }
    return (
        <div className="reservation-body" id="reserve">
            <div className="reservation-head">
            Reservation
            </div>
            <div className="reservation-p">
            Book a table in advance...
            </div>
            <div className="reservation-container">
                <form className="form ">
                    <input type="text" className="inpt name-inpt" placeholder="Name"/>
                    <input type="tel" pattern="[0-9]{10}" className="inpt telephone-inpt" placeholder="Telephone"/>
                    <input type="date" className="inpt date-inpt" placeholder="Date"/>
                    <input type="time" className="inpt time-inpt" placeholder="Time"/>
                    <textarea type="textarea" className="inpt note-inpt" placeholder="Note"/>
                    <p className="form-text">We will contact you via phone to confirm.</p>
                    <input type="button" onClick={()=>{onSubmitHandler()}} className="btn submit-btn" value="Submit"/>
                </form>
                    <img src={vegsticks} alt="hello" className="reservation-img"/>
            </div>
            
        </div>
    );
}

export default Reservation;