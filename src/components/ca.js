import React, { Component } from "react";
// import logo from '../logo.svg';
import './style/ca.css'
import axios from 'axios'
import Select from 'react-select'
import colleges from './colleges.json'
// import $ from 'jquery'
// import js from './csscript.js'
import logo from './img/rocket3.png'
// import Connectwithus from './Form/ca-form'
import { Link } from 'react-router-dom'
import { Row, Grid, Col } from 'react-bootstrap';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { API_DOMAIN } from './../Constants/config';





class CampusAmbassador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mappedLeaderBoard: []
    };
  }
  componentDidMount() {
    axios
      .get(API_DOMAIN + "/api/leaderboard")
      .then(response => {
        console.log(response.data);
        this.setState({ mappedLeaderBoard: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Navbar />
        <Navcontainer />
        <div className="emptyspace1" />
        <AboutUs />
        <div className="emptyspace2" />
        <Yourrole />
        <div className="emptyspace2" />
        <Perks />
        <div className="emptyspace2" />
        <Grid fluid="container-fluid" className="leaderboard-container">
          <Row>
            <Col md={12}>
              <h1 className="leaderboard-heading">LEADERBOARD</h1>
            </Col>
            <Col md={12}>
              {" "}
              <p className="leaderboard-content">
                We appreciate your hardwork,get to top to win special
                certificate
              </p>
            </Col>
          </Row>
          <Row className="ca-leaderboarded-row">
            {this.state.mappedLeaderBoard.map((colleges, key) => (
              <LeaderBoardTemp name={colleges.name} rank={colleges.ranking} />
            ))}
          </Row>

          <Row className="leaderboardtablerow">
            <table className="leaderboardTable">
              {this.state.mappedLeaderBoard.map((colleges, key) => (
                <LeaderTableTempName
                  name={colleges.name}
                  college={colleges.college}
                  rank={colleges.ranking}
                />
              ))}
            </table>
          </Row>
        </Grid>

        {/* <Connectwithus/>  */}
        <Footer />
      </div>
    );
  }
}
class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='container_container_1'>
        <ul>
          <li><a href='#aboutus'> ABOUT US</a></li>
          <li><a href='#yourrole'> YOUR ROLE</a></li>
          <li><a href='#perks'>PERKS</a></li>
          <li><a href='../login'>LOGIN</a></li>
        </ul>
      </div>
    );
  }
}


class Navcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = { title1: "JOIN THE LEAGUE OF ENTREPRENEURSHIP. BE THE" };
  }
  render() {
    return (
      <div>
        <div className='ultracontainer' />
        <div className='jumbotron11'>

          <div className='flexy'>

            <div>
              <p>JOIN THE LEAGUE OF ENTREPRENEURSHIP</p>
              <p>CAMPUS</p>
              <p> AMBASSADOR</p>
            </div>
            <div>
              <img src={logo} />
            </div>

            {/* <Link to="/login">
              <button
                type="button"
                className="btn2"
                onClick={() => localStorage.setItem("ca", true)}
              >
                REGISTER NOW
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

// AboutUs
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        "The CAP( Campus Ambassador Programme) is a pinion initiative of E-Summit IIT Roorkee, 2018 organized by the Entrepreneurship Development Cell, IIT Roorkee and aims to amplify our purview to newer horizons. We aspire to increase our outreach to as many students as possible throughout the country and spread the spirit of entrepreneurship to similar extents.This year E-Summit IIT Roorkee brings with it loads and loads of colossal opportunities for the participating students and exciting perks for the Campus Ambassadors."
    };
  }
  render() {
    return (
      <div id='aboutus' className='container'>
        <div id='flex2'>
          <div>
            <p>ABOUT US</p>
            <p>{this.state.content}</p>
            <br />
{/* 
            <Link to="/login">
              <button
                type="button"
                className="btn2 btn_btn2"
                onClick={() => localStorage.setItem("ca", true)}
              >
                <span className="register-button">REGISTER NOW</span>
              </button>
            </Link> */}
          </div>

          <div>
            <div className="circle11" />
          </div>
          <div>
            {/* <Link to="/login" className="bottom-button">
              <button
                type="button"
                className="btn2 btn_btn3"
                onClick={() => localStorage.setItem("ca", true)}
              >
                <span className="register-button">REGISTER NOW</span>
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

// Your role
class Yourrole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        "The students selected as the Campus Ambassadors would bear the flag of E-Summit IIT Roorkee in their respective colleges with the aim of helping us to promote E-Summit among the students of their colleges. The selected Campus Ambassador, in his entire tenure, would be actively interacting with EDC IIT Roorkee about the available opportunities and requisites for promotions.",
      content2: "NETWORKING",
      content3: "DATABASE MANAGEMENT",
      content4: "PROMOTIONS"
    };
  }
  render() {
    return (
      <div>

        <div className='jumbotron2'>
          <div id='yourrole' className='container'>
            <p align='center'>YOUR ROLE</p>
            <p align='center'>{this.state.content}</p>

          </div>
        </div>
        <div id='container5' className='container'>
          <div id='flex3'>
            <div><div className='circle3' /><p>{this.state.content2}</p></div>
            <div><div className='circle44' /><p>{this.state.content3}</p></div>
            <div><div className='circle55' /><p>{this.state.content4}</p></div>
          </div>
        </div>
        {/* <p align="center" className="button_para"><button type="button" className="btn btn-default btn444"><span className="register-button">REGISTER NOW</span></button></p>  */}
      </div>
    );
  }
}

// Perks

class Perks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perks: [
        {
          value:
            "First of all you get an edge of experience in being a part of a flamboyant event."
        },
        {
          value:
            "For any college student aspiring to polish his/her leadership qualities this opportunity is something that can't be missed."
        },
        { value: "Enrolling in CAP makes you a member of our proud team." },
        {
          value:
            "All the CAP members will receive a certificate of appreciation issued to them by E-Summit IIT Roorkee."
        },
        {
          value:
            "Besides this we will be distributing additional prizes to the top candidates on the leaderboard which include goodies and merchandise of the sponsors on E-Summit 2018."
        },
        {
          value:
            "Direct shortlisting in the 2nd round of Startup Internship Fair.*"
        },
        {
          value:
            "Exclusive networking opportunities- get to be a part of team networking sessions with the renowned speakers and guests of E-Summit."
        },
        {
          value: "50% off on 15 registrations and 100% off on 30 registrations."
        },
        {
          value:
            "Get to be a part of all the E-Talks’ webinars taking place in IIT Roorkee."
        }
      ]
    };
  }

  render() {
    return (
      <div className="">
        <div id="perks" className="container">
          <Grid>
            <Row>
              <Col md={8} sm={8}>
                <div id="flex4">
                  <div>
                    <div>
                      <h1>PERKS</h1>
                    </div>
                    <div>
                      <ul className="caperksul">
                        {this.state.perks.map(function (perk, i) {
                          return (
                            <li key={i}>
                              <span>{perk.value}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div />
                    {/* <p align="center" className="button_para">
                      <button
                        type="button"
                        className="btn btn8"
                        onClick={() => {
                          window.location.href = "/login";
                          localStorage.setItem("ca", true);
                        }}
                      >
                        REGISTER NOW
                      </button>
                    </p> */}
                  </div>
                </div>
              </Col>
              <Col md={4} sm={4} className="circle-4-ca">
                <div>
                  <div className="circle4" />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
class LeaderBoardTemp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.rank == 1 || this.props.rank == 2 || this.props.rank == 3) {
      var matches = this.props.name.match(/\b(\w)/g);

      if (this.props.rank == 1) {
        return (
          <Col className="leaderboard-column" md={4} sm={4} xs={4} mdPush={4}>
            <div className="leaderboard-outerdiv">
              <span className="leaderboard-first-letter">{matches[0]}</span>
              <div className="leaderboard-innerdiv">
                <span className="leaderboard-rank-number">
                  {this.props.rank}
                </span>
              </div>
            </div>
            <p className="leaderboard-name">{this.props.name}</p>
            <p className="leaderboard-college">{this.props.college}</p>
          </Col>
        );
      } else if (this.props.rank == 2) {
        return (
          <Col className="leaderboard-column" md={4} sm={4} xs={4} mdPush={4}>
            <div className="leaderboard-outerdiv">
              <span className="leaderboard-first-letter">{matches[0]}</span>
              <div className="leaderboard-innerdiv">
                <span className="leaderboard-rank-number">
                  {this.props.rank}
                </span>
              </div>
            </div>
            <p className="leaderboard-name">{this.props.name}</p>
            <p className="leaderboard-college">{this.props.college}</p>
          </Col>
        );
      } else {
        return (
          <Col className="leaderboard-column" md={4} sm={4} xs={4} mdPull={8}>
            <div className="leaderboard-outerdiv">
              <span className="leaderboard-first-letter">{matches[0]}</span>
              <div className="leaderboard-innerdiv">
                <span className="leaderboard-rank-number">
                  {this.props.rank}
                </span>
              </div>
            </div>
            <p className="leaderboard-name">{this.props.name}</p>
            <p className="leaderboard-college">{this.props.college}</p>
          </Col>
        );
      }
    }
    return <div />;
  }
}

class LeaderTableTempName extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.rank == 1 || this.props.rank == 2 || this.props.rank == 3 || this.props.rank == 4 || this.props.rank == 5 || this.props.rank == 6 || this.props.rank == 7 || this.props.rank == 8 || this.props.rank == 9 || this.props.rank == 10) {
      return (


        <tr className="leaderboard-td">
          <td>{this.props.rank}</td>
          <td>{this.props.name}</td>
          <td>{this.props.college}</td>
        </tr>










      )
    }
    return <div />
  }
}

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="contact">
        <br />
        <div className="bottom-footer-ca">
          <a href="tel:+918839636682">+91-8839636682</a>
        </div>
      </div>
    );
  }
}

export default CampusAmbassador;
