import React, { Component } from 'react';
// import logo from '../logo.svg';
import './../style/ca.css';
import Select from 'react-select';
import colleges from './../colleges.json';
import $ from 'jquery';
import js from './../csscript.js';
import logo from './../img/rocket3.png';
import axios from 'axios';
import validator from 'react-validation';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import warning from './../img/Group 3.svg';
import { API_DOMAIN } from '../../Constants/config';

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const state = (value) => {
  if (!value.toString().trim().length) {
    return <div class="error"><img src={warning} className="errorimg"/></div>
  }
};

const clg = (value) => {
  if (!value.toString().trim().length) {
    return <div class="error"><img src={warning} className="errorimg"/></div>
  }
};

const fn = (value) => {
  if (!value.toString().trim().length) {
    return <div class="error"><img src={warning} className="errorimg"/></div>
  }
};
 
const email = (value) => {
  if (!validateEmail(value)||!value.toString().trim().length) {
    return <div class="error"><img src={warning} className="errorimg"/></div>
  }
};
 
const phone = (value) => {
  if (!(value>1000000000&&value<9999999999)||!value.toString().trim().length) {
    return <div class="error"><img src={warning} className="errorimg"/></div>
  }
};

export default class Connectwithus extends Component {
    constructor(props) {
      super(props);
      this.state = { 
      title1: 'JOIN THE LEAGUE OF ENTREPRENEURSHIP. BE THE',
      title2: 'CAMPUS AMBASSADOR',
      name: '',
      email: '', 
      phone: '', 
      state: 'Andhra Pradesh',
      college: '' }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
    }
    handleChange = (selectedOption) => {
      this.setState({ college: selectedOption })
    }
    handleNameChange(e) {
      this.setState({ name: e.target.value});
    }
    handleEmailChange(e) {
      this.setState({ email: e.target.value });
    }
    handlePhoneChange(e) {
      this.setState({ phone: e.target.value });
    }
    handleStateChange(e) {
      this.setState({ state: e.target.value });
    }
    handleCollegeChange(e) {
      this.setState({ college: e.target.value });
    } 
    handleClick = (e) =>  {
      var frmname=this.state.name;
      var frmemail=this.state.email;
      var frmphone=this.state.phone;
      var frmstate=this.state.state;
      var frmcollege=this.state.college;
      var payload ={
        name: frmname,
        email: frmemail,
        password: 'null',
        phone: frmphone,
        state: frmstate,
        college: frmcollege,
        is_ca_applicant: true,
        user_type: 'AMB'
        }
        axios.post(API_DOMAIN+'/api/create/', payload).then(res => {
          e.preventDefault();
          if(res.status==201){
          var working = false;
          if (working) return;
          working = true;
          var $this = $('.login'),
            $state = $this.find('button > .state');
          $this.addClass('loading');
          $state.html('Submitting');
          setTimeout(function() {
            $this.addClass('ok');
            $state.html('Submitted!');
            setTimeout(function() {
              $state.html('REGISTER');
              $this.removeClass('ok loading');
              working = false;
            }, 4000);
          }, 3000);}
          else{
            var working = false;
          if (working) return;
          working = true;
          var $this = $('.login'),
            $state = $this.find('button > .state');
          $state.html('Submitting');
          setTimeout(function() {
            $state.html('Failed!');
            setTimeout(function() {
              $state.html('REGISTER');
              working = false;
            }, 4000);
          }, 3000);
          }
    }).catch(err => {
      var status=err.response.status;
      var working = false;
          if (working) return;
          working = true;
          var $this = $('.login'),
            $state = $this.find('button > .state');
          $state.html('Submitting');
          setTimeout(function() {
            $state.html('Failed!');
            setTimeout(function() {
              $state.html('REGISTER');
              working = false;
            }, 4000);
          }, 3000);
          e.preventDefault();
    })
    }
    render() {
      return (
        <div className="cwucontainer" id="register">
          <div className="jumbotron3">
            <div id="yourrole" className="container">
              <p align="center">REGISTER</p>
              <p align="center">{this.state.content}</p>
            </div>
          </div>
          <div class="caform wrapper">
              <Form class="login">
              <Input required validations={[fn]} name="name" placeholder="NAME" onChange={this.handleNameChange} value={this.state.name}/> <br />
              <Input required validations={[email]} name="email" type="email" placeholder="EMAIL" onChange={this.handleEmailChange} value={this.state.email}/><br />
              <Input required validations={[phone]} name="number" type="number" placeholder="PHONE NUMBER" onChange={this.handlePhoneChange} value={this.state.number}/><br/>
              <select validations={[state]} className="selectstate" onChange={this.handleStateChange}>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chattisgarh">Chattisgarh</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu & Kashmir">Jammu & Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Orrisa">Orrisa</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telengana">Telengana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Uttarakhand">Uttarakhand</option>
              </select>
              <Select
              validations={[clg]}
              className="clgselect"
              onChange={this.handleChange}
              options={colleges[this.state.state]}
              ref={(ref) => { this.select = ref; }}
              onBlurResetsInput={false}
              onSelectResetsInput={false}
              
              simpleValue
              clearable={false}
              name="selected-state"
              disabled={false}
              placeholder="COLLEGE"
              value={this.state.college}
              searchable={true}
            />
            <Button type="button" style={{  width:"50%",height: "40px",borderRadius: "55.5px",backgroundColor:"#43cea2"}}
            onClick={this.handleClick} className="btn btn-default btn7">
            <i class="spinner"></i>
        <span class="state">REGISTER</span>
      </Button>
    </Form>
  </div>
        </div>
      );
    }
   }