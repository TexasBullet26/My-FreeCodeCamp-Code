/*
  Basic JavaScript - Lesson 34: Use Bracket Notation to Find the Last Character in a String
  ------------------------------------------------------------------------------------------
  In order to get the last letter of a string, you can subtract 
  one from the string's length.

  For example, if `var firstName = "Charles"`, you can get 
  the value of the last letter of the string by using 
  `firstName[firstName.length - 1]`.

   LESSON
   -------------
    Use `bracket notation` to find the last character in the `lastName` variable.

    Hint: 
    ------------
    Try looking at the `lastLetterOfFirstName` variable 
    declaration if you get stuck.
*/

// Solution:
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

/* Tests needed to meet:
   ----------------------------
   * `lastLetterOfLastName` should be "e".
   * You have to use `.length` to get the last letter.
   
*/
