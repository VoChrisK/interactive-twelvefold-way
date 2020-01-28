class Bin {
    constructor(label, pos, bounds) {
        this.label = label;
        this.pos = pos;
        this.amount = [];
        this.bounds = bounds //[X1, X2, Y]
    }

    checkBounds(x, y) {
        let box = [
            [this.pos[0], this.pos[1]],
            [this.pos[0] + this.bounds[0], this.pos[1] + this.bounds[2]],
            [this.pos[0] + this.bounds[1], this.pos[1] + this.bounds[2]],
            [this.pos[0] + this.bounds[0] + this.bounds[1], this.pos[1]]
        ];

        return (x >= box[0][0] && y >= box[0][1]) && (x >= box[1][0] && y < box[1][1]) && (x < box[2][0] && y < box[2][1]) && (x < box[3][0] && y >= box[3][1]);
    }

    checkBall(ball) {
        return this.checkBounds(ball.boundingBox[0][0], ball.boundingBox[0][1]) && this.checkBounds(ball.boundingBox[1][0], ball.boundingBox[1][1]) && this.checkBounds(ball.boundingBox[2][0], ball.boundingBox[2][1]) && this.checkBounds(ball.boundingBox[3][0], ball.boundingBox[3][1]);
    }

    draw(ctx) {
        if (typeof ctx === "object") {
            ctx.beginPath();
            ctx.moveTo(this.pos[0], this.pos[1]);
            ctx.lineTo(this.pos[0] + this.bounds[0], this.pos[1] + this.bounds[2]);
            ctx.lineTo(this.pos[0] + this.bounds[1], this.pos[1] + this.bounds[2]);
            ctx.lineTo(this.pos[0] + this.bounds[0] + this.bounds[1], this.pos[1]);
            ctx.stroke();
        }
    }
}

export default Bin;