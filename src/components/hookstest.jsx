import React, { useState } from 'react';

function HooksTest() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Button count: {count}</p>
            <button 
            onClick={() => setCount(count + 1)}
            className="m-2 btn btn-secondary btn-sm"
            >
                Increment
            </button>
            <button 
            onClick={() => setCount(count - 1)}
            className="m-2 btn btn-secondary btn-sm"
            >
                Decrement
            </button>
        </div>
    );
}

export default HooksTest;