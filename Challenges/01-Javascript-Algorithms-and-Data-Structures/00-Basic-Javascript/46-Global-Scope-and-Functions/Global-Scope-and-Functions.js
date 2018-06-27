/*
  Basic JavaScript - Lesson 49: Global Scope and Functions
  ---------------------------------------------------------------------
  In JavaScript, `scope` refers to the visibility of variables. 
  Variables which are defined outside of a function block have 
  `Global` scope. This means, they can be seen everywhere in your 
  JavaScript code.

  Varibles which are used without the `var` 
  keyword are automatically created in the `global` 
  scope. This can create unintended consequences elsewhere in your 
  code or when running a function again. You should always 
  declare your variables with `var`.

   LESSON
   -------------
   Using `var`, declare a `global` variable `myGlobal` 
   outside of any function. Initialize it with a value of `10`.

   Inside function `fun1`, assign `5` to `oopsGlobal` 
   without using the `var` keyword.
   
*/

// Solution:
var myGlobal = 10;  // myGlobal is a Global Scope variable

function fun1() {
    oopsGlobal = 5;  // oopsGlobal is Global because var is not used.
}
// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

/* Tests needed to meet:
   ----------------------------
   * `myGlobal` should be defined
   * `myGlobal` should have a value of `10`
   * `myGlobal` should be declared using the `var` keyword
   * `oopsGlobal` should be a global variable and have a value of `5`
*/
