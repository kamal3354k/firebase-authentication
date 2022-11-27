import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserContext";
import GoogleButton from "react-google-button"

const Login = () => {
  const [form, setform] = useState({});
  const { LoginFunction,googleLoginFunciton } = useUserAuth();
  const navigate = useNavigate();
  const onChangeHandler = ({ target: { name, value } }) => {
    setform((pre) => ({ ...pre, [name]: value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await LoginFunction(form?.email, form?.password);
      navigate("/dashboard")
    } catch (err) {
      alert(err.message);
    }
  };
  const googleHandleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await googleLoginFunciton();
      navigate("/dashboard")
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email"
          value={form?.email}
          onChange={onChangeHandler}
          />

        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={form?.password}
          onChange={onChangeHandler}
        />
        <input type="submit" value="Submit" />

      </form>
      <br />
      <GoogleButton onClick={googleHandleSubmitForm}/><br />
      <Link to="/signup">Sign Up</Link>

    </div>
  );
};

export default Login;
