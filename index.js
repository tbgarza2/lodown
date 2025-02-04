'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to return a given value.
 * 
 * @param {Any value} value: The function accepts a given vaue of any data type.
 * 
 * @return {Exact vaule given} value: The function returns the exact value that is 
 * given as an argument. 
 */

function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to take a given value and determine what data type
 * the given value is.
 *
 * @param {any value type} value: The function is designed to accept any value type
 * 
 * @return {String} string: The function tests the given value to determine the data
 * type and returns a string of that specific data type. Ex("string", "array"
 * "object", "undefined", "number", "boolean", "null", "function")
 */

function typeOf(value) {
    if(Array.isArray(value)) {
        return "array"
    }
    // else if(Object.isObject(value)){
    //     return "object"
    // }
    else if(value === null) {
        return "null";
    }
    else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to take in an array and a number and return the first values 
 * of the beginning of the array specified by the number.
 * 
 * @param {Array} array: The function takes in an given array.
 * 
 * @param {Number} num: The function takes in a specified number.
 * 
 * @return {Array} array: The function returns the first few elements 
 * in a given array. If the given value for number not a number or null or 1, the 
 * first element in the array will be returned. If the given number is greater 
 * than the array.length, the entire array is returned. If the given value for 
 * the array is not an array, an array literal is returned.
 */

function first(array, num) {
    if (!Array.isArray(array) || num <0){
        return [];
    } else if(typeof num !== "number") {
        return array[0];
    } else {
    return array.splice(0, num);
    }
}
module.exports.first = first;

/**
 * last: Designed to take in an array and a number and return the last values 
 * of the end of the array specified by the number.
 * 
 * @param {Array} array: The function takes in an given array.
 * 
 * @param {Number} num: The function takes in a specified number.
 * 
 * @return {Array} array: The function returns the last few elements 
 * in a given array. If the given value for number not a number or null the 
 * last element in the array will be returned. If the given number is greater 
 * than the array.length, the entire array is returned. If the given value for 
 * the array is not an array, an array literal is returned.
 */

function last(array, num){
    if (!Array.isArray(array) || num <0){
        return [];
    } else if(typeof num !== "number") {
        return array[array.length-1];
    } else if(num > array.length) {
        return array;
    }
    else {
    return array.slice( array.length-num);
    }
}
module.exports.last = last;

/** 
 * indexOf: Designed to loop through an array to find a specific value and
 * retun the first index of that specific value.
 * 
 * @param {Array} array: The function takes in a given array.
 * 
 * @param {Any Data Type} value: The function takes in a specified value.
 * 
 * @return {Number} number: The function returns the index number of the value within 
 * the given array. If the value is not found in the array, the function 
 * returns -1.
 */

function indexOf(array, value) {
    for(let i=0; i<array.length; i++){
        if(array[i] === value) {
            return i;
        }
    }
            return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to search for a value in an array and return true if
 * the value is within the array or false if the value doesn't exist.
 * 
 * @param {Array} array: The function takes in a given array.
 * 
 *  @param {Value} value: The function takes in a given value.
 * 
 * @return {Boolean} boolean: The function tests to see if the parameter
 * value is contained within the parameter array and returns a Boolean
 * (true or false).
 */

function contains(array, value){
   return (array.includes(value)) ? true : false;
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The function takes in a collection over which to iterate.
 * 
 * @param {Function} func: The given function is to be applied to each value in the 
 * collection
 * 
 * @return {Array or Object} collection: The function returns the exact given collection. 
 */
 
function each(collection, func) {
    if(Array.isArray(collection)) { 
        for(let i=0; i<collection.length; i++){
            func(collection[i], i, collection);
        } 
        }
        else {
            for(let key in collection){
                func(collection[key], key, collection);
            }
    }
    return collection;
}
module.exports.each = each;

/** 
 * unique: Designed to loop through a given array and return only the 
 * non-repeat elements in the array.
 * 
 * @param {Array} array: The function accepts arrays.
 * 
 * @return {Array} unique: The function returns a new array with only the unique values
 * from the given array.
 */

function unique(array){
    let unique = []; 
    for(let i=0; i<array.length; i++){ 
    if (indexOf(array, array[i]) === i){  
        unique.push(array[indexOf(array, array[i])]); 
        } 
    }
    return unique; 
}
module.exports.unique = unique;

/** 
 * filter: Designed to test each element of a given array with a given function 
 * and push each passing element into a new array
 * 
 * @param {Array} array: The function accepts a given array.
 * 
 * @param {Function} func: The function accepts a function to test each element of the array.
 * 
 * @return {Array} newArray: The function loops thrugh a given array testing each element
 * of the array with the given function, and returns a new array with the 
 * elements that passed a truthy value for the given function.
 */

function filter(array, func){
    let newArray = [];
    each(array, function(ele, i, array){ 
        if(func(ele, i, array)){
        newArray.push(ele);
        }
    });
    return newArray;
}
module.exports.filter = filter;

/** 
 * reject: Designed to test each element of a given array with a given function 
 * and push each non-passing element into a new array (opposite of filter)
 * 
 * @param {Array} array: The function accepts a given array.
 * 
 * @param {Function} func: The function accepts a function to test each element of the array.
 * 
 * @return {Array} array: The function loops thrugh a given array testing each element
 * of the array with the given function, and returns a new array with the 
 * elements that passed a falsy value for the given function.
 */

function reject(array, test) {
   return filter(array, function(element, index, array) {
       if(!test(element, index, array)) {
           return(element);
       }
   });
};
module.exports.reject = reject;

/** 
 * partition: Designed to test each element of a given array with a given function 
 * and shuffle all truthy values into one array and all falsy values into a
 * separate array and return a new array containing both truthy array and falsy
 * array.
 * 
 * @param {Array} array: The function accepts a given array.
 * 
 * @param {Function} func: The function accepts a function to test each element of the array.
 * 
 * @return {Array} newArr: The function loops thrugh a given array testing each element
 * of the array with the given function, and returns a new array with the 
 * elements that passed a truthy value in a nested array and elements that 
 * passed a falsy value in a separate nested array. The result is an array of 
 * arrays 
 */

function partition(array, func){
    let newArr = [];
    let truArr = [];
    let falsAr = [];
    for(let i=0; i < array.length; i++){
        if(func(array[i], i, array)){
        truArr.push(array[i]);
        } else {
            falsAr.push(array[i]);
        }
    }
    newArr.push(truArr, falsAr);
        return newArr;
}
module.exports.partition = partition;

/** 
 * map:  Designed to loop through a given array or object and have the given
 * function act on each individual element and returning the function affected 
 * elements in an array.
 * 
 * @param {Array or Object} collection: The function takes in a collection over which to iterate.
 *  
 * @param {Function} func: The given function is to be applied to each value in the 
 * collection
 * 
 * @return {Array} arr: The function loops each element of the collection (array or 
 * object) through the given function and returns an array of the each returned
 * element.
 */

function map(collection, func){
    let arr = [];
    each(collection, function(element, index, collection){
        arr.push(func(element, index, collection));
    });
    return arr;
}
module.exports.map = map;

/**
 * pluck: Designed to search through a given array of objects and push the values
 * of the given key or property into another array
 * 
 * @param {Array of Objects} array: The function accepts a given array of objects.
 * 
 * @param {Property} property: The function accepts a given key or property 
 * 
 * @return {Array} array: The function searches through an array that contains objects 
 * and returns a different array of values pertaining to the given property.
 */

function pluck(array, property){
    return map(array, function(element, index, collection){
        return element[property];
    });
}
module.exports.pluck = pluck;

/** 
 * every: Designed to test the values of a given collection (array or object) 
 * with a given function and return a value of true if all of the elements tested
 * pass a truthy value.
 * 
 * @param {Array or Object} collection: The function takes in a collection over which to iterate.
 * 
 * @param {Function} func: The given function is to be applied to each value in the 
 * collection
 * 
 * @return {Boolean} boolean: The function tests each element in a collection with
 * a given function and returns a value of true if all elements of the collection
 * pass a truthy value, otherwise the function returns a value of false. If no 
 * callback function is given, the function will test if the element is truthy or
 * falsy and return boolean.
 */

function every(collection, func) {
   let result = true;
   if(func === undefined){
   each(collection, (element, index, collection) => {
       if(!element){
           result = false;
       }
   });
} else {
   each(collection, (element, index, collection) => {
       if(!func(element, index, collection)){
           result = false;
       }
   });
}
   return result;
}
module.exports.every = every;

/**
 * some: Designed to test the values of a given collection (array or object) 
 * with a given function and return a value of false only if all of the elements tested
 * pass a falsy value. 
 * 
 * @param {Array or Object} collection: The function takes in a collection over which to iterate.
 * 
 * @param {Function} func: The given function is to be applied to each value in the 
 * collection
 * 
 * @return {Boolean} boolean: The function tests each element in a collection with a given function
 * and returns a value of true if any one of the elements of the collection passes a 
 * truthy value. Thee function returns a value of false only if all the elements
 * tested pass a falsy value. If no callback function is given, the function will test if the
 * element is truthy or falsy and return a boolean accordingly.
 */

function some(collection, func){
   let result = false;
   if(func === undefined){
   each(collection, (element, index, collection) => {
       if(element){
           result = true;
       }
   });
} else {
   each(collection, (element, index, collection) => {
       if(func(element, index, collection)){
           result = true;
       }
   });
}
   return result;
}
module.exports.some = some;

/**
 * reduce: Designed to accumulate all the returned elements of an array passed
 * through a given function and return a single element.
 * 
 * @param {Array} array: The function accepts an array a 
 * function to test the elements of the array and an optional seed/accumulator
 * value. 
 * 
 * @param {Function} action: The function accepts a function to test the elements
 * of the array. 
 * 
 * @param {Value} seed: The function accepts an optional seed/accumulator value. 
 * 
 * @return {Number or Array or Object} seed: The function can return a single value of an accumulation of each element
 * of the given array returned through the given test function.The function can also return a new array of each element
 * of the given array returned through the given test function.The function can also return a new object of each element
 * of the given array returned through the given test function.
 * 
 */

function reduce(array, action, seed){ 
    let seedDefined = 0;
 if (seed === undefined){
     seed = array[0];
     seedDefined = 1;
 }
 for (let i = seedDefined; i < array.length; i++){
     seed = action(seed, array[i], i);
 }   return seed;
}

// function reduce(array, func, seed){
//     let accumulator = seed === undefined ? 1 : seed;
// for(let i=0;i<array.length;i++)        
// accumulator = func(accumulator, array[i], i, array);    
// return accumulator;
// }
module.exports.reduce = reduce;

/** 
 * extend: Designed to accept more than one object and push or re-assign values
 * into the first object. 
 * 
 * @param {Object} obj1:The function accepts an object to push other objects into.
 * 
 * @param {Objects} object:The function accepts multiple objects.
 * 
 * @return {Object} obj1: This function puts all the values of the other objects into the first 
 * object. The passed and/or re-assined key/value pairs are returned in the updated 
 * first object.
 */

 function extend(obj1,...object){
     for(let i=0; i<object.length; i++){
    for(let key in object[i]){
        obj1[key] = object[i][key];
      }
    }
    return obj1;
}
module.exports.extend = extend;

