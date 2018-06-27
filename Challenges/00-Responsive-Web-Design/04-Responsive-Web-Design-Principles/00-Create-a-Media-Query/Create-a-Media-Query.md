# Create a Media Query
---
`Media Query`: a technique that changes the presentation of content based on different viewport sizes. Introduced in CSS3.

`Viewport`: a user's visible area of a web page. Is different depending on the device used to access the site.

Media Queries consist of a media type. If that media type matches the type of device the document is displayed on, the styles are applied.

Example of a media query that returns the content when the device's width is less than or equal to 100px:

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

Example of a media query that returns the content when the device's height is more than or equal to 350px:

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

**NOTE: The CSS inside the media query is applied only if the media type matches that of the device being used.**

---

*Add a media query, so that the `p` tag has a `font-size` of 10px when the device's height is less than or equal to 800px:*

```html
<style>
  p {
    font-size: 20px;
  }

  /* Add media query below */
  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>
<body>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>

</body>
```

*Tests to Meet*
---
  * Your `p` element should have the `font-size` of 10px when the device `height` is less than or equal to 800px.
  * Declare a `@media` query for devices with a `height` less than or equal to 800px.
