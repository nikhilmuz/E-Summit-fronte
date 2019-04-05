import React, { Component } from 'react';
import './content.css'
import { Row, Grid, Col,ButtonToolbar,Button } from 'react-bootstrap'
import diploma from '../img/diploma.svg'
import idea from '../img/idea.svg'
import notes from '../img/notes.svg'

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
                           
The ability to express the idea is well-nigh as important as the idea itself. It's not just about ideas, it’s about making ideas happen. Not tomorrow, not next week, but today. The true entrepreneur is a doer, not a dreamer. However, for good ideas to grow and true innovation to occur, you need both conflict and human interaction. The growth of any idea into a successful enterprise relies on competitiveness and innovation, funding and planning. Although it’s not critical that a founder come up with the right idea, but we think it is quite important that there is something right about the idea. Gear up to compete with the best minds in the country and prove your business acumen. Confronted with a real-life scenario, just strong business skills and financial know-how won’t be enough. Only those with a spark of creativity and a zeal for realizing business opportunities while creating ideas will make it through. Come prove your mettle, foster the ideator in you, and defend your idea before a panel of venture capitalists and angel investors, and before the general public at Idea Storm, a national level contest at E-Summit, IIT Roorkee.

                            </p>
                        </Row>
                        <Row  id="perks">
                            <h1>Perks</h1>
                        </Row>
                        <Row className="appendedImages">

                        <Col xs={12} md={4}>
                                <div className="bplan-about-div">
                                    <img src = {notes}/>
                                    <p>The winner and runner-up of the Champion round will be rewarded with cash prizes of Rs 50,000 and Rs 20,000 respectively.</p>
                                            
                                            
                                </div>
                                    
                        </Col>
                        <Col xs={12} md={4}>
                                <div className="bplan-about-div">
                                    <img src ={diploma} />
                                    <p>The first three placeholders of the Champion round will be awarded Certificates of Excellence. All Champion round participants will awarded with a Certificate of Appreciation each.
</p>    
                                </div>
                                    
                        </Col>
                        <Col xs={12} md={4}>
                                <div className="bplan-about-div">
                                    <img src = {idea}/>
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