import React, { useState } from 'react';

function StudentDetails() {
    const name=useFormInput('');
    const email=useFormInput('');
    const rollNo=useFormInput(0);

    function save(e) {
        e.preventDefault();

        console.log(`%c name is %c${name.value}`,'color:green','color:blue'); 
        console.log(`%c email is %c${email.value}`,'color:green','color:blue');
        console.log(`%c roll no is %c${rollNo.value}`, 'color:green','color:blue')

    }

    return (
        <div className="App">
            <header className="App-header">
                <label>Name</label>
                <input type="text" {...name} />

                <label>Email</label>
                <input type="text" {...email}/>

                <label>Roll no</label>
                <input type="text" {...rollNo}/>
                <br />
                <button onClick={(e) => save(e)}>Save</button>
            </header>
        </div>
    );


}

function useFormInput(initalValue){
    const [value,setValue]=useState(initalValue);

    function handleChange(e){
        setValue(e.target.value)
    }
    return (
        {
            value,
            onChange:handleChange
        }
    )

    

}

export default StudentDetails;