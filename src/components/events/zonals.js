import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { API_DOMAIN } from '../../Constants/config'
import { Tabs, Tab, Col, Row, Nav, NavItem, Grid, ButtonGroup, Button, ButtonToolbar } from "react-bootstrap";
import axios from "axios";
import './workshop.css'
import FooterLanding from '../Footer/footer-landingpage'


export default class Zonal extends Component {
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
         if (document.getElementById("content-options")) {
            if (document.getElementById("content-options").style.display === "none") {
                document.getElementById("content-options").style.display = "block";
            } else {
            document.getElementById("content-options").style.display = "none";
            }
        }
    };

    componentWillMount() {
        axios
            .get(API_DOMAIN + "/api/events/?type=zonal")
            .then(res => {
                this.setState({ events: res.data })
                console.log(this.state.events)
            })
            .then(() =>
                this.gaurav())
            .catch(err => console.log(err));
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
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="first">
                                    <div className="tab-top">
                                        {this.state.events[0].title}
                                    </div>
                                    <div className='tab-mid'>
                                        {this.state.events[0].tagline}
                                    </div>
                                    <div className="tab-bet">
                                        {this.state.events[0].long_description}
                                    </div>

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
                <div className="item" id="kws">
                    <div className="nav-two">
                    {/* <span>Dashboard</span> */}
                        <a href="."><img src='/images/home-button-yellow.svg' className="ham" /></a>
                    </div>
                    <div className="out-item">
                        <div className="in-item in-events">
                            <div>
                                <button className="btn" onClick={this.displayOptions}>
                                <div className="type-item knws">
                                Zonals{" "}
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
                        <div className='drop know-drop' id="content-options">
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