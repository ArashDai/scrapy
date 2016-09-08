import React from 'react';



const AlgorithmCard = React.createClass({

  getInitialState:function(){
      return{
          answer:null
      }
  },  
  runner:function(x){
        console.log(this.props.solution)
        let input = x.target.form[0].value;
        this.setState({answer:this.props.solution(input)})
  },

  render:function(){
    return(
        <div className='container-fluid'>
                <h4>{this.props.name}</h4>
                <p>{this.props.description}</p>
            

                <form>
                    <input type='text'/>
                    <button type='button' onClick={this.runner}>execute</button>
                </form>
                {this.state.answer?<div>The solution is: {this.state.answer}</div>:null}
        </div>
    )}
});


module.exports = AlgorithmCard;