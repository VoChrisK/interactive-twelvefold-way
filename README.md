## Interactive Twelvefold Way
Interactive Twelvefold Way is an interactive visualization that lets users practice on the Twelvefold Way, a systematic classification of twelve formulas relating to two finite sets in Combinatorics.

[Live Site](https://vochrisk.github.io/interactive-twelvefold-way/)

![alt text](https://github.com/VoChrisK/personal-website/blob/master/images/personal-website-gif-3.gif)
![alt text](https://github.com/VoChrisK/interactive-twelvefold-way/blob/master/app/assets/images/twelvefold-way-intro.gif)

## Technologies and Languages
* JavaScript
* Canvas
* MathJax

## Background and Overview

There are twelve formulas in the Twelvefold Way, each having their own number of configurations. Each formula have certain constraints when counting their configurations. The best way to visualize how each of the twelve formula operate under the hood is through balls and bins (and for some formulas: stars and bars). This is especially helpful when solving various problems related to Combinatorics. Understanding the logic behind counting various things under certain conditions is key to mastering the Twelvefold Way, and ultimately Combinatorics, and what better way to learn it than to visualize it using this application!

Users are prompted to a screen where they can choose which formula to practice on. They are then presented a problem with k number of balls and n number of bins (numbers can be adjustable through the sliders to the left). They can click and drag on the balls and place them to each bin and submit when they have a configuration. For formulas involving stars and bars, they can click and drag on the bars instead and place them on a gap to the right or to the left of a star. Users will solve the problem if they can manage to get all the required configurations.

## Features

* **Combinatorical logic and verification based on constraints to check the validity of each configuration.** All twelve formulas were translated to code and various algorithms were devised to verify each configurations. Here are some code snippets showcasing a formula and its verification algorithm:

`/util/formulas.js`

```js
//k distinguishable balls, n indistinguishable bins, no restrictions
const calculateDIUnrestricted = (k, n) => {
    let numbers = getNumbersArray(n);
    let formula = (acc, i) => acc + calculateStirlingNumber(k, i)
    return numbers.reduce(formula, 0);
};
```

```js
const calculateStirlingNumber = (n, k) => {
    let numbers = getNumbersArray(k);
    let formula = (acc, i) => acc + (Math.pow(-1, i) * calculateBinomialCoefficient(k, i) * Math.pow(k - i, n))
    let sumResults = numbers.reduce(formula, 0);

    return (1/calculateFactorial(k)) * sumResults;
};
```

`/util/checks.js`

```js
return checkAgainstOtherShapes(shape1.items, shape2, checkForSimilarShapes);
```

```js
const checkAgainstOtherShapes = (items, otherShapes, checkCallback) => {
    for (let i = 0; i < otherShapes.length; i++) {
        if (checkCallback(items, otherShapes[i].items)) return true;
    }

    return false;
}
```

```js
//this function checks if two bins have the same balls, but not necessarily in order
const checkForSimilarShapes = (items1, items2) => {
    if (items1.length !== items2.length) return false;

    let labels = {};
    for(let i = 0; i < items2.length; i++) {
        labels[items2[i].label] = items2[i].label;
    }

    for (let i = 0; i < items1.length; i++) {
        if (!Boolean(labels[items1[i].label])) return false; 
    }

    return true; //return true if the order is the same for both bins
}
```

* **Configuration history to keep track of all submitted and correct configurations.** This is a nifty tool for users as they do not have to jot down each correct configuration. Each time they submit a valid configuration, it will show up in the history. The positioning of the balls will be intact on submission.

![history](https://github.com/VoChrisK/interactive-twelvefold-way/blob/master/app/assets/images/twelvefold-gif-2.gif)

* **Adjustable balls/bars and bins/stars and formulas will automatically update.** Additionally, users can switch to any formula at any time using the grid at the bottom. Upon changing formulas, the program will recalculate the total number of configurations and reset the state of the interface.

![formulas](https://github.com/VoChrisK/interactive-twelvefold-way/blob/master/app/assets/images/twelvefold-gif-1.gif)

* **Conforming to the Object-oriented principles for reusability and organization (see UML diagram below)**

## UML Diagram

![alt text](https://i.imgur.com/fNGp8ix.png)

## Acknowledgements

This project was inspired by [Yan Zhang](https://yanxzhang.com/academic/), as he was the one who taught me the Twelvefold Way. One of his teaching methodologies involved visualizing Combinatorical problems/formulas through ordinary objects and scenarios. Thus, he heavily utilized the ball-and-bin model to supplement his teaching on Twelvefold Way, which I greatly enjoyed. After I learned and demonstrated mastery in this subject, I gained an aspiration to develop an application that leverages the ball-and-bin model to teach the Twelvefold Way.
