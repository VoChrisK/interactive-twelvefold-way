import Display from './display';
import Tutorial from './tutorial';
import { determineFormula } from './../util/formulas';
import * as EventListeners from './../util/event_listeners';

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");
    const result = determineFormula("distinguishable", "distinguishable", "unrestricted")(document.getElementsByClassName("num-balls")[0].innerHTML, document.getElementsByClassName("num-bins")[0].innerHTML);
    const display = new Display("distinguishable", "distinguishable", "unrestricted", result, ctx);
    const tutorial = new Tutorial();
    let animation;

    if(window.innerWidth <= 1500) {
        canvasEl.width = 775;
        canvasEl.height = 505;  
    } else if (window.innerWidth > 1500 && window.innerWidth <= 1850) {
        canvasEl.width = 975;
        canvasEl.height = 595;  
    }

    document.getElementsByClassName("darken-screen")[0].addEventListener("click", event => {
        if(tutorial.currentStep === 15 || tutorial.currentStep === 26) {
            tutorial.hideAllTutorials();
        } else if(!tutorial.finishTutorial() && !tutorial.checkInteractiveStep() && !tutorial.checkSubmissionStep()) {
                tutorial.nextStep();
        }
    });

    document.getElementsByClassName("formulas")[0].addEventListener("click", event => {
        if(!tutorial.finishTutorial() && tutorial.currentStep === 18) {
            tutorial.nextStep();
        }
    });

    document.getElementsByClassName("id unr")[0].addEventListener("click", event => {
        if (!tutorial.finishTutorial() && tutorial.currentStep === 19) {
            tutorial.nextStep();
        }
    });

    canvasEl.addEventListener("mousedown", event => {
        for(let i = 0; i < display.interaction.moveableShapes.length; i++) {
            if (display.interaction.moveableShapes[i].checkBounds(event.offsetX, event.offsetY)) {
                animation = window.requestAnimationFrame(display.interaction.moveableShapes[i].draw);
                display.interaction.moveableShapes[i].isClicked = true;
                break; //break here to resolve conflict between overlapping balls
                
            }
        }
    });

    canvasEl.addEventListener("mousemove", event => {
        display.interaction.moveableShapes.forEach(shape => {
            if (shape.isClicked) {
                ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles
                shape.pos[0] = event.offsetX;
                shape.pos[1] = event.offsetY;
            }
        });
        display.start();
    });

    canvasEl.addEventListener("mouseup", event => {
        event.stopPropagation();
        window.cancelAnimationFrame(animation);
        ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles
        display.interaction.moveableShapes.forEach(shape => {
            let flag = false;
            if (shape.isClicked) {
                shape.isClicked = false;
                display.interaction.staticShapes.forEach(otherShape => {
                    otherShape.addItem(shape);
                    otherShape.removeItem(shape);
                    if(otherShape.items.length > 0) flag = true;
                });

                if(flag && !tutorial.finishTutorial()) {
                    if(tutorial.checkInteractiveStep()) {
                        tutorial.nextStep();
                    }
                }
            }
        });
        display.start();
    });

    EventListeners.addEventsToRules(display);
    EventListeners.addEventsToCases(display);
    EventListeners.addEventsToButtons(display, tutorial);
    display.updateCount(canvasEl);
    display.start();
});