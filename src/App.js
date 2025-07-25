import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "../src/custom/style.css";
import NavBar from "./componets/user/top-navbar/NavBar";
import Home from "./componets/user/UserPages/Home";
import NotFound from "./componets/notfound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons-kit";
import "font-awesome/css/font-awesome.min.css";
import "../src/custom/style.css";
import UserRegistration from "./componets/user/UserPages/UserRegistration";
import UserLogin from "./componets/user/UserPages/UserLogin";
import Cards from "./componets/user/UserPages/Cards";
import Footer from "./componets/user/footer/Footer";
import LeftNav from "./componets/user/leftnav/LeftNav";
import JobCard from "./componets/user/leftnav/JobCard";
import PostJobCard from "./componets/user/leftnav/PostJobCard";
import JobDetails from "./componets/user/leftnav/JobDetails";
import SavedJobsList from "./componets/user/UserPages/SavedJobsList";
import SavedJobCard from "./componets/user/UserPages/SavedJobCard";
import Profile from "./componets/user/leftnav/Profile";
import UserProfile from "./componets/user/UserPages/UserProfile";
import Logout from "./componets/user/UserPages/Logout";
import ForgotPassword from "./componets/user/UserPages/ForgotPassword";
import ViewProfile from "./componets/user/UserPages/ViewProfile";
import DashBoardUser from "./componets/user/leftnav/DashBoardUser";
import ActivePlan from "./componets/user/Admin/ActivePlan";
import ActivePlanDetails from "./componets/user/Admin/ActivePlanDetails";
import AdminRegistration from "./componets/user/Admin/AdminRegistration";
import AdminDashboard from "./componets/user/Admin/AdminDashBoard";
import AdminLogin from "./componets/user/Admin/AdminLogin";
import AdminForgotPassword from "./componets/user/Admin/AdminForgotPassword";
import "../src/custom/Mainstyle.css";
import AdmininnerDashBoard from "./componets/user/Admin/AdmininnerDashBoard";
import AdminProfile from "./componets/user/Admin/AdminProfile";
import ManagerDashBoard from "./componets/user/Manager/ManagerDashBoard";
import ManagerLeftNav from "./componets/user/Manager/ManagerLeftNav";
import EmployeeDashBoard from "./componets/user/Employee/EmployeeDashBoard";
import EmployeeLeftNav from "./componets/user/Employee/EmployeeLeftNav";
import SettingPassword from "./componets/user/Admin/SettingPassword";
import ManagerProfile from "./componets/user/Manager/ManagerProfile";

import TrainingReact from "./componets/user/Training/TrainingReact";
import TrainingPython from "./componets/user/Training/TrainingPython";
import TrainingWebDesign from "./componets/user/Training/TrainingWebDesign";
import TrainingPHP from "./componets/user/Training/TrainingPHP";
import TrainingMySql from "./componets/user/Training/TrainingMySql";
import TrainingBootstrap from "./componets/user/Training/TrainingBootstrap";
import UIUXTraining from "./componets/user/Training/UIUXTraining";
import Communication from "./componets/user/GroomingClass/Communication";
import InterviewSkill from "./componets/user/GroomingClass/InterviewSkill";
import SelfConfidence from "./componets/user/GroomingClass/SelfConfidence";
import PublicSpeaking from "./componets/user/GroomingClass/PublicSpeaking";
import PdfTutorial from "./componets/user/StudyMaterial/PdfTutorial";
import VideoTutorial from "./componets/user/StudyMaterial/VideoTutorial";
import LiveClass from "./componets/user/StudyMaterial/LiveClass";
import Event from "./componets/user/Event/Event";
import PostJobGetView from "./componets/user/Employee/PostJobGetView";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// This component is rendered *inside* Router so useLocation() is safe here
const AppContent = () => {
  const location = useLocation();

  const hiddenPaths = new Set([
    "/AdmininnerDashBoard",
    "/AdminProfile",
    "/ManagerDashBoard",
    "/EmployeeDashboard",
    "/ManagerProfile",
    "/AdminDashboard"
  ]);
  const shouldHideNavbar = hiddenPaths.has(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserRegistration" element={<UserRegistration />} />
        <Route path="/LeftNav" element={<LeftNav />} />
        <Route path="/JobCard" element={<JobCard />} />
        <Route path="/PostJobCard/:job_id" element={<PostJobCard />} />
        <Route path="/SavedJobsList" element={<SavedJobsList />} />
        <Route path="/SavedJobCard" element={<SavedJobCard />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/ViewProfile" element={<ViewProfile />} />
        <Route path="/DashBoardUser" element={<DashBoardUser />} />
        <Route path="/AdminRegistration" element={<AdminRegistration />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminForgotPassword" element={<AdminForgotPassword />} />
        <Route path="/ActivePlan" element={<ActivePlan />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/JobDetails" element={<JobDetails />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ActivePlanDetails" element={<ActivePlanDetails />} />
        <Route path="/AdmininnerDashBoard" element={<AdmininnerDashBoard />} />
        <Route path="/ManagerDashBoard" element={<ManagerDashBoard />} />
        <Route path="/ManagerLeftNav" element={<ManagerLeftNav />} />
        <Route path="/EmployeeDashBoard" element={<EmployeeDashBoard />} />
        <Route path="/EmployeeLeftNav" element={<EmployeeLeftNav />} />
        <Route path="/SettingPassword" element={<SettingPassword />} />
        <Route path="/ManagerProfile" element={<ManagerProfile />} />
        <Route path="/TrainingReact" element={<TrainingReact />} />
        <Route path="/TrainingPython" element={<TrainingPython />} />
        <Route path="/TrainingWebDesign" element={<TrainingWebDesign />} />
        <Route path="/TrainingPHP" element={<TrainingPHP />} />
        <Route path="/TrainingMySql" element={<TrainingMySql />} />
        <Route path="/TrainingBootstrap" element={<TrainingBootstrap />} />
        <Route path="/UIUXTraining" element={<UIUXTraining />} />
        <Route path="/Communication" element={<Communication />}/>
        <Route path="/SelfConfidence" element={<SelfConfidence />}/>
        <Route path="/InterviewSkill" element={<InterviewSkill />}/>
        <Route path="/PublicSpeaking" element={<PublicSpeaking />}/>
        <Route path="/PdfTutorial" element={<PdfTutorial />}/>
        <Route path="/VideoTutorial" element={<VideoTutorial />}/>
        <Route path="/LiveClass" element={<LiveClass />}/>
        <Route path="/Event" element={<Event />}/>
        <Route path="/PostJobGetView" element={<PostJobGetView />}/>



        <Route path="/AdminProfile" element={<AdminProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
