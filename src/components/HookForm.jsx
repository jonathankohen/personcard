import React, { useState } from 'react';

const Hook_Form = () => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        c_password: '',
    });

    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            c_password: '',
        });
    };

    return (
        <>
            <form className="col-5 mx-auto my-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="first_name"
                        value={user.first_name}
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="last_name"
                        value={user.last_name}
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleUser}
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="c_password"
                        value={user.c_password}
                        onChange={handleUser}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Build
                </button>
            </form>

            <div className="col-5 mx-auto my-5">
                <h5>Your Form Data</h5>
                <p>First Name: {user.first_name}</p>
                <p>Last Name: {user.last_name}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Confirm Password: {user.c_password}</p>
            </div>
        </>
    );
};

export default Hook_Form;
