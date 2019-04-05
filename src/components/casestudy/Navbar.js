import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './navbar.css'
class Navbar extends React.Component{
    constructor(props) {
        super(props);
        
       
      }
     
      componentDidMount() {
           
       
            
    }
   
    
    render() {
        return (
           
    
    
                <div className="bplan-navbar">
                     <ul>   
                     <li><a href="#about">ABOUT</a>
                        </li>
                        <li
                        
                       ><a href="#perks">PERKS</a>
                        </li>
                        <li
                       
                       ><a href="#rounds">ROUNDS</a>
                        </li>
                        <li
                        
                       ><a href="#rules">RULES</a>
                        </li>
                        <li
                        
                       ><a href="#procedure">PROCEDURE</a>
                        </li>
                    </ul>
                </div>
              )
            
              
        
    }
}



  export default Navbar
  