import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './style/events-landing.css';
import workshops from './img/workshops.svg';
import networkingevents from './img/networkingevents.svg';
import competitions from './img/competitions.svg';
import knowledgesessions from './img/knowledgesessions.svg';
import mainevents from './img/Asset7.png'
import zonals from './img/Asset6.png'

export default class Events extends Component {
	render() {
		return (
			<Grid>

				<Row className="container-events2">
					<Col md={12} sm={12} lg={12} className="heading-landing">
						explore
					</Col>
					<Col md={6} sm={10} lg={4} >
						<Link to='/workshop'>
							<div className="event-cards-landing right-landing">

								<span className="subhead-events-landing">workshops</span>

								<img className="image-workshops" src={workshops} />
								<span className="explore-events-landing">EXPLORE</span>

								<img className="card-circles-landing" src={'./images/circles-redblack.svg'} />

							</div>
						</Link>
					</Col>
					<Col md={6} sm={10} lg={4}>
						<Link to='/networking'>
							<div className="event-cards-landing">
								<span className="subhead-events-landing">
									networking
							</span>
								<img className="image-workshops" src={networkingevents} />
								<span className="explore-events-landing">EXPLORE</span>
								<img className="card-circles-landing" src={'./images/circles-blueblack.svg'} />
							</div>
						</Link>
					</Col>
					<Col md={6} sm={10} lg={4}>
						<Link to='/competition'>
							<div className="event-cards-landing right-landing">
								<span>competitions</span>
								<img className="image-workshops" src={competitions} />
								<span className="explore-events-landing">EXPLORE</span>
								<img className="card-circles-landing" src={'./images/circles-greenblack.svg'} />
							</div>
						</Link>
					</Col>
					<Col md={6} sm={10} lg={4}>
						<Link to='/knowledge'>
							<div className="event-cards-landing">
								<span>
									knowledge sessions
							</span>
								<img className="image-workshops" src={knowledgesessions} />
								<span className="explore-events-landing">EXPLORE</span>
								<img className="card-circles-landing" src={'./images/circles-yellowblack.svg'} />
							</div>
						</Link>
					</Col>
					<Col md={6} sm={10} lg={4}>
						<Link to='/events'>
							<div className="event-cards-landing workshops-mainevent">
								<span>
									main events
							</span>
								<img className="image-workshops image-workshops-mainevent" src={mainevents} />
								<span className="explore-events-landing">EXPLORE</span>
								<img className="card-circles-landing" src={'./images/circles-redblack.svg'} />
							</div>
						</Link>
					</Col>
					<Col md={6} sm={10} lg={4}>
						<Link to='/zonals'>
							<div className="event-cards-landing">
								<span>
									zonals
							</span>
								<img className="image-workshops image-workshops-zonals" src={zonals} />
								<span className="explore-events-landing">EXPLORE</span>
								<img className="card-circles-landing" src={'./images/circles-yellowblack.svg'} />
							</div>
						</Link>
					</Col>
				</Row>
			</Grid>
		);
	}
}
