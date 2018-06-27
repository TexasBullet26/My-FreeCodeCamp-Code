/*

REACT LESSON 02: CREATE A COMPLEX JSX ELEMENT

-- INSTRUCTIONS --

Define a new constant `JSX` that renders a `div`
which contains the following elements in order:
    - `h1`
    - `p`
    - an unordered list that contains three `li` items
You can include any text you want within each element.

NOTE: When rendering multiple elements like this, you can
wrap them all in parentheses, but it's not strictly required.
Also notice this challenge uses a `div` tag to wrap elements
within a single parent element. If you remove the `div`, the
JSX will no longer transpile. Keep this in mind, since it will
also apply when you return JSX elements in React components.

 */

const JSX = (
    <div>
        <h1>Glenn Lanzer III</h1>
            <p>My Hobbies</p>
            <ul>
                <li>Hiking</li>
                <li>Boxing</li>
                <li>Programming</li>
            </ul>
    </div>
);
