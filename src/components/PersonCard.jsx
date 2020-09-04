import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonCard = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    {props.lastName}, {props.firstName}
                </h4>
                <p className="card-text">{props.age}</p>
                <p className="card-text">Hair Color: {props.hairColor}</p>
                <button>
                    Birthday Button for {props.firstName} {props.lastName}
                </button>
            </div>
        </div>
    );
};

export default PersonCard;
