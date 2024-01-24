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

const AuthforgotPass = lazy(() => import("./Components/Login/AuthforgotPass"));
const AuthforgotSuccess = lazy(() =>
  import("./Components/Login/AuthforgotSuccess")
);
const Home = lazy(() => import("./Components/Index/Home"));
const Dashboard = lazy(() => import("./Components/Index/Dashboard"));
const Tasks = lazy(() => import("./Components/Index/Tasks"));
const Calender = lazy(() => import("./Components/Index/Calender"));
const Users = lazy(() => import("./Components/Index/Users"));
const Departments = lazy(() => import("./Components/Index/Departments"));
const Chatbox = lazy(() => import("./Components/Index/Chatbox"));
const CalendarMonth = lazy(() => import("./Components/Index/CalendarMonth"));
const CalenderYear = lazy(() => import("./Components/Index/CalenderYear"));
const HomeDept = lazy(() => import("./Components/DepartmentManager/HomeDept"));
const DashboardDept = lazy(() =>
  import("./Components/DepartmentManager/DashboardDept")
);
const Template = lazy(() => import("./Components/DepartmentManager/Template"));
const Certificate = lazy(() =>
  import("./Components/DepartmentManager/Certificate")
);
const CalenderDept = lazy(() =>
  import("./Components/DepartmentManager/CalenderDept")
);
const DepartmentsDept = lazy(() =>
  import("./Components/DepartmentManager/DepartmentsDept")
);
const CertificateView = lazy(() =>
  import("./Components/DepartmentManager/CertificateView")
);
const TemplateView = lazy(() =>
  import("./Components/DepartmentManager/TemplateView")
);
const HomeAprv = lazy(() => import("./Components/Approver/HomeAprv"));
const TemplateReview = lazy(() =>
  import("./Components/Approver/TemplateReview")
);
const DashboardAprv = lazy(() => import("./Components/Approver/DashboardAprv"));
const TemplateRevView = lazy(() =>
  import("./Components/Approver/TemplateRevView")
);
const HistoryLog = lazy(() => import("./Components/Approver/HistoryLogAprv"));
const CalenderAprv = lazy(() => import("./Components/Approver/CalenderAprv"));
const CalendarMonthAprv = lazy(() =>
  import("./Components/Approver/CalendarMonthAprv")
);
const CalendarYearAprv = lazy(() =>
  import("./Components/Approver/CalenderYearAprv")
);
const HistoryLogAprv = lazy(() =>
  import("./Components/Approver/HistoryLogAprv")
);
const HistoryLogReject = lazy(() =>
  import("./Components/Approver/HistoryLogReject")
);
const HomeSig = lazy(() => import("./Components/Signatory/HomeSig"));
const DashboardSig = lazy(() => import("./Components/Signatory/DashboardSig"));
const HistoryLogSig = lazy(() =>
  import("./Components/Signatory/HistoryLogSig")
);
const HistoryLogDoc = lazy(() =>
  import("./Components/Signatory/HistoryLogDoc")
);
const CalenderSig = lazy(() => import("./Components/Signatory/CalenderSig"));
const CalendarMonthSig = lazy(() =>
  import("./Components/Signatory/CalendarMonthSig")
);
const CalendarYearSig = lazy(() =>
  import("./Components/Signatory/CalenderYearSig")
);
const AwaitingSig = lazy(() => import("./Components/Signatory/AwaitingSig"));
const Approver = lazy(() => import("./Components/Index/Approver"));
const Signatories = lazy(() => import("./Components/Index/Signatories"));
const Requests = lazy(() => import("./Components/Index/Requests"));
const Announcements = lazy(() => import("./Components/Index/Announcements"));
const Analytics = lazy(() => import("./Components/Index/Analytics"));
const RequestsAprv = lazy(() => import("./Components/Approver/RequestsAprv"));
const AnnouncementsAprv = lazy(() =>
  import("./Components/Approver/AnnouncementsAprv")
);
const RequestsDept = lazy(() =>
  import("./Components/DepartmentManager/RequestsDept")
);
const AnnouncementsDept = lazy(() =>
  import("./Components/DepartmentManager/AnnouncementsDept")
);
const AnalyticsDept = lazy(() =>
  import("./Components/DepartmentManager/Analytics")
);
const RequestsSig = lazy(() => import("./Components/Signatory/Requests"));
const AnnouncementsSig = lazy(() =>
  import("./Components/Signatory/AnnouncementsSig")
);
const Profile = lazy(() => import("./Components/Index/Profile"));
const EditProfile = lazy(() => import("./Components/Index/EditProfile"));
const EditProfileSig = lazy(() => import("./Components/Signatory/EditProfile"));
const ProfileSig = lazy(() => import("./Components/Signatory/ProfileSig"));
const ProfileAprv = lazy(() => import("./Components/Approver/ProfileAprv"));
const EditProfileAprv = lazy(() =>
  import("./Components/Approver/EditProfileAprv")
);
const ProfileDept = lazy(() =>
  import("./Components/DepartmentManager/ProfileDept")
);
const EditProfileDept = lazy(() =>
  import("./Components/DepartmentManager/EditProfileDept")
);
const Help = lazy(() => import("./Components/Index/Help"));
const HelpSupport = lazy(() => import("./Components/Index/Help&support"));
const ContactUs = lazy(() => import("./Components/Index/ContactUs"));
const HelpSig = lazy(() => import("./Components/Signatory/HelpSig"));
const HelpSupportSig = lazy(() =>
  import("./Components/Signatory/Help&supportSig")
);
const ContactUsSig = lazy(() => import("./Components/Signatory/ContactUsSig"));
const HelpAprv = lazy(() => import("./Components/Approver/HelpAprv"));
const HelpSupportAprv = lazy(() =>
  import("./Components/Approver/Help&supportAprv")
);
const ContactUsAprv = lazy(() => import("./Components/Approver/ContactUsAprv"));
const HelpDept = lazy(() => import("./Components/DepartmentManager/HelpDept"));
const HelpSupportDept = lazy(() =>
  import("./Components/DepartmentManager/Help&supportDept")
);
const ContactUsDept = lazy(() =>
  import("./Components/DepartmentManager/ContactUsDept")
);
const Settings = lazy(() => import("./Components/Index/Settings"));
const Comments = lazy(() => import("./Components/Index/Comments"));
const SignManagement = lazy(() =>
  import("./Components/Signatory/SignManagement")
);
const SettingsAprv = lazy(() => import("./Components/Approver/SettingsAprv"));
const HomeEmpl = lazy(() => import("./Components/Employee/HomeEmpl"));
const EmployeeDash = lazy(() => import("./Components/Employee/EmployeeDash"));
const RequestHistoryEmpl = lazy(() =>
  import("./Components/Employee/RequestHistoryEmpl")
);
const DocHistoryEmploye = lazy(() =>
  import("./Components/Employee/DocHistoryEmploye")
);
const DocumentEmply = lazy(() => import("./Components/Employee/DocumentEmply"));
const ReceivedDocEmpl = lazy(() =>
  import("./Components/Employee/ReceivedDocEmpl")
);
const CalenderEmply = lazy(() => import("./Components/Employee/CalenderEmply"));
const ViewDocumentEmply = lazy(() =>
  import("./Components/Employee/ViewDocumentEmply")
);
const ViewReceivedDoc = lazy(() =>
  import("./Components/Employee/ViewRecievedDoc")
);
const EmplProfile = lazy(() => import("./Components/Employee/ProfileEmpl"));
const EmplHelp = lazy(() => import("./Components/Employee/Help"));
const EmplHelpSupport = lazy(() =>
  import("./Components/Employee/EmplHelp&Support")
);
const EmplEditProfile = lazy(() =>
  import("./Components/Employee/EmplEditProfile")
);
const ChatboxEmploy = lazy(() => import("./Components/Employee/ChatboxEmploy"));
const ContactUsEmpl = lazy(() => import("./Components/Employee/ContactUsEmpl"));
const EmplAuthLogin = lazy(() => import("./Components/Login/EmplAuthLogin"));
const EmplAuthforgotPassword = lazy(() =>
  import("./Components/Login/EmplAuthforgotPass")
);
const EmplForgotSuccess = lazy(() =>
  import("./Components/Login/EmplForgotSuccess")
);
const ViewUser = lazy(() => import("./Components/Index/ViewUser"));
const TemplateEdit = lazy(() =>
  import("./Components/DepartmentManager/TemplateEdit")
);
const ChatboxSig = lazy(() => import("./Components/Signatory/ChatboxSig"));
const ChatboxDept = lazy(() =>
  import("./Components/DepartmentManager/ChatboxDept")
);
const ChatboxAprv = lazy(() => import("./Components/Approver/Chatbox"));
const CalendarMonthDept = lazy(() =>
  import("./Components/DepartmentManager/CalendarMonthDept")
);
const CalenderYearDept = lazy(() =>
  import("./Components/DepartmentManager/CalenderYear")
);
const CommentsDept = lazy(() =>
  import("./Components/DepartmentManager/CommentsDept")
);
const AuthResetPass = lazy(() => import("./Components/Login/AuthResetPass"));
const AuthSignUp = lazy(() => import("./Components/Login/AuthSignUp"));
const EmplySetting = lazy(() => import("./Components/Employee/EmplySetting"));
const OTPauthEmply = lazy(() => import("./Components/Login/OTPauthEmply"));
const CalendarMonthEmply = lazy(() =>
  import("./Components/Employee/CalendarMonthEmply")
);
const CalenderYearEmply = lazy(() =>
  import("./Components/Employee/CalenderYearEmply")
);
const DocComments = lazy(() =>
  import("./Components/Index/DocumentRequests/Comment")
);
const CommentsEmply = lazy(() => import("./Components/Employee/CommentsEmply"));
const SigComments = lazy(() =>
  import("./Components/Signatory/Comments/Comments")
);
const SettingsSig = lazy(() => import("./Components/Signatory/SettingsSig"));
const UpdatePassword = lazy(() => import("./Components/Login/UpdatePassword"));
const UpdatePassEmply = lazy(() =>
  import("./Components/Login/UpdatePassEmply")
);
const CommentsAprv = lazy(() => import("./Components/Approver/CommentsAprv"));
const Login = lazy(() => import("./Components/superAdmin/login"));
const MainForgotPass = lazy(() =>
  import("./Components/superAdmin/forgotPassword")
);
const MainUpdatePassword = lazy(() =>
  import("./Components/superAdmin/updatePassword")
);
const MainForgotSuccess = lazy(() =>
  import("./Components/superAdmin/forgotSucess")
);
const MainHome = lazy(() => import("./Components/superAdmin/home"));
const SigDocComments = lazy(() =>
  import("./Components/Signatory/Comments/SigDocComments")
);
const SettingsDept = lazy(() =>
  import("./Components/DepartmentManager/SettingsDept")
);
const HelpNSupport = lazy(() =>
  import("./Components/superAdmin/Help/HelpNSupport")
);
const ContentManagement = lazy(() =>
  import("./Components/superAdmin/contentManagement")
);
const EditContent = lazy(() => 
  import("./Components/superAdmin/editContent")
);
const Templates = lazy(() => import("./Components/Index/Templates"));
const Loader = lazy(() => import("./Components/Loader/Loader"));
const AuthLogin = lazy(() => import("./Components/Login/AuthLogin"));

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
          path="Department/Home/Comments/:id"
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
        <Route path="/main/login" element={<Login />} />
        <Route path="/main/forgot-password" element={<MainForgotPass />} />
        <Route path="/main/update-password" element={<MainUpdatePassword />} />
        <Route path="/main/success" element={<MainForgotSuccess />} />
        <Route path="main/Home" element={<MainHome />} />
        <Route path="main/Help-support" element={<HelpNSupport />} />
        <Route path="main/Content-management" element={<ContentManagement />} />
        <Route
          path="main/Content-management/Edit-content"
          element={<EditContent />}
        />
      </Routes>
    </div>
  );
}

export default App;
