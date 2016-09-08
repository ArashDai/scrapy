import React from 'react'
import { Router, Route, Indexroute, Link, browserHistory } from 'react-router'

import Navbar from './Navbar'
import Footer from './Footer'



const App = React.createClass({

  render:function(){
    return(

      <div className='container-fluid App'>
        <Navbar/>
          
            {this.props.children}
          
        <Footer/>
      </div>
    )}
});


module.exports = App;