class Ball {
    constructor(label, pos, radius) {
        this.label = label;
        this.pos = pos;
        this.radius = radius;
        this.isClicked = false;
    }

    checkBounds(event) {
        let x = event.clientX;
        let y = event.clientY;
        let box = [
            [this.pos[0] - this.radius, this.pos[1] - this.radius],
            [this.pos[0] - this.radius, this.pos[1] + this.radius],
            [this.pos[0] + this.radius, this.pos[1] - this.radius],
            [this.pos[0] + this.radius, this.pos[1] + this.radius]
        ];

        return (x >= box[0][0] && y >= box[0][1]) && (x >= box[1][0] && y < box[1][1]) && (x < box[2][0] && y >= box[2][1]) && (x < box[3][0] && y < box[3][1]);
    }

    draw(ctx) {
        //ctx is a number when clicked so I need to have a conditional here
        if(typeof ctx === "object") {
            ctx.beginPath();
            ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.font = "30px sans-serif";
            ctx.fillText(this.label, this.pos[0] - 8, this.pos[1] + 8);
        }
    }
}

export default Ball;