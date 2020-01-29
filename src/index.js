import Interface from './interface';

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("interface");
    const ctx = canvasEl.getContext("2d");
    const newInterface = new Interface(3, 3);
    let animation;

    canvasEl.addEventListener("mousedown", event => {
        for(let i = 0; i < newInterface.balls.length; i++) {
            if (newInterface.balls[i].checkBounds(event.clientX, event.clientY)) {
                animation = window.requestAnimationFrame(newInterface.balls[i].draw);
                newInterface.balls[i].isClicked = true;
                break; //break here to resolve conflict between overlapping balls
            }
        }
    });

    canvasEl.addEventListener("mousemove", event => {
        newInterface.balls.forEach(ball => {
            if (ball.isClicked) {
                ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height); //clear canvas to prevent trailing circles
                ball.pos[0] = event.clientX;
                ball.pos[1] = event.clientY;
                newInterface.draw(ctx);
            }
        });
    });

    canvasEl.addEventListener("mouseup", event => {
        window.cancelAnimationFrame(animation);
        newInterface.balls.forEach(ball => {
            if (ball.isClicked) {
                ball.isClicked = false;
                newInterface.bins.forEach(bin => {
                    bin.addBall(ball);
                    bin.removeBall(ball);
                })
            }
        });
    });

    newInterface.draw(ctx);
});