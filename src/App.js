import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthLogin from "./Components/Login/AuthLogin";
import AuthforgotPass from "./Components/Login/AuthforgotPass";
import AuthforgotSuccess from "./Components/Login/AuthforgotSuccess";
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
import TemplateView from "./Components/DepartmentManager/TemplateView";
import HomeAprv from "./Components/Approver/HomeAprv";
import TemplateReview from "./Components/Approver/TemplateReview";
import DashboardAprv from "./Components/Approver/DashboardAprv";
import TemplateRevView from "./Components/Approver/TemplateRevView";
import HistoryLog from "./Components/Approver/HistoryLogAprv";
import CalenderAprv from "./Components/Approver/CalenderAprv";
import CalendarMonthAprv from "./Components/Approver/CalendarMonthAprv";
import CalendarYearAprv from "./Components/Approver/CalenderYearAprv";
import HistoryLogAprv from "./Components/Approver/HistoryLogAprv";
import HistoryLogReject from "./Components/Approver/HistoryLogReject";
import HomeSig from "./Components/Signatory/HomeSig";
import DashboardSig from "./Components/Signatory/DashboardSig";
import HistoryLogSig from "./Components/Signatory/HistoryLogSig";
import HistoryLogDoc from "./Components/Signatory/HistoryLogDoc";
import CalenderSig from "./Components/Signatory/CalenderSig";
import CalendarMonthSig from "./Components/Signatory/CalendarMonthSig";
import CalendarYearSig from "./Components/Signatory/CalenderYearSig";
import AwaitingSig from "./Components/Signatory/AwaitingSig";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<AuthLogin />} />
        <Route path="Admin/Login" element={<AuthLogin />} />
        <Route path="Admin/Forgot-password" element={<AuthforgotPass />} />
        <Route path="Admin/Forgot-success" element={<AuthforgotSuccess />} />
        <Route path="Admin/Home" element={<Home />} />
        <Route path="Admin/Dashboard" element={<Dashboard />} />
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
        <Route path="Department/Dashboard" element={<DashboardDept />} />
        <Route path="Department/Template" element={<Template />} />
        <Route path="Department/Template-view" element={<TemplateView />} />
        <Route path="Department/Certificate" element={<Certificate />} />
        <Route
          path="Department/Certificate-view"
          element={<CertificateView />}
        />
        <Route path="Department/Calendar" element={<CalenderDept />} />
        <Route path="Department/Departments" element={<DepartmentsDept />} />

        <Route path="Approver/Home" element={<HomeAprv />} />
        <Route path="Approver/Dashboard" element={<DashboardAprv />} />
        <Route path="Approver/Template-review" element={<TemplateReview />} />
        <Route path="Approver/Template-view" element={<TemplateRevView />} />
        <Route
          path="Approver/History-log-approved"
          element={<HistoryLogAprv />}
        />
        <Route
          path="Approver/History-log-rejected"
          element={<HistoryLogReject />}
        />
        <Route path="Approver/Calendar" element={<CalenderAprv />} />
        <Route path="Approver/Calendar-month" element={<CalendarMonthAprv />} />
        <Route path="Approver/Calendar-year" element={<CalendarYearAprv />} />

        <Route path="Signatory/Home" element={<HomeSig />} />
        <Route path="Signatory/Dashboard" element={<DashboardSig />} />
        <Route path="Signatory/Awaiting-sig" element={<AwaitingSig />} />
        <Route
          path="Signatory/History-log-approved"
          element={<HistoryLogSig />}
        />
        <Route path="Signatory/History-log-doc" element={<HistoryLogDoc />} />
        <Route path="Signatory/Calendar" element={<CalenderSig />} />
        <Route path="Signatory/Calendar-month" element={<CalendarMonthSig />} />
        <Route path="Signatory/Calendar-year" element={<CalendarYearSig />} />
      </Routes>
    </div>
  );
}

export default App;
