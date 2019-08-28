import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar 
                    collapseOnSelect 
                    expand="lg" 
                    bg="dark" 
                    fixed="top"
                    variant="dark"
                >
                    <Navbar.Brand>
                        <Link to="/">
                            <img src="/assets/Logo.png" alt="CodeGangsters logo" style={{ height: '5vh'}} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav 
                            className="mr-auto"
                        >
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item>
                                    <NavLink href="#action/3.1">
                                        Action
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink href="#action/3.2">
                                        Another action
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink href="#action/3.3">
                                        Something
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <NavLink href="#action/3.4">
                                        Separated link
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}




{/*import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CustomNavbar.scss';

export default class CustomNavbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="spacer1" />
                <div className="navbar-brand">
                    <Link to="/">
                        <img src="/assets/Logo.png" alt="logo" className="brand-logo" />
                    </Link>
                    <h4 className="brand-heading">Code Gangsters</h4>
                </div>
                <div className="spacer2" />
                <div className="navbar-links">
                    <Link><button className="navbar-button">place</button></Link>
                    <Link><button className="navbar-button">place</button></Link>
                    <Link><button className="navbar-button">place</button></Link>
                </div>
                <div className="spacer3" />
                <div className="hamburger-menu">
                    <img src="" alt="hamburger-menu-icon" />
                </div>
            </div>
        )
    }
}
*/}







