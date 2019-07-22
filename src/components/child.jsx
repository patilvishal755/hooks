import React, { useEffect } from 'react';

let renderCount = 0;
function Child() {
   
    useEffect(() => {
        renderCount++
    })
    return (
       <h3>{renderCount}</h3> 
    )
}
export default Child;
