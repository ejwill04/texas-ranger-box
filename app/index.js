import React from 'react'
import ReactDOM from 'react-dom';
import './styles'
import App from './components/app';
// import Header from './components/Header/Header'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
, document.getElementById('application'));
