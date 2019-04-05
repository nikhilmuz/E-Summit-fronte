import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
// import LinkedIn from 'react-linkedin-login';
import autobind from 'autobind-decorator';
import React, { Component } from 'react';
import './loginform.css'
import './../style/bootstrap.min.css';
import esummit from './../img/Group 2.1.svg';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { FieldGroup } from 'react-bootstrap';
import { FormErrors6 } from './FormErrors';
import { FormErrors7 } from './FormErrors';
import warning from './../img/Group 3.svg';
import validator from 'react-validation';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import './progressbar.js';
import $ from 'jquery';
import axios from 'axios';
import { API_DOMAIN } from '../../Constants/config';




var emailout=0;

function changebordererr(id){
  $('#'+id).addClass("errorborder");
}
function changeborderunerr(id){
  $('#'+id).removeClass("errorborder");
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const email = (value) => {
  if (!validateEmail(value)||!value.toString().trim().length) {
    if (emailout==1){
   // changebordererr('login-email');
  }
    return <div class="error"><img src={warning} className="errorimg"/></div>
  }
  else changeborderunerr('login-email');
};


export default class LoginForm extends Component {

  static propTypes = {
 
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      open: false,
      base_url: 'https://summe.us-east-2.elasticbeanstalk.com'
    }
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    
  }

  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      document.getElementById('myBtn-login').click();
    }
  }



  fbloginclick(){
    document.getElementById('mydiv').style.display="block";
    document.getElementsByClassName('my-facebook-button-class')[0].click();
  }

  getCookie = cname => {
    var name = cname + '='
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  liloginclick(){
	  localStorage.setItem("name", "");
      localStorage.setItem("lname", "");
      localStorage.setItem("email", "");
    $.oauthpopup = function(options)
{
    options.windowName = options.windowName ||  'ConnectWithOAuth';
    options.windowOptions = options.windowOptions || 'location=0,status=0,width=800,height=400';
    options.callback = options.callback || function(){ window.location.reload(); };
    var that = this;
    that._oauthWindow = window.open(options.path, options.windowName, options.windowOptions);
    that._oauthInterval = window.setInterval(function(){
        if (that._oauthWindow.closed) {
            window.clearInterval(that._oauthInterval);
            options.callback();
        }
    }, 1000);
};

$.oauthpopup({
  path: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=819xtawmjkd770&redirect_uri=https://esummit.iitr.ac.in/lioauth&state='+(new Date().getTime())+'&scope=r_basicprofile%20r_emailaddress',
  callback: function()
  {
    var token = "";
    var name = "token=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            token = c.substring(name.length, c.length);
        }
    }
    if(!((token=="")||(token==null)||(token==undefined))){window.location.href="/dashboard";
       }
	   else {window.location.href="/signup";
       }
  }
});
  }

  responseFacebook = (response) => {
    var payload = {
      email: JSON.parse(JSON.stringify(response)).email,
      type: "facebook",
      id: JSON.parse(JSON.stringify(response)).id,
      access_token: JSON.parse(JSON.stringify(response)).accessToken
    }
    axios.post(API_DOMAIN+'/oauth', payload)
    .then(res => {
      if(res.status==200&&!(res.data.token=="")){
        var d = new Date();
      d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
      document.cookie = "token="+res.data.token+";expires="+d.toUTCString()+";path=/";
      document.getElementById('mydiv').style.display="none";
      window.location.href="/dashboard";
      }
    })
    .catch(err => 
      {
        localStorage.setItem("name", JSON.parse(JSON.stringify(response)).name);
        localStorage.setItem("email", JSON.parse(JSON.stringify(response)).email);
        window.location.href="/signup";
    })
    }

  emailborder(){
    emailout=1;
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
   
 }

  handleIdChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePwdChange(e) {
    this.setState({ password: e.target.value });
  } 
  
  handleLoad(){
    var token = "";
    var name = "token=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            token = c.substring(name.length, c.length);
        }
    }
    if(!(token=="")){window.location.href="/dashboard";
       }
  };  

  handleSubmit(e) {
    document.getElementById('mydiv').style.display="block";
    var payload = {
      email: this.state.email, 
      password: this.state.password
    }
    axios.post(API_DOMAIN+'/user/login', payload)
    .then(res => {
      var d = new Date();
      d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
      document.cookie = "token="+res.data.token+";expires="+d.toUTCString()+";path=/";
      localStorage.setItem("user", res.data);
      console.log(localStorage)
      if(localStorage.getItem('eventApply')){
        var address = API_DOMAIN + '/event/' + localStorage.getItem('eventApply') + '/apply'
    axios
    .get(address, {
        headers: {
          Authorization: 'Token ' + this.getCookie('token')
        }
      })
      .then(response => {
        console.log(response)
            // window.open(this.state.registration_url, '_blank');
            window.location.href = '/dashboard'
            localStorage.setItem('eventApply', null)
      })
      .catch(error => {
        console.log(error)
        window.location.href = '/dashboard'
        
        // window.open(this.state.registration_url, '_blank');
      })
      }else{
        window.location.href = '/dashboard'        
      }
    })
    .catch(err => 
      {
      console.log(err)
      document.getElementById("status").innerHTML ="Incorrect Credentials!";
      document.getElementById('mydiv').style.display="none";
    })
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
      

    return (
      <Grid fluid="container-fluid" className="login-container">
        <Row className="show-grid">
        <div id="mydiv"/>
          <Col xs={12} md={12} lg={5} xsHidden smHidden>

            <div className="div1">
              <img src={esummit} />
            </div>

          </Col>
          <Col xs={12} md={12} lg={7} className="col2-loginpage">
            <div>
              <ul className="loginNav">
                <li className="active"><a href="/signup">SignUp</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/ca#contact">Contact Us</a></li>
              </ul>

              <div className="login-input1-login">
                <Form ref={c => { this.form = c }} className="login-input">
                  <p>login</p>
                  <div className="email-loginform"><Input ref={c => { this.email = c }} onFocusOut={this.emailborder} validations={[email]} id="login-email" onChange={this.handleIdChange} placeholder="Email Address" type="email" required className="form-control" name="email"
                    value={this.state.email} onKeyPress={this.handleKeyPress}/><img src={warning} id="warning-signup7"/><br /></div>
                  <div className="password-loginform"><Input id="login-password" onChange={this.handlePwdChange} placeholder="Password" type="password" className="form-control" name="password"
                    value={this.state.password} onKeyPress={this.handleKeyPress}></Input><img src={warning} id="warning-signup8"/><br /></div>
                  <div className="login-sidetext-container">
                  {/* <p className="login-sidetext"><a onClick={this.handleOpen} href="#">Forgot password?</a></p> */}
                  </div><br />
                  <Button type="button" style={{ backgroundColor: "#2EA2F8" }} onClick={this.handleSubmit} disabled={!this.state.formValid} id="myBtn-login"><span className="form-span">Continue</span></Button><br />
                  <div className="login-sidetext-container">
                  <p className="login-sidetext2">Don't have an account? <a href="/signup">Sign Up</a></p>
                  </div>
                  <p className="login-ORtext">OR</p><br />
                  <FacebookLogin
                    appId="1952792231701933"
                    autoLoad={false}
                    fields="name,email,location,education"
                    callback={this.responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"/>
                  <button type="button" onClick={this.liloginclick} style={{ backgroundColor: "#0077B5" }}><span className="form-span">linkedin</span></button><br />
                  <button type="button" onClick={this.fbloginclick} style={{ backgroundColor: "#4768AD" }}><span className="form-span">facebook</span></button><br />
                  {/* <button type="button" style={{ backgroundColor: "#F96F6F" }}><span className="form-span">channeli</span></button> */}
                  
                  <div id="status"></div>
                  <div className="panel panel-default">
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}