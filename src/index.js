import Interface from './interface';

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("interface");
    const ctx = canvasEl.getContext("2d");
    const newInterface = new Interface(2, 5);
    let animation;

    canvasEl.addEventListener("mousedown", event => {
        newInterface.balls.forEach(ball => {
            if(ball.checkBounds(event)) {
                animation = window.requestAnimationFrame(ball.draw);
                ball.isClicked = true;
            }
        })
    });

    canvasEl.addEventListener("mousemove", event => {
        newInterface.balls.forEach(ball => {
            if (ball.isClicked) {
                ctx.clearRect(0, 0, canvasEl.clientWidth, canvasEl.height);
                ball.pos[0] = event.clientX;
                ball.pos[1] = event.clientY;
                ball.draw(ctx);
            }
        });
    });

    canvasEl.addEventListener("mouseup", event => {
        window.cancelAnimationFrame(animation);
        newInterface.balls.forEach(ball => {
            if (ball.isClicked) ball.isClicked = false;
        });
    });

    window.ctx = ctx;

    newInterface.start(ctx);
});