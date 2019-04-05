
import React, { Component } from 'react';
import Navbar from './Navbar'
import Carousel from './carousel'
import Content from './content'
import Round from './round'
import Bottomsection from './bottomsection'
import './bplancombined.css'
import { Row, Grid, Col } from 'react-bootstrap'
export default class CaseStudyCombined extends React.Component{
    constructor(props) {
        super(props);
        
       
      }
    render() {
        return (
            <div>
                    <Navbar/> 
                    <Carousel/>
                    <Content/>
                    <Round/> 
                    <Bottomsection/>
                    <Grid className="bplan-bottom-contacts">
                        <Row>
                            <p>For any queries regarding the Problem Statement, you can contact the coordinators:</p>
                        </Row>
                        <Row className="bplan-bottom-second-row">
                            <Col md={4} xs={4} sm={4}><p className="bplan-bottom-second-row-para1">Ankit Alok Bagaria | +91-7060334733 </p></Col><Col mdOffset={4}  md={4} xs={4} sm={4}><p className="bplan-bottom-second-row-para2">Mimansi Agarwal | +91-8755440251</p></Col>   
                        </Row>
                    </Grid>
            </div>
        )
    }
    
    }