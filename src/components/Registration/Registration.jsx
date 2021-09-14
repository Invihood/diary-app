import React from "react";
import Input from "../Input/Input"

const Registration = () => {
    return (
        <div className="registration-form">
            <h2 className="registration-title">
                Sign in
            </h2>
            <Input type="text" placeholder="Your name"></Input>
            <Input type="text" placeholder="Your surname"></Input>
            <Input type="text" placeholder="Your email"></Input>
            <Input type="password" placeholder="Your password"></Input>
            <button className="main-button registration-button">Registration</button>
        </div>
    );
}

export default Registration;