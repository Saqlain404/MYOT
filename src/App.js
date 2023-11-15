import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'react-calendar/dist/Calendar.css';
import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
import Chatbox from "./Components/Index/Chatbox";
import CalendarMonth from "./Components/Index/CalendarMonth";
import CalenderYear from "./Components/Index/CalenderYear";
import HomeDept from "./Components/DepartmentManager/HomeDept";
import DashboardDept from "./Components/DepartmentManager/DashboardDept";
import Template from "./Components/DepartmentManager/Template";
import Certificate from "./Components/DepartmentManager/Certificate";
import CalenderDept from "./Components/DepartmentManager/CalenderDept";
import DepartmentsDept from "./Components/DepartmentManager/DepartmentsDept";
import CertificateView from "./Components/DepartmentManager/CertificateView";

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
          <Route path="Admin/Calendar-month" element={<CalendarMonth />} />
          <Route path="Admin/Calendar-year" element={<CalenderYear />} />
          <Route path="Admin/Chat" element={<Chatbox />} />

          <Route path="Department/Home" element={<HomeDept />} />
          <Route path="Department/Dashboard" element={<DashboardDept/>} />
          <Route path="Department/Template" element={<Template />} />
          <Route path="Department/Certificate" element={<Certificate/>} />
          <Route path="Department/Certificate-view" element={<CertificateView/>} />
          <Route path="Department/Calendar" element={<CalenderDept/>} />
          <Route path="Department/Departments" element={<DepartmentsDept/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
