import React from 'react';
import problems from '../problems/Problems';
import AlgorithmCard from './AlgorithmCard';


const Algorithms = React.createClass({

    getInitialState:function(){
        return{
            problems:problems,
        }
    },
    render:function(){
        return(
            <div className='container-fluid App'>
                <h1>Algorithms</h1>
                    {
                        this.state.problems.map(function(current,i){
                            return <AlgorithmCard key={i} name={current.name} description={current.description} solution={current.solution}/>
                        })
                    }
            </div>
    )}
});


module.exports = Algorithms;