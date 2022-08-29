import Cookies from "js-cookie";
import Rent from "../images/Rent.jpg";
import "../components/style.css";
import MyNavbar from "./Navbar";
import Footer from "./Footer";

function Bills() {
  Cookies.set("isLoggedIn", "false");
  const isLoggedIn = Cookies.get("isLoggedIn");
  console.log(isLoggedIn);
  return (
    <>
      <MyNavbar />
      <img className="bills" src={Rent} />
      <Footer />
    </>
  );
}

export default Bills;
