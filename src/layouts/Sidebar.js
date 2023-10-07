import logo from "../images/rent.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();

  const sidebarLinks = [
    {
      path: "/dashboard",
      title: "dashboard",
      icon: "fa fa-users",
    },
    // Add more sidebar links as needed
  ];

  const logoutUser = async () => {
    navigate("/login");
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="sidebar-Container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="sidebar-links-holder">
        <div className="sidebar-links">
          {sidebarLinks?.map((link, linkKey) => (
            <NavLink
              to={link?.path}
              className={`sidebar-link ${
                link?.path === activeLink ? "active" : ""
              }`}
              key={linkKey}
            >
              <div className="text">{link?.title}</div>
              <i className={link?.icon}></i>
            </NavLink>
          ))}
        </div>
        <div className="sidebar-links">
          <div onClick={logoutUser} className="sidebar-link">
            <div className="text">Logout</div>
            <i className="fa fa-lock"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
