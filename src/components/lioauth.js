import $ from 'jquery';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';
import { API_DOMAIN } from '../Constants/config';

export default class Lioauth extends Component {

  static propTypes = {
 
  }

  constructor(props) {
    super(props);
    
    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
   
 }
 
  handleLoad(){
    var url = new URL(window.location);
    var code = url.searchParams.get("code");
    var state = url.searchParams.get("state");
    if (!(code==null&&state==null)){
      var payload = {
        code: code,
        type: "linkedin",
        state: state
      }
      axios.post(API_DOMAIN + '/oauth', payload)
      .then(res => {
      var d = new Date();
      d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
      document.cookie = "token="+res.data.token+";expires="+d.toUTCString()+";path=/";
      window.close();
    })
    .catch(function (err)
      {
        localStorage.setItem("name", JSON.parse(JSON.stringify(err.response.data)).firstName);
        localStorage.setItem("lname", JSON.parse(JSON.stringify(err.response.data)).lastName);
        localStorage.setItem("email", JSON.parse(JSON.stringify(err.response.data)).emailAddress);
		  window.close();}
  )}
  };  

  render() {
    return (
      <div/>
    );
  }
}