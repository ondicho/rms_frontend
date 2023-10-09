import Cookies from "js-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import "./components/style.css";
import Tickets from "./components/Tickets";
import Bills from "./components/Bills";
import Receipt from "./components/Receipt";
import LandLordDashboard from "./components/LandlordDashboard";
import TenantDashboard from "./components/TenantDashoard";
import RegisterProperty from "./pages/landlord/RegisterProperty.js";
import Container from "./layouts/Container";
import 'font-awesome/css/font-awesome.min.css';
import UpdatedRegisterProperty from "./pages/landlord/UpdatedRegisterProperty";



Cookies.set("isLoggedIn", "true");
const isLoggedIn = Cookies.get("isLoggedIn");

function App() {
  console.log(isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payments" element={<Dashboard />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/receipts" element={<Receipt />} />
          <Route path="/landlord+dashboard" element={<LandLordDashboard />} />
          <Route path="/tenant+dashboard" element={<TenantDashboard />} />
          <Route path="/dashboard" element={<Container Page={RegisterProperty} />}/>
          <Route path="/new-dashboard" element={<Container Page={UpdatedRegisterProperty} />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
