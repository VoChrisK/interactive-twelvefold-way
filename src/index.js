import Interface from './interface';
import InterfaceView from './interface-view';
import { determineFormula } from './../util/formulas';
import * as EventListeners from './../util/event_listeners';
import LeftMostStar from './left_most_star';

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");
    const result = determineFormula("distinguishable", "distinguishable", "unrestricted")(document.getElementsByClassName("num-balls")[0].innerHTML, document.getElementsByClassName("num-bins")[0].innerHTML);
    const newInterfaceView = new InterfaceView("distinguishable", "distinguishable", "unrestricted", result, ctx);
    let animation;

    canvasEl.addEventListener("mousedown", event => {
        if(newInterfaceView.usesStarsAndBars()) {
            for (let i = 0; i < newInterfaceView.interfaceAlt.bars.length; i++) {
                if (newInterfaceView.interfaceAlt.bars[i].checkBounds(event.offsetX, event.offsetY)) {
                    animation = window.requestAnimationFrame(newInterfaceView.interfaceAlt.bars[i].draw);
                    newInterfaceView.interfaceAlt.bars[i].isClicked = true;
                    break; //break here to resolve conflict between overlapping balls
                }
            }
        } else {
            for(let i = 0; i < newInterfaceView.interface.balls.length; i++) {
                if (newInterfaceView.interface.balls[i].checkBounds(event.offsetX, event.offsetY)) {
                    animation = window.requestAnimationFrame(newInterfaceView.interface.balls[i].draw);
                    newInterfaceView.interface.balls[i].isClicked = true;
                    break; //break here to resolve conflict between overlapping balls
                }
            }
        }
    });

    canvasEl.addEventListener("mousemove", event => {
        if(newInterfaceView.usesStarsAndBars()) {
            newInterfaceView.interfaceAlt.bars.forEach(bar => {
                if (bar.isClicked) {
                    ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles
                    bar.pos[0] = event.offsetX;
                    bar.pos[1] = event.offsetY;
                }
            });
            newInterfaceView.startAlt();
        } else {
            newInterfaceView.interface.balls.forEach(ball => {
                if (ball.isClicked) {
                    ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles
                    ball.pos[0] = event.offsetX;
                    ball.pos[1] = event.offsetY;
                }
            });
            newInterfaceView.start();
        }
    });

    canvasEl.addEventListener("mouseup", event => {
        window.cancelAnimationFrame(animation);
        ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles
        if(newInterfaceView.usesStarsAndBars()) {
            newInterfaceView.interfaceAlt.bars.forEach(bar => {
                if (bar.isClicked) {
                    bar.isClicked = false;
                }
                newInterfaceView.interfaceAlt.stars.forEach(star => {
                    if(star instanceof LeftMostStar) {
                        star.addLeftBar(bar);
                        star.removeLeftBar(bar);
                    }
                    star.addBar(bar);
                    star.removeBar(bar);
                });
            });
            newInterfaceView.startAlt();
        } else {
            newInterfaceView.interface.balls.forEach(ball => {
                if (ball.isClicked) {
                    ball.isClicked = false;
                    newInterfaceView.interface.bins.forEach(bin => {
                        bin.addBall(ball);
                        bin.removeBall(ball);
                    });
                }
            });
            newInterfaceView.start();
        }
    });

    //order matters -> rules before cases
    EventListeners.addEventsToRules(newInterfaceView);
    EventListeners.addEventsToCases(newInterfaceView);
    EventListeners.addEventsToButtons(newInterfaceView);
    newInterfaceView.updateCount(canvasEl);
    newInterfaceView.start();
});