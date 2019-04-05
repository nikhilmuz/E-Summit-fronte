import React, { Component } from 'react';
import './content.css'
import { Row, Grid, Col,ButtonToolbar,Button } from 'react-bootstrap'
import diploma from '../img/diploma-casestudy.svg'
import idea from '../img/idea-casestudy.svg'
import notes from '../img/notes-casestudy.svg'

    // const content = {
    //     srcs:[notes,idea,diploma],
    //     text:['','Your ideas will receive the exposure of and recognition from the leading startups and organizations associating with E-Summit 2018.',
    //     'A certificate of appreciation would be provided to the participants.'   
    //         ],
    //     }
    // const listItems2 = content.text.map((text,ind)=>
    //         <p>{text}</p>
            
    //        )
  
    //        const listItems = content.srcs.map((title,index)=>
    //                                 {title}
    //                         )
         
    //        if(text.ind == title.index) {
           
    //         <Col xs={12} md={4}>
    //             <div>
    //                 <img src = {title}/>
    //                 <p></p>
                    
                    
    //             </div>
            
    //         </Col>}
            
    

class Content extends React.Component{
    constructor(props) {
        super(props);
        
       
      }  
    
    render() {
        return (
            <Grid fluid="container-fluid">
                <Row className="show-grid">
                    <Col xs={12} md={8} mdOffset={2} className="bplan-content-column">
                        <Row  id="about">
                            <h1>About</h1>
                            <p className="bplan-content-para1-ideastorm">
                           
Current methods to provide the porter services in Indian Railway stations are pathetic in terms of the ease to get a coolie, booking one and later paying for it without any hustles or feuds. This goes for the service providers or Coolies as well. Fluctuating wages based on a bargain model, fewer perks and negligible respect for the job drives the tension between a customer and a coolie. Having identified this, Enactus IIT Roorkee in its drive to empower the porters and help the customers have come up with an in depth analysis of the problem. However, they are stuck with a feasible solution to tackle this and require your team’s help to reach a conclusion.
 
Follow the guidelines below and register your team for the competition. You can read the detailed case. The case contains the key findings from the Enactus IIT Roorkee team and your main tasks as their consultants.

                            </p>
                        </Row>
                        <Row  id="perks">
                            <h1>Perks</h1>
                        </Row>
                        <Row className="appendedImages">

                        <Col xs={12} md={4}>
                                <div className="bplan-about-div">
                                    <img src = {notes}/>
                                    <p>The winner and runner-up of the final round will be rewarded with cash prizes of Rs 20,000 and Rs 5,000 respectively.</p>  
                                </div>
                                    
                        </Col>
                        <Col xs={12} md={4}>
                                <div className="bplan-about-div">
                                    <img src = {idea}/>
                                    <p>The first three placeholders will be awarded Certificates of Excellence. All final round participants will awarded with a Certificate of Appreciation each.
</p>    
                                </div>
                                    
                        </Col>
                        <Col xs={12} md={4}>
                                <div className="bplan-about-div">
                                    <img src = {diploma}/>
                                    <p>Your ideas will gain exposure and recognition from start-ups, venture capitalists and angel investors associated with E-Summit 2018 and EDC, IIT Roorkee.
</p>
                                            
                                            
                                </div>
                                    
                        </Col>
                        </Row>
                        
                    </Col>
                    
                </Row>
            </Grid>
                    
    
               
              )
            
              
        
    }
}




  export default Content;