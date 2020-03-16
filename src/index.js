import Display from './display';
import { determineFormula } from './../util/formulas';
import * as EventListeners from './../util/event_listeners';

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");
    const result = determineFormula("distinguishable", "distinguishable", "unrestricted")(document.getElementsByClassName("num-balls")[0].innerHTML, document.getElementsByClassName("num-bins")[0].innerHTML);
    const display = new Display("distinguishable", "distinguishable", "unrestricted", result, ctx);
    let animation;
    
    if(window.innerWidth <= 1580) {
        canvasEl.width = 775;
        canvasEl.height = 505;  
    }

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
        window.cancelAnimationFrame(animation);
        ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles
        display.interaction.moveableShapes.forEach(shape => {
            if (shape.isClicked) {
                shape.isClicked = false;
                display.interaction.staticShapes.forEach(otherShape => {
                    otherShape.addItem(shape);
                    otherShape.removeItem(shape);
                });
            }
        });
        display.start();
    });

    EventListeners.addEventsToRules(display);
    EventListeners.addEventsToCases(display);
    EventListeners.addEventsToButtons(display);
    display.updateCount(canvasEl);
    display.start();
});