import React from "react";
import styled from "styled-components";
import "../App.css";

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
                  <StyledLink to="/payments">Make Payments</StyledLink>
                </li>
                <li>
                  <StyledLink to="/tickets">Raise Ticket</StyledLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Copyright : Albert Ondicho
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
