// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./index.css"
// import "./dist/css/style.min.css"
// import "../public/assets/css/style.min.css"
import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import AuthLogin from './Components/Authentication/AuthLogin';
import Index from './Components/Index/Index';
import Login from "./Components/Login/Login";
import AuthforgotPass from "./Components/Authentication/AuthforgotPass";
import AuthforgotSuccess from "./Components/Authentication/AuthforgotSuccess";
import Home from "./Components/Index/Home";
import Dashboard from "./Components/Index/Dashboard";
import Tasks from "./Components/Index/Tasks";
import Calender from "./Components/Index/Calender";
import CalenderYear from "./Components/Index/CalenderYear";
import Users from "./Components/Index/Users";
import Departments from "./Components/Index/Departments";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<AuthLogin />} />
          <Route path="Admin/Login" element={<AuthLogin />} />
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
