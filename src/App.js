import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import AuthLogin from "./Components/Login/AuthLogin"
import AuthforgotPass from "./Components/Login/AuthforgotPass";
import AuthforgotSuccess from "./Components/Login/AuthforgotSuccess"
import Home from "./Components/Index/Home";
import Dashboard from "./Components/Index/Dashboard";
import Tasks from "./Components/Index/Tasks";
import Calender from "./Components/Index/Calender";
import Users from "./Components/Index/Users";
import Departments from "./Components/Index/Departments";

function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path="*" element={<AuthLogin/>} />
          <Route path="Admin/Login" element={<AuthLogin/>} />
          <Route path="Admin/Forgot-password" element={<AuthforgotPass />} />
          <Route path="Admin/Forgot-success" element={<AuthforgotSuccess />} />
          <Route path="Admin/Home" element={<Home />} />
          <Route path="Admin/Dashboard" element={<Dashboard/>} />
          <Route path="Admin/Tasks" element={<Tasks />} />
          <Route path="Admin/Calendar" element={<Calender />} />
          {/* <Route path="Admin/Calendar-year" element={<CalenderYear/>} /> */}
          <Route path="Admin/Users" element={<Users />} />
          <Route path="Admin/Departments" element={<Departments />} />
          <Route path="Admin/Calendar" element={<Calender />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
