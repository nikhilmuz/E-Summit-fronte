import React, { Component } from 'react';
import './carousel1.css'
import { Row, Grid, Col,ButtonToolbar,Button } from 'react-bootstrap'
import casestudy from "../img/casestudy.svg"
import axios from 'axios'
import { API_DOMAIN } from '../../Constants/config'


class Carousel extends React.Component{
    constructor(props) {
        super(props);
      }
     
      componentDidMount() {            
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
   
    
    render() {
        return (
            <Grid className="carousel-grid-casestudy"  fluid="container-fluid">
                <Row className="show-grid">
                    <Col xs={12} sm={12} md={6} >
                       <div className="carousel-left-content">
                            <ul>
                                <li><p className="bplan-text1">Social Innovation Challenge</p></li>
                                <li><p className="bplan-text2-ideastorm">Case Study</p></li>
                                <li><ButtonToolbar>
                                <Button bsStyle="warning" bsClass="bplan-button" onClick={e => {
                e.preventDefault()
                this.toggleWorkshop(9)
                window.open("https://goo.gl/forms/78KHjwb6RqdhHbUD2");
                }}><span className="bplan-button-content">Apply Now</span></Button>
                 <Button bsStyle="warning" bsClass="bplan-button bplan-button-2" onClick={e => {
                e.preventDefault()
                this.toggleWorkshop(9)
                window.open("https://drive.google.com/file/d/1rmwaYdXQoHq05SSQ9DJumU9Qpf-A7_0_/view?usp=sharing");
                }}><span className="bplan-button-content">Download Pdf</span></Button>
                                    </ButtonToolbar>
                                </li>
                            </ul>
                       </div>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <div className="carousel-right-content">
                           <img src={casestudy} width='607' height='256'/>
                        </div>
                    </Col>
                </Row>
            </Grid>
              )
            
              
        
    }
}



  export default Carousel;