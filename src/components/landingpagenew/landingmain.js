import React, { Component } from 'react';
import { Row, Grid, Col ,ButtonGroup,Button} from 'react-bootstrap'
import './landingmain.css'
import Competitions from './competitions'
import Industry4 from './industry4.js'
import Competitionsfile from './competitionfile.js' 


export default class LandingMain extends React.Component{
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(e){
        var a = e.target.getAttribute('className');
      return (a);
      
    
    }
   

     
    
 render() {
//      return(
//         <Grid>
//         <Row className="show-grid">
//                     <Col xs={12} md={4} className="ln-left-column">
//                         <ul className="ln-buttons-ul">
//                             <li><a href="#" className="Webpreneurship" onClick={this.handleClick}>Webpreneurship</a></li>
//                             <li><a href="#" className="Industry4.0" onClick={this.handleClick}>Industry 4.0</a></li>
                            
//                         </ul>
//                     </Col>
                    
//         </Row>
//        </Grid>
// )
//     }
var compname = this.handleClick;
var moredetails = <div />
if (compname == 'B-PLAN COMPETITION') {
  moredetails = (
    <Competitions/>)
} else if (compname == 'IGNITE') {
    moredetails =  (<Industry4/>);
}
else{
    moredetails = (
        <Competitions/>)
}
return (
    <Grid>
            <Row className="show-grid">
                        <Col xs={12} md={4} className="ln-left-column">
                            <ul className="ln-buttons-ul">
                                <li><a href="#" className="Webpreneurship" onClick={this.handleClick}>Webpreneurship</a></li>
                               <li><a href="#" className="Industry4.0" onClick={this.handleClick}>Industry 4.0</a></li>
                                
                         </ul>
                        </Col>
                        {moredetails}
                        
        </Row>
        </Grid>
)
}
}




