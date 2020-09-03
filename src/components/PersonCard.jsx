import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        };
    }

    addYear = () => {
        this.setState((prevState) => {
            return { age: prevState.age + 1 };
        });
    };

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {this.props.lastName}, {this.props.firstName}
                    </h4>
                    <p className="card-text">{this.state.age}</p>
                    <p className="card-text">
                        Hair Color: {this.props.hairColor}
                    </p>
                    <button onClick={this.addYear}>
                        Birthday Button for {this.props.firstName}{' '}
                        {this.props.lastName}
                    </button>
                </div>
            </div>
        );
    }
}
