class Star {
    constructor(pos, gap) {
        this.pos = pos;
        this.gap = gap;
        this.bars = [];
        this.rightBoundingBox = [
            [this.pos[0], this.pos[1] - 20],
            [this.pos[0] + this.gap, this.pos[1] - 20],
            [this.pos[0] + this.gap, this.pos[1] + 90],
            [this.pos[0], this.pos[1] + 90]
        ];
    }

    checkRightBounds(x, y) {
        return (x >= this.rightBoundingBox[0][0] && y >= this.rightBoundingBox[0][1]) && (x < this.rightBoundingBox[1][0] && y >= this.rightBoundingBox[1][1]) && (x < this.rightBoundingBox[2][0] && y < this.rightBoundingBox[2][1]) && (x >= this.rightBoundingBox[3][0] && y < this.rightBoundingBox[3][1]);
    }

    checkRight(bar) {
        return this.checkRightBounds(bar.boundingBox[0][0], bar.boundingBox[0][1]) && this.checkRightBounds(bar.boundingBox[1][0], bar.boundingBox[1][1]) && this.checkRightBounds(bar.boundingBox[2][0], bar.boundingBox[2][1]) && this.checkRightBounds(bar.boundingBox[3][0], bar.boundingBox[3][1]);
    }

    addBar(bar) {
        if(!this.bars.includes(bar) && this.checkRight(bar)) {
            this.bars.push(bar);
        }
    }

    removeBar(bar) {
        if(this.bars.includes(bar) && !this.checkRight(bar)) {
            let index = this.bars.indexOf(bar);
            this.bars.splice(index, 1);
        }
    }

    draw(ctx) {
        if(typeof ctx === "object") {
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
            ctx.fillText(this.bars.length, this.pos[0] + 90, this.pos[1] + 100);
        }
    }
}

export default Star;