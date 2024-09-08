import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Page404 from "./Pages/404";
import SignupLogin from "./Pages/SingupLogin";
import ForgotPassword from "./Pages/ForgotPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import UserProfile from "./Pages/UserProfile";
import ApplyJobs from "./Pages/ApplyJob";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup-login" element={<SignupLogin />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/apply-job" element={<ApplyJobs />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
