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
                            <li><p>Each team may consist of at most four members, who need not belong to the same organization.</p></li>
                            <li><p>Multiple teams from the same organization are allowed to participate in the event</p></li>
                            <li><p>The decision of the judges shall be final and binding. In the Combatant and Challenger rounds, EDC IIT Roorkee retains the right to evaluate all ideas and choose eligibility criteria.</p></li>
                            <li><p>Participants shall be disqualified if they are proven to have provided fraudulent information or have attempted to act unethically at any stage of the competition</p></li>
                            <li><p> There is no restriction on any individual to participate. Members of all educational and professional fraternities are welcome to participate.</p></li>
                            <li><p>Individual participation is allowed in the competition, although participation in teams is encouraged.</p></li>
                            </ul>
                            </li>
                        </ul>
                        <ul className="bplan-bottom-regidtration-ul" id="procedure">
                                    <li><p className="bplan-bottom-registration">Registration Procedure</p></li>
                                   <li><ul> <li><p>Registration for Idea Storm can only be done online at <a href="http://bit.ly/IdeaStorm_form" target="_blank">http://bit.ly/IdeaStorm_form</a>.</p></li>
                                    <li><p>No applications shall be accepted after 25th February 2018 EOD.
</p></li>
                                    <li><p>All participants will need to present their College ID or an equivalent identity document for the purpose of identity verification at the time of Challenger and Champion rounds.</p></li>
                                    </ul></li>
                                    
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