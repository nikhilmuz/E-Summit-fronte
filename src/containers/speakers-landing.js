import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './style/speakers-landing.css';
import { mainspeakers } from '../actions/landingPage';
import axios from 'axios';
import { Route } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import './../components/landingpage';
import { API_DOMAIN } from '../Constants/config';



class LandingMainSpeakers extends Component {
	render() {
		return (
			<div className="speakers-landing-page">
				<LandingSpeakers />
				<SmallBoxRegister />
			</div>
		);
	}
}

class LandingSpeakers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mappedSpeakers: []
		};
	}

	componentDidMount() {
		axios
			.get(API_DOMAIN + '/api/speakers?previous=true')
			.then((response) => {
				// console.log(response.data);
				this.setState({ mappedSpeakers: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		var speakers = this.state.mappedSpeakers.map((speaker) => (

			<Col sm={12} md={3} lg={3}>
				<LandingSpeakerTile name={speaker.name} post={speaker.designation} image={speaker.profile_image} />
			</Col>
		));
		return (
			<Grid>
				<Row>
					<Col md={12} sm={12} lg={12} className="heading-landing">
						esummit'18 speakers
					</Col>
				</Row>
				<Row>{speakers}</Row>
			</Grid>
		);
	}
}

class LandingSpeakerTile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			
				<div className="speaker-tile-landing">
					<img src={this.props.image} alt={this.props.name} className="speaker-image-landing" />
					<br />
					<p className="speaker-name-landing">{this.props.name} </p>
					<p className="speaker-post-landing">{this.props.post} </p>
				</div>
			
		);
	}
}

export class HorizontalLine extends Component {
	render() {
		return <div className="horizontal-line-last" />;
	}
}

class SmallBoxRegister extends Component {
	render() {
		return (
			<section
				ref={(section) => {
					this.Violet = section;
				}}
			>
				<Grid fluid={true} className="smallboxregister">
					<Row className="primaryfooter-landing">
						<Col xs={6} md={6}>
							<div>
								<p className="aspire-code">Be what you aspire for</p>
							</div>
						</Col>
						<Col xs={6} md={6}>
							<div className="landingfooterbutton">
								<Route
									render={({ history }) => (
										<button
											type="button"
											className="btnLB-speaker"
											onClick={() => {
												history.push('/login');
												localStorage.setItem('ca', false);
											}}
										>
											Register Now
										</button>
									)}
								/>
							</div>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}

export default LandingMainSpeakers;
