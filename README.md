## Interactive Twelvefold Way
Interactive Twelvefold Way is an interactive visualization that lets users practice on the Twelvefold Way, a systematic classification of twelve formulas relating to two finite sets in Combinatorics. The best way to visualize each formula is through balls and bins (and for some formulas: stars and bars). Users are prompted to a screen where they can choose which formula to practice on. They are then presented a problem with k number of balls and n number of bins (numbers can be adjustable). They can click and drag on the balls and place them to each bin and submit when they have a configuration. Users will solve the problem if they can manage to get all the required configurations.

[Live Site Link](https://vochrisk.github.io/interactive-twelvefold-way/)

![alt text](https://i.imgur.com/OM5JoAe.png)
![alt text](https://i.imgur.com/gPtyuBh.png)

## Features
* Balls/Bars are draggable by clicking and holding the mouse's left button
* Collision detection and counter to check whether a ball/bar is in a bin/gap
* Combinatorical logic and verification based on constraints to check the validity of each configuration
* Configuration history to keep track of all submitted and correct configurations
* Adjustable balls/bars and bins/stars and formulas will automatically update
* Conforming to the Object-oriented principles for reusability and organization (see UML diagram below)

## UML Diagram

![alt text](https://i.imgur.com/fNGp8ix.png)

## Technologies and Languages
* JavaScript
* Canvas
* MathJax

## Future Features
* Different hints for all formulas
* Show a configuration by finding an available configuration and automatically arrange all balls based on it.
* Show the solution by calculating all correct configurations and showing them on the history.
* Incorporating physics for balls/bars using Matter.js
