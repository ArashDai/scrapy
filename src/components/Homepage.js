import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Algorithms from './Algorithms';



const Homepage = React.createClass({

  render:function(){
    return(
      <div className='container-fluid Homepage'>

        <Algorithms/>
        
      </div>
    )}
});


module.exports = Homepage;