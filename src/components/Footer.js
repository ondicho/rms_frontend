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
                  <li>Home</li>
                  <li>Make Payments</li>
                  <li>Raise Ticket</li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h4>Quick Links</h4>
                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>Make Payments</li>
                  <li>Raise Ticket</li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h4>Quick Links</h4>
                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>Make Payments</li>
                  <li>Raise Ticket</li>
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
    background: var(--mainLight);
    padding-top: 3rem;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
`;
