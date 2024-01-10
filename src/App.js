import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import React from "react";
import "./App.css";
import "./Responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'

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
import Approver from "./Components/Index/Approver";
import Signatories from "./Components/Index/Signatories";
import Requests from "./Components/Index/Requests";
import Announcements from "./Components/Index/Announcements";
import Analytics from "./Components/Index/Analytics";
import RequestsAprv from "./Components/Approver/RequestsAprv";
import AnnouncementsAprv from "./Components/Approver/AnnouncementsAprv";
import RequestsDept from "./Components/DepartmentManager/RequestsDept";
import AnnouncementsDept from "./Components/DepartmentManager/AnnouncementsDept";
import AnalyticsDept from "./Components/DepartmentManager/Analytics";
import RequestsSig from "./Components/Signatory/Requests";
import AnnouncementsSig from "./Components/Signatory/AnnouncementsSig";
import Profile from "./Components/Index/Profile";
import EditProfile from "./Components/Index/EditProfile";
import EditProfileSig from "./Components/Signatory/EditProfile";
import ProfileSig from "./Components/Signatory/ProfileSig";
import ProfileAprv from "./Components/Approver/ProfileAprv";
import EditProfileAprv from "./Components/Approver/EditProfileAprv";
import ProfileDept from "./Components/DepartmentManager/ProfileDept";
import EditProfileDept from "./Components/DepartmentManager/EditProfileDept";
import Help from "./Components/Index/Help";
import HelpSupport from "./Components/Index/Help&support";
import ContactUs from "./Components/Index/ContactUs";
import HelpSig from "./Components/Signatory/HelpSig";
import HelpSupportSig from "./Components/Signatory/Help&supportSig";
import ContactUsSig from "./Components/Signatory/ContactUsSig";
import HelpAprv from "./Components/Approver/HelpAprv";
import HelpSupportAprv from "./Components/Approver/Help&supportAprv";
import ContactUsAprv from "./Components/Approver/ContactUsAprv";
import HelpDept from "./Components/DepartmentManager/HelpDept";
import HelpSupportDept from "./Components/DepartmentManager/Help&supportDept";
import ContactUsDept from "./Components/DepartmentManager/ContactUsDept";
import Settings from "./Components/Index/Settings";
import Comments from "./Components/Index/Comments";

import HomeEmpl from "./Components/Employee/HomeEmpl";
import EmployeeDash from "./Components/Employee/EmployeeDash";
import RequestHistoryEmpl from "./Components/Employee/RequestHistoryEmpl";
import DocHistoryEmploye from "./Components/Employee/DocHistoryEmploye";
import DocumentEmply from "./Components/Employee/DocumentEmply";
import ReceivedDocEmpl from "./Components/Employee/ReceivedDocEmpl";
import CalenderEmply from "./Components/Employee/CalenderEmply";
import ViewDocumentEmply from "./Components/Employee/ViewDocumentEmply";
import ViewReceivedDoc from "./Components/Employee/ViewRecievedDoc";
import EmplProfile from "./Components/Employee/ProfileEmpl";
import EmplHelp from "./Components/Employee/Help";
import EmplHelpSupport from "./Components/Employee/Help&Support";
import EmplEditProfile from "./Components/Employee/EditProfile";
import ChatboxEmploy from "./Components/Employee/ChatboxEmploy";
import ContactUsEmpl from "./Components/Employee/ContactUsEmpl";
import EmplAuthLogin from "./Components/Login/EmplAuthLogin";
import EmplAuthforgotPassword from "./Components/Login/EmplAuthforgotPass";
import EmplForgotSuccess from "./Components/Login/EmplForgotSuccess";
import ViewUser from "./Components/Index/ViewUser";
import DocComments from "./Components/Index/DocumentRequests/Comment";
import SigComments from "./Components/Signatory/Comments/Comments";
import SettingsSig from "./Components/Signatory/SettingsSig";
import UpdatePassword from "./Components/Login/UpdatePassword";
import SigDocComments from "./Components/Signatory/Comments/SigDocComments";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="*" element={<AuthLogin />} />
        <Route path="Login" element={<AuthLogin />} />
        <Route path="Forgot-password" element={<AuthforgotPass />} />
        <Route path="Update-password" element={<UpdatePassword />} />
        <Route path="Forgot-success" element={<AuthforgotSuccess />} />
        <Route path="Admin/Home" element={<Home />} />
        <Route path="Admin/Dashboard" element={<Dashboard />} />
        <Route path="Admin/Tasks" element={<Tasks />} />
        <Route path="Admin/Calendar" element={<Calender />} />
        {/* <Route path="Admin/Calendar-year" element={<CalenderYear/>} /> */}
        <Route path="Admin/Users" element={<Users />} />
        <Route path="Admin/View-User/:id" element={<ViewUser />} />
        <Route path="Admin/Departments" element={<Departments />} />
        <Route path="Admin/Calendar" element={<Calender />} />
        <Route path="Admin/Calendar-month" element={<CalendarMonth />} />
        <Route path="Admin/Calendar-year" element={<CalenderYear />} />
        <Route path="Admin/Chat" element={<Chatbox />} />
        <Route path="Admin/Approvers" element={<Approver />} />
        <Route path="Admin/Signatories" element={<Signatories />} />
        <Route path="Admin/Requests" element={<Requests />} />
        <Route path="Admin/Announcements" element={<Announcements />} />
        <Route path="Admin/Analytics" element={<Analytics />} />
        <Route path="Admin/Announcements" element={<Announcements />} />
        <Route path="Admin/My-profile" element={<Profile />} />
        <Route path="Admin/Edit-profile" element={<EditProfile />} />
        <Route path="Admin/Settings" element={<Settings />} />
        <Route path="Admin/Tasks/Comments/:id" element={<Comments />} />
        <Route path="Admin/Requests/Comments/:id" element={<DocComments />} />
        <Route path="Admin/Help" element={<Help />} />
        <Route path="Admin/Help/Help-Support" element={<HelpSupport />} />
        <Route path="Admin/Help/Contact-us" element={<ContactUs />} />

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
        <Route path="Department/Requests" element={<RequestsDept />} />
        <Route
          path="Department/Announcements"
          element={<AnnouncementsDept />}
        />
        <Route path="Department/Analytics" element={<AnalyticsDept />} />
        <Route path="Department/My-profile" element={<ProfileDept />} />
        <Route path="Department/Edit-profile" element={<EditProfileDept />} />
        <Route path="Department/Help" element={<HelpDept />} />
        <Route path="Department/Help-Support" element={<HelpSupportDept />} />
        <Route path="Department/Contact-us" element={<ContactUsDept />} />

        <Route path="Approver/Home" element={<HomeAprv />} />
        <Route path="Approver/Dashboard" element={<DashboardAprv />} />
        <Route path="Approver/Template-review" element={<TemplateReview />} />
        <Route path="Approver/Template-view" element={<TemplateRevView />} />
        <Route path="Approver/Requests" element={<RequestsAprv />} />
        <Route path="Approver/Announcements" element={<AnnouncementsAprv />} />
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
        <Route path="Approver/My-profile" element={<ProfileAprv />} />
        <Route path="Approver/Edit-profile" element={<EditProfileAprv />} />
        <Route path="Approver/Help" element={<HelpAprv />} />
        <Route path="Approver/Help-Support" element={<HelpSupportAprv />} />
        <Route path="Approver/Contact-us" element={<ContactUsAprv />} />

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
        <Route path="Signatory/Requests" element={<RequestsSig />} />
        <Route path="Signatory/Announcements" element={<AnnouncementsSig />} />
        <Route path="Signatory/My-profile" element={<ProfileSig />} />
        <Route path="Signatory/Edit-profile" element={<EditProfileSig />} />
        <Route path="Signatory/Help" element={<HelpSig />} />
        <Route
          path="Signatory/Help/Help-Support"
          element={<HelpSupportSig />}
        />
        <Route path="Signatory/Help/Contact-us" element={<ContactUsSig />} />
        <Route path="Signatory/Home/Comments/:id" element={<SigComments />} />
        <Route path="Signatory/Requests/Comments/:id" element={<SigDocComments />} />
        <Route
          path="Signatory/Awaiting-sig/Comments/:id"
          element={<SigComments />}
        />
        <Route path="Signatory/Settings" element={<SettingsSig />} />

        <Route path="Employee/Login" element={<EmplAuthLogin />} />
        <Route
          path="Employee/Forgot-Password"
          element={<EmplAuthforgotPassword />}
        />
        <Route path="Employee/Forgot-Success" element={<EmplForgotSuccess />} />
        <Route path="Employee/Home" element={<HomeEmpl />} />
        <Route path="Employee/Dashboard" element={<EmployeeDash />} />
        <Route
          path="Employee/history-log-request"
          element={<RequestHistoryEmpl />}
        />
        <Route
          path="Employee/history-log-access"
          element={<DocHistoryEmploye />}
        />
        <Route path="Employee/document" element={<DocumentEmply />} />
        <Route path="Employee/received-doc" element={<ReceivedDocEmpl />} />
        <Route path="Employee/Calender" element={<CalenderEmply />} />
        <Route path="Employee/view-details" element={<ViewDocumentEmply />} />
        <Route
          path="Employee/received-doc/view-details"
          element={<ViewReceivedDoc />}
        />
        <Route path="Employee/Forgot-success" element={<EmplForgotSuccess />} />
        <Route
          path="Employee/Forgot-password"
          element={<EmplAuthforgotPassword />}
        />
        <Route path="Employee/profile" element={<EmplProfile />} />
        <Route path="Employee/Help" element={<EmplHelp />} />
        <Route path="Employee/Help&Support" element={<EmplHelpSupport />} />
        <Route path="Employee/Edit-Profile" element={<EmplEditProfile />} />
        <Route path="Employee/Chat" element={<ChatboxEmploy />} />
        <Route path="Employee/Contact" element={<ContactUsEmpl />} />
      </Routes>
    </div>
  );
}

export default App;
