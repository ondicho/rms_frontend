import React from "react";
import styled from "styled-components";
import "../src/styles/App.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <FooterContainer className="main-footer">
        <div className="footer-middle">
          <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  
                  <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                  <StyledLink to="/bills">Make Payments</StyledLink>
                </li>
                <li>
                  <StyledLink to="/tickets">Raise Ticket</StyledLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} 
              </p>
            </div>
          </div>
        </div>
      </FooterContainer>
    </>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--fiery-rose);
    padding-top: 3rem;
    color: #ffffff;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
    
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ff5733; /* Change to your preferred hover color */
  }
`;