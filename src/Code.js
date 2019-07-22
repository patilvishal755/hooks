// Javascipt- javscript virtual machine-ecmascript
// V8 engine,spider monkey
// datatypes - number,string,boolean,null,undefined,object -expalin more on array
// variable declearation let const var
// array decelaration and iteration
// function decleration, callback, and expresion and arrow function introduction
// destructuring
// rest and spread

//Virtual DOM






function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

    function yes() {
        console.log('you said yes');
    }

    function no() {
        console.log('you said no');
    }

    ask('are you chutiya', yes, no);


    let a =[1,2,3];
    a.forEach(function(item,index,array){
    console.log(item)
    })

    let b =[1,2,3,{key:'value'}];
b.forEach(function(item,index,array){
console.log(item)
})


let ab=['first','second','third'];
let lengths=ab.map(function(item){
return(item.length);
})

let ab1=['first','second','third'];
let lengths1=ab1.filter(function(item){
return(item.length>5);
})
console.log(lengths)


//Rest
function getAddress(firstName,lastName,...address){
    console.log(firstName,lastName,address);
    }
    
    getAddress('vishal','patil','dhule','pin:424301');

    //Spread
    let a=[1,2,3];
console.log(...a);


5488946709