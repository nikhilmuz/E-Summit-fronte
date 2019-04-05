import React, { Component } from "react";
import "./startup.css";
import {
  Tab,
  Row,
  Col,
  Nav,
  NavItem,
  Navbar,
  Grid,
  Tabs
} from "react-bootstrap";
import $ from "jquery";
import { Link } from "react-router-dom";
import Scrollchor from "react-scrollchor";
import axios from "axios";
import _ from "lodash";
import { API_DOMAIN } from "../../Constants/config";
import "../Form/progressbar";

class LandingNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
    window.addEventListener("load", this.handleLoad);
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
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        token = c.substring(name.length, c.length);
      }
    }
    if (!(token == "")) {
      if (document.getElementById("landing-register")) {
        document.getElementById("landing-register").style.display = "none";
      }

      if (document.getElementById("landing-dashboard")) {
        document.getElementById("landing-dashboard").style.display = "block";
      }
    } else {
      if (document.getElementById("landing-register")) {
        document.getElementById("landing-register").style.display = "block";
      }

      if (document.getElementById("landing-dashboard")) {
        document.getElementById("landing-dashboard").style.display = "none";
      }
    }
  }
  render() {
    var footer = document.getElementById("landingFooter");
    return (
      <Navbar
        fluid={true}
        inverse
        collapseOnSelect
        className="Navbar-top-landing"
      >
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
            <NavItem
              eventKey={1}
              href="/login"
              id="landing-register"
              className="landing-register"
              onClick={() => localStorage.setItem("ca", false)}
            >
              REGISTER
            </NavItem>
            <NavItem
              eventKey={1}
              href="/dashboard"
              id="landing-dashboard"
              className="landing-dashboard"
            >
              DASHBOARD
            </NavItem>

            <NavItem eventKey={5} href="/">
              <img src="/images/home-button-pink.svg" height="25" />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default class Startup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startup: [],
      applied: [],
      selected: []
    };
  }

  componentWillMount() {
    localStorage.removeItem("applied");
    localStorage.removeItem("id");
  }



  getCookie = (cname) => {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  componentWillMount() {

    var token = "";
    var name = "token=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        token = c.substring(name.length, c.length);
      }
    }

    axios
      .get(
        `${API_DOMAIN}/api/internship-opportunities/?status=applied`, {
          headers: {
            Authorization: 'Token ' + this.getCookie('token')
          }
        }
      )
      .then(res => {
        document.getElementById("mydiv").style.display = "none";
        this.setState({ applied: res.data });
      })


    axios
      .get(
        `${API_DOMAIN}/api/internship-opportunities/?status=won`, {
          headers: {
            Authorization: 'Token ' + this.getCookie('token')
          }
        }
      )
      .then(res => {
        document.getElementById("mydiv").style.display = "none";
        this.setState({ selected: res.data });
      })




    axios
      .get(`${API_DOMAIN}/api/internship-opportunities/`)
      .then(res => {
        document.getElementById("mydiv").style.display = "none";
        this.setState({ startup: res });
      })
  }

  componentDidMount() {
    document.getElementById("mydiv").style.display = "block";
    $(".first").click(function () {
      $(this).addClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".second").click(function () {
      $(this).addClass("activa");
      $(".first").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".third").click(function () {
      $(this).addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".fourth").click(function () {
      $(this).addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".fifth").click(function () {
      $(this).addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });

    $(".sixth").click(function () {
      $(this).addClass("activa");
      $(".fifth").removeClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });

    $(".seventh").click(function () {
      $(this).addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });

    $(".eight").click(function () {
      $(this).addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });

    $(".ninth").click(function () {
      $(this).addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });

    $(".tenth").click(function () {
      $(this).addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });

    $(".eleventh").click(function () {
      $(this).addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
    });

    $(".nav-stacked li:nth-of-type(1) a").click(function () {
      $(".first").addClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".nav-stacked li:nth-of-type(2) a").click(function () {
      $(".second").addClass("activa");
      $(".first").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".nav-stacked li:nth-of-type(3) a").click(function () {
      $(".third").addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".nav-stacked li:nth-of-type(4) a").click(function () {
      $(".fourth").addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".nav-stacked li:nth-of-type(5) a").click(function () {
      $(".fifth").addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".nav-stacked li:nth-of-type(6) a").click(function () {
      $(".sixth").addClass("activa");
      $(".fifth").removeClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".nav-stacked li:nth-of-type(7) a").click(function () {
      $(".seventh").addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".nav-stacked li:nth-of-type(8) a").click(function () {
      $(".eight").addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".nav-stacked li:nth-of-type(9) a").click(function () {
      $(".ninth").addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".tenth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".nav-stacked li:nth-of-type(10) a").click(function () {
      $(".tenth").addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".eleventh").removeClass("activa");
    });
    $(".nav-stacked li:nth-of-type(11) a").click(function () {
      $(".eleventh").addClass("activa");
      $(".first").removeClass("activa");
      $(".second").removeClass("activa");
      $(".third").removeClass("activa");
      $(".fourth").removeClass("activa");
      $(".fifth").removeClass("activa");
      $(".sixth").removeClass("activa");
      $(".seventh").removeClass("activa");
      $(".eight").removeClass("activa");
      $(".ninth").removeClass("activa");
      $(".tenth").removeClass("activa");
    });
  }

  showoperations() {
    switch (this.state.startup.data) {
      case null:
        return [];
      case undefined:
        return [];
      default:
        if (this.state.startup.data.startup) {
          return [
            this.state.startup.data.map(data => {
              if (data.opportunity_type == "Operations") {
                return (
                  <table class="table-fill">
                    <tbody class="table-hover">
                      <tr>
                        <td class="text-left text-right">
                          <div className="startup">
                            <img
                              className="startup-logo"
                              src={`${data.startup.image}`}
                            />
                            <div className="startup-details">
                              <div>{data.title}</div>
                              <div>{data.opportunity_type}</div>
                            </div>
                          </div>
                        </td>
                        <td class="text-left">
                          <div className="startup ">
                            <div className="startup-details startup-location">
                              <div>Location : {data.location}</div>
                              <Link to={`/sip/${data.id}`}>
                                {" "}
                                <div>View More</div>
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                );
              }
            })
          ];
        } else {
          return (
            <div
              style={{
                margin: "20% 40%",
                width: "fit-content",
                color: "red",
                fontSize: "20px"
              }}
            >
              No internship found
            </div>
          );
        }
    }
  }

  showdesign() {
    switch (this.state.startup.data) {
      case null:
        return;
      case undefined:
        return;
      default:
        if (this.state.startup.data.startup) {
          return [
            this.state.startup.data.map(data => {
              if (data.opportunity_type == "Design") {
                if (data.startup) {
                  return (
                    <tr>
                      <td class="text-left text-right">
                        <div className="startup">
                          <img
                            className="startup-logo"
                            src={`${data.startup.image}`}
                          />
                          <div className="startup-details">
                            <div>{data.title}</div>
                            <div>{data.opportunity_type}</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-left">
                        <div className="startup ">
                          <div className="startup-details startup-location">
                            <div>Location : {data.location}</div>
                            <Link to={`/sip/${data.id}`}>
                              {" "}
                              <div>View More</div>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              }
            })
          ];
        } else {
          return (
            <div
              style={{
                margin: "20% 40%",
                width: "fit-content",
                color: "red",
                fontSize: "20px"
              }}
            >
              No internship found
            </div>
          );
        }
    }
  }

  showweb() {
    switch (this.state.startup.data) {
      case null:
        return;
      case undefined:
        return;
      default:
        return [
          this.state.startup.data.map(data => {
            if (data.opportunity_type == "Web Development") {
              if (data.startup) {
                return (
                  <tr>
                    <td class="text-left text-right">
                      <div className="startup">
                        <img
                          className="startup-logo"
                          src={`${data.startup.image}`}
                        />
                        <div className="startup-details">
                          <div>{data.title}</div>
                          <div>{data.opportunity_type}</div>
                        </div>
                      </div>
                    </td>
                    <td class="text-left">
                      <div className="startup ">
                        <div className="startup-details startup-location">
                          <div>Location : {data.location}</div>
                          <Link to={`/sip/${data.id}`}>
                            {" "}
                            <div>View More</div>
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              }
            }
          })
        ];
    }
  }

  showapp() {
    switch (this.state.startup.data) {
      case null:
        return;
      case undefined:
        return;
      default:
        if (this.state.startup.data.startup) {
          return [
            this.state.startup.data.map(data => {
              if (data.opportunity_type == "Mobile App Development") {
                if (data.startup) {
                  return (
                    <tr>
                      <td class="text-left text-right">
                        <div className="startup">
                          <img
                            className="startup-logo"
                            src={`${data.startup.image}`}
                          />
                          <div className="startup-details">
                            <div>{data.title}</div>
                            <div>{data.opportunity_type}</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-left">
                        <div className="startup ">
                          <div className="startup-details startup-location">
                            <div>Location : {data.location}</div>
                            <Link to={`/sip/${data.id}`}>
                              {" "}
                              <div>View More</div>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              }
            })
          ];
        } else {
          return (
            <div
              style={{
                margin: "20% 40%",
                width: "fit-content",
                color: "red",
                fontSize: "20px"
              }}
            >
              No internship found
            </div>
          );
        }
    }
  }

  showbusiness() {
    switch (this.state.startup.data) {
      case null:
        return;
      case undefined:
        return;
      default:
        return [
          this.state.startup.data.map(data => {
            if (data.opportunity_type == "Business Development") {
              if (data.startup) {
                return (
                  <tr>
                    <td class="text-left text-right">
                      <div className="startup">
                        <img
                          className="startup-logo"
                          src={`${data.startup.image}`}
                        />
                        <div className="startup-details">
                          <div>{data.title}</div>
                          <div>{data.opportunity_type}</div>
                        </div>
                      </div>
                    </td>
                    <td class="text-left">
                      <div className="startup ">
                        <div className="startup-details startup-location">
                          <div>Location : {data.location}</div>
                          <Link to={`/sip/${data.id}`}>
                            {" "}
                            <div>View More</div>
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              }
            }
          })
        ];
    }
  }

  showdigital() {
    switch (this.state.startup.data) {
      case null:
        return;
      case undefined:
        return;
      default:
        if (this.state.startup.data.startup) {
          return [
            this.state.startup.data.map(data => {
              if (data.opportunity_type == "Digital Marketing") {
                if (data.startup) {
                  return (
                    <tr>
                      <td class="text-left text-right">
                        <div className="startup">
                          <img
                            className="startup-logo"
                            src={`${data.startup.image}`}
                          />
                          <div className="startup-details">
                            <div>{data.title}</div>
                            <div>{data.opportunity_type}</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-left">
                        <div className="startup ">
                          <div className="startup-details startup-location">
                            <div>Location : {data.location}</div>
                            <Link to={`/sip/${data.id}`}>
                              {" "}
                              <div>View More</div>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              }
            })
          ];
        } else {
          return (
            <div
              style={{
                margin: "20% 40%",
                width: "fit-content",
                color: "red",
                fontSize: "20px"
              }}
            >
              No internship found
            </div>
          );
        }
    }
  }

  showdatascience() {
    switch (this.state.startup.data) {
      case null:
        return;
      case undefined:
        return;
      default:
        return [
          this.state.startup.data.map(data => {
            if (data.opportunity_type == "Data Science") {
              if (data.startup) {
                return (
                  <tr>
                    <td class="text-left text-right">
                      <div className="startup">
                        <img
                          className="startup-logo"
                          src={`${data.startup.image}`}
                        />
                        <div className="startup-details">
                          <div>{data.title}</div>
                          <div>{data.opportunity_type}</div>
                        </div>
                      </div>
                    </td>
                    <td class="text-left">
                      <div className="startup ">
                        <div className="startup-details startup-location">
                          <div>Location : {data.location}</div>
                          <Link to={`/sip/${data.id}`}>
                            {" "}
                            <div>View More</div>
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              }
            }
          })
        ];
    }
  }

  showdataanalytics() {
    switch (this.state.startup.data) {
      case null:
        return;
      case undefined:
        return;
      default:
        if (this.state.startup.data.startup) {
          return [
            this.state.startup.data.map(data => {
              if (data.opportunity_type == "Data Analytics") {
                if (data.startup) {
                  return (
                    <tr>
                      <td class="text-left text-right">
                        <div className="startup">
                          <img
                            className="startup-logo"
                            src={`${data.startup.image}`}
                          />
                          <div className="startup-details">
                            <div>{data.title}</div>
                            <div>{data.opportunity_type}</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-left">
                        <div className="startup ">
                          <div className="startup-details startup-location">
                            <div>Location : {data.location}</div>
                            <Link to={`/sip/${data.id}`}>
                              {" "}
                              <div>View More</div>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              }
            })
          ];
        } else {
          return (
            <div
              style={{
                margin: "20% 40%",
                width: "fit-content",
                color: "red",
                fontSize: "20px"
              }}
            >
              No internship found
            </div>
          );
        }
    }
  }

  showall() {
    switch (this.state.startup.data) {
      case null:
        return;
      case undefined:
        return [];
      default:
        return [
          this.state.startup.data.map(data => {
            if (data.opportunity_type == "OPR") {
              data.opportunity_type = "Operations";
            } else if (data.opportunity_type == "DES") {
              data.opportunity_type = "Design";
            } else if (data.opportunity_type == "WEB") {
              data.opportunity_type = "Web Development";
            } else if (data.opportunity_type == "MAD") {
              data.opportunity_type = "Mobile App Development";
            } else if (data.opportunity_type == "BDT") {
              data.opportunity_type = "Business Development";
            } else if (data.opportunity_type == "DMT") {
              data.opportunity_type = "Digital Marketing";
            } else if (data.opportunity_type == "DST") {
              data.opportunity_type = "Data Science";
            } else if (data.opportunity_type == "DAS") {
              data.opportunity_type = "Data Analytics";
            } else if (data.opportunity_type == "MRK") {
              data.opportunity_type = "Marketing";
            } else if (data.opportunity_type == "OTR") {
              data.opportunity_type = "Other";
            }
            if (data.startup) {
              return (
                <tr>
                  <td class="text-left text-right">
                    <div className="startup">
                      <img
                        className="startup-logo"
                        src={`${data.startup.image}`}
                      />
                      <div className="startup-details">
                        <div>{data.title}</div>
                        <div>{data.opportunity_type}</div>
                      </div>
                    </div>
                  </td>
                  <td class="text-left">
                    <div className="startup ">
                      <div className="startup-details startup-location">
                        <div>Location : {data.location}</div>
                        <Link to={`/sip/${data.id}`}>
                          {" "}
                          <div>View More</div>
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            }
          })
        ];
    }
  }

  showmarketting() {
    switch (this.state.startup.data) {
      case null:
        return [];
      case undefined:
        return [];
      default:
        if (this.state.startup.data.startup) {
          return [
            this.state.startup.data.map(data => {
              if (data.opportunity_type == "Marketing") {
                if (data.startup) {
                  return (
                    <tr>
                      <td class="text-left text-right">
                        <div className="startup">
                          <img
                            className="startup-logo"
                            src={`${data.startup.image}`}
                          />
                          <div className="startup-details">
                            <div>{data.title}</div>
                            <div>{data.opportunity_type}</div>
                          </div>
                        </div>
                      </td>
                      <td class="text-left">
                        <div className="startup ">
                          <div className="startup-details startup-location">
                            <div>Location : {data.location}</div>
                            <Link to={`/sip/${data.id}`}>
                              {" "}
                              <div>View More</div>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                }
              }
            })
          ];
        } else {
          return (
            <div
              style={{
                margin: "20% 40%",
                width: "fit-content",
                color: "red",
                fontSize: "20px"
              }}
            >
              No internship found
            </div>
          );
        }
    }
  }

  showother() {
    switch (this.state.startup.data) {
      case null:
        return;
      case undefined:
        return;
      default:
        return [
          this.state.startup.data.map(data => {
            if (data.startup) {
              if (data.opportunity_type == "Other") {
                return (
                  <tr>
                    <td class="text-left text-right">
                      <div className="startup">
                        <img
                          className="startup-logo"
                          src={`${data.startup.image}`}
                        />
                        <div className="startup-details">
                          <div>{data.title}</div>
                          <div>{data.opportunity_type}</div>
                        </div>
                      </div>
                    </td>
                    <td class="text-left">
                      <div className="startup ">
                        <div className="startup-details startup-location">
                          <div>Location : {data.location}</div>
                          <Link to={`/sip/${data.id}`}>
                            {" "}
                            <div>View More</div>
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              }
            }
          })
        ];
    }
  }

  applied() {
    switch (this.state.applied) {
      case undefined:
        return;
      case null:
        return;
      default:
        return [
          this.state.applied.map(res => {
            return (
              <tr>
                <td class="text-left text-right">
                  <div className="startup">
                    <img src={`${res.startup.image}`} className="startup-logo" />
                    <div className="startup-details">
                      <div>{res.startup.title}</div>
                      <div>Operations and Design</div>
                    </div>
                  </div>
                </td>
                <td class="text-left">
                  <div className="startup ">
                    <div className="startup-details startup-location rox">
                      <div>Location :{res.location}</div>
                      <div>Applied on : </div>
                    </div>
                  </div>
                </td>
              </tr>
            )
          })
        ];
    }
  }

  results() {
    switch (this.state.selected) {
      case undefined:
        return;
      case null:
        return;
      default:
        return [
          this.state.selected.map(res => {
            return (
              <tr>
                <td class="text-left text-right">
                  <div className="startup">
                    <div className="startup-logo" />
                    <div className="startup-details">
                      <div>PayPal</div>
                      <div>Operations and Design</div>
                    </div>
                  </div>
                </td>
                <td class="text-left">
                  <div className="startup ">
                    <div className="startup-details startup-location rox">
                      <div>Location : Mumbai</div>
                      <div>Applied on : 25th February 2018</div>
                    </div>
                  </div>
                </td>
              </tr>
            )
          })

        ];
    }
  }

  render() {






    return (
      <div>
        <div id="mydiv" />
        <LandingNavBar />
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Opportunities">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="clearfix" style={{ minHeight: "100vh" }}>
                <Col sm={3} className="startup-left">
                  <div className="category">Category :</div>
                  <Nav bsStyle="pills" stacked className="nav-new">
                    <NavItem eventKey="first" id="tab-left">
                      <div className="circle first activa " id="" />
                      All
                    </NavItem>
                    <NavItem eventKey="second" id="tab-left">
                      <div className="circle second" id="" />
                      Operations
                    </NavItem>

                    <NavItem eventKey="3">
                      <div className="circle third" id="" />
                      Design
                    </NavItem>
                    <NavItem eventKey="3.1" id="three">
                      <div className="circle fourth" id="" />
                      Web Development
                    </NavItem>
                    <NavItem eventKey="3.2">
                      <div className="circle fifth" id="" />
                      App Development
                    </NavItem>
                    <NavItem eventKey="3.3">
                      <div className="circle sixth" id="" />
                      Business Development
                    </NavItem>
                    <NavItem eventKey="3.4">
                      <div className="circle seventh" id="" />
                      Digital Marketing
                    </NavItem>
                    <NavItem eventKey="3.5">
                      <div className="circle eight" id="" />
                      Data Science
                    </NavItem>
                    <NavItem eventKey="3.6">
                      <div className="circle ninth" id="" />
                      Data Analytics
                    </NavItem>
                    <NavItem eventKey="3.7">
                      <div className="circle tenth" id="" />
                      Marketing
                    </NavItem>
                    <NavItem eventKey="3.8">
                      <div className="circle eleventh" id="" />
                      Other
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm={9} className="startup-right">
                  <Tab.Content animation>
                    <Tab.Pane eventKey="first">
                      <table class="table-fill">
                        <tbody class="table-hover">{this.showall()}</tbody>
                      </table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {this.showoperations()}
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                      <table class="table-fill">
                        <tbody class="table-hover">{this.showdesign()}</tbody>
                      </table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.1">
                      <table class="table-fill">
                        <tbody class="table-hover">{this.showweb()}</tbody>
                      </table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.2">
                      <table class="table-fill">
                        <tbody class="table-hover">{this.showapp()}</tbody>
                      </table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.3">
                      <table class="table-fill">
                        <tbody class="table-hover">{this.showbusiness()}</tbody>
                      </table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.4">
                      <table class="table-fill">
                        <tbody class="table-hover">{this.showdigital()}</tbody>
                      </table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.5">
                      <table class="table-fill">
                        <tbody class="table-hover">
                          {this.showdatascience()}
                        </tbody>
                      </table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.6">
                      <table class="table-fill">
                        <tbody class="table-hover">
                          {this.showdataanalytics()}
                        </tbody>
                      </table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.7">
                      <table class="table-fill">
                        <tbody class="table-hover">
                          {this.showmarketting()}
                        </tbody>
                      </table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.8">
                      <table class="table-fill">
                        <tbody class="table-hover">{this.showother()}</tbody>
                      </table>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>;
          </Tab>
          <Tab eventKey={2} title="Applied">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="clearfix" style={{ height: "200vh" }}>
                <Col sm={3} className="startup-left">
                  <div className="category">Category :</div>
                  <Nav bsStyle="pills" stacked className="nav-new">
                    <NavItem eventKey="first" id="tab-left">
                      <div className="circle first activa " id="" />
                      All
                    </NavItem>
                    <NavItem eventKey="second" id="tab-left">
                      <div className="circle second" id="" />
                      Operations
                    </NavItem>

                    <NavItem eventKey="3">
                      <div className="circle third" id="" />
                      Design
                    </NavItem>
                    <NavItem eventKey="3.1" id="three">
                      <div className="circle fourth" id="" />
                      Web Development
                    </NavItem>
                    <NavItem eventKey="3.2">
                      <div className="circle fifth" id="" />
                      App Development
                    </NavItem>
                    <NavItem eventKey="3.3">
                      <div className="circle sixth" id="" />
                      Business Development
                    </NavItem>
                    <NavItem eventKey="3.4">
                      <div className="circle seventh" id="" />
                      Digital Marketing
                    </NavItem>
                    <NavItem eventKey="3.5">
                      <div className="circle eight" id="" />
                      Data Science
                    </NavItem>
                    <NavItem eventKey="3.6">
                      <div className="circle ninth" id="" />
                      Data Analytics
                    </NavItem>
                    <NavItem eventKey="3.7">
                      <div className="circle tenth" id="" />
                      Marketing
                    </NavItem>
                    <NavItem eventKey="3.8">
                      <div className="circle eleventh" id="" />
                      Other
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content animation>
                    <Tab.Pane eventKey="first">
                      <table class="table-fill">
                        <tbody class="table-hover">{this.applied()}</tbody>
                      </table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"></Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>;
          </Tab>
          <Tab eventKey={3} title="Results">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="clearfix" style={{ height: "200vh" }}>
                <Col sm={3} className="startup-left">
                  <div className="category">Category :</div>
                  <Nav bsStyle="pills" stacked className="nav-new">
                    <NavItem eventKey="first" id="tab-left">
                      <div className="circle first activa " id="" />
                      All
                    </NavItem>
                    <NavItem eventKey="second" id="tab-left">
                      <div className="circle second" id="" />
                      Operations
                    </NavItem>

                    <NavItem eventKey="3">
                      <div className="circle third" id="" />
                      Design
                    </NavItem>
                    <NavItem eventKey="3.1" id="three">
                      <div className="circle fourth" id="" />
                      Web Development
                    </NavItem>
                    <NavItem eventKey="3.2">
                      <div className="circle fifth" id="" />
                      App Development
                    </NavItem>
                    <NavItem eventKey="3.3">
                      <div className="circle sixth" id="" />
                      Business Development
                    </NavItem>
                    <NavItem eventKey="3.4">
                      <div className="circle seventh" id="" />
                      Digital Marketing
                    </NavItem>
                    <NavItem eventKey="3.5">
                      <div className="circle eight" id="" />
                      Data Science
                    </NavItem>
                    <NavItem eventKey="3.6">
                      <div className="circle ninth" id="" />
                      Data Analytics
                    </NavItem>
                    <NavItem eventKey="3.7">
                      <div className="circle tenth" id="" />
                      Marketing
                    </NavItem>
                    <NavItem eventKey="3.8">
                      <div className="circle eleventh" id="" />
                      Other
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content animation>
                    <Tab.Pane eventKey="first">
                      <table class="table-fill">
                        <tbody class="table-hover">{this.results()}</tbody>
                      </table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>;
          </Tab>
        </Tabs>;
      </div>
    );
  }
}
