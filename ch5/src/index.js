/* entry point */

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Card from './components/Card'


render(
  <Card color="#FFAA11"/>,
  document.getElementById('root')
)
