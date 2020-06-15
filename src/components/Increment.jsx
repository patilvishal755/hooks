import React, { useState, useMemo } from 'react';
import Child from './child';

function Increment() {
    const [count,
        setCount] = useState(0);
    function increment() {
        setCount(count + 1);

    }
    function close(){
        window.opener = null;
        window.open("", "_self");
        window.close();
    }
    const MemoChild= useMemo(()=>{
        return <Child ></Child>
    },[])
    return (
        <div className="App">
            <header className="App-header">
                <label>{count}</label>
                <button onClick={() => increment()}>increment</button>
                <button onClick={() => close()}>close</button>
                <Child></Child>
                {MemoChild}
            </header>

        </div>
    );
}

export default Increment;