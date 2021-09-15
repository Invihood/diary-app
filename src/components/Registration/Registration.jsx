import React, {useState} from "react";
import { registration } from "../../actions/users";
import Input from "../Input/Input"

const Registration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="registration-form">
            <h2 className="registration-title">
                Sign in
            </h2>
            <Input value={name} setValue={setName} type="text" placeholder="Your name"></Input>
            <Input value={surname} setValue={setSurname} type="text" placeholder="Your surname"></Input>
            <Input value={email} setValue={setEmail} type="text" placeholder="Your email"></Input>
            <Input value={password} setValue={setPassword} type="password" placeholder="Your password"></Input>
            <button className="main-button registration-button" onClick={() => registration(name, surname, email, password)}>Registration</button>
        </div>
    );
}

export default Registration;