import React, { Component } from 'react';
import './bulma.css';
import './App.css';
import {App} from './App';
import {main} from './main';

export class Forget extends Component {

    state = {
        email: ""
    }

    OnEmailChange = (event) =>
    {
        this.setState({email: event.target.value});
    }
    OnCancal = (event) =>
	{
		this.props.ChangeScene("main");
	}
    OnSend = (event) =>
	{
        if(this.state.email != "")
        {
		this.props.ChangeScene("main");
        }
    }



  render() {
    return (
        <div className="App-header">
            <form action="">
          <div className="columns">
              <div className="column">
                <h1 className="title"><font color="white">Forget password</font></h1>
  				<label className="label"><font color="white" >Email Address*</font></label>
                <p className="control">
                <input className="input" type="text" placeholder="abcdefg@hotmail.com" style={{width:"300px"}} onChange={this.OnEmailChange} required/>
              </p>
  				<p className="help is-success" style={{paddingBottom:"10px"}}>This Email is available</p>
  				
  			  <button className="button is-success is-active" onClick={this.OnSend} >Send</button>
            &nbsp;&nbsp;&nbsp;
            <button className="button is-danger is-active" onClick={this.OnCancal}>Cancel</button>
  			 </div>
           </div>
         </form>
        </div>
    );
  }
}