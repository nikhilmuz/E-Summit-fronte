import React, { Component } from 'react';
import { Row, Grid, Col, ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap'
import './competitions.css'
// import { Collapsible, CollapsibleItem} from 'react-materialize';

export default class Industry4 extends React.Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (


            <Col xs={12} md={8} className="ln-right-column">
                <Col xsHidden smHidden md={1} className="ln-right-column" xsHidden>
                    <div className="vertical-line"></div>
                </Col>
                <Col xs={12} md={11} className="ln-right-column">
                    <Row>
                        <ul className="heading-ln">
                            <li> <h1 className="competition-Webpreneurship">Industry4</h1></li>
                            <li><p className="competition-Webpreneurship-bottomtext">Webpreneurship is an intensive 2-day workshop after which you would become expert in utilising web as a platform for entrepreneurship and become comfortable all of its aspects.</p></li>
                            <li><h1 className="competition-Webpreneurship-why">Why Webpreneurship?</h1></li>
                        </ul>

                        <ul className="competition-Allyouneed">
                            <li><p>All you need is internet & laptop</p></li>
                            <li><p>Work for a company</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                        </ul>
                        <ul className="competition-highlights">
                            <li><h1>Workshop Highlights</h1></li>
                        </ul>
                        <ul className="competition-workforacompany">
                            <li><p>All you need is internet & laptop</p></li>
                            <li><p>Work for a company</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                            <li><p>Become an entrepreneur and start a business</p></li>
                        </ul>
                        <ul className="competition-session">
                            <li><h1>Session Details</h1></li>
                            <li><p>This is a Two Day Workshop, including a total 4 sessions</p></li>
                        </ul>

                    </Row>
                    <Row>
                        <Col md={1} smHidden xsHidden><div className="verticalline-competition"></div></Col>
                        <Col md={11} sm={12}>
                            <ul className="competition-sessiondetails">
                                <li>
                                <ul className="competition-sessiondetails-session">
                                    <li><p>Session 1</p>
                                    <p className="bottomtext-session-ln">Entrepreneurship & Web Based Technologies</p>
                                    
                                    </li>
                                    <li><p>Session 2</p>
                                    <p className="bottomtext-session-ln">Cpanel, CMS & Additional Plugins</p></li>
                                    <li><p>Session 3</p>
                                    <p className="bottomtext-session-ln">Website Designing & Digital Marketing</p></li>
                                    <li><p>Session 4</p>
                                    <p className="bottomtext-session-ln">E-Commerce & Fund Raising</p></li>
                                </ul>
                                </li>
                                <li>
                                <ul className="competition-sessionday">
                                    <li>DAY 1</li>
                                    <li>DAY 2</li>
                                    <li>DAY 3</li>
                                    <li>DAY 4</li>
                                </ul>
                                </li>

                            </ul>

                            <ul className="competition-ecommerce">
                                <li><p>E-Commerce & Fund Raising</p></li>
                                <li><p><a href="#">Download pdf for details of session</a></p></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <ButtonToolbar className="competition-registernow">
                            <Button bsStyle="primary">REGISTER NOW</Button>
                        </ButtonToolbar>
                    </Row>
                    <Row className="query-comp-ln">
                        <p>for further queries contact us at: Event Coordinator(9999999999)</p>
                    </Row>
                    <Row>
                        <ul className="competition-contact">
                            <li><h3>Our Workshop Partner</h3></li>
                            <li><p></p></li>
                            <li><p>ProTreX-Technology re-Xplained</p></li>
                            <li><p><a href="#">Visit there website here</a></p></li>
                            
                        </ul>
                    </Row>
                    <Row>
                        <h1>Frequently asked questions</h1>

                        {/* <Collapsible accordion className="faq-list">
                            <CollapsibleItem header='Would we get certificates at the end of the workshop?' icon='filter_drama'>
                                Lorem ipsum dolor sit amet.
	                        </CollapsibleItem>
                            <CollapsibleItem header='Do we have to pay other than registration fee for workshops?' icon='place'>
                                Lorem ipsum dolor sit amet.
	                        </CollapsibleItem>
                            <CollapsibleItem header='Is accomodation and food available?' icon='whatshot'>
                                Lorem ipsum dolor sit amet.
	                        </CollapsibleItem>
                            <CollapsibleItem header='What will be the timings for the workshop?' icon='whatshot'>
                                Lorem ipsum dolor sit amet.
	                        </CollapsibleItem>
                            
                        </Collapsible> */}
                    </Row>
                </Col>

            </Col>



        )
    }

}