import React, { useState, useMemo } from 'react';
import Child from './child';

function Increment() {
    const [count,
        setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    const MemoChild= useMemo(()=>{
        return <Child ></Child>
    },[])
    return (
        <div className="App">
            <header className="App-header">
                <label>{count}</label>
                <button onClick={() => increment()}>increment</button>
                <Child></Child>
                {MemoChild}
            </header>

        </div>
    );
}

export default Increment;