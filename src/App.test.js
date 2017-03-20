import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Register from './Register';
import {Router,Route,Link,browserHistory} from 'react-router'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<main />, div);
});
