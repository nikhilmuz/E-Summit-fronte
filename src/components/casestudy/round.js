import React, { Component } from 'react';
import { Row, Grid, Col,ButtonToolbar,Button } from 'react-bootstrap'
import './round.css'
import round2 from "../img/ROUND2.png"
import Collapsible from 'react-collapsible';






class Round extends React.Component{
    constructor(props) {
        super(props);
       
      }
    
    render() {
        return (
          <div>
          <div>
          <center><h2 className="round-head">For any queries email <a href="mailto:enactusiitr@gmail.com">enactusiitr@gmail.com</a> with subject “Query | SIC”</h2></center>
          <br />
          </div>
            <div className="ideastorm-flex-collapsible"  id="rounds">
            
    <Collapsible trigger="ROUND 1" open="true">
        
            <Grid fluid="container-fluid" className="casestudy-round-container">
                <Row>
                
                    <Col className="bplan-round-first-column">
                        <ul>
                            <li><p className="bpan-round1">Abstract Submissions</p></li>
                            <li><p className="bplan-entries1">Participants are needed to send in the abstract of the original/review work including the
References, the idea proposed with figures (if needed) to <br /><a href="mailto:enactusiitr@gmail.com">enactusiitr@gmail.com</a> and CC to <a href="mailto:esummit@iitr.ac.in">esummit@iitr.ac.in</a>. It should present your perspective as well as address all the issues pertaining to the problem statement.</p></li>
                       <li>
                        <ol>
                                    <li><p className="bplan-entries1">Abstract should not exceed 1000 words and the covering page of the abstract must have:
Name(s), Institution of study, Email address(s), contact number(s), e-summit ids of all the team members.</p></li>
                                     <li><p className="bplan-entries1">Your email should have the event and team name as your subject. For Example, A mail should have subject as: “[event name]: Team “name” and file title as: “Abstract by Team “name””.Selection to the next round for final presentations will be based on the abstract submitted.</p></li>
                                    <li><p className="bplan-entries1">Deadline for Abstract Submissions is 6rd March, 2018 by 11.59pm.</p></li>
                                    <li><p className="bplan-entries1">The result for the first round will be put up on the website till 7th March, 2018 and will also be mailed to you.</p></li>
                                    <li><p className="bplan-entries1">For any particular queries regarding paper presentations, please contact the respective event Coordinators</p></li>
                                    <li><p className="bplan-entries1">Download <a target="_blank" href="https://drive.google.com/file/d/1rmwaYdXQoHq05SSQ9DJumU9Qpf-A7_0_/view?usp=sharing">casestudy</a></p></li>
                        </ol>
                        </li>
                        <li><p className="bplan-entries1">The teams with the best ideas which qualify the minimum eligibility criteria will be allowed to progress to the Challenger round.
Combatant round applications will not be accepted after <i>6rd March, 2018 EOD</i>Results of the same will be declared by <i>7th March, 2018 EOD</i>.
NOTE: Contestants are to prepare a Business Model Canvas in the form of a PDF or PPSX document before applying to the Combatant round. They may use the template downloadable <a href="http://bit.ly/BMC_Template">here</a>.</p>
                        </li>
                        </ul>
                        <br />
                    </Col> 
                </Row>
            </Grid>
            </Collapsible>
           <Collapsible trigger="ROUND 2">
            
             <Grid fluid="container-fluid" className="casestudy-round-container">
                 <Row>
                 
                     <Col className="bplan-round-first-column">
                         <ul>
                             <li><p className="bpan-round1">Presentation</p></li>
                             <li><p className="bplan-entries1">The second round will be conducted at IIT Roorkee during E-Summit 2018</p></li>
                             <li>
                              <ol>
                                    <li><p className="bplan-entries1">Participants should submit their full paper in “.pdf” format. You need to bring two passport size photographs of each participant along with all the necessary details attached.</p></li>
                                     <li><p className="bplan-entries1">Final Presentations should be in “.pdf” format strictly and should be timed for 15 min. (10 minutes for presentation and 5 minutes for Question and Answer round. Be as creative as possible, while presenting your solution.</p></li>
                                    <li><p className="bplan-entries1">Participants should ensure that their presentation include all relevant figures, tables and references.</p></li>
                                    <li><p className="bplan-entries1">The decision of the judges shall be final and binding.</p></li>
                        </ol>
                             </li>
                         </ul>
                         <br />
                     </Col>   
                 </Row>
             </Grid>

             </Collapsible>
            </div>
           </div>

            
  
               
              
            )}
}




  export default Round;