/* entry point */

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './containers/App'
import Home from './components/Home'
import Contact from './components/Contact'
import Stuff from './components/Stuff'


render(
  <Router history={browserHistory}>
     <Route path="/" component={App}>
       <IndexRoute component={Home}/>
       <Route path="stuff" component={Stuff}/>
       <Route path="contact" component={Contact}/>
     </Route>
  </Router>,
  document.getElementById('root')
)
