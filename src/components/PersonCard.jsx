import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    {this.props.lastName}, {this.props.firstName}
                </h4>
                <p className="card-text">{this.state.age}</p>
                <p className="card-text">Hair Color: {this.props.hairColor}</p>
                <button onClick={this.addYear}>
                    Birthday Button for {this.props.firstName}{' '}
                    {this.props.lastName}
                </button>
            </div>
        </div>
    );
};

export default PersonCard;
