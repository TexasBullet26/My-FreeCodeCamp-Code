# Applied Visual Design
---
The first group of lessons are built on a given card layout to show a number of core principles. Here those principles are:

## Lesson 00: Create Visual Balance Using the text-align Property
---
Text is a large chunk of the web content we create. CSS has several options for how to align text with the `text-align` property.

`text-align`:
  * `text-align: justify;` - causes all lines of text except the last line to meet the left and right edges of the line box
  * `text-align: center;` - centers the text
  * `text-align: right;` - right-aligns the text
  * `text-align: left;`- (the default) left-aligns the text

*Align the `h4` tag's text, which says "Google", to the center. Then justify the paragraph tag which contains information about how Google was founded:*

```html
<style>

h4 {
  /* HERE */
  text-align: center;
}

p {
  /* HERE */
  text-align: justify;
}

.links {
  margin-right: 20px;
}

.fullCard {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 5px;
  padding: 4px;
}

.cardContent {
  padding: 10px;
}

</style>

<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
---

## Lesson 01: Adjust the Width of an Element Using the width Property
---
You specify the width of an element using the `width` property in CSS. Values can be given in relative length units (such as em), absolute length units (such as px), or as a percentage of its containing parent element. Here's an example that changes the width of an image to 250px:

```css
img {
  width: 250px;
}
```

*Add a `width` property to the entire card and set it to an absolute value of 245px. Use the `fullCard` class to select the element:*

```html
<style>

h4 {
  text-align: center;
}

p {
  text-align: justify;
}

.links {
  margin-right: 20px;
}

.fullCard {
  /* HERE */
  width: 245px;
  /* HERE */
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 5px;
  padding: 4px;
}

.cardContent {
  padding: 10px;
}

</style>

<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
