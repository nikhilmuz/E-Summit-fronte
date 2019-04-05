import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { API_DOMAIN } from '../../Constants/config'
import axios from "axios";
import { Tabs, Tab, Col, Row, Nav, NavItem, Grid, ButtonGroup, Button, ButtonToolbar } from "react-bootstrap";
import './workshop.css'
import FooterLanding from '../Footer/footer-landingpage'




export default class MainEvents extends Component {

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
                            <Nav bsStyle="pills" stacked className="events">
                                <NavItem eventKey="first" className="gaurav" href="javascript: void(0)" >{this.state.events[0].title}</NavItem>
                                <NavItem eventKey="second" className="gaurav" href="javascript: void(0)" >{this.state.events[1].title}</NavItem>
                                <NavItem eventKey="3" className="gaurav" href="javascript: void(0)">{this.state.events[2].title}</NavItem>
                                <NavItem eventKey="3.1" className="gaurav" href="javascript: void(0)">{this.state.events[3].title}</NavItem>
                            </Nav>
                        </Col>
                        <Col sm={6}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="first" >
                                    <div className="tab-top ">
                                        {this.state.events[0].title}
                                    </div>
                                    <div className='tab-mid'>
                                        {this.state.events[0].tagline}
                                    </div>
                                    <div className="tab-bet">
                                        {this.state.events[0].long_description}
                                    </div>
                                    <center>
                                    <button type="button" className="view" onClick={() => {
                                     window.open(this.state.events[0].registration_url, '_blank');
                                    }}>Register Now</button>
                                    </center>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="tab-top">
                                        {this.state.events[1].title}
                                    </div>
                                    <div className='tab-mid'>
                                        {this.state.events[1].tagline}
                                    </div>
                                    <div className="tab-bet">
                                        {this.state.events[1].long_description}
                                    </div>
                                    <center>
                                    <button type="button" className="view" onClick={() => {
                                     window.open(this.state.events[1].registration_url, '_blank');
                                    }}>Register Now</button>
                                    </center>                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <div className="tab-top">
                                        {this.state.events[2].title}
                                    </div>
                                    <div className='tab-mid'>
                                        {this.state.events[2].tagline}
                                    </div>
                                    <div className="tab-bet">
                                        {this.state.events[2].long_description}
                                    </div>
                                    <center>
                                    <div className="tab-bet">
                                    Enroll your startup for <strong>{this.state.events[2].title}</strong>
                                    </div>
                                    <button type="button" className="view" onClick={() => {
                                     window.open(this.state.events[2].registration_url, '_blank');
                                    }}>Enroll Now</button>
                                    </center>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3.1">
                                    <div className="tab-top">
                                        {this.state.events[3].title}
                                    </div>
                                    <div className='tab-mid'>
                                        {this.state.events[3].tagline}
                                    </div>
                                    <div className="tab-bet">
                                        {this.state.events[3].long_description}
                                    </div>
                                     <center>
                                    <button type="button" className="view" onClick={() => {
                                     window.open(this.state.events[3].registration_url, '_blank');
                                    }}>Register Now</button>
                                    </center>  
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

    componentWillMount() {
        axios
            .get(API_DOMAIN + "/api/events/?type=mainevents")
            .then(res => {
                this.setState({ events: res.data })
                console.log(this.state.events)
            })
            .then()
            .catch(err => console.log(err));

    }


    render() {

        return (
            <div>
                <div className="item" id="me">
                    <div className="nav-two">
                       {/*<span>Dashboard</span>*/} 
                        <a href="."><img src='/images/home-button-pink.svg' className="ham" /></a>
                    </div>
                    <div className="out-item">
                        <div className="in-item in-events">
                            <div>
                                <button className="btn" onClick={this.displayOptions}>
                                <div className="type-item">
                                Main Events{" "}
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
                        <img src="/images/events.svg" style={{ height: '100%' }} alt="" />
                        

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
                    {/* <div className='drop' id="content-options">
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
                    </div> */}
                </div>
                {this.show()}
                <FooterLanding />
            </div >
        )
    }
}