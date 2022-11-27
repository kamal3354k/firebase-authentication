import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserContext";

const Dashboard = () => {
  const { user, LogoutFunction } = useUserAuth();
  const navigate = useNavigate();
  const handleLogoutFuntion = async () => {
    try {
      await LogoutFunction();
      navigate("/");
    } catch (err) {
      alert(err?.message);
    }
  };
  return (
    <div>
      <h1>Dashboard</h1><br />
      <p>{user?.email}</p><br />
      <button onClick={handleLogoutFuntion}>Logout</button>
    </div>
  );
};

export default Dashboard;
