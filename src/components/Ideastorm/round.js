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
          <center><h2 className="round-head">For any queries email <a href="mailto:ideastorm.esummit.iitr@gmail.com">ideastorm.esummit.iitr@gmail.com</a> with subject “Query | Idea Storm</h2></center>
          <br />
          </div>
            <div className="ideastorm-flex-collapsible"  id="rounds">
            
    <Collapsible trigger="ROUND 1" open="true">
        
            <Grid fluid="container-fluid" className="bplan-round-container">
                <Row>
                
                    <Col className="bplan-round-first-column">
                        <ul>
                            <li><p className="bpan-round1">Combatant</p></li>
                            <li><p className="bplan-entries1">In the Combatant round all teams are required to submit an abstract of their idea which will be evaluated by EDC, IIT Roorkee on the basis of the :</p></li>
                       <li>
                        <ol>
                                    <li><p className="bplan-entries1">Innovativeness of your idea</p></li>
                                    <li><p className="bplan-entries1">Real-world problem it mitigates</p></li>
                                    <li><p className="bplan-entries1">Market opportunity for the idea</p></li>
                                    <li><p className="bplan-entries1">Competitive advantage that it possesses</p></li>
                        </ol>
                        </li>
                        <li><p className="bplan-entries1">The teams with the best ideas which qualify the minimum eligibility criteria will be allowed to progress to the Challenger round.
Combatant round applications will not be accepted after <i>2nd March 2018 EOD</i>. Results of the same will be declared by <i>3rd March 2018</i>.</p>
<p className="bplan-entries1">NOTE: Contestants are to prepare a Business Model Canvas in the form of a PDF or PPSX document before applying to the Combatant round. They may use the template downloadable <a href="http://bit.ly/BMC_Template">here</a>.</p>
<p className="bplan-entries1" >To participate in the subsequent round, please register yourself at <a target="_blank" href="http://esummit.iitr.ac.in/signup">esummit.iitr.ac.in/signup</a> </p>
                        </li>
                        </ul>
                        <br />
                    </Col> 
                </Row>
            </Grid>
            </Collapsible>
           <Collapsible trigger="ROUND 2">
            
             <Grid fluid="container-fluid" className="bplan-round-container">
                 <Row>
                 
                     <Col className="bplan-round-first-column">
                         <ul>
                             <li><p className="bpan-round1">Challenger</p></li>
                             <li><p className="bplan-entries1">Do you believe your idea can survive an actual marketplace? Do you honestly believe your team can survive the competitive landscape? You can prove it to investors and to yourselves at the Challenger round of Idea Storm on <i>10th March 2018</i>. All teams that qualify the Combatant round will be provided with an opportunity to exhibit, showcase and pitch their ideas through a 2 hour long trade fair wherein they will present their ideas to customers of which some would be judges. After all, the customer is always right.</p></li>
                             <li><p className="bplan-entries1">NOTE: All teams are to make their own arrangements for the requisite paraphernalia of their exhibit.</p></li>

                         </ul>
                     </Col>   
                 </Row>
             </Grid>

             </Collapsible>
           <Collapsible trigger="ROUND 3">
        
            <Grid fluid="container-fluid" className="bplan-round-container">
                <Row>
                
                    <Col className="bplan-round-first-column">
                        <ul>
                            <li><p className="bpan-round1">Champion</p></li>
                            <li><p className="bplan-entries1">On <i>11th March 2018</i>, each team would be given the opportunity to pitch their ideas before a panel of venture capitalists and angel investors. The presentations should be timed for 10-minutes, and may be accompanied by an idea document in the form of a 10-slide PPSX file which illustrates the following:</p></li>
                       <li>
                        <ol>
                                    <li><p className="bplan-entries1">Innovativeness/Differentiability of your idea</p></li>
                                    <li><p className="bplan-entries1">Real-world problem it mitigates</p></li>
                                    <li><p className="bplan-entries1">Market opportunity for the idea (We recommend PEST analysis)</p></li>
                                    <li><p className="bplan-entries1">Competitive advantage that it possesses (We recommend SWOT analysis)</p></li>
                                    <li><p className="bplan-entries1">The Business model and approach adopted to solve the real-world problem</p></li>
                                    <li><p className="bplan-entries1">Milestones (We recommend SMART goal setting)</p></li>

                        </ol>
                        </li>
                        <li><p className="bplan-entries1">A further 2-minutes will be provided for a Question & Answer session with the judges.</p></li>
                        <li><p className="bplan-entries1">NOTE: The cover slide of the .PPSX document should contain the Team name, list of team members and the corresponding phone numbers and email addresses.</p></li>
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