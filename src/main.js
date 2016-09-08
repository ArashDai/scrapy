import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Routes from './Routes'


render(<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory} routes={Routes}/> ,document.getElementById('main'));
