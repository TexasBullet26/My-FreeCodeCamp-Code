# React Lesson 01: Create a Simple JSX Element

---

React uses a syntax extension of JavaScript called JSX. JSX allows you to write HTML within JavaScript.

JSX is similar to HTML, however there are a few key differences. For example:
* You can write JavaScript within JSX
    * To do this, include the code you want to be treated as JavaScript within curly braces:

```JavaScript
{ 'this is treated as JavaScript code' }.
```

JSX **is not** valid JavaScript, therefore JSX must be compiled into JavaScript.
* The transpiler **Babel** is a popular tool for compiling JSX into valid JavaScript.

---

**Instructions:**

The current code uses JSX to assign a `div` element to the constant `JSX`.
Replace the `div` with an `h1` element and add the text `Hello JSX` inside it.

```JavaScript
const JSX = <div></div>;
```

**My Solution:**

```JavaScript
const <h1>Hello JSX!</h1>
```

Tests To Meet:
* The constant `JSX` should return an `h1` element.
* The `h1` tag should include the text `Hello JSX!`.
