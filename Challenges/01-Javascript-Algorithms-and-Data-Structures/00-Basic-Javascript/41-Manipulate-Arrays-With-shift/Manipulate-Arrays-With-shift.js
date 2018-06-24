/*
    Basic JavaScript: Manipulate Arrays With shift()
    ---------------------------------------------------------------------
    `pop()` always removes the last element of an array. 
    What if you want to remove the first?

    That's where `.shift()` comes in. It works just like `.pop()`, 
    except it removes the first element instead of the last.
    ---------------------------------------------------------------------
    Use the `.shift()` function to remove the first item from `myArray`, 
    assigning the "shifted off" value to `removedFromMyArray`.
    ---------------------------------------------------------------------
*/

// Example:
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]

// Setup:
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

// Tests To Pass:
console.log(myArray = [["dog", 3]]);
console.log(removedFromMyArray = ["John", 23]);
