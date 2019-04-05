
import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor'
import './partner.css'
// import { a } from 'react-router-dom'
import partner1 from '../img/13892155_536335546576839_2526341228906101389_n.jpg'
import partner2 from '../img/Blockchained+India.png'
import partner3 from '../img/d2c_logo_50.png'
import partner4 from '../img/Dainik Bhaskar.png'
import partner5 from '../img/dribbble-logo.png'
import partner6 from '../img/enactus iitr.jpg'
import partner7 from '../img/Everyday Innovators.JPG'
import partner8 from '../img/F6S.jpg'
import partner9 from '../img/festPav.png'
import partner10 from '../img/fosun capital.png'
import partner11 from '../img/logo final.jpg'
import partner12 from '../img/OhCampus Logo.png'
import partner13 from '../img/Outreach and App Partner .png'
import partner14 from '../img/protex.jpg'
import partner15 from '../img/SN PNG Transparent Large.png'
import partner16 from '../img/Tbs planet.png'
import partner17 from '../img/Travel Partner.png'
import partner18 from '../img/waterbridge ventures.jpg'
import partnerMonte from '../img/montecarlo.png'
import partnerSattviko from '../img/satviko.png'
import partnerInc42 from '../img/inc42.png'
import partnerMonkey from '../img/monkeyTeller.png'
import partnerCC from '../img/cc.jpg'
import FooterLanding from '../Footer/footer-landingpage'





import { Row, Grid, Col, Navbar, Nav, NavItem } from 'react-bootstrap'
export default class Partners extends React.Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <div>
                <Navbar fluid={true} inverse collapseOnSelect className="Navbar-top-landing">
                    <Navbar.Collapse>
                        <Nav pullRight className="Navbar-landing">
                           
                            <NavItem eventKey={2} href="/ca">
                                CAMPUS AMBASSADOR
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                PARTNERS
                                </NavItem>
                            <NavItem eventKey={1} href="/login" id="landing-register" className="landing-register" onClick={() => localStorage.setItem('ca', false)}>
                                REGISTER
                                </NavItem>
                            <NavItem eventKey={1} href="/dashboard" id="landing-dashboard" className="landing-dashboard">
                                DASHBOARD
                                </NavItem>

                            <NavItem eventKey={5} href="#">
                                <img src='/images/home-button-pink.svg' height='25' />
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                
                
                <Grid>

                    <Row className="container-events2">
                        <Col md={12} sm={12} lg={12} className="heading-landing">
                            partners
                        </Col>
                        <Col md={3} sm={10} lg={3} >
                            <a href='#'>
                                <div className="event-cards-landing-partner right-landing">

                                    <span className="subhead-events-landing subhead-events-landing-partner">The Journey Hub</span>

                                    <img className="image-workshops-partner" src={partner1}/>
                                    <span className="explore-events-landing-partner">Associate Partner</span>

                                    

                                </div>
                            </a>
                        </Col>
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://blockchainedindia.com/' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                      Blockchained India
                                    </span>
                                    <img className="image-workshops-partner" src={partner2}/>
                                    <span className="explore-events-landing-partner">Workshop Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                           <Col md={3} sm={10} lg={3}>
                            <a href='https://inc42.com/' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                       Inc 42
                                    </span>
                                    <img className="image-workshops-partner" src={partnerInc42}/>
                                    <span className="explore-events-landing-partner">Marketing Partner</span>
                                   
                                </div>
                            </a>
                        </Col>

                        <Col md={3} sm={10} lg={3}>
                            <a href='http://dribbble.com/' target='_blank'>
                                <div className="event-cards-landing-partner workshops-mainevent">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                      Dribble
                                    </span>
                                    <img className="image-workshops-partner image-workshops-mainevent" src={partner5}/>
                                    <span className="explore-events-landing-partner">Event Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                         <Col md={3} sm={10} lg={3}>
                            <a href='https://www.sattviko.com' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                       Sattviko
                                    </span>
                                    <img className="image-workshops-partner" src={partnerSattviko}/>
                                    <span className="explore-events-landing-partner">Food Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://www.montecarlo.in/' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                       Monte Carlo
                                    </span>
                                    <img className="image-workshops-partner" src={partnerMonte}/>
                                    <span className="explore-events-landing-partner">Merchandise Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                    
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://dare2compete.com/' target='_blank'>
                                <div className="event-cards-landing-partner right-landing">
                                    <span className="subhead-events-landing subhead-events-landing-partner">Dare2Compete</span>
                                    <img className="image-workshops-partner" src={partner3}/>
                                    <span className="explore-events-landing-partner">Online Competition Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                    <Col md={3} sm={10} lg={3}>
                            <a href='http://www.bhaskar.com/' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                        Dainik Bhaskar
                                    </span>
                                    <img className="image-workshops-partner" src={partner4}/>
                                    <span className="explore-events-landing-partner">Associate Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                        <Col md={3} sm={10} lg={3} >
                            <a href='http://everydayinnovators.org/' target='_blank'>
                                <div className="event-cards-landing-partner right-landing">

                                    <span className="subhead-events-landing subhead-events-landing-partner">Everyday Innovators</span>

                                    <img className="image-workshops-partner" src={partner7}/>
                                    <span className="explore-events-landing-partner">Online Media Partner</span>

                                  

                                </div>
                            </a>
                        </Col>
                        
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://www.monkeyteller.com/' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                       Monkey Teller
                                    </span>
                                    <img className="image-workshops-partner" src={partnerMonkey}/>
                                    <span className="explore-events-landing-partner">Media Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                        <Col md={3} sm={10} lg={3}>
                            <a href='https://www.iitr.ac.in/counselling/pages/Index.html' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                       Counselling Cell
                                    </span>
                                    <img className="image-workshops-partner" src={partnerCC}/>
                                    <span className="explore-events-landing-partner">Event Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                    
                       
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://www.f6s.com/' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                       F6S
                                    </span>
                                    <img className="image-workshops-partner" src={partner8}/>
                                    <span className="explore-events-landing-partner">Associate Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://www.festpav.com/' target='_blank'>
                                <div className="event-cards-landing-partner right-landing">
                                    <span className="subhead-events-landing subhead-events-landing-partner">Fest Pav</span>
                                    <img className="image-workshops-partner" src={partner9}/>
                                    <span className="explore-events-landing-partner">Online Media Partner</span>
                                 
                                </div>
                            </a>
                        </Col>
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://www.frzcapital.cn/index.php?siteid=2' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                       Fosun Rz Capital
                                    </span>
                                    <img className="image-workshops-partner" src={partner10}/>
                                    <span className="explore-events-landing-partner">Associate Partner</span>
                                    
                                </div>
                            </a>
                        </Col>
                        
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://www.ohcampus.com/v2/' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                       Oh Campus
                                    </span>
                                    <img className="image-workshops-partner image-workshops-zonals" src={partner12}/>
                                    <span className="explore-events-landing-partner">Online Media Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                        <Col md={3} sm={10} lg={3} >
                            <a href='http://www.applop.com/' target='_blank'>
                                <div className="event-cards-landing-partner right-landing">

                                    <span className="subhead-events-landing subhead-events-landing-partner">App Lop</span>

                                    <img className="image-workshops-partner applop-partner" src={partner13}/>
                                    <span className="explore-events-landing-partner">Outreach And App Partner</span>

                                 

                                </div>
                            </a>
                        </Col>
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://protrex.in/' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                      Pro Trex
                                    </span>
                                    <img className="image-workshops-partner" src={partner14}/>
                                    <span className="explore-events-landing-partner">Workshop Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                          <Col md={3} sm={10} lg={3}>
                            <a href='http://www.facebook.com/enactusiitroorkee/' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                       Enactus
                                    </span>
                                    <img className="image-workshops-partner image-workshops-zonals" src={partner6}/>
                                    <span className="explore-events-landing-partner">Event Partner</span>
                              
                                </div>
                            </a>
                        </Col>
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://www.studynama.com/' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                        Study Nama
                                    </span>
                                    <img className="image-workshops-partner studynama-partner" src={partner15}/>
                                    <span className="explore-events-landing-partner">Online Media Partner</span>
                                   
                                </div>
                            </a>
                        </Col>
                        
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://www.tbsplanet.com/' target='_blank'>
                                <div className="event-cards-landing-partner">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                        TBS Planet
                                    </span>
                                    <img className="image-workshops-partner" src={partner16}/>
                                    <span className="explore-events-landing-partner">Associate Partner</span>
                                 
                                </div>
                            </a>
                        </Col>
                        <Col md={3} sm={10} lg={3}>
                            <a href='http://www.oistay.com/' target='_blank'>
                                <div className="event-cards-landing-partner workshops-mainevent">
                                    <span className="subhead-events-landing subhead-events-landing-partner">
                                      OI Stay
                                    </span>
                                    <img className="image-workshops-partner image-workshops-mainevent" src={partner17}/>
                                    <span className="explore-events-landing-partner">Travel Partner</span>
                               
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Grid>
            <FooterLanding />
            </div>
        )
    }

}