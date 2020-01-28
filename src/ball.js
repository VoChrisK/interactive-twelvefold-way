class Ball {
    constructor(label, pos, radius) {
        this.label = label;
        this.pos = pos;
        this.radius = radius;
        this.isClicked = false;
        this.boundingBox = [
            [this.pos[0] - this.radius, this.pos[1] - this.radius],
            [this.pos[0] - this.radius, this.pos[1] + this.radius],
            [this.pos[0] + this.radius, this.pos[1] - this.radius],
            [this.pos[0] + this.radius, this.pos[1] + this.radius]
        ];
    }

    checkBounds(x, y) {
        return (x >= this.boundingBox[0][0] && y >= this.boundingBox[0][1]) && (x >= this.boundingBox[1][0] && y < this.boundingBox[1][1]) && (x < this.boundingBox[2][0] && y >= this.boundingBox[2][1]) && (x < this.boundingBox[3][0] && y < this.boundingBox[3][1]);
    }

    draw(ctx) {
        //ctx is a number when clicked so I need to have a conditional here
        if(typeof ctx === "object") {
            this.recalculateBoundingBox();
            ctx.beginPath();
            ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.font = "30px sans-serif";
            ctx.fillText(this.label, this.pos[0] - 8, this.pos[1] + 8);
        }
    }

    recalculateBoundingBox() {
        this.boundingBox = [
            [this.pos[0] - this.radius, this.pos[1] - this.radius],
            [this.pos[0] - this.radius, this.pos[1] + this.radius],
            [this.pos[0] + this.radius, this.pos[1] - this.radius],
            [this.pos[0] + this.radius, this.pos[1] + this.radius]
        ];
    }
}

export default Ball;