import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import React, { Suspense, lazy } from "react";
import "./App.css";
import "./Responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

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
import SignManagement from "./Components/Signatory/SignManagement";
import SettingsAprv from "./Components/Approver/SettingsAprv";

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
import EmplHelpSupport from "./Components/Employee/EmplHelp&Support";
import EmplEditProfile from "./Components/Employee/EmplEditProfile";
import ChatboxEmploy from "./Components/Employee/ChatboxEmploy";
import ContactUsEmpl from "./Components/Employee/ContactUsEmpl";
import EmplAuthLogin from "./Components/Login/EmplAuthLogin";
import EmplAuthforgotPassword from "./Components/Login/EmplAuthforgotPass";
import EmplForgotSuccess from "./Components/Login/EmplForgotSuccess";
import ViewUser from "./Components/Index/ViewUser";
import TemplateEdit from "./Components/DepartmentManager/TemplateEdit";
import ChatboxSig from "./Components/Signatory/ChatboxSig";
import ChatboxDept from "./Components/DepartmentManager/ChatboxDept";
import ChatboxAprv from "./Components/Approver/Chatbox";
import CalendarMonthDept from "./Components/DepartmentManager/CalendarMonthDept";
import CalenderYearDept from "./Components/DepartmentManager/CalenderYear";

import CommentsDept from "./Components/DepartmentManager/CommentsDept";
import AuthResetPass from "./Components/Login/AuthResetPass";
import AuthSignUp from "./Components/Login/AuthSignUp";

import EmplySetting from "./Components/Employee/EmplySetting";
import OTPauthEmply from "./Components/Login/OTPauthEmply";
import CalendarMonthEmply from "./Components/Employee/CalendarMonthEmply";
import CalenderYearEmply from "./Components/Employee/CalenderYearEmply";
import DocComments from "./Components/Index/DocumentRequests/Comment";
import CommentsEmply from "./Components/Employee/CommentsEmply";
import SigComments from "./Components/Signatory/Comments/Comments";
import SettingsSig from "./Components/Signatory/SettingsSig";
import UpdatePassword from "./Components/Login/UpdatePassword";
import UpdatePassEmply from "./Components/Login/UpdatePassEmply";
import CommentsAprv from "./Components/Approver/CommentsAprv";
import Login from "./Components/superAdmin/login";
import MainForgotPass from "./Components/superAdmin/forgotPassword";
import MainUpdatePassword from "./Components/superAdmin/updatePassword";
import MainForgotSuccess from "./Components/superAdmin/forgotSucess";
import MainHome from "./Components/superAdmin/home";
import SigDocComments from "./Components/Signatory/Comments/SigDocComments";
import SettingsDept from "./Components/DepartmentManager/SettingsDept";
import HelpNSupport from "./Components/superAdmin/Help/HelpNSupport";
import DocsComments from "./Components/DepartmentManager/DocumentRequests/Comment";
import ContentManagement from "./Components/superAdmin/contentManagement";
import EditContent from "./Components/superAdmin/editContent";
import { Loader } from "rsuite";
import Templates from "./Components/Index/Templates";

function App() {
  const token = localStorage.getItem("token-company");
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <AuthLogin />
            </Suspense>
          }
        />
        <Route
          path="Admin/Login"
          element={
            <Suspense fallback={<Loader />}>
              <AuthLogin />
            </Suspense>
          }
        />
        <Route
          path="/Admin/Signup"
          element={
            <Suspense fallback={<Loader />}>
              <AuthSignUp />
            </Suspense>
          }
        />
        <Route
          path="Admin/Forgot-password"
          element={
            <Suspense fallback={<Loader />}>
              <AuthforgotPass />
            </Suspense>
          }
        />
        <Route
          path="Admin/Reset-password"
          element={
            <Suspense fallback={<Loader />}>
              <AuthResetPass />
            </Suspense>
          }
        />
        <Route
          path="Admin/Forgot-success"
          element={
            <Suspense fallback={<Loader />}>
              <AuthforgotSuccess />
            </Suspense>
          }
        />

        <Route
          path="Login"
          element={
            <Suspense fallback={<Loader />}>
              <AuthLogin />
            </Suspense>
          }
        />
        <Route
          path="Forgot-password"
          element={
            <Suspense fallback={<Loader />}>
              <AuthforgotPass />
            </Suspense>
          }
        />
        <Route
          path="Update-password"
          element={
            <Suspense fallback={<Loader />}>
              <UpdatePassword />
            </Suspense>
          }
        />
        <Route
          path="Forgot-success"
          element={
            <Suspense fallback={<Loader />}>
              <AuthforgotSuccess />
            </Suspense>
          }
        />

        <Route
          path="Admin/Home"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="Admin/Dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="Admin/Tasks"
          element={
            <Suspense fallback={<Loader />}>
              <Tasks />
            </Suspense>
          }
        />
        <Route
          path="Admin/Calendar"
          element={
            <Suspense fallback={<Loader />}>
              <Calender />
            </Suspense>
          }
        />
        {/* <Route path="Admin/Calendar-year" element={<CalenderYear/>} /> */}
        <Route
          path="Admin/Users"
          element={
            <Suspense fallback={<Loader />}>
              <Users />
            </Suspense>
          }
        />
        <Route
          path="Admin/View-User/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ViewUser />
            </Suspense>
          }
        />
        <Route
          path="Admin/Departments"
          element={
            <Suspense fallback={<Loader />}>
              <Departments />
            </Suspense>
          }
        />
        <Route
          path="Admin/Calendar"
          element={
            <Suspense fallback={<Loader />}>
              <Calender />
            </Suspense>
          }
        />
        <Route
          path="Admin/Calendar-month"
          element={
            <Suspense fallback={<Loader />}>
              <CalendarMonth />
            </Suspense>
          }
        />
        <Route
          path="Admin/Calendar-year"
          element={
            <Suspense fallback={<Loader />}>
              <CalenderYear />
            </Suspense>
          }
        />
        <Route
          path="Admin/Chat"
          element={
            <Suspense fallback={<Loader />}>
              <Chatbox />
            </Suspense>
          }
        />
        <Route
          path="Admin/Approvers"
          element={
            <Suspense fallback={<Loader />}>
              <Approver />
            </Suspense>
          }
        />
        <Route
          path="Admin/Signatories"
          element={
            <Suspense fallback={<Loader />}>
              <Signatories />
            </Suspense>
          }
        />
        <Route
          path="Admin/Requests"
          element={
            <Suspense fallback={<Loader />}>
              <Requests />
            </Suspense>
          }
        />
        <Route
          path="Admin/Announcements"
          element={
            <Suspense fallback={<Loader />}>
              <Announcements />
            </Suspense>
          }
        />
        <Route
          path="Admin/Analytics"
          element={
            <Suspense fallback={<Loader />}>
              <Analytics />
            </Suspense>
          }
        />
        <Route
          path="Admin/Announcements"
          element={
            <Suspense fallback={<Loader />}>
              <Announcements />
            </Suspense>
          }
        />
        <Route
          path="Admin/Profile/My-profile"
          element={
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          }
        />
        <Route
          path="Admin/Profile/Edit-profile"
          element={
            <Suspense fallback={<Loader />}>
              <EditProfile />
            </Suspense>
          }
        />
        <Route
          path="Admin/Settings"
          element={
            <Suspense fallback={<Loader />}>
              <Settings />
            </Suspense>
          }
        />
        <Route
          path="Admin/Home/Comments/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Comments />
            </Suspense>
          }
        />
        <Route
          path="Admin/Requests/Comments/:id"
          element={
            <Suspense fallback={<Loader />}>
              <DocComments />
            </Suspense>
          }
        />
        <Route
          path="Admin/Help"
          element={
            <Suspense fallback={<Loader />}>
              <Help />
            </Suspense>
          }
        />
        <Route
          path="Admin/Help/Help-Support"
          element={
            <Suspense fallback={<Loader />}>
              <HelpSupport />
            </Suspense>
          }
        />
        <Route
          path="Admin/Help/Contact-us"
          element={
            <Suspense fallback={<Loader />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="Admin/Templates"
          element={
            <Suspense fallback={<Loader />}>
              <Templates />
            </Suspense>
          }
        />

        <Route
          path="Department/Home"
          element={
            <Suspense fallback={<Loader />}>
              <HomeDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <DashboardDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Template"
          element={
            <Suspense fallback={<Loader />}>
              <Template />
            </Suspense>
          }
        />
        <Route
          path="Department/Template-view"
          element={
            <Suspense fallback={<Loader />}>
              <TemplateView />
            </Suspense>
          }
        />
        <Route
          path="Department/Template-edit"
          element={
            <Suspense fallback={<Loader />}>
              <TemplateEdit />
            </Suspense>
          }
        />
        <Route
          path="Department/Certificate"
          element={
            <Suspense fallback={<Loader />}>
              <Certificate />
            </Suspense>
          }
        />
        <Route
          path="Department/Certificate-view"
          element={
            <Suspense fallback={<Loader />}>
              <CertificateView />
            </Suspense>
          }
        />
        <Route
          path="Department/Calendar"
          element={
            <Suspense fallback={<Loader />}>
              <CalenderDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Calendar-month"
          element={
            <Suspense fallback={<Loader />}>
              <CalendarMonthDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Calendar-year"
          element={
            <Suspense fallback={<Loader />}>
              <CalenderYearDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Departments"
          element={
            <Suspense fallback={<Loader />}>
              <DepartmentsDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Requests"
          element={
            <Suspense fallback={<Loader />}>
              <RequestsDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Chat"
          element={
            <Suspense fallback={<Loader />}>
              <ChatboxDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Comments"
          element={
            <Suspense fallback={<Loader />}>
              <CommentsDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Announcements"
          element={
            <Suspense fallback={<Loader />}>
              <AnnouncementsDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Analytics"
          element={
            <Suspense fallback={<Loader />}>
              <AnalyticsDept />
            </Suspense>
          }
        />
        <Route
          path="Department/My-profile"
          element={
            <Suspense fallback={<Loader />}>
              <ProfileDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Edit-profile"
          element={
            <Suspense fallback={<Loader />}>
              <EditProfileDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Help"
          element={
            <Suspense fallback={<Loader />}>
              <HelpDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Settings"
          element={
            <Suspense fallback={<Loader />}>
              <SettingsDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Help-Support"
          element={
            <Suspense fallback={<Loader />}>
              <HelpSupportDept />
            </Suspense>
          }
        />
        <Route
          path="Department/Contact-us"
          element={
            <Suspense fallback={<Loader />}>
              <ContactUsDept />
            </Suspense>
          }
        />

        <Route
          path="Approver/Home"
          element={
            <Suspense fallback={<Loader />}>
              <HomeAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <DashboardAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Template-review"
          element={
            <Suspense fallback={<Loader />}>
              <TemplateReview />
            </Suspense>
          }
        />
        <Route
          path="Approver/Template-view/:id"
          element={
            <Suspense fallback={<Loader />}>
              <TemplateRevView />
            </Suspense>
          }
        />
        <Route
          path="Approver/Requests"
          element={
            <Suspense fallback={<Loader />}>
              <RequestsAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Announcements"
          element={
            <Suspense fallback={<Loader />}>
              <AnnouncementsAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/History-log-approved"
          element={
            <Suspense fallback={<Loader />}>
              <HistoryLogAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/History-log-rejected"
          element={
            <Suspense fallback={<Loader />}>
              <HistoryLogReject />
            </Suspense>
          }
        />
        <Route
          path="Approver/Calendar"
          element={
            <Suspense fallback={<Loader />}>
              <CalenderAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Calendar-month"
          element={
            <Suspense fallback={<Loader />}>
              <CalendarMonthAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Calendar-year"
          element={
            <Suspense fallback={<Loader />}>
              <CalendarYearAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/My-profile"
          element={
            <Suspense fallback={<Loader />}>
              <ProfileAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Edit-profile"
          element={
            <Suspense fallback={<Loader />}>
              <EditProfileAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Help"
          element={
            <Suspense fallback={<Loader />}>
              <HelpAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Help-Support"
          element={
            <Suspense fallback={<Loader />}>
              <HelpSupportAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Contact-us"
          element={
            <Suspense fallback={<Loader />}>
              <ContactUsAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Settings"
          element={
            <Suspense fallback={<Loader />}>
              <SettingsAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Chat"
          element={
            <Suspense fallback={<Loader />}>
              <ChatboxAprv />
            </Suspense>
          }
        />
        <Route
          path="Approver/Comment/:id"
          element={
            <Suspense fallback={<Loader />}>
              <CommentsAprv />
            </Suspense>
          }
        />

        {/* Signatory Routes */}
        <Route
          path="Signatory/Home"
          element={
            <Suspense fallback={<Loader />}>
              <HomeSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <DashboardSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Awaiting-sig"
          element={
            <Suspense fallback={<Loader />}>
              <AwaitingSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/History-log-approved"
          element={
            <Suspense fallback={<Loader />}>
              <HistoryLogSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/History-log-doc"
          element={
            <Suspense fallback={<Loader />}>
              <HistoryLogDoc />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Calendar"
          element={
            <Suspense fallback={<Loader />}>
              <CalenderSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Calendar-month"
          element={
            <Suspense fallback={<Loader />}>
              <CalendarMonthSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Calendar-year"
          element={
            <Suspense fallback={<Loader />}>
              <CalendarYearSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Requests"
          element={
            <Suspense fallback={<Loader />}>
              <RequestsSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Announcements"
          element={
            <Suspense fallback={<Loader />}>
              <AnnouncementsSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Profile/My-profile"
          element={
            <Suspense fallback={<Loader />}>
              <ProfileSig />
            </Suspense>
          }
        />

        <Route
          path="Signatory/Signature-management"
          element={
            <Suspense fallback={<Loader />}>
              <SignManagement />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Profile/Edit-profile"
          element={
            <Suspense fallback={<Loader />}>
              <EditProfileSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Help"
          element={
            <Suspense fallback={<Loader />}>
              <HelpSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Help-Support"
          element={
            <Suspense fallback={<Loader />}>
              <HelpSupportSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Contact-us"
          element={
            <Suspense fallback={<Loader />}>
              <ContactUsSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Chat"
          element={
            <Suspense fallback={<Loader />}>
              <ChatboxSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Settings"
          element={
            <Suspense fallback={<Loader />}>
              <SettingsSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Requests"
          element={
            <Suspense fallback={<Loader />}>
              <RequestsSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Announcements"
          element={
            <Suspense fallback={<Loader />}>
              <AnnouncementsSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/My-profile"
          element={
            <Suspense fallback={<Loader />}>
              <ProfileSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Edit-profile"
          element={
            <Suspense fallback={<Loader />}>
              <EditProfileSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Help"
          element={
            <Suspense fallback={<Loader />}>
              <HelpSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Help/Help-Support"
          element={
            <Suspense fallback={<Loader />}>
              <HelpSupportSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Help/Contact-us"
          element={
            <Suspense fallback={<Loader />}>
              <ContactUsSig />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Home/Comments/:id"
          element={
            <Suspense fallback={<Loader />}>
              <SigComments />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Requests/Comments/:id"
          element={
            <Suspense fallback={<Loader />}>
              <SigDocComments />
            </Suspense>
          }
        />
        <Route
          path="Signatory/Awaiting-sig/Comments/:id"
          element={
            <Suspense fallback={<Loader />}>
              <SigComments />
            </Suspense>
          }
        />

        {/* Employee Routes */}
        <Route
          path="Employee/Login"
          element={
            <Suspense fallback={<Loader />}>
              <EmplAuthLogin />
            </Suspense>
          }
        />
        <Route
          path="Employee/Forgot-Password"
          element={
            <Suspense fallback={<Loader />}>
              <EmplAuthforgotPassword />
            </Suspense>
          }
        />
        <Route
          path="Employee/Forgot-Success"
          element={
            <Suspense fallback={<Loader />}>
              <EmplForgotSuccess />
            </Suspense>
          }
        />
        <Route
          path="Employee/reset-update-password"
          element={
            <Suspense fallback={<Loader />}>
              <UpdatePassEmply />
            </Suspense>
          }
        />
        <Route
          path="Employee/Home"
          element={
            <Suspense fallback={<Loader />}>
              <HomeEmpl />
            </Suspense>
          }
        />
        <Route
          path="Employee/Dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <EmployeeDash />
            </Suspense>
          }
        />
        <Route
          path="Employee/history-log-request"
          element={
            <Suspense fallback={<Loader />}>
              <RequestHistoryEmpl />
            </Suspense>
          }
        />
        <Route
          path="Employee/history-log-access"
          element={
            <Suspense fallback={<Loader />}>
              <DocHistoryEmploye />
            </Suspense>
          }
        />
        <Route
          path="Employee/document"
          element={
            <Suspense fallback={<Loader />}>
              <DocumentEmply />
            </Suspense>
          }
        />
        <Route
          path="Employee/received-doc"
          element={
            <Suspense fallback={<Loader />}>
              <ReceivedDocEmpl />
            </Suspense>
          }
        />
        <Route
          path="Employee/Calender"
          element={
            <Suspense fallback={<Loader />}>
              <CalenderEmply />
            </Suspense>
          }
        />
        <Route
          path="Employee/view-details/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ViewDocumentEmply />
            </Suspense>
          }
        />
        <Route
          path="Employee/received-doc/view-details"
          element={
            <Suspense fallback={<Loader />}>
              <ViewReceivedDoc />
            </Suspense>
          }
        />
        <Route
          path="Employee/OTP-verification"
          element={
            <Suspense fallback={<Loader />}>
              <OTPauthEmply />
            </Suspense>
          }
        />
        <Route
          path="Employee/profile"
          element={
            <Suspense fallback={<Loader />}>
              <EmplProfile />
            </Suspense>
          }
        />
        <Route
          path="Employee/Edit-Profile"
          element={
            <Suspense fallback={<Loader />}>
              <EmplEditProfile />
            </Suspense>
          }
        />
        <Route
          path="Employee/Help&Support"
          element={
            <Suspense fallback={<Loader />}>
              <EmplHelpSupport />
            </Suspense>
          }
        />
        <Route
          path="Employee/Help"
          element={
            <Suspense fallback={<Loader />}>
              <EmplHelp />
            </Suspense>
          }
        />
        <Route
          path="Employee/Chat"
          element={
            <Suspense fallback={<Loader />}>
              <ChatboxEmploy />
            </Suspense>
          }
        />
        <Route
          path="Employee/Contact"
          element={
            <Suspense fallback={<Loader />}>
              <ContactUsEmpl />
            </Suspense>
          }
        />
        <Route
          path="Employee/Settings"
          element={
            <Suspense fallback={<Loader />}>
              <EmplySetting />
            </Suspense>
          }
        />
        <Route
          path="Employee/Calendar-month"
          element={
            <Suspense fallback={<Loader />}>
              <CalendarMonthEmply />
            </Suspense>
          }
        />
        <Route
          path="Employee/Calendar-year"
          element={
            <Suspense fallback={<Loader />}>
              <CalenderYearEmply />
            </Suspense>
          }
        />
        <Route
          path="Employee/Comment/:id"
          element={
            <Suspense fallback={<Loader />}>
              <CommentsEmply />
            </Suspense>
          }
        />

        {/* Main Routes */}
        <Route
          path="/main/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/main/forgot-password"
          element={
            <Suspense fallback={<Loader />}>
              <MainForgotPass />
            </Suspense>
          }
        />
        <Route
          path="/main/update-password"
          element={
            <Suspense fallback={<Loader />}>
              <MainUpdatePassword />
            </Suspense>
          }
        />
        <Route
          path="/main/success"
          element={
            <Suspense fallback={<Loader />}>
              <MainForgotSuccess />
            </Suspense>
          }
        />
        <Route
          path="main/Home"
          element={
            <Suspense fallback={<Loader />}>
              <MainHome />
            </Suspense>
          }
        />
        <Route
          path="main/Help-support"
          element={
            <Suspense fallback={<Loader />}>
              <HelpNSupport />
            </Suspense>
          }
        />

        <Route
          path="main/Content-management"
          element={
            <Suspense fallback={<Loader />}>
              <ContentManagement />
            </Suspense>
          }
        />
        <Route
          path="main/Content-management/Edit-content"
          element={
            <Suspense fallback={<Loader />}>
              <EditContent />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
