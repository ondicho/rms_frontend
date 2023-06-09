import React from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

import { MdAccountCircle } from "react-icons/md";
import "./style.css";


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
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/bills">My Bills</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink href="/payments">Make Payments</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink href="/tickets">Raise Ticket</NavLink>
                </NavItem>
              </div>
              <div>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <MdAccountCircle />
                    &nbsp; username
                  </DropdownToggle>

                  <DropdownMenu end>
                    <DropdownItem>
                    <NavLink href="/profile">View Profile</NavLink>
                    </DropdownItem>
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
