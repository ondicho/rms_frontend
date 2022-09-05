import Cookies from "js-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bills from "./components/Bills";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import "./components/style.css";
import Tickets from "./components/Tickets";

Cookies.set("isLoggedIn", "true");
const isLoggedIn = Cookies.get("isLoggedIn");

function App() {
  console.log(isLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bills />} />
          <Route path="/payments" element={<Dashboard />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
