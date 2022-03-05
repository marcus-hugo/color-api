# Scrimba Solo Project - Color Scheme Generator

## About
[Scrimba Frontend Developer Career Path](https://scrimba.com/learn/frontend) Solo Project
built from a Figma design using the [The Color API](https://www.thecolorapi.com/). Start with a "seed" color using `<input type="color"/>`, then select a color scheme mode with a `<select>` box, with a submit button will generate the
color scheme with hex values.

Bonus challenge: Have them copy them to the
clipboard when clicked.


### Notes

This is my first full project working with an API and it was a lot of fun learning about the request/response cycle, endpoints, and JSON!

Getting the values from the color input and select elements were pretty straight forward. Found using `.replace()`, `.toUpperCase()`, and `.toLowerCase()` methods came in handy when formating calls to The Color API.  It's pretty cool once getting the data back and accessing the information for example:

```js 
schemeData.colors[0].hex.value
```
I added styling with division lines between the hex values and a linear-gradient border around the app.

### Resources

Color Input:
- https://www.w3schools.com/tags/att_input_type_color.asp
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

Select Element:
- https://www.w3schools.com/tags/tag_select.asp

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select

CSS
- https://www.w3docs.com/snippets/css/how-to-select-all-child-elements-except-the-last-one.html

- Styling the border with a gradient:

    - https://css-tricks.com/gradient-borders-in-css/

JavaScript


- Copying to the clipboard:

    - https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#writing_to_the_clipboard

    - https://whatwebcando.today/clipboard.html

