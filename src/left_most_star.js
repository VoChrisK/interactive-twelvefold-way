import Star from './star';

class LeftMostStar extends Star {
    constructor(pos, gap) {
        super(pos, gap);
        this.leftBars = [];
        this.leftBoundingBox = [
            [this.pos[0], this.pos[1] - 20],
            [this.pos[0] - this.gap, this.pos[1] - 20],
            [this.pos[0] - this.gap, this.pos[1] + 90],
            [this.pos[0], this.pos[1] + 90]
        ];
    }

    checkLeftBounds(x, y) {
        return (x < this.leftBoundingBox[0][0] && y >= this.leftBoundingBox[0][1]) && (x >= this.leftBoundingBox[1][0] && y >= this.leftBoundingBox[1][1]) && (x >= this.leftBoundingBox[2][0] && y < this.leftBoundingBox[2][1]) && (x < this.leftBoundingBox[3][0] && y < this.leftBoundingBox[3][1]);
    }

    checkLeft(bar) {
        return this.checkLeftBounds(bar.boundingBox[0][0], bar.boundingBox[0][1]) && this.checkLeftBounds(bar.boundingBox[1][0], bar.boundingBox[1][1]) && this.checkLeftBounds(bar.boundingBox[2][0], bar.boundingBox[2][1]) && this.checkLeftBounds(bar.boundingBox[3][0], bar.boundingBox[3][1]);
    }

    addLeftBar(bar) {
        if (!this.leftBars.includes(bar) && this.checkLeft(bar)) {
            this.leftBars.push(bar);
        }
    }

    removeLeftBar(bar) {
        if (this.leftBars.includes(bar) && !this.checkLeft(bar)) {
            let index = this.leftBars.indexOf(bar);
            this.leftBars.splice(index, 1);
        }
    }

    draw(ctx) {
        if (typeof ctx === "object") {
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
            ctx.fillText(this.leftBars.length, this.pos[0] - 120, this.pos[1] + 100);

            ctx.fillText(this.bars.length, this.pos[0] + 90, this.pos[1] + 100);
        }
    }
}

export default LeftMostStar;