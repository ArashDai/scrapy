import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App'
import Homepage from './components/Homepage'

var Routes = (
    
  <Router history={browserHistory}>
    <Route path="/" component={App}>
     <IndexRoute component={Homepage}/> 
    </Route>
  </Router>
    
);


module.exports = Routes;