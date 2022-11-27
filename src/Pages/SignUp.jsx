import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../context/UserContext";
const SignUp = () => {
  const [form, setform] = useState({});
  const { SignUpFunction } = useUserAuth();
  const navigate = useNavigate();

  const onChangeHandler = ({ target: { name, value } }) => {
    setform((pre) => ({ ...pre, [name]: value }));
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await SignUpFunction(form?.email, form?.password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <h1>Sign - Up</h1>
        <input
          type="text"
          name="email"
          value={form?.email}
          onChange={onChangeHandler}
          placeholder="Enter Your Email"
        />

        <input
          type="password"
          name="password"
          value={form?.password}
          onChange={onChangeHandler}
          placeholder="Enter Your Password"
        />

        <input type="submit" value="Submit" />
        <br />
      </form>
      <Link to="/">login</Link>
    </div>
  );
};

export default SignUp;
