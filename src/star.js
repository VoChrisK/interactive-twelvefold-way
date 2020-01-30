class Star {
    constructor(pos) {
        this.pos = pos;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.pos[0] - 5, this.pos[1] - 3);
        ctx.lineTo(this.pos[0] + 4, this.pos[1] + 24);
        ctx.lineTo(this.pos[0] + 35, this.pos[1] + 25);
        ctx.lineTo(this.pos[0] + 9, this.pos[1] + 37);
        ctx.lineTo(this.pos[0] + 20, this.pos[1] + 60);
        ctx.lineTo(this.pos[0] - 5, this.pos[1] + 42);
        ctx.lineTo(this.pos[0] - 27, this.pos[1] + 60);
        ctx.lineTo(this.pos[0] - 19, this.pos[1] + 37);
        ctx.lineTo(this.pos[0] - 45, this.pos[1] + 25);
        ctx.lineTo(this.pos[0] - 14, this.pos[1] + 24);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
}

export default Star;