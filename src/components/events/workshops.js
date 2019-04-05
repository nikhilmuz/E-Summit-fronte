import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { API_DOMAIN } from '../../Constants/config'
import { Tabs, Tab, Col, Row, Nav, NavItem, Grid, ButtonGroup, Button, ButtonToolbar } from "react-bootstrap";
import axios from "axios";
import './workshop.css'
import FooterLanding from '../Footer/footer-landingpage'
import blockchained from '../img/Blockchained+India.png'



export default class Workshops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            userPayState: {
                tF: 0,
                aF: 0,
                discount: 0,
                rF: 0,
                coupon: {
                  discount: 0
                },
                applications: []
              }
        };
        this.toggleWorkshop = this.toggleWorkshop.bind(this);
        this.getCookie = this.getCookie.bind(this);
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
            .get(API_DOMAIN + "/api/events/?type=workshops")
            .then(res => {
                this.setState({ events: res.data })
                console.log(this.state.events)
            })
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
    if(this.getCookie('token')){
    var address = API_DOMAIN + '/event/' + id + '/apply'
    axios
    .get(address, {
        headers: {
          Authorization: 'Token ' + this.getCookie('token')
        }
      })
      .then(response => {
        console.log(response)
        window.location.href = '/dashboard'
            // window.open(this.state.registration_url, '_blank');
      })
      .catch(error => {
        console.log(error)
        window.location.href = '/dashboard'
        // window.open(this.state.registration_url, '_blank');
      })
    }else{
    window.location.href = '/login'
    localStorage.setItem('eventApply', id)
    }
  }



    show = () => {
        if (this.state.events[0] !== undefined) {
            var link0 = this.state.events[0].detail_file ? <li><p><a href={this.state.events[0].detail_file} target="_blank">Download pdf for details of session</a></p></li> : <p />

            var link1 = this.state.events[1].detail_file ? <li><p><a href={this.state.events[1].detail_file} target="_blank">Download pdf for details of session</a></p></li> : <p />
            return (
                <Tab.Container
                    id="left-tabs-example"
                    className="bottom-workshop"
                    defaultActiveKey="first"
                >
                    <Row className="clearfix">
                        <Col sm={4} className="side-workshop">
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey="first" href="javascript: void(0)">{this.state.events[0].title}</NavItem>
                               {/*} <NavItem eventKey="second" href="javascript: void(0)">{this.state.events[1].title}</NavItem>*/}
                                <NavItem eventKey="third" href="javascript: void(0)">{this.state.events[2].title}</NavItem>
                                
                                {/* <NavItem eventKey="3">{this.state.events[2].title}</NavItem>
                                <NavItem eventKey="3.1">{this.state.events[3].title}</NavItem> */}
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="first" >
                                    <Col xs={12} md={8} className="ln-right-column">
                                        <Col xs={12} md={12} className="ln-right-column">
                                            <Row>
                                                <ul className="heading-ln">
                                                    <li> <h1 className="competition-Webpreneurship">{this.state.events[0].title}</h1></li>
                                                    <li><p className="competition-Webpreneurship-bottomtext">{this.state.events[0].long_description}</p></li>
                                                    <li><h1 className="competition-Webpreneurship-why">Why {this.state.events[0].title} ?</h1></li>
                                                </ul>
                                                <ul className="competition-Allyouneed">
                                                    <li><p>All you need is internet & laptop</p></li>
                                                    <li><p>Work for a company</p></li>
                                                    <li><p>Become an entrepreneur and start a business</p></li>
                                                    <li><p>Develop your own ecommerce Website & start selling online</p></li>
                                                    <li><p>Promote your business with digital marketing tools</p></li>
                                                    <li><p>Generate survey & analyze the public demands</p></li>
                                                    <li><p>Develop Ads and Market your product or service online</p></li>
                                                    <li><p>Learn & get benefited with data Analytics</p></li>
                                                    <li><p>Learn to upgrade your product & service based on Analytics Report</p></li>
                                                    <li><p>Get hired with high package</p></li>
                                                    <li><p>Work from anywhere</p></li>
                                                    <li><p>Make idea into reality</p></li>
                                                    <li><p>Learn a marketable skill</p></li>
                                                </ul>
                                                <ul className="competition-highlights">
                                                    <li><h1>Workshop Highlights</h1></li>
                                                </ul>
                                                <ul className="competition-workforacompany">
                                                    <li><p>Learn the process and steps for Domain Selection & Purchasing</p></li>
                                                    <li><p>Domain Configuration for Linking Hosting</p></li>
                                                    <li><p>Learn what is Web Hosting & how to select a hosting provider</p></li>
                                                    <li><p>Configuration of Hosting for Database Management & CMS</p></li>
                                                    <li><p>Learn Installation of different CMS & other platform for Website Development</p></li>
                                                    <li><p>Developing site & usage of different plugins for responsive & interactive website</p></li>
                                                    <li><p>Digital Marketing including Survey, Campaigns, Ads, etc</p></li>
                                                    <li><p>Live Publishing of Basic Website, Ecommerce site & promotion of site</p></li>
                                                    <li><p>Google Analytics of site & Much more</p></li>
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
                                                                <li>DAY 1</li>
                                                                <li>DAY 2</li>
                                                                <li>DAY 2</li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <ul className="competition-ecommerce">
                                                        <li><p>E-Commerce & Fund Raising</p></li>
                                                        {link0}
                                                    </ul>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <center>
                                                <ul className="competition-contact">
                                                <li><p className="competition-Webpreneurship-bottomtext">Cost of workshops is <strong>₹{this.state.events[0].fee}</strong></p></li>
                                                </ul>
                                             </center>
                                            </Row>
                                            <Row className="button-row-workshop">
                                                <center>
                                                    <ButtonToolbar>
                                                        <Button bsStyle="primary" bsClass="button-view" className="viewmorebuttonlandingpage" onClick={() => {
                                                            if (this.state.registration_url) {
                                                                this.toggleWorkshop(this.state.events[0].id);
                                                                // window.open(this.state.registration_url, '_blank');
                                                            }
                                                            else {
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
                                                                this.toggleWorkshop(this.state.events[0].id)
                                                                // if (!(token == "")) { 
                                                                //     this.toggleWorkshop(this.state.events[0].id);
                                                                  
                                                                //     // window.location.href = "/dashboard";
                                                                // }
                                                                // else {
                                                                //     window.open('./login', '_blank');
                                                                // }
                                                            }
                                                        }}>Register Now</Button></ButtonToolbar>
                                                </center>
                                            </Row>
                                            <Row>
                                                <ul className="competition-contact competition-contact-workshop-1">
                                                    <li><h3>Our Workshop Partner</h3></li>
                                                    <li><p></p></li>
                                                    <li><p>ProTreX-Technology re-Xplained</p></li>
                                                    <li><p><a href="http://protrex.in" target='_blank'><img src='/images/protrex.png' width='89' height='37'/></a></p></li>
                                                </ul>
                                            </Row>

                                            {/*
                                            <Row>
                                                <h1>Frequently asked questions</h1>
                                                <div>
                                                    <nav className="accordion arrows">
                                                        <input type="radio" name="accordion" id="cb1" />
                                                        <section className="box">
                                                            <label className="box-title" for="cb1">Would we get certificates at the end of the workshop?</label>
                                                            <label className="box-close" for="acc-close"></label>
                                                            <div className="box-content">Lorem Ipsum</div>
                                                        </section>
                                                        <input type="radio" name="accordion" id="cb2" />
                                                        <section className="box">
                                                            <label className="box-title" for="cb2">Do we have to pay other than registration fee for workshops?</label>
                                                            <label className="box-close" for="acc-close"></label>
                                                            <div className="box-content">Lorem Ipsum</div>
                                                        </section>
                                                        <input type="radio" name="accordion" id="cb3" />
                                                        <section className="box">
                                                            <label className="box-title" for="cb3">Is accomodation and food available?</label>
                                                            <label className="box-close" for="acc-close"></label>
                                                            <div className="box-content">Lorem Ipsum.</div>
                                                        </section>
                                                        <input type="radio" name="accordion" id="cb4" />
                                                        <section className="box">
                                                            <label className="box-title" for="cb4">What will be the timings for the workshop?</label>
                                                            <label className="box-close" for="acc-close"></label>
                                                            <div className="box-content">Lorem Ipsum.</div>
                                                        </section>

                                                        <input type="radio" name="accordion" id="acc-close" />
                                                    </nav>
                                                </div>
                                            </Row>
                                        */}
                                        </Col>
                                    </Col>
                                </Tab.Pane>
                                {/*
                                <Tab.Pane eventKey="second">
                                    <Col xs={12} md={8} className="ln-right-column">
                                        <Col xs={12} md={12} className="ln-right-column">
                                            <Row>
                                                <ul className="heading-ln">
                                                    <li> <h1 className="competition-Webpreneurship">{this.state.events[1].title}</h1></li>
                                                    <li><p className="competition-Webpreneurship-bottomtext">{this.state.events[1].long_description}</p></li>
                                                    <li><h1 className="competition-Webpreneurship-why">Internet of Things (IoT)</h1></li>
                                                    <li><p className="competition-Webpreneurship-bottomtext">IoT is relatively a new concept for connecting Things (anything and everything in the physical world) that are intelligent and communicable for collecting and transporting data from one place to another on the globe over internet. The driving philosophy of IoT is to connect all physical devices (Things) for collecting their relevant data in real-time for managing the ‘Things’ better and to make them more reliable and predictive.</p></li> 
                                                    <li><h1 className="competition-Webpreneurship-why">Industrial Internet of Things (IIoT)</h1></li>
                                                    <li><p className="competition-Webpreneurship-bottomtext">IIoT is an application of IoT technology in manufacturing industry. IIoT requires all the participating devices/machines in the manufacturing process to be smart (intelligent and communicable). It is expected to lead to more accurate and consistent logging of large amount of high speed data. In turn the comprehensive real time and off line analytics of such data would enable identification of production bottlenecks, quality deficiencies, worker safety issues etc. and enable predictive maintenance.</p></li> 
                                                    <li><h1 className="competition-Webpreneurship-why">Industry 4.0</h1></li>
                                                    <li><p className="competition-Webpreneurship-bottomtext">Industry 4.0, termed as the fourth industrial revolution, refers to total computerization of manufacturing (smart factory). Industry 4.0 is a collective term used for a number of contemporary technologies and concepts such as Automation, Data exchange, Lean manufacturing, etc., all put together for value chain organization. Industry 4.0 consists of network of Cyber-physical Systems (manufacturing processes), Internet of Things (Machines), and Internet of Services (cross organizational services). The driving principles are: Interoperability, virtualization, decentralization, real-time capability, and modularity among manufacturing industries.</p></li> 
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
                                                                    <p className="bottomtext-session-ln">Cloud Technology</p>
                                                                </li>
                                                                <li><p>Session 2</p>
                                                                    <p className="bottomtext-session-ln">Big Data</p></li>
                                                                <li><p>Session 3</p>
                                                                    <p className="bottomtext-session-ln">Industrial Internet of Things(IIoT)</p></li>
                                                                <li><p>Session 4</p>
                                                                    <p className="bottomtext-session-ln">Mobile Cloud Control Technology</p></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul className="competition-sessionday">
                                                                <li>DAY 1</li>
                                                                <li>DAY 1</li>
                                                                <li>DAY 2</li>
                                                                <li>DAY 2</li>
                                                            </ul>
                                                        </li>

                                                    </ul>

                                                    <ul className="competition-ecommerce">
                                                        <li><p>E-Commerce & Fund Raising</p></li>
                                                        {link1}
                                                    </ul>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <center>
                                                <ul className="competition-contact">
                                                <li><p className="competition-Webpreneurship-bottomtext">Cost of workshops is <strong>₹{this.state.events[1].fee}</strong></p></li>
                                                </ul>
                                             </center>
                                            </Row>
                                            <Row className="button-row-workshop">
                                                <center>
                                                    <ButtonToolbar>
                                                        <Button bsStyle="primary" bsClass="button-view" className="viewmorebuttonlandingpage" onClick={() => {
                                                            if (this.state.registration_url) {
                                                                this.toggleWorkshop(this.state.events[1].id);
                                                              
                                                                // window.open(this.state.registration_url, '_blank');
                                                            }
                                                            else {
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
                                                                this.toggleWorkshop(this.state.events[1].id);
                                                                
                                                                // if (!(token == "")) { 
                                                                //     this.toggleWorkshop(this.state.events[1].id);
                                                                 
                                                                //     // window.location.href = "/dashboard";
                                                                // }
                                                                // else {
                                                                //     window.open('./login', '_blank');
                                                                // }
                                                            }
                                                        }}>Register Now</Button></ButtonToolbar>
                                                </center>
                                            </Row>
                                            <Row>
                                                <ul className="competition-contact competition-contact-workshop-1">
                                                    <li><h3>Our Workshop Partner</h3></li>
                                                    <li><p></p></li>
                                                    <li><p>ProTreX-Technology re-Xplained</p></li>
                                                    <li><p><a href="http://protrex.in" target='_blank'><img src='/images/protrex.png' width='89' height='37'/></a></p></li>
                                                </ul>
                                            </Row>

                                            <Row>
                                                <h1>Frequently asked questions</h1>
                                                <div>
                                                    <nav className="accordion arrows">

                                                        <input type="radio" name="accordion" id="cb1" />
                                                        <section className="box">
                                                            <label className="box-title" for="cb1">Would we get certificates at the end of the workshop?</label>
                                                            <label className="box-close" for="acc-close"></label>
                                                            <div className="box-content">Lorem Ipsum</div>
                                                        </section>
                                                        <input type="radio" name="accordion" id="cb2" />
                                                        <section className="box">
                                                            <label className="box-title" for="cb2">Do we have to pay other than registration fee for workshops?</label>
                                                            <label className="box-close" for="acc-close"></label>
                                                            <div className="box-content">Lorem Ipsum</div>
                                                        </section>
                                                        <input type="radio" name="accordion" id="cb3" />
                                                        <section className="box">
                                                            <label className="box-title" for="cb3">Is accomodation and food available?</label>
                                                            <label className="box-close" for="acc-close"></label>
                                                            <div className="box-content">Lorem Ipsum.</div>
                                                        </section>
                                                        <input type="radio" name="accordion" id="cb4" />
                                                        <section className="box">
                                                            <label className="box-title" for="cb4">What will be the timings for the workshop?</label>
                                                            <label className="box-close" for="acc-close"></label>
                                                            <div className="box-content">Lorem Ipsum.</div>
                                                        </section>

                                                        <input type="radio" name="accordion" id="acc-close" />
                                                    </nav>
                                                </div>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Tab.Pane>
*/}
                                 <Tab.Pane eventKey="third">
                                    <Col xs={12} md={8} className="ln-right-column">
                                        <Col xs={12} md={12} className="ln-right-column">
                                            <Row>
                                                <ul className="heading-ln">
                                                    <li> <h1 className="competition-Webpreneurship">{this.state.events[2].title}</h1></li>
                                                    <li><p className="competition-Webpreneurship-bottomtext">{this.state.events[2].long_description}</p></li>
                                                </ul>
                                               

                                            </Row>
                                             <ul className="competition-highlights">
                                                    <li><h1>Workshop Highlights</h1></li>
                                                </ul>
                                                <ul className="competition-workforacompany">
                                                    <li><p>Introduction to Blockchain</p></li>
                                                    <li><p>The promise of the Blockchain Technology.</p></li>
                                                    <li><p>How is blockchain challenging the current status quo?</p></li>
                                                    <li><p>Genesis of Blockchain.</p></li>
                                                    <li><p>Diverse blockchain platforms.</p></li>
                                                    <li><p>Developing Distributed applications using the Ethereum Blockchain</p></li> 
                                                    <li> <p>Note: People who want to learn the hands on would need to bring their laptops.</p></li>
                                                </ul>

                                            <Row>
                                                <Col md={1} smHidden xsHidden></Col>
                                                <Col md={11} sm={12}>
                                

                                                    <ul className="competition-ecommerce">
                                                        <li><p>E-Commerce & Fund Raising</p></li>
                                                        
                                                    </ul>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <center>
                                                <ul className="competition-contact">
                                                <li><p className="competition-Webpreneurship-bottomtext">Cost of workshops is <strong>₹{this.state.events[2].fee}</strong></p></li>
                                                </ul>
                                             </center>
                                            </Row>
                                            <Row className="button-row-workshop">
                                                <center>
                                                    <ButtonToolbar>
                                                        <Button bsStyle="primary" bsClass="button-view" className="viewmorebuttonlandingpage" onClick={() => {
                                                            if (this.state.registration_url) {
                                                                this.toggleWorkshop(this.state.events[2].id);
                                                         
                                                                // window.open(this.state.registration_url, '_blank');
                                                            }
                                                            else {
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

                                                                this.toggleWorkshop(this.state.events[2].id);
                                                                
                                                                // if (!(token == "")) { 
                                                                //     this.toggleWorkshop(this.state.events[2].id);
                                                                 
                                                                //     // window.location.href = "/dashboard";
                                                                // }
                                                                // else {
                                                                //     window.open('./login', '_blank');
                                                                // }
                                                            }
                                                        }}>Register Now</Button></ButtonToolbar>
                                                </center>
                                            </Row>
                                            <Row>
                                                <ul className="competition-contact competition-contact-workshop-1">
                                                    <li><h3>Our Workshop Partner</h3></li>
                                                    <li><p></p></li>
                                                    <li><p>BlockChained India</p></li>
                                                    <li><p><a href="https://blockchainedindia.com/" target='_blank'><img src={blockchained} width='150' height='150'/></a></p></li>
                                                </ul>
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
            <div >
                <div className="item" id="wrk">
                    <div className="nav-two">
                        {/*<span>FAQ</span>*/}
                        {/* <span>Dashboard</span> */}
                        <a href="."><img src='/images/home-button-purple.svg' className="ham" /></a>
                    </div>
                    <div className="out-item">
                        <div className="in-item in-events">
                            <div>
                                <button className="btn" onClick={this.displayOptions}>
                                <div className="type-item knws">
                                Workshops{" "}
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
                        <img src="/images/chem.svg" alt="" />
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