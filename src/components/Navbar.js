import React from 'react'
import Link from 'react-router'



var Navbar = React.createClass({

  render:function(){
    return(
             <div className='container-fluid'>  
               <nav className="navbar navbar-default navbar-fixed-top container-fluid" role="navigation">
                 
                 <div className="navbar-header">
                   <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                   </button>
                   <a className="navbar-brand" href="#Home">Arash Dai</a>
                 </div>
               
                 <div className="collapse navbar-collapse navbar-ex1-collapse">
                   <ul className="nav navbar-nav navbar-right">
                      <li className='text-center'><a href="#algorithms">Algorithms</a></li>
                      <li className='text-center'><a href="#projects">Projects</a></li>
                      <li className='text-center'><a href="#about">About Me</a></li>
                   </ul>
                 </div>
               </nav>
              </div>
               

    )}
});


module.exports = Navbar;