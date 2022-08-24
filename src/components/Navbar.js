import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import "./style.css"

export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <>
        <Navbar className="color-nav" light expand="md">
          <NavbarBrand href="/">RMS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto parentNav" navbar>
              <div className="navigation">
              <NavItem>
                  <NavLink href="/">Bills</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/payments">Make Payments</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tickets">Raise Ticket</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </div>
              <div>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <MdAccountCircle />
                    &nbsp; username
                  </DropdownToggle>

                  <DropdownMenu end>
                    <DropdownItem>View Profile</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}
