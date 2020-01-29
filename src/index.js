import Interface from './interface';
import InterfaceView from './interface-view';
import { calculateDDUnrestricted } from './../util/formulas';

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");
    const result = calculateDDUnrestricted(3, 3);
    const newInterfaceView = new InterfaceView("distinguishable", "distinguishable", "unrestricted", result, ctx);
    let animation;

    canvasEl.addEventListener("mousedown", event => {
        for(let i = 0; i < newInterfaceView.interface.balls.length; i++) {
            if (newInterfaceView.interface.balls[i].checkBounds(event.offsetX, event.offsetY)) {
                animation = window.requestAnimationFrame(newInterfaceView.interface.balls[i].draw);
                newInterfaceView.interface.balls[i].isClicked = true;
                break; //break here to resolve conflict between overlapping balls
            }
        }
    });

    canvasEl.addEventListener("mousemove", event => {
        newInterfaceView.interface.balls.forEach(ball => {
            if (ball.isClicked) {
                ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles
                ball.pos[0] = event.offsetX;
                ball.pos[1] = event.offsetY;
                newInterfaceView.start();
            }
        });
    });

    canvasEl.addEventListener("mouseup", event => {
        window.cancelAnimationFrame(animation);
        newInterfaceView.interface.balls.forEach(ball => {
            if (ball.isClicked) {
                ball.isClicked = false;
                newInterfaceView.interface.bins.forEach(bin => {
                    bin.addBall(ball);
                    bin.removeBall(ball);
                });
            }
        });
        ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles
        newInterfaceView.start();
    });

    newInterfaceView.addEventsToRules();
    newInterfaceView.addEventsToCases();
    newInterfaceView.addEventsToButtons();
    newInterfaceView.start();
});