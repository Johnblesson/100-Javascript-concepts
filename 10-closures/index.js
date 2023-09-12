/*
 Closures: Closures are functions that have access to variables from their outer (enclosing) function 
even after it has finished executing. 
*/

function outer() {
    let count = 0; 
    return function inner() {
    count++; console.log(count); }; 
   }

   // ES6
//    let outer = () => {
//     let count = 0;
//     return () => {
//         count++;
//         console.log(count);
//     };
//    };