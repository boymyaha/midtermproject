import React, { Component } from 'react';
import './bulma.css';
import './App.css';
import {Register} from './Register';
import {Main} from './main.js';
import {Forget} from './Forget.js';
import {Signin} from './Signin.js';
import {Signin2} from './Signin2.js';
import {Signin3} from './Signin3.js';

class App extends Component {

  state = {
    currentScene: "main"
  }

  OnChangeScene = (scene) =>
  {
    this.setState({currentScene: scene});
  }


  render() 
  {
    var scene = null;

    if(this.state.currentScene == "main")
    {
      scene = <Main ChangeScene={this.OnChangeScene}/>;
    }
    else if( this.state.currentScene == "register")
    {
      scene = <Register ChangeScene={this.OnChangeScene}/>;
    }
    else if( this.state.currentScene == "Forget")
    {
      scene = <Forget ChangeScene={this.OnChangeScene}/>;
    }
    else if( this.state.currentScene == "Signin")
    {
      scene = <Signin ChangeScene={this.OnChangeScene}/>;
    }
     else if( this.state.currentScene == "Signin2")
    {
      scene = <Signin2 ChangeScene={this.OnChangeScene}/>;
    }
     else if( this.state.currentScene == "Signin3")
    {
      scene = <Signin3 ChangeScene={this.OnChangeScene}/>;
    }
    return (
      <div className="App">
          {scene}
      </div>

    );
  }
}

export default App;
