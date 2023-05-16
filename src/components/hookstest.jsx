import React, { useState } from 'react';

function HooksTest() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Button count: {count}</p>
            <button 
            onClick={() => setCount(count + 1)}
            className="btn btn-secondary btn-sm m-2"
            >
                Increment
            </button>
            <button 
            onClick={() => setCount(count - 1)}
            className="btn btn-secondary btn-sm m-2"
            >
                Decrement
            </button>
        </div>
    );
}

export default HooksTest;