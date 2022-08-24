import ReactDOM from "react-dom/client";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tickets from "./components/Tickets";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <MyNavbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/payments" element={ <Dashboard />}/>
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
