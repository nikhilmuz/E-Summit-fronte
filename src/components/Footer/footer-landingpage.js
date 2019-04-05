import React, { Component } from 'react';
import { Row, Grid, Col } from 'react-bootstrap';
import './footer-landingpage.css'
import scrollToComponent from 'react-scroll-to-component';


export default class FooterLanding extends Component {
    render() {
        return (

            <Grid fluid="container-fluid" className="landing-footer" id="landingFooter">
                <div className="footer-landing">
                    <Col xs={12} sm={12} md={4} className="footerCol1">
                        <img src='/images/home-button-green.png' style={{ height: '120px', width: '120px' }} />
                        <ul>
                            <li className="tag1"><p>esummit 2018</p></li>
                            <li className="tag2">
                                <p>
                                    EDC office<br />
                                    IIT Roorkee<br />
                                    Roorkee,Uttarakhand<br />
                                    247667
                                    </p>
                            </li>
                            <li className="tag3"><a href="tel:+918006466319‬">+91-8006466319‬</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={8} className="footerCol2">

                        <Col xs={12} sm={12} md={3}>
                            <ul>
                                <li><p><a href="/" target="_blank">HOME</a></p></li>
                                <li><p><a href="https://facebook.com/edciitr" target="_blank">CONTACT US</a></p></li>
                                <li><p><a href="/ca" target="_blank">CAMPUS AMBASSADOR</a></p></li>
                                <li><p><a href="/signup" target="_blank">REGISTER</a></p></li>
                                <li><p><a href="/login" target="_blank">LOGIN</a></p></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={12} md={3}>
                            <ul>
                                <li><p><a href="/networking" target="_blank">NETWORKING SESSIONS</a></p></li>
                                <li><p><a href="/workshop" target="_blank">WORKSHOPS</a></p></li>
                                <li><p><a href="/competition" target="_blank">COMPETITIONS</a></p></li>
                                <li><p><a href="/knowledge" target="_blank">KNOWLEDGE SESSIONS</a></p></li>
                                <li><p><a href="/zonal" target="_blank">Zonals</a></p></li>
                                <li><p><a href="/events" target="_blank">Events</a></p></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={12} md={3}>
                            <ul>
                                <li><p><a href="https://www.facebook.com/edciitr/" target="_blank">ABOUT US</a></p></li>
                                <li><p><a href="https://www.facebook.com/edciitr/" target="_blank">EDC IITR</a></p></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={12} md={3}>


                        </Col>


                    </Col>
                </div>
            </Grid>
        );
    }
}