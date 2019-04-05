import React, { Component } from 'react';
import './signupform.css';
import './../style/bootstrap.min.css';
import esummit from './../img/Group 2.1.svg';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import Select from 'react-select';
import colleges from './../colleges.json';
import { Creatable } from 'react-select';
import warning from './../img/Group 3.svg';
import './Forms';
import $ from 'jquery';
import validator from 'react-validation';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import './progressbar.js';
import axios from 'axios';
import { API_DOMAIN } from '../../Constants/config';

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

const required = (value) => {
	if (!value.toString().trim().length) {
		return (
			<div class="error">
				<img src={warning} className="errorimg" />
			</div>
		);
	}
};

const state = (value) => {
	if (!value.toString().trim().length) {
		return (
			<div class="error">
				<img src={warning} className="errorimg" />
			</div>
		);
	}
};

const clg = (value) => {
	if (!value.toString().trim().length) {
		return (
			<div class="error">
				<img src={warning} className="errorimg" />
			</div>
		);
	}
};

const fn = (value) => {
	if (!value.toString().trim().length) {
		return (
			<div class="errorfn">
				<img src={warning} className="errorimgfn" />
			</div>
		);
	}
};

const email = (value) => {
	if (!validateEmail(value) || !value.toString().trim().length) {
		return (
			<div class="error">
				<img src={warning} className="errorimg" />
			</div>
		);
	} else {
		document.getElementById('email').style.border = '1.33px solid #1E1E1E';
	}
};

const phone = (value) => {
	if (!(value > 1000000000 && value < 9999999999) || !value.toString().trim().length) {
		return (
			<div class="error">
				<img src={warning} className="errorimg" />
			</div>
		);
	}
};

export default class SignUpForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: localStorage.getItem('name') ? localStorage.getItem('name') : '',
			lastName: localStorage.getItem('lname') ? localStorage.getItem('lname') : '',
			phoneNumber: '',
			email: localStorage.getItem('email') ? localStorage.getItem('email') : '',
			password: '',
			state: '',
			college: '',
			reffer: '',
			base_url: 'https://summe.us-east-2.elasticbeanstalk.com'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handlefirstNameChange = this.handlefirstNameChange.bind(this);
		this.handlelastNameChange = this.handlelastNameChange.bind(this);
		this.handleemailChange = this.handleemailChange.bind(this);
		this.handlepasswordChange = this.handlepasswordChange.bind(this);
		this.handlephoneNumberChange = this.handlephoneNumberChange.bind(this);
		this.handlestateChange = this.handlestateChange.bind(this);
		this.handlerefferChange = this.handlerefferChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLoad = this.handleLoad.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	handleKeyPress = (event) => {
		if (event.key == 'Enter') {
			document.getElementById('mybtn-signup').click();
		}
	};

	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
	}

	clickSelect() {
		document.getElementById('signup-Select-click').focus();
	}

	handleLoad() {
		var token = '';
		var name = 'token=';
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
		if (!(token == '')) {
			this.props.history.push = '/dashboard';
		}
	}

	getParameterByName = (name, url) => {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	};

	handleSubmit() {
		document.getElementById('mydiv').style.display = 'block';
		var payload = {
			name: this.state.firstName + ' ' + this.state.lastName,
			email: this.state.email,
			password: this.state.password,
			phone: this.state.phoneNumber,
			state: this.state.state,
			college: this.state.college.value,
			is_ca_applicant: localStorage.getItem('ca') ? localStorage.getItem('ca') : false,
			user_type: 'ATT',
			invite_url: this.getParameterByName('ref'),
			referer: this.state.reffer
		};

		console.log(payload);
		axios
			.post(API_DOMAIN + '/user/signup', payload)
			.then((res) => {
				console.log(res.data.token);
				var d = new Date();
				d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
				localStorage.setItem('user', res.data);
				document.cookie = 'token=' + res.data.token + ';expires=' + d.toUTCString() + ';path=/';
				if (localStorage.getItem('eventApply')) {
					var address = API_DOMAIN + '/event/' + localStorage.getItem('eventApply') + '/apply';
					axios
						.get(address, {
							headers: {
								Authorization: 'Token ' + this.getCookie('token')
							}
						})
						.then((response) => {
							console.log(response);
							// window.open(this.state.registration_url, '_blank');
							window.location.href = '/dashboard';
							localStorage.setItem('eventApply', null);
						})
						.catch((error) => {
							console.log(error);
							window.location.href = '/dashboard';

							// window.open(this.state.registration_url, '_blank');
						});
				} else {
					window.location.href = '/dashboard';
				}
			})
			.catch((err) => {
				console.log(err);
				document.getElementById('status').innerHTML = 'Error!';
				document.getElementById('mydiv').style.display = 'none';
			});
	}

	handleChange = (selectedOption) => {
		this.setState({ college: selectedOption });
	};
	handlefirstNameChange(e) {
		this.setState({ firstName: e.target.value });
	}
	handlelastNameChange(e) {
		this.setState({ lastName: e.target.value });
	}
	handleemailChange(e) {
		this.setState({ email: e.target.value });
	}
	handlerefferChange(e) {
		this.setState({ reffer: e.target.value });
	}
	handlepasswordChange(e) {
		this.setState({ password: e.target.value });
	}
	handlephoneNumberChange(e) {
		this.setState({ phoneNumber: e.target.value });
	}
	handlestateChange(e) {
		this.setState({ state: e.target.value });
	}

	handleLoad() {
		var token = '';
		var name = 'token=';
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
		if (!(token == '')) {
			window.location.href = '/dashboard';
		}
	}

	render() {
		this.handleLoad;
		return (
			<Grid fluid="container-fluid" className="signup-container">
				<Row className="show-grid">
					<div id="mydiv" />
					<Col xs={12} sm={12} md={12} lg={5} xsHidden smHidden>
						<div className="div1">
							<img src={esummit} />
						</div>
					</Col>
					<Col xs={12} sm={12} md={12} lg={7}>
						<div>
							<ul className="loginNav">
								<li className="active">
									<a href="/login">Login</a>
								</li>
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="/ca#contact">Contact Us</a>
								</li>
							</ul>

							<div className="login-input1-signup login-input-signup-signup">
								<Form
									ref={(c) => {
										this.form = c;
									}}
									className="login-input-signupform signup-input"
								>
									<p className="signup-text">Sign up</p>
									<br />
									<br />

									<div className="name-signupform">
										{' '}
										<Input
											validations={[ fn ]}
											placeholder="First Name"
											required
											name="firstName"
											value={this.state.firstName}
											onChange={this.handlefirstNameChange}
											id="fn"
											onKeyPress={this.handleKeyPress}
										/>
										<Input
											placeholder="Last Name"
											required
											value={this.state.lastName}
											name="lastName"
											onChange={this.handlelastNameChange}
											id="ln"
											onKeyPress={this.handleKeyPress}
										/>
									</div>
									<div className="email-signupform">
										<Input
											validations={[ email ]}
											placeholder="Email Address"
											type="email"
											required
											className="form-control"
											name="email"
											value={this.state.email}
											onChange={this.handleemailChange}
											id="email"
											onKeyPress={this.handleKeyPress}
										/>
										<img src={warning} id="warning-signup3" />
									</div>
									<div className="phone-signupform">
										<Input
											validations={[ phone ]}
											type="number"
											placeholder="Phone Number"
											required
											name="phoneNumber"
											value={this.state.phoneNumber}
											onChange={this.handlephoneNumberChange}
											id="phone"
											onKeyPress={this.handleKeyPress}
										/>{' '}
										<img src={warning} id="warning-signup2" />
									</div>
									<div className="signup-select-select">
										<select
											id="state"
											validations={[ state ]}
											className="selectstate select1-signup"
											onChange={this.handlestateChange}
											onKeyPress={this.handleKeyPress}
										>
											<option>Select State</option>
											<option value="Andhra Pradesh">Andhra Pradesh</option>
											<option value="Assam">Assam</option>
											<option value="Bihar">Bihar</option>
											<option value="Chattisgarh">Chattisgarh</option>
											<option value="Delhi">Delhi</option>
											<option value="Goa">Goa</option>
											<option value="Gujarat">Gujarat</option>
											<option value="Haryana">Haryana</option>
											<option value="Himachal Pradesh">Himachal Pradesh</option>
											<option value="Jammu & Kashmir">Jammu & Kashmir</option>
											<option value="Jharkhand">Jharkhand</option>
											<option value="Karnataka">Karnataka</option>
											<option value="Kerala">Kerala</option>
											<option value="Madhya Pradesh">Madhya Pradesh</option>
											<option value="Maharashtra">Maharashtra</option>
											<option value="Manipur">Manipur</option>
											<option value="Nagaland">Nagaland</option>
											<option value="Orrisa">Orrisa</option>
											<option value="Punjab">Punjab</option>
											<option value="Rajasthan">Rajasthan</option>
											<option value="Tamil Nadu">Tamil Nadu</option>
											<option value="Telengana">Telengana</option>
											<option value="Tripura">Tripura</option>
											<option value="Uttar Pradesh">Uttar Pradesh</option>
											<option value="West Bengal">West Bengal</option>
											<option value="Uttarakhand">Uttarakhand</option>
										</select>
									</div>

									<Select.Creatable
										onKeyPress={this.handleKeyPress}
										validations={[ clg ]}
										id="clg"
										className="clgselect"
										onChange={this.handleChange}
										options={colleges[this.state.state]}
										clearable={false}
										value={this.state.college}
										searchable={true}
										required={true}
										placeholder="College"
										autocomplete="off"
									/>
									<br />
									<div className="reffer-signupform">
										<select
											onKeyPress={this.handleKeyPress}
											placeholder="Where do you get to know us?"
											className="form-control select-signup"
											name="reffer"
											value={this.state.reffer}
											onChange={this.handlerefferChange}
											id="signup-reffer"
										>
											<option>Where do you get to know us?</option>
											<option value="FRD">Friend</option>
											<option value="INT">Internshala</option>
											<option value="MAL">E-mail</option>
											<option value="SOC">Social Media</option>
											<option value="OTR">Others</option>
										</select>
										<img src={warning} id="warning-signup5" />
									</div>
									<br />
									<div className="password-signupform">
										<input
											placeholder="Password"
											type="password"
											className="form-control"
											name="password"
											value={this.state.password}
											onChange={this.handlepasswordChange}
											id="signup-password"
											onKeyPress={this.handleKeyPress}
										/>{' '}
										<img src={warning} id="warning-signup4" />
									</div>
									<br />
									<Button
										className="button-signupform"
										type="button"
										style={{ backgroundColor: '#F96F6F' }}
										disabled={!this.state.formValid}
										onClick={this.handleSubmit}
										id="mybtn-signup"
									>
										<span className="form-span">Continue</span>
									</Button>
									<div className="login-sidetext-container2">
										<p className="login-sidetext3">
											Already have an account? <a href="/login">Login</a>
										</p>
									</div>
									<div className="panel panel-default">
										<div id="status" />
									</div>
								</Form>
							</div>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}
