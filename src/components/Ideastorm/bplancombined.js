
import React, { Component } from 'react';
import Navbar from './Navbar'
import Carousel from './carousel'
import Content from './content'
import Round from './round'
import Bottomsection from './bottomsection'
import './bplancombined.css'
import { Row, Grid, Col } from 'react-bootstrap'
export default class Ideastormcombined extends React.Component{
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
                            <p>For any queries regarding the Problem Statement, you can WhatsApp the coordinators:</p>
                            
                        </Row>
                        <Row className="bplan-bottom-second-row">
                            <Col md={4} xs={4} sm={4}><p className="bplan-bottom-second-row-para1">Bhavya Mehta | +91-83948814107 </p></Col><Col md={4} xs={4} sm={4}><p className="bplan-bottom-second-row-para2">Snehashis Khan | +91-9836300844</p></Col><Col md={4} xs={4} sm={4}><p className="bplan-bottom-second-row-para3">Amritha | +91-9500048067</p></Col>
                            
                        </Row>
                    </Grid>
            </div>
        )
    }
    
    }