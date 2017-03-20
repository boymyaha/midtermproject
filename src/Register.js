import React, { Component } from 'react';
import './bulma.css';
import './App.css';
import {App} from './App';

export class Register extends Component {

  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: ""
  }

  OnNameChange = (event) =>
  {
    this.setState({name: event.target.value});
  }
  OnUsernameChange = (event) =>
  {
    this.setState({username: event.target.value});
  }
  OnEmailChange = (event) =>
  {
    this.setState({email: event.target.value});
  }
  OnPasswordChange = (event) =>
  {
    this.setState({password: event.target.value});
  }
  OnCPasswordChange = (event) =>
  {
    this.setState({cpassword: event.target.value});
  }

	OnCancal = (event) =>
	{
		this.props.ChangeScene("main");
	}

	OnSubmit = (event) =>
	{
    if(this.state.name != "" &&
       this.state.username != "" &&
       this.state.email != "" &&
       this.state.password != "" &&
       this.state.cpassword != "")
        {
          if(this.state.password == this.state.cpassword)
          {
            this.props.ChangeScene("main");
          }
          else
          {
            alert("Password is not match");
          }
        }
	}

  render() {
    return (
        <div className="Register">
          <form action="">
          <div className="columns">
              <div className="column">
                <h1 className="title"><font color="white">Register</font></h1>
                <label className="label"><font color="white">Name*</font></label>
                <p className="control">
                <input className="input" type="text" placeholder="Name" style={{width:"300px"}} onChange={this.OnNameChange} required/>
              </p>
                <label className="label"><font color="white">Username*</font></label>
                <p className="control">
                <input className="input" type="text" placeholder="Username" style={{width:"300px"}} onChange={this.OnUsernameChange} required/>
              </p>
  				<p className="help is-success" style={{paddingBottom:"10px"}}>This Username is available</p>
  				<label className="label"><font color="white" >Email Address*</font></label>
                <p className="control">
                <input className="input" type="text" placeholder="abcdefg@hotmail.com" style={{width:"300px"}} onChange={this.OnEmailChange} required/>
              </p>
  				<p className="help is-success" style={{paddingBottom:"10px"}}>This Email is available</p>
  				<label className="label"><font color="white">Password*</font></label>
                <p className="control">
                <input className="input" type="Password" placeholder="****************" style={{width:"200px"}}  onChange={this.OnPasswordChange} required/>
              </p>
  				<label className="label"><font color="white">Comfirm Password*</font></label>
                <p className="control">
                <input className="input" type="Password" placeholder="****************" style={{width:"200px"}} onChange={this.OnCPasswordChange} required/>
              </p>
  				<label className="label"><font color="white">Gender</font></label>
  				<p className="control">
   				 <span className="select">
      			<select>
       		   	    <option>Male</option>
        			<option>Female</option>
      			</select>
    				</span>
  					</p>
  			    <label className="label"><font color="white">Address</font></label>
 			    <p className="control">
 			    <textarea className="textarea" ></textarea>
  			  </p>
  			  <button className="button is-success is-active" onClick={this.OnSubmit} >Create Account</button>
            &nbsp;&nbsp;&nbsp;
            <button className="button is-danger is-active" onClick={this.OnCancal}>Cancel</button>
  			    </div>
           </div>
          </form>
        </div>
    );
  }
}

