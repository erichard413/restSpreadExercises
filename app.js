
const filterOutOdds = (...nums) => nums.filter(n => {
    return n % 2 ===0});  

function findMin(...nums){
   return Math.min(...nums)
}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

mergeObjects({a:1, b:2}, {c:3, d:4});

// const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

function doubleAndReturnArgs(arr, ...args){
    const myArgs = Array.from(args);
    const double = myArgs.map(function(n){
        return n * 2;
    })
    return arr.concat(double);
}



doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    const idx = Math.floor(Math.random()*items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const newPair = { [key]: val};
    return {...obj, ...newPair}
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) =>{
let newObj = {...obj}  //my original code did not make a "copy"  
delete newObj[key]
    return {...newObj};
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newProp = {[key] : val};
    // let newObj = {...obj}; //copy the obj element
    // newObj[key] = val; // adding key and value
    return {...obj, ...newProp};
}