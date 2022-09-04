import Cookies from "js-cookie";
import Rent from "../images/Rent.jpg";
import "../components/style.css";
import MyNavbar from "./Navbar";
import Footer from "./Footer";
import Water from "../images/water-tap.png";
import Elec from "../images/idea.png";
import rent from "../images/rent.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function Bills() {
  Cookies.set("isLoggedIn", "false");
  const isLoggedIn = Cookies.get("isLoggedIn");
  console.log(isLoggedIn);
  return (
    <>
      <MyNavbar />
      {/* <img className="bills" src={Rent} /> */}

      <div className="landing">
        <div sm={6} className="landing-col services-main">
          <div className="services-container">
            <div className="services">
              <img src={rent} alt="rent" height="150px" />
            </div>
            <div className=" services">
              <img src={Water} alt="water" height="150px" />
            </div>
            <div className="services">
              <img src={Elec} alt="electricity" height="150px" />
            </div>
          </div>
          <div className="services-description">
            <p> Pay rent and other bills at the click of a Button.</p>
          </div>
          <div className="services-description">
            <Link to="login">
              <Button className="services-button">Login</Button>
            </Link>
            <Link to="register">
              <Button className="services-button">Sign Up</Button>
            </Link>
          </div>
        </div>
        <div sm={6} className="landing-col image">
          <img className="mainImage" src={Rent} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Bills;
