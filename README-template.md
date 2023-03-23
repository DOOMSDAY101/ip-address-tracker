# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/DOOMSDAY101/ip-address-tracker.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JQuery


### What I learned

I learnt how to use the leaflet.js framework for mapping out a particular location, and it wass really fun while coding this project.

To see how you can add code snippets, see below:

```html
<div class="loader">
      <div class="loader-image"></div>
      <p>tracking...</p>
    </div>
```
```css
div.loader {
    position: relative;
    width: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: none;
}
```
```js
 map.setView([latitude,longitude], 8);
  marker.setLatLng([latitude, longitude]);
  marker.bindTooltip("Your current Location").openTooltip();
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

What I would really like to learn more or to develop my self on well would be to properly understand javascript and its concept very well before moving on to its respective frameworks like react.js and so on. 


### Useful resources

- [Example resource 1](https://www.w3schools.com) - This site/resource really helped and taught me on how to get the current location of any user on the site.

## Author

- Website - [Sulaiman Ifeoluwa](https://www.ifeoluwa-sulaiman.netlify.app)
- Frontend Mentor - [@DOOMSDAY101](https://www.frontendmentor.io/profile/DOOMSDAY101)
- Twitter - [@Sulaiman_Ife](https://www.twitter.com/Sulaiman_Ife)

