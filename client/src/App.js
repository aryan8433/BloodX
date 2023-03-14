import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard.js";
import {BrowserRouter, BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import HospitalLogin from "./components/HospitalLogin";
import UserLogin from "./components/UserLogin";
import UserSignup from "./components/UserSignup";
import Appointments from "./components/Appointments";
import UserDashboard from "./components/UserDashboard";
import HospitalSignup from "./components/HospitalSignup";
import HospitalDashboard from "./components/HospitalDashboard";
import BloodRequests from "./components/BloodRequests";
import Donors from "./components/Donors";
import DonorList from "./components/DonorList";
import HospitalList from "./components/HospitalList";
import AppointmentsList from "./components/AppointmentsList";
import Stock from "./components/Stock";
import BloodGroup from "./components/BloodGroup";
import MainDonor from "./components/MainDonor";


function App() {
  return (
    <>
      <Router>
        {/* <Header/> */}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/userlogin" element={<UserLogin />} />
          <Route exact path="/hospitallogin" element={<HospitalLogin />} />
          <Route exact path="/admindashboard" element={<AdminDashboard />} />
          <Route exact path="/usersignup" element={<UserSignup />} />
          <Route exact path="/appointments" element={<Appointments />} />
          <Route exact path="/userdashboard" element={<UserDashboard/>} />
          <Route exact path="/hospitalsignup" element={<HospitalSignup/>} />
          <Route exact path="/bloodrequests" element={<BloodRequests/>} />
          <Route exact path="/donorlist" element={<DonorList/>} />
          <Route exact path="/hospitallist" element={<HospitalList/>} />
          <Route exact path="/appntlist" element={<AppointmentsList/>} />
          <Route exact path="/stock" element={<Stock/>} />
          <Route exact path="/bg" element={<BloodGroup/>} />
          <Route exact path="/donors" element={<Donors/>} />
          <Route exact path="/maindonor" element={<MainDonor/>} />
          <Route
            exact
            path="/hospitaldashboard"
            element={<HospitalDashboard />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
