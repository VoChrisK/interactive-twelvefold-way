class Star {
    constructor() {

    }

    draw(ctx) {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.moveTo(108, 0.0);
        ctx.lineTo(141, 70);
        ctx.lineTo(218, 78.3);
        ctx.lineTo(162, 131);
        ctx.lineTo(175, 205);
        ctx.lineTo(108, 170);
        ctx.lineTo(41.2, 205);
        ctx.lineTo(55, 131);
        ctx.lineTo(1, 78);
        ctx.lineTo(75, 68);
        ctx.lineTo(108, 0);
        ctx.closePath();
        ctx.fill();
    }
}

export default Star;