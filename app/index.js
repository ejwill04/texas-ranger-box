import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';
import './styles';
import App from './components/app';
import DisplayJokes from './components/displayJokes/DisplayJokes';
import GenerateJokes from './components/generateJokes/GenerateJokes';
import Favorites from './components/favorites';
import Settings from './components/settings';
// import Header from './components/Header/Header'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={GenerateJokes} />
      <Route path="jokes" component={DisplayJokes} />
      <Route path="favorites" component={Favorites} />
      <Route path="settings" component={Settings} />
    </Route>
  </Router>
, document.getElementById('application'));
