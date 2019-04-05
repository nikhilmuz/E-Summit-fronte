import React, { Component } from 'react'
import { Row, Grid, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor'
import './workshop.css'


export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleLoad = this.handleLoad.bind(this);
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    handleIdChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePwdChange(e) {
        this.setState({ password: e.target.value });
    }

    handleLoad() {
        var token = "";
        var name = "token=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                token = c.substring(name.length, c.length);
            }
        }
        if (!(token == "")) {
            document.getElementById('landing-register').style.display = "none";
            document.getElementById('landing-dashboard').style.display = "block";

        }
        else {
            document.getElementById('landing-register').style.display = "block";
            document.getElementById('landing-dashboard').style.display = "none";
        }
    };
    render() {
        return (
            <Navbar fluid={true} inverse collapseOnSelect className="Navbar-top-events">
                <Navbar.Collapse>
                    <Nav pullRight className="Navbar-events">
                        <NavItem eventKey={1}>
                            <Scrollchor to="landingFooter" className='scrollchor'>CONTACT US</Scrollchor>
                        </NavItem>
                        <NavItem eventKey={2} href="./ca">
                            CAMPUS AMBASSADOR
						</NavItem>
                        <NavItem eventKey={1} href="./login" id="landing-register" className="landing-register" onClick={() => localStorage.setItem('ca', false)}>
                            REGISTER
						</NavItem>
                        <NavItem eventKey={1} href="./dashboard" id="landing-dashboard" className="landing-dashboard">
                            DASHBOARD
						</NavItem>

                        <NavItem eventKey={5} href="#">
                            <Glyphicon glyph="align-justify" />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}
