import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { API_DOMAIN } from '../../Constants/config'
import { Tabs, Tab, Col, Row, Nav, NavItem, Grid, ButtonGroup, Button, ButtonToolbar } from "react-bootstrap";
import axios from "axios";
import './workshop.css'
import Navbar from './navbar'
import FooterLanding from '../Footer/footer-landingpage'


export default class Competition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }
    componentDidMount() {
        document.getElementById("content-options").style.display = "none"
    }

    displayOptions = () => {
        if (document.getElementById("content-options").style.display === "none") {
            document.getElementById("content-options").style.display = "block";
        } else {
            document.getElementById("content-options").style.display = "none";
        }
    };

    componentWillMount() {
        axios
            .get(API_DOMAIN + "/api/events/?type=competitions")
            .then(res => {
                this.setState({ events: res.data })
                console.log(this.state.events)
            })
            .then(() =>
                this.gaurav())
            .catch(err => console.log(err));
    }

    getCookie = cname => {
        var name = cname + '='
        var decodedCookie = decodeURIComponent(document.cookie)
        var ca = decodedCookie.split(';')
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i]
            while (c.charAt(0) == ' ') {
                c = c.substring(1)
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length)
            }
        }
        return ''
    }


    toggleWorkshop = (id) => {
        var address = API_DOMAIN + '/event/' + id + '/apply'
        axios
            .get(address, {
                headers: {
                    Authorization: 'Token ' + this.getCookie('token')
                }
            })
    }

    register = (id) => {
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
            this.toggleWorkshop(id)
            window.location.href = "/dashboard";
        }
        else {
            window.open('./login', '_blank');
        }
    }

    show = () => {
        if (this.state.events[0] !== undefined) {
            return (
                <Tab.Container
                    id="left-tabs-example"
                    className="bottom-workshop"
                    defaultActiveKey="first"
                >
                    <Row className="clearfix">
                        <Col sm={4} className="side-workshop">
                            <Nav bsStyle="pills" stacked className="ledge">
                                <NavItem eventKey="first" className="know" href="javascript: void(0)">{this.state.events[0].title}</NavItem>
                                <NavItem eventKey="second" className="know" href="javascript: void(0)">{this.state.events[1].title}</NavItem>
                                <NavItem eventKey="3" className="know" href="javascript: void(0)">{this.state.events[2].title}</NavItem>
                                <NavItem eventKey="3.1" className="know" href="javascript: void(0)">{this.state.events[3].title}</NavItem>
                                <NavItem eventKey="3.2" className="know" href="javascript: void(0)">{this.state.events[4].title}</NavItem>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="first">
                                    <Col xs={12} md={8} className="ln-right-column">
                                        <Col xs={12} md={12} className="ln-right-column">
                                            <Row>
                                                <ul className="heading-ln">
                                                    <li> <h1 className="competition-Webpreneurship">{this.state.events[0].title}</h1></li>
                                                    <li><p className="competition-Webpreneurship-bottomtext-comp">Description</p></li>

                                                </ul>

                                                <ul className="competition-Allyouneed1">
                                                    <li><p>{this.state.events[0].long_description}</p></li>

                                                </ul>
                                                <ul className="comp-rules">
                                                    <li><h1>Format</h1></li>
                                                </ul>

                                                <ul className="competition-workforacompany1">
                                                    <li><p>There is only one round, and that will be an interactive quiz. Questions will be shown to participants via presentation. Before every question, there will be some interesting information/ facts/ video of franchising indirectly related to that question. The question will be in the form of multiple choices, True/False, identify the image etc.There will be limited time for every question.</p></li>
                                                </ul>

                                                <ul className="comp-rules">
                                                    <li><h1>Rules</h1></li>
                                                </ul>

                                                <ul className="comp-rules-brief">
                                                    <li>A team can be of max two persons</li>
                                                    <li>The decisions of the quiz will be final and will not be subjected to any change.</li>
                                                    <li>Any entry is allowed to submit only one submission.</li>
                                                    <li>Participants will not be allowed to use any mobile or other electronic gadgets.</li>
                                                    <li>Participants has to write answers on the given sheet.</li>
                                                    <li>Participants will not allow to give any hints or clues to the competitors.</li>
                                                    <li>Replacement of any participant of a team is not allowed after registration.</li>
                                                    <li>Details of number of questions, time limit for every question will be communicated at the time of quiz.</li>
                                                    <li>In order to participate the team must have there E-Summit ID or college ID.</li>
                                                </ul>

                                                <ul className="comp-rules">
                                                    <li><h1>Registration Procedure</h1></li>
                                                </ul>

                                                <ul className="comp-rules-brief">
                                                    <li>Registration for the event can be done online (through E-Summit website) and on the spot as well.</li>
                                                    <li>Teams are required to reach the registration desk at least half an hour before the commencement of the event.</li>
                                                    <li>Venue and timings will be notified subsequently.</li>
                                                </ul>
                                                <ul className="comp-rules">
                                                    <li><h1>Prizes</h1></li>
                                                </ul>
                                            </Row>
                                            <Row>
                                                <Col md={11} sm={12} mdOffset={1}>

                                                    <Grid fluid="container-fluid" className="notes-comp-container" >
                                                        <Row>
                                                            <Row className="appendedImages">

                                                                <Col xs={12} md={4} style={{ width: '40vw', height: '20vh' }}>
                                                                    <div className="bplan-about-div-competion">
                                                                        <img src='/images/notes.svg' />
                                                                        <p>Prizes worth <strong>₹10000</strong> would be awarded to the finalists.</p>
                                                                    </div>

                                                                </Col>

                                                                <Col xs={12} md={4}>
                                                                    <div className="bplan-about-div-competion">
                                                                        <img src='/images/diploma.svg' />
                                                                        <p>A certificate of appreciation would be provided to the participants.</p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Row>
                                                    </Grid>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ButtonToolbar className="competition-registernow">
                                                    <Button bsStyle="primary" bsClass="comp-registernow" onClick={() => {
                                                        this.register(this.state.events[0].id)
                                                    }}>Register Now</Button>
                                                </ButtonToolbar>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Col xs={12} md={8} className="ln-right-column">
                                        <Col xs={12} md={12} className="ln-right-column">
                                            <Row>
                                                <ul className="heading-ln">
                                                    <li> <h1 className="competition-Webpreneurship">{this.state.events[1].title}</h1></li>
                                                    <li><p className="competition-Webpreneurship-bottomtext-comp">Description</p></li>

                                                </ul>

                                                <ul className="competition-Allyouneed1">
                                                    <li><p>{this.state.events[1].long_description}</p></li>

                                                </ul>
                                                <ul className="comp-rules">
                                                    <li><h1>Format</h1></li>
                                                </ul>

                                                <ul className="competition-workforacompany1">
                                                    <li><p>All the participating teams will be provided with Business ideas and will be shown presentation related to those idea’s.The teams then will have to discuss among themselves if they want to invest in certain business .The share of resources(provided) one want to invest will be totally in the hands of the investor.
    The participants can invest in more than one idea and have to give a logical reason for the investment.The participants have to invest within the resources provided.
The team with maximum profit will be announced as the winner.</p></li>
                                                </ul>

                                                <ul className="comp-rules">
                                                    <li><h1>Rules</h1></li>
                                                </ul>

                                                <ul className="comp-rules-brief">
                                                    <li>Each team may have a maximum of four members, which may or may not be from the same college</li>
                                                    <li>Multiple teams from the same college are allowed to participate in the event</li>
                                                    <li>The solution should present your perspective and also address all the issues pertaining to the problem statement.</li>
                                                    <li>The decision of the judges shall be final and binding.</li>
                                                    <li>Any use of gadgets is prohibited during the competition.</li>
                                                    <li>In order to participate the team must have there E-Summit ID or college ID.</li>
                                                </ul>

                                                <ul className="comp-rules">
                                                    <li><h1>Registration Procedure</h1></li>
                                                </ul>

                                                <ul className="comp-rules-brief">
                                                    <li>Registration should be done online through the esummit IIT Roorkee 2018 website</li>
                                                    <li>Participants should submit two photographs of each member on the final presentation day.</li>
                                                    <li>The covering page of the paper must have:
Name(s), Institution of study, Email address(s), Contact number(s) of all the team members.</li>
                                                    <li>No entries shall be accepted after the commencement of the event</li>
                                                </ul>

                                                <ul className="comp-rules">
                                                    <li><h1>Judging Criteria</h1></li>
                                                </ul>

                                                <ul className="comp-rules-brief">
                                                    <li>The logic of investment made.</li>
                                                    <li>The Share of profit earned by respective team.</li>
                                                    <li>The presentation of the group.</li>
                                                </ul>
                                                <ul className="comp-rules">
                                                    <li><h1>Prizes</h1></li>
                                                </ul>
                                            </Row>
                                            <Row>
                                                <Col md={11} sm={12} mdOffset={1}>

                                                    <Grid fluid="container-fluid" className="notes-comp-container" >
                                                        <Row>
                                                            <Row className="appendedImages">

                                                                <Col xs={12} md={4} style={{ width: '40vw', height: '20vh' }}>
                                                                    <div className="bplan-about-div-competion">
                                                                        <img src='/images/notes.svg' />
                                                                        <p>Prizes worth <strong>₹10000</strong> would be awarded to the finalists.</p>
                                                                    </div>

                                                                </Col>

                                                                <Col xs={12} md={4}>
                                                                    <div className="bplan-about-div-competion">
                                                                        <img src='/images/diploma.svg' />
                                                                        <p>A certificate of appreciation would be provided to the participants.</p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Row>
                                                    </Grid>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ButtonToolbar className="competition-registernow">
                                                    <Button bsStyle="primary" bsClass="comp-registernow" onClick={() => {
                                                        this.register(this.state.events[1].id)
                                                    }}>Register Now</Button>
                                                </ButtonToolbar>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Tab.Pane>

                                <Tab.Pane eventKey="3">
                                    <Col xs={12} md={8} className="ln-right-column">
                                        <Col xs={12} md={12} className="ln-right-column">
                                            <Row>
                                                <ul className="heading-ln">
                                                    <li> <h1 className="competition-Webpreneurship">{this.state.events[2].title}</h1></li>
                                                    <li><p className="competition-Webpreneurship-bottomtext-comp">Description</p></li>

                                                </ul>

                                                <ul className="competition-Allyouneed1">
                                                    <li><p>{this.state.events[2].long_description}</p></li>

                                                </ul>
                                            </Row>
                                            {/*
                                                <ul className="comp-rules">
                                                    <li><h1>Format</h1></li>
                                                </ul>

                                                <ul className="competition-workforacompany1">
                                                <li><p>Step1 : Make a team of 2 members. One member will devise an advertising strategy and the other one will allocate the budget. Both will work independently thereafter.</p></li>
                                                <li><p>Step2 : A problem statement will then be announced, after which one will submit an advertising strategy and other will submit the divided budget. After running the algorithms on the submissions, maximum points will be awarded to the team with most synchronized submissions.</p></li>
                                                </ul>

                                                <ul className="comp-rules">
                                                    <li><h1>Rules</h1></li>
                                                </ul>

                                                <ul className="comp-rules-brief">
                                                    <li>Each team will have only 2 participants, which may or may not be from the same college.</li>
                                                    <li>Multiple teams from the same college are allowed to participate for the event</li>
                                                    <li>Registrations will be conducted on-the-spot.</li>
                                                    <li>A problem statement will be be announced and 30 minutes will be given to devise an advertising strategy.</li>
                                                    <li>Teams should submit their solution and present it within 10 mins (8 mins for presentation and 2 mins for Question and Answer session).</li>
                                                    <li>The solution should present your perspective as well as address all the issues pertaining to the problem statement.</li>
                                                    <li>Participants should ensure that their presentation include all relevant figures, tables and references.</li>
                                                    <li>The decision of the judges shall be final and binding.</li>
                                                    <li>Additional rules may be announced during the event.</li>
                                                </ul>

                                             <ul className="comp-rules">
                                                <li><h1>Registration Procedure</h1></li>
                                                </ul>

                                                <ul className="comp-rules-brief">
                                                    <li>Registration for the event can be done online (through E-Summit website) and on the spot as well.</li>
                                                    <li>Teams are required to reach the registration desk at least half an hour before the commencement of the event.</li>
                                                    <li>Venue and timings will be notified subsequently.</li>
                                                </ul>
                                                 <ul className="comp-rules">
                                                        <li><h1>Prizes</h1></li>
                                                </ul>
                                            </Row>
                                            <Row>
                                                <Col md={11} sm={12} mdOffset={1}>
                                                   
                                                    <Grid fluid="container-fluid" className="notes-comp-container" >
                                                        <Row>
                                                            <Row className="appendedImages">

                                                                <Col xs={12} md={4} style={{ width: '40vw', height: '20vh' }}>
                                                                    <div className="bplan-about-div-competion">
                                                                        <img src='/images/notes.svg' />
                                                                        <p>Prizes worth <strong>₹5000</strong> would be awarded to the finalists.</p>
                                                                    </div>

                                                                </Col>
                                
                                                                <Col xs={12} md={4}>
                                                                    <div className="bplan-about-div-competion">
                                                                        <img src='/images/diploma.svg' />
                                                                        <p>A certificate of appreciation would be provided to the participants.</p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Row>
                                                    </Grid>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ButtonToolbar className="competition-registernow">
                                                <Button bsStyle="primary" bsClass="comp-registernow" onClick={() => {
                                                        this.register(this.state.events[3].id)
                                                        }}>Register Now</Button>
                                                </ButtonToolbar>
                                            </Row>
                                        */}
                                        </Col>
                                    </Col>
                                </Tab.Pane>

                                <Tab.Pane eventKey="3.1">
                                    <Col xs={12} md={8} className="ln-right-column">
                                        <Col xs={12} md={12} className="ln-right-column">
                                            <Row>
                                                <ul className="heading-ln">
                                                    <li> <h1 className="competition-Webpreneurship">{this.state.events[3].title}</h1></li>
                                                    <li><p className="competition-Webpreneurship-bottomtext-comp">Description</p></li>

                                                </ul>

                                                <ul className="competition-Allyouneed1">
                                                    <li><p>{this.state.events[3].long_description}</p></li>

                                                </ul>
                                                <ul className="comp-rules">
                                                    <li><h1>Format</h1></li>
                                                </ul>

                                                <ul className="competition-workforacompany1">
                                                    <li><p>Step1 : Make a team of 2 members. One member will devise an advertising strategy and the other one will allocate the budget. Both will work independently thereafter.</p></li>
                                                    <li><p>Step2 : A problem statement will then be announced, after which one will submit an advertising strategy and other will submit the divided budget. After running the algorithms on the submissions, maximum points will be awarded to the team with most synchronized submissions.</p></li>
                                                </ul>

                                                <ul className="comp-rules">
                                                    <li><h1>Rules</h1></li>
                                                </ul>

                                                <ul className="comp-rules-brief">
                                                    <li>Each team will have only 2 participants, which may or may not be from the same college.</li>
                                                    <li>Multiple teams from the same college are allowed to participate for the event</li>
                                                    <li>Registrations will be conducted on-the-spot.</li>
                                                    <li>A problem statement will be be announced and 30 minutes will be given to devise an advertising strategy.</li>
                                                    <li>Teams should submit their solution and present it within 10 mins (8 mins for presentation and 2 mins for Question and Answer session).</li>
                                                    <li>The solution should present your perspective as well as address all the issues pertaining to the problem statement.</li>
                                                    <li>Participants should ensure that their presentation include all relevant figures, tables and references.</li>
                                                    <li>The decision of the judges shall be final and binding.</li>
                                                    <li>Additional rules may be announced during the event.</li>
                                                </ul>

                                                <ul className="comp-rules">
                                                    <li><h1>Registration Procedure</h1></li>
                                                </ul>

                                                <ul className="comp-rules-brief">
                                                    <li>Registration for the event can be done online (through E-Summit website) and on the spot as well.</li>
                                                    <li>Teams are required to reach the registration desk at least half an hour before the commencement of the event.</li>
                                                    <li>Venue and timings will be notified subsequently.</li>
                                                </ul>
                                                <ul className="comp-rules">
                                                    <li><h1>Prizes</h1></li>
                                                </ul>
                                            </Row>
                                            <Row>
                                                <Col md={11} sm={12} mdOffset={1}>

                                                    <Grid fluid="container-fluid" className="notes-comp-container" >
                                                        <Row>
                                                            <Row className="appendedImages">

                                                                <Col xs={12} md={4} style={{ width: '40vw', height: '20vh' }}>
                                                                    <div className="bplan-about-div-competion">
                                                                        <img src='/images/notes.svg' />
                                                                        <p>Prizes worth <strong>₹5000</strong> would be awarded to the finalists.</p>
                                                                    </div>

                                                                </Col>

                                                                <Col xs={12} md={4}>
                                                                    <div className="bplan-about-div-competion">
                                                                        <img src='/images/diploma.svg' />
                                                                        <p>A certificate of appreciation would be provided to the participants.</p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Row>
                                                    </Grid>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ButtonToolbar className="competition-registernow">
                                                    <Button bsStyle="primary" bsClass="comp-registernow" onClick={() => {
                                                        this.register(this.state.events[3].id)
                                                    }}>Register Now</Button>
                                                </ButtonToolbar>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Tab.Pane>


                                <Tab.Pane eventKey="3.2">
                                    <Col xs={12} md={8} className="ln-right-column">
                                        <Col xs={12} md={12} className="ln-right-column">
                                            <Row>
                                                <ul className="heading-ln">
                                                    <li> <h1 className="competition-Webpreneurship">{this.state.events[4].title}</h1></li>
                                                    <li><p className="competition-Webpreneurship-bottomtext-comp">Description</p></li>

                                                </ul>

                                                <ul className="competition-Allyouneed1">
                                                    <li><p>{this.state.events[4].long_description}</p></li>

                                                </ul>
                                                <ul className="comp-rules">
                                                    <li><h1>Rules</h1></li>
                                                </ul>

                                                <ul className="comp-rules-brief">
                                                    <li>A team can be of max two persons</li>
                                                    <li>The duration of the contest will be of 1 hour.</li>
                                                    <li>All questions will share an equal weightage.</li>
                                                    <li>The decision of the quiz-master will be final and will not be subjected to any change.</li>
                                                    <li>The participants shall not be allowed to use mobile or other electronic instruments. Anyone found using such devices would be disqualified.</li>
                                                    <li>You need to bring a pen and paper along with you.</li>
                                                </ul>

                                                <ul className="comp-rules">
                                                    <li><h1>Registration Procedure</h1></li>
                                                </ul>

                                                <ul className="comp-rules-brief">
                                                    <li>Registration for the event can be done online (through E-Summit website) and on the spot as well.</li>
                                                    <li>Teams are required to reach the registration desk at least half an hour before the commencement of the event.</li>
                                                    <li>Venue and timings will be notified subsequently.</li>
                                                </ul>
                                                <ul className="comp-rules">
                                                    <li><h1>Prizes</h1></li>
                                                </ul>
                                            </Row>
                                            <Row>
                                                <Col md={11} sm={12} mdOffset={1}>

                                                    <Grid fluid="container-fluid" className="notes-comp-container" >
                                                        <Row>
                                                            <Row className="appendedImages">

                                                                <Col xs={12} md={4} style={{ width: '40vw', height: '20vh' }}>
                                                                    <div className="bplan-about-div-competion">
                                                                        <img src='/images/notes.svg' />
                                                                        <p>Prizes worth <strong>₹10000</strong> would be awarded to the finalists.</p>
                                                                    </div>

                                                                </Col>

                                                                <Col xs={12} md={4}>
                                                                    <div className="bplan-about-div-competion">
                                                                        <img src='/images/diploma.svg' />
                                                                        <p>A certificate of appreciation would be provided to the participants.</p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Row>
                                                    </Grid>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <ButtonToolbar className="competition-registernow">
                                                    <Button bsStyle="primary" bsClass="comp-registernow" onClick={() => {
                                                        this.register(this.state.events[4].id)
                                                    }}>Register Now</Button>
                                                </ButtonToolbar>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row >
                </Tab.Container >
            )
        }
        else {
            return (
                <div className='white'>
                </div>
            )
        }

    }

    render() {
        return (
            <div>
                <div className="item" id="cmp">
                    <div className="nav-two">
                        {/* <span>Dashboard</span> */}
                        <a href="."><img src='/images/home-button-yellow.svg' className="ham" /></a>
                    </div>
                    <div className="out-item">
                        <div className="in-item in-events">
                            <div>
                                <button className="btn" onClick={this.displayOptions}>
                                    <div className="type-item">
                                        Competitions{" "}
                                    </div>
                                </button>
                                <button className="btn" onClick={this.displayOptions}>
                                    <span
                                        className="glyphicon glyphicon glyphicon-chevron-down"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <div className="register">Register Now</div>
                        </div>
                        <img src="/images/kws.svg" alt="" />
                        <div className='drop' id="content-options">
                        <Link to='/events'>
                            <div className='one'>Main Events</div>
                        </Link>
                        <Link to='/workshop'>
                            <div className='one'>Workshops</div>
                        </Link>
                        <Link to='/competition'>
                            <div className='one'>Competitions</div>
                        </Link>
                        <Link to='/knowledge'>
                            <div className='one'>Knowledge Sessions</div>
                        </Link>
                        <Link to='/networking'>
                            <div className='one'>Networking</div>
                        </Link>
                        <Link to='/zonals'>
                            <div className='one'>Zonals</div>
                        </Link>
                    </div>
                    </div>
                    
                </div>
                {this.show()}
                <FooterLanding />
            </div>

        )
    }
}

