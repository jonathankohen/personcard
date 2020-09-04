import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import PersonCardFunc from './components/PersonCardFunc';
import Sandwich from './components/Sandwich';

function App() {
    return (
        <div className="App">
            <Sandwich />
            {/* <div className="card-group">
                <PersonCardFunc
                    firstName="Jane"
                    lastName="Doe"
                    age={45}
                    hairColor="Black"
                />
                <PersonCardFunc
                    firstName="John"
                    lastName="Smith"
                    age={88}
                    hairColor="Brown"
                />
                <PersonCardFunc
                    firstName="Millard"
                    lastName="Fillmore"
                    age={50}
                    hairColor="Brown"
                />
                <PersonCardFunc
                    firstName="Maria"
                    lastName="Smith"
                    age={62}
                    hairColor="Brown"
                />
            </div> */}
        </div>
    );
}

export default App;
