# Frontend Mentor - Interactive rating component solution

This is my solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

#### Desktop

![Service rating form with a star icon and the question 'How did we do?' at the top, below the question are circular buttons from 1 to 5 and at the bottom is an orange submit button.](screenshot_service-rating_desktop-main.png)

![Form confimation message with a mobile phone icon at the top, a confirmation message containing the user's selection, and thank you message at the bottom](screenshot_service-rating_desktop-thank-you.png)

#### Mobile

![Service rating form with a star icon and the question 'How did we do?' at the top, below the question are circular buttons from 1 to 5 and at the bottom is an orange submit button.](screenshot_service-rating_mobile-main.png)

![Form confimation message with a mobile phone icon at the top, a confirmation message containing the user's selection, and thank you message at the bottom](screenshot_service-rating_mobile-thank-you.png)

### Links

- Solution URL: 
- Live Site URL: 

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This is another project where I wanted to practice my React skills. I am currently in the middle of [Scrimba.com's 'React Basics' course](https://scrimba.com/learn/frontend), but I felt I need a little extra practice. 

This project gave me the opportunity to reinforce the concepts of `useState()` and `props`.

I'm particuarly proud of using a ternary operators in this project. For example, I used one to change the CSS styles of the labels when a user selects a choice: 
```javascript
className={formData.formValue === '1' ? 
  'form--label selected' : 
  'form--label'}
```
If the user has selected an option, then the state is updated with that value. Since the value is stored in state, I made use of it by letting it determine which CSS classes to the label so that the color of the label would change to match the user's selection.

## Author

- Website - [Web Dev Portfolio](https://ananfito.github.io)
- Frontend Mentor - [@ananfito](https://www.frontendmentor.io/profile/ananfito)
- Mastodon - [@infinifito@hachyderm.io](https://hachyderm.io/@infinifito)
- Twitter - [@wordsbyfifi](https://www.twitter.com/wordsbyfifi)
