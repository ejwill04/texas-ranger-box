import React from 'react'
import ReactDOM from 'react-dom';
import './styles'
import App from './components/app';
import { DisplayJokes } from './components/displayJokes/DisplayJokes';
import { GenerateJokes } from './components/generateJokes/GenerateJokes';
import { Settings } from './components/settings';
// import Header from './components/Header/Header'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={GenerateJokes} />
      <Route path="jokes" component={DisplayJokes} />
      <Route path="settings" component={Settings} />
    </Route>
  </Router>
, document.getElementById('application'));
