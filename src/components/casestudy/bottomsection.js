import React, { Component } from 'react';
import { Row, Grid, Col,ButtonToolbar,Button } from 'react-bootstrap'
import './bottomsection.css'
import group5 from '../img/Group5.svg'


class Bottomsection extends React.Component{
    constructor(props) {
        super(props);
        
       
      }
    render() {
        return (
                  <Grid fluid="container-fluid" className="bplan-bottom-grid-ideastorm">
                <Row className="bplan-bottom-row">
                    <Col mdOffset={2} md={10} sm={12} xs={12} className="bplan-bottom-column">
                        <ul  id="rules">
                            <li><p className="bplan-bottom-rules">Rules</p></li>
                           <li>
                           <ul> 
                            <li><p>Each team may have a maximum of four members. Solo entries are also allowed.</p></li>
                            <li><p>No member can be a part of two or more teams</p></li>
                            <li><p>Any entry is allowed to submit only one submission.</p></li>
                            <li><p>Multiple teams from the same college are allowed to participate for the event.</p></li>
                            <li><p>The last modified abstract as on 3rd March 2018 11:59 pm will be considered final.</p></li>
                            <li><p>The teams must strictly follow all the deadlines failing to which will lead to their disqualification</p></li>
                            <li><p>You however are allowed to do your own research through free internet sources and stakeholder interactions.</p></li>
                            <li><p>Any research that you do should be attached to the submission email in the form of downloadable Google drive links. These can include Interaction Videos or YouTube video clips, infographics, tables, reports, etc. Everything you submit will be reviewed by both the Stage I and Stage II judges</p></li>
                            </ul>
                            </li>
                        </ul>
                        <ul className="bplan-bottom-regidtration-ul" id="procedure">
                                    <li><p className="bplan-bottom-registration">Eligibility Criteria</p></li>
                                   <li><ul> <li><p>Each team may have a maximum of four members. Solo entries are also allowed</p></li>
                                    <li><p>Participants should be students who can be from the same college or different colleges.</p></li>                                    </ul></li>
                                    
                        </ul>
                        <ul className="bplan-bottom-regidtration-ul" id="procedure">
                                    <li><p className="bplan-bottom-registration">Registration Procedure</p></li>
                                   <li>
                                   <ul> <li><p>Registration can only be done online at <a href="https://goo.gl/forms/78KHjwb6RqdhHbUD2" target="_blank">http://bit.ly/SIC_form</a>.</p></li>
                                    <li><p>No applications shall be accepted after 3rdth March 2018 11:59 pm.</p></li>
                                    <li><p>All participants will need to present their College ID or an equivalent identity document for the purpose of identity verification.</p></li>
                                    </ul>
                                    </li>
                                    
                        </ul>
                        <ul>
                            <li><div className="bplan-bottom-horizontal-line"></div></li>
                        </ul>
                            
                        
                    </Col>
                   
                   
                </Row>
            </Grid>
    
               
              )
            
              
        
    }
}




  export default Bottomsection;