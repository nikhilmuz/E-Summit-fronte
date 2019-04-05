import React, { Component } from 'react'

import axios from 'axios'
import './style/landingpage.css'
import './style/bootstrap.min.css'
import Events from './events-landing'
import esummit from './img/esummit3.png'
import logoimage from './../logo.svg'
import { Row, Grid, Col,ButtonToolbar,Button } from 'react-bootstrap'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'
// import circleimage from './img/ellipse.png';
import './style/main-events.css'
import { Link } from 'react-router-dom'
import { HorizontalLine } from '../containers/speakers-landing'
import { API_DOMAIN } from './../Constants/config';


// import {mainevents} from '../actions/landingPage'

class LandingMainEventsPage extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      mappedMainEvents: []
    }
    this.Bplanincreasehorizontalline = this.Bplanincreasehorizontalline.bind(this);
    this.renderclick = this.renderclick.bind(this);
  }
  componentDidMount () {
    axios
            .get(API_DOMAIN+'/api/events/?highlighted=true')
            .then(response => {
              // console.log(response.data)
              this.setState({ mappedMainEvents: response.data })
              this.Bplanincreasehorizontalline()
              this.renderingviewmore()
            })
            .catch(error => {
              console.log(error)
            })  
  }
  renderclick(){
    window.href("")
  }
 
  Bplanincreasehorizontalline(){
   var x = document.getElementsByClassName('main-events-grid container');
     x[x.length-1].getElementsByClassName('horizontal-line-last')[0].style.maxWidth = "51vw" ;
     x[x.length-1].getElementsByClassName('vl')[0].style.height = "109px";
    
   }
  render () {
    return (
      <div>
        <Grid>
        <Row>
          <Col md={12} sm={12} lg={12}  className='heading-landing'>
                        highlighted events
              
        </Col>
        </Row>
        </Grid>
        {this.state.mappedMainEvents.map((event, key) => (
          <div key={key}>
            <Grid className='main-events-grid'>
              <MainEventTemp
                name={event.title}
                short={event.tagline}
                long={event.short_description}
                image={event.image}
                
                websiteUrl={event.website_url}
                end_point={event.end_point}
                            />
            </Grid>
          </div>
                ))}
      </div>
    )
  }
}

class MainEventTemp extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    var compname = this.props.name;
    var endpoint = this.props.end_point;
    var moredetails = <div />
    if (compname == 'B-PLAN COMPETITION') {
      moredetails = (
        <Row>
          <Col xs={12} md={12}><h3 className='cities-covering'>Competitions</h3></Col>
          <Col md={6}>
            <div className='card-cities-one'>

              <Grid>
                <Row>
                  <Col xs={8} xsOffset={2} className='no-padding'>
                    <center>
                        <span className='card-head'>CONTRIVE</span><br />
                        <span className='card-des'>THE BUSINESS MODEL COMPETITION</span>
                      </center>
                  </Col>
                </Row>
              </Grid>

            </div>
          </Col>
          <Col md={6}>
            <div className='card-cities-two'>
              <Grid>
                <Row>
                  <Col xs={8} xsOffset={2} className='no-padding'>
                    <center>
                        <span className='card-head'>IDEATHON</span><br />
                        <span className='card-des'>THE BUSINESS MODEL COMPETITION</span>
                      </center>
                  </Col>
                </Row>
              </Grid>
            </div>
          </Col>
        </Row>
            )
    } else if (compname == 'IGNITE') {
      <Row>
        <Col xs={12}><h3 className='cities-covering'>Cities Covering</h3></Col>

        <Col xs={12} md={5}>
          <div className='card-cities-one' />
        </Col>
        <Col xs={12} md={5}>
          <div className='card-cities-two' />
        </Col>
      </Row>
    }
    else if (compname == 'IDEA STORM') {
      <Grid fluid className='fluid-event-landing'>
      <Row className='main-event-row'>

        <Col md={1} sm={12} xs={12}>
          <div className='vl'/>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <div className='main-event'>
            <div className='main-event-heading'>
              <ul className="removeBullets"><li className='mainevent-li'><span className="landing-mainevent-name">{this.props.name}</span></li></ul>
            </div>
            <h3 className='main-event-short-description'>{this.props.short}</h3>
            <p className='main-event-long-description'>{this.props.long}</p>
            <h3 className='main-event-short-description'>{this.props.websiteUrl}</h3>
            <button
              type="button"
                              className="view-more"
                              // onClick method improve
              onClick={() => {
                window.location.href = '';
              }}
            >
              <span>VIEW MORE</span>
            </button>
          </div>
        </Col>
        <Col md={5} sm={12} xs={12}>
          <div>
            <img className='main-circle-image' src={this.props.image} />
          </div>
        </Col>
      </Row>
      {/* {moredetails} */}
      <HorizontalLine />
    </Grid>
    }
    if(this.props.end_point == "#"){
    return (
      <Grid fluid className='fluid-event-landing'>
        <Row className='main-event-row'>

          <Col md={1} sm={12} xs={12}>
            <div className='vl'/>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <div className='main-event'>
              <p className='main-event-heading'>
                <ul className="removeBullets"><li className='mainevent-li'><span className="landing-mainevent-name">{this.props.name}</span></li></ul>
              </p>
              <h3 className='main-event-short-description'>{this.props.short}</h3>
              <p className='main-event-long-description'>{this.props.long}</p>
              <h3 className='main-event-short-description'>{this.props.websiteUrl}</h3>
              <ButtonToolbar>
                  <Button bsStyle="primary" bsClass="button-view" disabled="true" className="viewmorebuttonlandingpage-landing" onClick={() => {
									window.location.href = this.props.end_point;
								}}>Coming Soon</Button>
                </ButtonToolbar>
              {/* <button
								type="button"
                                className="view-more"
                                // onClick method improve
								onClick={() => {
									window.location.href = '';
								}}
							>
								<span>VIEW MORE</span>
							</button> */}
            </div>
          </Col>
          <Col md={5} sm={12} xs={12}>
            <div>
              <img className='main-circle-image' src={this.props.image} />
            </div>
          </Col>
        </Row>
        {/* {moredetails} */}
        <HorizontalLine />
      </Grid>
    )}
  
    return (

        <Grid fluid className='fluid-event-landing'>
          <Row className='main-event-row'>
  
            <Col md={1} sm={12} xs={12}>
              <div className='vl'/>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <div className='main-event'>
                <p className='main-event-heading'>
                  <ul className="removeBullets"><li className='mainevent-li'><span className="landing-mainevent-name">{this.props.name}</span></li></ul>
                </p>
                <h3 className='main-event-short-description'>{this.props.short}</h3>
                <p className='main-event-long-description'>{this.props.long}</p>
                <h3 className='main-event-short-description'>{this.props.websiteUrl}</h3>
                <ButtonToolbar>
                  <Button bsStyle="primary" bsClass="button-view" className="viewmorebuttonlandingpage-landing" onClick={() => {
                  
                window.open(this.props.end_point,'_blank');
              
								}}>View More</Button>
                </ButtonToolbar>
                {/* <button
                  type="button"
                                  className="view-more"
                                  // onClick method improve
                  onClick={() => {
                    window.location.href = '';
                  }}
                >
                  <span>VIEW MORE</span>
                </button> */}
              </div>
            </Col>
            <Col md={5} sm={12} xs={12}>
              <div>
                <img className='main-circle-image' src={this.props.image} />
              </div>
            </Col>
          </Row>
          {/* {moredetails} */}
          <HorizontalLine />
        </Grid>
      
    )

  }
}

class Competitions extends Component {
  render () {
    return (
      <Grid fluid className='fluid-event-landing'>
        <h3 className='competitions'>Competitions</h3>
        <Row>
          <Col xs={12} md={5}>
            <div className='card-competition-one' />
          </Col>
          <Col xs={12} md={5}>
            <div className='card-competition-two' />
          </Col>
        </Row>
      </Grid>
    )
  }
}

class CitiesCovering extends Component {
  render () {
    return (
      <Grid fluid className='fluid-event-landing'>
        <h3 className='cities-covering'>Cities covering</h3>
        <Row>
          <Col xs={12} md={5}>
            <div className='card-cities-one' />
          </Col>
          <Col xs={12} md={2}>
            <div className='card-cities-two' />
          </Col>
          <Col xs={12} md={5}>
            <div className='card-cities-three' />
          </Col>
        </Row>
      </Grid>
    )
  }
}

class SmallBoxRegister extends Component {
  render () {
    return (
      <div className='smallboxregister'>
        <Link to='/login'>
          <button type='button' className='btnLB-other'>
            <span className='insidedivbutton'>REGISTER NOW</span>
          </button>
        </Link>

      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   mainevents: bindActionCreators(mainevents, dispatch),
// })

export default LandingMainEventsPage
