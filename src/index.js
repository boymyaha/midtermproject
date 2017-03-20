import React from 'react';
import App from './App';
import {Register} from './Register';
import './index.css';
// import {Route,Link,browserHistory,HashRouter as Router} from 'react-router';
import { render } from 'react-dom'; 
import { HashRouter,Route,Router} from 'react-router-dom';

// CSS import './css/index.css';

render(( 
	<HashRouter>
		<Route path="/" component={App}>
		</Route>
	</HashRouter> 
	), document.getElementById('root')
);