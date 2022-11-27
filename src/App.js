import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { UserAuthContextProvider } from "./context/UserContext";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Pages/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
