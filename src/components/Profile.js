import {
  Card,
  CardBody,
  CardHeader,
  Row
} from "reactstrap";
import Footer from "./Footer";
import MyNavbar from "./Navbar";
import React, { useState } from "react";
import "./src/styles/style.css"
import "./src/styles/styles2.css"
import profile from "../images/profile.svg";


function Profile() {
  const [userDetails, setUserdetails] = useState("");



  return (
    <>
      <MyNavbar />

      <div className="landing profile">
        <div sm={6} className="landing-col services-main">
          {/* <Card className="profileCard">
          <CardHeader className="header"> <img src={profile} id="mainImage" /></CardHeader>
          <CardBody>
            <p>First Name :</p>
            <p>Last Name :</p>
            <p>Email :</p>
            <p>House Number :</p>
            <p>Block :</p>
            <p>Apartment :</p>
            <p>Rent :</p>
          </CardBody>
        </Card> */}
          <div className="clickable-card">
            <article>
              <div class="article-wrapper">
                <figure className="profile-card">
                <center><img src={profile} alt="" /></center>
                </figure>
                <div class="article-body">
                  <h2>User Profile</h2>
                  <p>First Name : Albert</p>
                  <p>Last Name : Ondicho</p>
                  <p>Email : ondicho53@gmail.com</p>
                  <p>House Number : 254759304049</p>
                  <p>Block : Haifa Court</p>
                  <p>Apartment : 37</p>
                  <p>Rent : Ksh 27000</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* <div sm={6} className="landing-col image">
          <img  src={profile} id="mainImage" />
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Profile;
