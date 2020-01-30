class Bar {
    constructor(pos, width, height) {
        this.pos = pos;
        this.width = width;
        this.height = height;
        this.isClicked = false;
        this.boundingBox = [
            [this.pos[0], this.pos[1]],
            [this.pos[0] + this.width, this.pos[1]],
            [this.pos[0] + this.width, this.pos[1] + this.height],
            [this.pos[0], this.pos[1] + this.height]
        ];
    }

    checkBounds(x, y) {
        return (x >= this.boundingBox[0][0] && y >= this.boundingBox[0][1]) && (x < this.boundingBox[1][0] && y >= this.boundingBox[1][1]) && (x < this.boundingBox[2][0] && y < this.boundingBox[2][1]) && (x >= this.boundingBox[3][0] && y < this.boundingBox[3][1]);
    }

    draw(ctx) {
        if(typeof ctx === "object") {
            this.recalculateBoundingBox();
            ctx.beginPath();
            ctx.moveTo(this.pos[0], this.pos[1]);
            ctx.lineTo(this.pos[0] + this.width, this.pos[1]);
            ctx.lineTo(this.pos[0] + this.width, this.pos[1] + this.height);
            ctx.lineTo(this.pos[0], this.pos[1] + this.height);
            ctx.lineTo(this.pos[0], this.pos[1]);
            ctx.stroke();
            ctx.fill();
        }
    }

    recalculateBoundingBox() {
        this.boundingBox = [
            [this.pos[0], this.pos[1]],
            [this.pos[0] + this.width, this.pos[1]],
            [this.pos[0] + this.width, this.pos[1] + this.height],
            [this.pos[0], this.pos[1] + this.height]
        ];
    }
}

export default Bar;