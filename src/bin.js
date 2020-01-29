class Bin {
    constructor(label, pos, bounds) {
        this.label = label;
        this.pos = pos;
        this.bounds = bounds //[X1, X2, Y]
        this.balls = [];
        this.boundingBox = [
            [this.pos[0], this.pos[1]],
            [this.pos[0] + this.bounds[0], this.pos[1] + this.bounds[2]],
            [this.pos[0] + this.bounds[1], this.pos[1] + this.bounds[2]],
            [this.pos[0] + this.bounds[0] + this.bounds[1], this.pos[1]]
        ];
    }

    checkBounds(x, y) {
        return (x >= this.boundingBox[0][0] && y >= this.boundingBox[0][1]) && (x >= this.boundingBox[1][0] && y < this.boundingBox[1][1]) && (x < this.boundingBox[2][0] && y < this.boundingBox[2][1]) && (x < this.boundingBox[3][0] && y >= this.boundingBox[3][1]);
    }

    // checkCollision(x, y) {
    //     let line1 = [this.boundingBox[1][0] - this.boundingBox[0][0], this.boundingBox[1][1] - this.boundingBox[0][1]];
    //     let line2 = [this.boundingBox[2][0] - this.boundingBox[1][0], this.boundingBox[2][1] - this.boundingBox[1][1]];
    //     let line3 = [this.boundingBox[3][0] - this.boundingBox[2][0], this.boundingBox[3][1] - this.boundingBox[2][1]];

    //     if(x === line1[0], y === line1[1]) {
    //         this.pos = line1;
    //     } else if(x === line2[0], line2[1]) {
    //         this.pos = line2;
    //     } else if(x === line3[0], line3[1]) {

    //     }
    // }

    checkBall(ball) {
        return this.checkBounds(ball.boundingBox[0][0], ball.boundingBox[0][1]) && this.checkBounds(ball.boundingBox[1][0], ball.boundingBox[1][1]) && this.checkBounds(ball.boundingBox[2][0], ball.boundingBox[2][1]) && this.checkBounds(ball.boundingBox[3][0], ball.boundingBox[3][1]);
    }

    addBall(ball) {
        if(!this.balls.includes(ball) && this.checkBall(ball)) {
            this.balls.push(ball);
        }
    }

    removeBall(ball) {
        if(this.balls.includes(ball) && !this.checkBall(ball)) {
            let index = this.balls.indexOf(ball);
            this.balls.splice(index, 1);
        }
    }

    draw(ctx, binType) {
        if (typeof ctx === "object") {
            this.recalculateBoundingBox();
            ctx.beginPath();
            ctx.moveTo(this.pos[0], this.pos[1]);
            ctx.lineTo(this.pos[0] + this.bounds[0], this.pos[1] + this.bounds[2]);
            ctx.lineTo(this.pos[0] + this.bounds[1], this.pos[1] + this.bounds[2]);
            ctx.lineTo(this.pos[0] + this.bounds[0] + this.bounds[1], this.pos[1]);
            ctx.stroke();

            if(binType === "distinguishable") {
                ctx.fillText(this.label, this.pos[0] + 115, this.pos[1] + 105);
            }
            ctx.fillText(this.balls.length, this.pos[0] + this.bounds[0] + 80, this.pos[1] + this.bounds[1] + 25);
        }
    }

    recalculateBoundingBox() {
        this.boundingBox = [
            [this.pos[0], this.pos[1]],
            [this.pos[0] + this.bounds[0], this.pos[1] + this.bounds[2]],
            [this.pos[0] + this.bounds[1], this.pos[1] + this.bounds[2]],
            [this.pos[0] + this.bounds[0] + this.bounds[1], this.pos[1]]
        ];
    }
}

export default Bin;