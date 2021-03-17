import React   from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, NavDropdown } from "react-bootstrap";
import logo from '../logo.jpg';
import  "./MainNav.css"

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOpas: false
    };
  }
    

  render() {

    return (
      <Navbar collapseOnSelect expand="lg" className="mainnav">
        <Navbar.Brand href="/">Etusivu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavDropdown title="Opas" id="basic-nav-dropdown">
            <NavDropdown.Item href="/opas">Työharjoittelu korkeakouluissa</NavDropdown.Item>
            <NavDropdown.Item href="/opas2">Harjoitteluohjaaminen</NavDropdown.Item>
            <NavDropdown.Item href="/opas3">Mitä harjoitteluohjaus vaatii työorganisaatiolta</NavDropdown.Item>
            <NavDropdown.Item href="/opas4">Harjoittelun hyödyt työorganisaatiolle</NavDropdown.Item>
            <NavDropdown.Item href="/opas5">Olemassa oleva tuki työorganisaatioille</NavDropdown.Item>
          </NavDropdown>
          <Nav className="mr-auto">
            <Nav.Link href="asiakkaat">Asiakkaamme rekrytoivat</Nav.Link>
            <Nav.Link href="lomakeinfo">Laadi perehdytysopas</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item><img alt="" src={logo} height="80px" /></Nav.Item>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
