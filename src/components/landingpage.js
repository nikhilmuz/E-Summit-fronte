import React, { Component } from 'react';
import './style/landingpage.css';
import Events from './events-landing';
import LanndingMainEventsPage from './main-events';
import esummit from './img/esummit3.png';
import logoimage from './../logo.svg';
import { Row, Grid, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import LandingMainSpeakers from './../containers/speakers-landing'
import circleimage from './img/userphoto.png';
import UserDashboardPage from './../containers/user-dashboard'
import { Link, Route } from 'react-router-dom'
import FooterLanding from './Footer/footer-landingpage'
import scrollToComponent from 'react-scroll-to-component';
import zenscroll from 'zenscroll'
import Scrollchor from 'react-scrollchor'


class Landingpage extends Component {
	constructor(props) {
		super(props);



	}

	render() {
		return (

			<div className="landing-page-esummit">
				<LandingNavBar />
				<LandingDiv />
				<Events />
				<LanndingMainEventsPage />
				<LandingMainSpeakers />
				<FooterLanding />
			</div>

		);
	}
}

class LandingNavBar extends Component {

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
			if (document.getElementById('landing-register')) {
				document.getElementById('landing-register').style.display = "none";
			}

			if (document.getElementById('landing-dashboard')) {
				document.getElementById('landing-dashboard').style.display = "block";
			}
		}
		else {
			if (document.getElementById('landing-register')) {
				document.getElementById('landing-register').style.display = "block";
			}

			if (document.getElementById('landing-dashboard')) {
				document.getElementById('landing-dashboard').style.display = "none";
			}
		}
	};
	render() {

		var footer = document.getElementById('landingFooter')
		console.log(footer)
		return (
			<Navbar fluid={true} inverse collapseOnSelect className="Navbar-top-landing">
				<Navbar.Collapse>
					<Nav pullRight className="Navbar-landing">
						<NavItem eventKey={1}>
							<Scrollchor to="landingFooter" className='scrollchor'>CONTACT US</Scrollchor>
						</NavItem>
						<NavItem eventKey={2} href="/sip">
							STARTUP INTERNSHIP PROGRAM
						</NavItem>
						<NavItem eventKey={2} href="/partner">
							PARTNERS
						</NavItem>
						<NavItem eventKey={1} href="/login" id="landing-register" className="landing-register" onClick={() => localStorage.setItem('ca', false)}>
							REGISTER
						</NavItem>
						<NavItem eventKey={1} href="/dashboard" id="landing-dashboard" className="landing-dashboard">
							DASHBOARD
						</NavItem>

						<NavItem eventKey={5} href="#">
						<img src='/images/home-button-pink.svg' height='25'/>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		);
	}
}

//LandingDiv
class LandingDiv extends Component {
	// constructor(props) {
	//   super(props);
	//   this.state = {};

	// }
	render() {
		return (
			<Grid fluid={true} className="fluid-landing">
				<Row>
					<Col xs={6} md={5} sm={5}>
						<div className="firstchild">
							<p className="roorkee-represents">IIT Roorkee presents</p>
							<p className="esummit">
								{' '}
								esummit<br />
								2018
							</p>
							<br />
							<br />
							<Route render={({ history }) => (
								<button
									type="button"
									className="btnLB btnLB2"
									onClick={() => {
										history.push('/login')
										localStorage.setItem('ca', false)
									}}
								>
									<span className="insidetextbtn">REGISTER NOW</span>
								</button>
							)} />
						</div>
					</Col>
					<Col xs={6} md={6} sm={6}>
						<div>
							<img className="main-summit-image" src={logoimage} />
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}







export default Landingpage;
///export default withRouter(Landingpage);
