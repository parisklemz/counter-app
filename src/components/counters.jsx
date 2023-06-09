import React, { Component } from 'react';
import Counter from './counter';

//cc as a functional component
const Counters = (props) => {
    return (
        <div>
            <button 
            onClick={props.onReset}
            className="m-2 btn btn-primary btn-sm"
            >
                Reset
                </button>
            {props.counters.map (counter => (
            <Counter 
            key ={counter.id} 
            onDelete={props.onDelete} 
            onIncrement={props.onIncrement}
            counter={counter}
            />
            ))}
        </div>
    );
}
 
export default Counters;