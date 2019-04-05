import React, { Component } from 'react'
import './startup.css'
import './startup-detail.css'
import { Tab, Row, Col, Nav, NavItem, Navbar, Grid, Tabs } from 'react-bootstrap'
import $ from 'jquery'
import Scrollchor from 'react-scrollchor'
import axios from 'axios'
import '../Form/progressbar'
import { API_DOMAIN } from '../../Constants/config'



class LandingNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleLoad = this.handleLoad.bind(this);
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    handleIdChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePwdChange(e) {
        this.setState({ password: e.target.value });
    }

    handleLoad() {
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
            if (document.getElementById('landing-register')) {
                document.getElementById('landing-register').style.display = "none";
            }

            if (document.getElementById('landing-dashboard')) {
                document.getElementById('landing-dashboard').style.display = "block";
            }
        }
        else {
            if (document.getElementById('landing-register')) {
                document.getElementById('landing-register').style.display = "block";
            }

            if (document.getElementById('landing-dashboard')) {
                document.getElementById('landing-dashboard').style.display = "none";
            }
        }
    };
    render() {

        var footer = document.getElementById('landingFooter')
        return (
            <Navbar fluid={true} inverse collapseOnSelect className="Navbar-top-landing">
                <Navbar.Collapse>
                    <Nav pullLeft className="Navbar-landing">
                        <NavItem eventKey={1} href="/sip">
                            STARTUP INTERNSHIP PROGRAM
                        </NavItem>

                    </Nav>
                    <Nav pullRight className="Navbar-landing">
                        <NavItem eventKey={1} href="/">
                            CONTACT US
                        </NavItem>
                        <NavItem eventKey={2} href="/ca">
                            CAMPUS AMBASSADOR
						</NavItem>
                        <NavItem eventKey={1} href="/login" id="landing-register" className="landing-register" onClick={() => localStorage.setItem('ca', false)}>
                            REGISTER
						</NavItem>
                        <NavItem eventKey={1} href="/dashboard" id="landing-dashboard" className="landing-dashboard">
                            DASHBOARD
						</NavItem>

                        <NavItem eventKey={5} href="/">
                            <img src='/images/home-button-pink.svg' height='25' />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}


export default class StartupDetail extends Component {


    constructor(props) {
        super(props);
        this.state = {
            start: [],
            rest: []

        }
    }

    componentDidMount() {
        $('.first').click(function () {
            $(this).addClass("activa");
            $('.second').removeClass("activa");
            $('.third').removeClass("activa");
            $('.fourth').removeClass("activa");
            $('.fifth').removeClass("activa");
            $('.sixth').removeClass("activa");
            $('.seventh').removeClass("activa");
            $('.eight').removeClass("activa");
            $('.ninth').removeClass("activa");
            $('.tenth').removeClass("activa");
            $('.eleventh').removeClass("activa");
        });
        $('.second').click(function () {
            $(this).addClass("activa");
            $('.first').removeClass("activa");
            $('.third').removeClass("activa");
            $('.fourth').removeClass("activa");
            $('.fifth').removeClass("activa");
            $('.sixth').removeClass("activa");
            $('.seventh').removeClass("activa");
            $('.eight').removeClass("activa");
            $('.ninth').removeClass("activa");
            $('.tenth').removeClass("activa");
            $('.eleventh').removeClass("activa");
        });
        $('.third').click(function () {
            $(this).addClass("activa");
            $('.first').removeClass("activa");
            $('.second').removeClass("activa");
            $('.fourth').removeClass("activa");
            $('.fifth').removeClass("activa");
            $('.sixth').removeClass("activa");
            $('.seventh').removeClass("activa");
            $('.eight').removeClass("activa");
            $('.ninth').removeClass("activa");
            $('.tenth').removeClass("activa");
            $('.eleventh').removeClass("activa");
        });
        $('.fourth').click(function () {
            $(this).addClass("activa");
            $('.first').removeClass("activa");
            $('.second').removeClass("activa");
            $('.third').removeClass("activa");
            $('.fifth').removeClass("activa");
            $('.sixth').removeClass("activa");
            $('.seventh').removeClass("activa");
            $('.eight').removeClass("activa");
            $('.ninth').removeClass("activa");
            $('.tenth').removeClass("activa");
            $('.eleventh').removeClass("activa");
        });
        $('.fifth').click(function () {
            $(this).addClass("activa");
            $('.first').removeClass("activa");
            $('.second').removeClass("activa");
            $('.third').removeClass("activa");
            $('.fourth').removeClass("activa");
            $('.sixth').removeClass("activa");
            $('.seventh').removeClass("activa");
            $('.eight').removeClass("activa");
            $('.ninth').removeClass("activa");
            $('.tenth').removeClass("activa");
            $('.eleventh').removeClass("activa");
        });

        $('.sixth').click(function () {
            $(this).addClass("activa");
            $('.fifth').removeClass("activa");
            $('.first').removeClass("activa");
            $('.second').removeClass("activa");
            $('.third').removeClass("activa");
            $('.fourth').removeClass("activa");
            $('.seventh').removeClass("activa");
            $('.eight').removeClass("activa");
            $('.ninth').removeClass("activa");
            $('.tenth').removeClass("activa");
            $('.eleventh').removeClass("activa");
        });

        $('.seventh').click(function () {
            $(this).addClass("activa");
            $('.first').removeClass("activa");
            $('.second').removeClass("activa");
            $('.third').removeClass("activa");
            $('.fourth').removeClass("activa");
            $('.fifth').removeClass("activa");
            $('.sixth').removeClass("activa");
            $('.eight').removeClass("activa");
            $('.ninth').removeClass("activa");
            $('.tenth').removeClass("activa");
            $('.eleventh').removeClass("activa");
        });

        $('.eight').click(function () {
            $(this).addClass("activa");
            $('.first').removeClass("activa");
            $('.second').removeClass("activa");
            $('.third').removeClass("activa");
            $('.fourth').removeClass("activa");
            $('.fifth').removeClass("activa");
            $('.sixth').removeClass("activa");
            $('.seventh').removeClass("activa");
            $('.ninth').removeClass("activa");
            $('.tenth').removeClass("activa");
            $('.eleventh').removeClass("activa");
        });

        $('.ninth').click(function () {
            $(this).addClass("activa");
            $('.first').removeClass("activa");
            $('.second').removeClass("activa");
            $('.third').removeClass("activa");
            $('.fourth').removeClass("activa");
            $('.fifth').removeClass("activa");
            $('.sixth').removeClass("activa");
            $('.seventh').removeClass("activa");
            $('.eight').removeClass("activa");
            $('.tenth').removeClass("activa");
            $('.eleventh').removeClass("activa");
        });

        $('.tenth').click(function () {
            $(this).addClass("activa");
            $('.first').removeClass("activa");
            $('.second').removeClass("activa");
            $('.third').removeClass("activa");
            $('.fourth').removeClass("activa");
            $('.fifth').removeClass("activa");
            $('.sixth').removeClass("activa");
            $('.seventh').removeClass("activa");
            $('.eight').removeClass("activa");
            $('.ninth').removeClass("activa");
            $('.eleventh').removeClass("activa");
        });

        $('.eleventh').click(function () {
            $(this).addClass("activa");
            $('.first').removeClass("activa");
            $('.second').removeClass("activa");
            $('.third').removeClass("activa");
            $('.fourth').removeClass("activa");
            $('.fifth').removeClass("activa");
            $('.sixth').removeClass("activa");
            $('.seventh').removeClass("activa");
            $('.eight').removeClass("activa");
            $('.ninth').removeClass("activa");
            $('.tenth').removeClass("activa");
        });





        $('.nav-stacked li:nth-of-type(1) a').click(
            function () {
                $('.first').addClass("activa");
                $('.second').removeClass("activa");
                $('.third').removeClass("activa");
                $('.fourth').removeClass("activa");
                $('.fifth').removeClass("activa");
                $('.sixth').removeClass("activa");
                $('.seventh').removeClass("activa");
                $('.eight').removeClass("activa");
                $('.ninth').removeClass("activa");
                $('.tenth').removeClass("activa");
                $('.eleventh').removeClass("activa");
            }
        )
        $('.nav-stacked li:nth-of-type(2) a').click(
            function () {
                $('.second').addClass("activa");
                $('.first').removeClass("activa");
                $('.third').removeClass("activa");
                $('.fourth').removeClass("activa");
                $('.fifth').removeClass("activa");
                $('.sixth').removeClass("activa");
                $('.seventh').removeClass("activa");
                $('.eight').removeClass("activa");
                $('.ninth').removeClass("activa");
                $('.tenth').removeClass("activa");
                $('.eleventh').removeClass("activa");
            }
        )
        $('.nav-stacked li:nth-of-type(3) a').click(
            function () {
                $('.third').addClass("activa");
                $('.first').removeClass("activa");
                $('.second').removeClass("activa");
                $('.fourth').removeClass("activa");
                $('.fifth').removeClass("activa");
                $('.sixth').removeClass("activa");
                $('.seventh').removeClass("activa");
                $('.eight').removeClass("activa");
                $('.ninth').removeClass("activa");
                $('.tenth').removeClass("activa");
                $('.eleventh').removeClass("activa");
            }
        )
        $('.nav-stacked li:nth-of-type(4) a').click(
            function () {
                $('.fourth').addClass("activa");
                $('.first').removeClass("activa");
                $('.second').removeClass("activa");
                $('.third').removeClass("activa");
                $('.fifth').removeClass("activa");
                $('.sixth').removeClass("activa");
                $('.seventh').removeClass("activa");
                $('.eight').removeClass("activa");
                $('.ninth').removeClass("activa");
                $('.tenth').removeClass("activa");
                $('.eleventh').removeClass("activa");
            }
        )
        $('.nav-stacked li:nth-of-type(5) a').click(
            function () {
                $('.fifth').addClass("activa");
                $('.first').removeClass("activa");
                $('.second').removeClass("activa");
                $('.third').removeClass("activa");
                $('.fourth').removeClass("activa");
                $('.sixth').removeClass("activa");
                $('.seventh').removeClass("activa");
                $('.eight').removeClass("activa");
                $('.ninth').removeClass("activa");
                $('.tenth').removeClass("activa");
                $('.eleventh').removeClass("activa");

            }

        )
        $('.nav-stacked li:nth-of-type(6) a').click(
            function () {
                $('.sixth').addClass("activa");
                $('.fifth').removeClass("activa");
                $('.first').removeClass("activa");
                $('.second').removeClass("activa");
                $('.third').removeClass("activa");
                $('.fourth').removeClass("activa");
                $('.seventh').removeClass("activa");
                $('.eight').removeClass("activa");
                $('.ninth').removeClass("activa");
                $('.tenth').removeClass("activa");
                $('.eleventh').removeClass("activa");

            }

        )
        $('.nav-stacked li:nth-of-type(7) a').click(
            function () {
                $('.seventh').addClass("activa");
                $('.first').removeClass("activa");
                $('.second').removeClass("activa");
                $('.third').removeClass("activa");
                $('.fourth').removeClass("activa");
                $('.fifth').removeClass("activa");
                $('.sixth').removeClass("activa");
                $('.eight').removeClass("activa");
                $('.ninth').removeClass("activa");
                $('.tenth').removeClass("activa");
                $('.eleventh').removeClass("activa");
            }

        )
        $('.nav-stacked li:nth-of-type(8) a').click(
            function () {
                $('.eight').addClass("activa");
                $('.first').removeClass("activa");
                $('.second').removeClass("activa");
                $('.third').removeClass("activa");
                $('.fourth').removeClass("activa");
                $('.fifth').removeClass("activa");
                $('.sixth').removeClass("activa");
                $('.seventh').removeClass("activa");
                $('.ninth').removeClass("activa");
                $('.tenth').removeClass("activa");
                $('.eleventh').removeClass("activa");

            }

        )
        $('.nav-stacked li:nth-of-type(9) a').click(
            function () {
                $('.ninth').addClass("activa");
                $('.first').removeClass("activa");
                $('.second').removeClass("activa");
                $('.third').removeClass("activa");
                $('.fourth').removeClass("activa");
                $('.fifth').removeClass("activa");
                $('.sixth').removeClass("activa");
                $('.seventh').removeClass("activa");
                $('.eight').removeClass("activa");
                $('.tenth').removeClass("activa");
                $('.eleventh').removeClass("activa");

            }

        )
        $('.nav-stacked li:nth-of-type(10) a').click(
            function () {
                $('.tenth').addClass("activa");
                $('.first').removeClass("activa");
                $('.second').removeClass("activa");
                $('.third').removeClass("activa");
                $('.fourth').removeClass("activa");
                $('.fifth').removeClass("activa");
                $('.sixth').removeClass("activa");
                $('.seventh').removeClass("activa");
                $('.eight').removeClass("activa");
                $('.ninth').removeClass("activa");
                $('.eleventh').removeClass("activa");

            }

        )
        $('.nav-stacked li:nth-of-type(11) a').click(
            function () {
                $('.eleventh').addClass("activa");
                $('.first').removeClass("activa");
                $('.second').removeClass("activa");
                $('.third').removeClass("activa");
                $('.fourth').removeClass("activa");
                $('.fifth').removeClass("activa");
                $('.sixth').removeClass("activa");
                $('.seventh').removeClass("activa");
                $('.eight').removeClass("activa");
                $('.ninth').removeClass("activa");
                $('.tenth').removeClass("activa");

            }

        )
    }

    componentWillMount() {
        localStorage.removeItem("applied");
        localStorage.removeItem("id");
    }

    componentDidMount() {
        document.getElementById('mydiv').style.display = 'block'
        const { id } = this.props.match.params;
        axios
            .get(`${API_DOMAIN}/internship-opportunity/${id}`)
            .then(res => {
                document.getElementById('mydiv').style.display = 'none'
                this.setState({ start: res.data })
            })

    }


    apply(applied) {
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

        if (token == "") {
            var id = applied.id
            localStorage.setItem("applied", "true");
            localStorage.setItem("id", id);
            document.getElementById('mydiv').style.display = 'block';
            this.props.history.push('/login')
        }
        else {
            const headers = new Headers({
                'Content-Type': 'x-www-form-urlencoded',
                'X-XSRF-TOKEN': token
            });
            fetch(`${API_DOMAIN}/opportunity/${applied.id}/apply`, {
                method: 'POST',
                headers,
                credentials: 'include',
            });
            document.getElementById('mydiv').style.display = 'block';
            window.open(`${applied.url}`, '_blank');
        }
    }



    show() {
        switch (this.state.start.startup) {
            case null:
                return
            case undefined:
                return
            default:
                return [
                    <div>
                        <div className="startup-top" >
                            <div className="tow-one">
                                <img src="https://s3.ap-south-1.amazonaws.com/esummit/media/back.png" onClick={() => this.props.history.push('/sip')} style={{ height: '30px', marginRight: '10px' }} />
                                <div className="startup-name">{this.state.start.title}</div>
                            </div>
                            <div className="startup-apply" onClick={() => this.apply(this.state.start)}> Apply</div>
                        </div>
                        <div className="startup-ex">
                            <div className="start-one">Name of Startup</div>
                            <div className="start-two">{this.state.start.startup.title}</div>
                        </div>
                        <div className="startup-ex">
                            <div className="start-one">About the Internship:</div>
                            <div className="start-two">{this.state.start.description}</div>
                        </div>
                        <div className="startup-ex">
                            <div className="start-one">No. of internships available</div>
                            <div className="start-two">{this.state.start.startup.internships_allowed}</div>
                        </div>
                        <div className="startup-ex">
                            <div className="start-one">Skill(s) Required: </div>
                            <div className="start-two">
                                {this.state.start.qualifications}
                            </div>
                        </div>
                        <div className="startup-ex">
                            <div className="start-one">Who can apply:</div>
                            <div className="start-two">
                                {this.state.start.eligibility_criteria}
                            </div>
                        </div>
                        <div className="startup-ex">
                            <div className="start-one">Perks</div>
                            <div className="start-two">
                                {this.state.start.perks}
                            </div>
                        </div>
                    </div>

                ]
        }
    }



    render() {

        return (
            <div >
                <div id='mydiv' />
                <LandingNavBar />
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example tab-startup">
                    <Tab eventKey={1} >
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row className="clearfix">
                                <Col sm={3} className="startup-left startup-new">
                                    <div className="category category-new">Category :</div>
                                    <Nav bsStyle="pills" stacked className="nav-new">
                                        <NavItem eventKey="first" id="tab-left">
                                            <div className="circle first activa " id="" />
                                            All
                                        </NavItem>
                                        <NavItem eventKey="second" id="tab-left" disabled >
                                            <div className="circle second" id="" />
                                            Operations
                                        </NavItem>

                                        <NavItem eventKey="3" disabled >
                                            <div className="circle third" id="" />
                                            Design
                                        </NavItem>
                                        <NavItem eventKey="3.1" id="three" disabled>
                                            <div className="circle fourth" id="" />
                                            Web Development
                                        </NavItem>
                                        <NavItem eventKey="3.2" disabled>
                                            <div className="circle fifth" id="" />
                                            App Development
                                        </NavItem>
                                        <NavItem eventKey="3.3" disabled>
                                            <div className="circle sixth" id="" />
                                            Business Development
                                        </NavItem>
                                        <NavItem eventKey="3.4" disabled>
                                            <div className="circle seventh" id="" />
                                            Digital Marketing
                                        </NavItem>
                                        <NavItem eventKey="3.5" disabled>
                                            <div className="circle eight" id="" />
                                            Data Science
                                        </NavItem>
                                        <NavItem eventKey="3.6" disabled>
                                            <div className="circle ninth" id="" />
                                            Data Analytics
                                        </NavItem>
                                        <NavItem eventKey="3.7" disabled>
                                            <div className="circle tenth" id="" />
                                            Marketing
                                        </NavItem>
                                        <NavItem eventKey="3.8" disabled>
                                            <div className="circle eleventh" id="" />
                                            Other
                                        </NavItem>
                                    </Nav>
                                </Col>
                                <Col sm={9} className="startup-right">
                                    <Tab.Content animation>
                                        <Tab.Pane eventKey="first">
                                            {this.show()}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="3">

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="3.1">

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="3.2">

                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>;
                    </Tab>

                </Tabs>;
            </div >
        )
    }
}