import React, { useState } from "react";
import Input from "../Input/Input";
import { login } from "../../actions/user";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Authorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(login(email, password));
    console.log(user);
  };

  return (
    <div className="registration-form">
      <h2 className="registration-title">Log in</h2>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Your email"
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Your password"
      />
      <button className="main-button" onClick={handleClick}>
        Enter
      </button>
    </div>
  );
};

export default Authorization;
