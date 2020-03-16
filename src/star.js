import StaticShape from './static_shape';

class Star extends StaticShape {
    constructor(pos, gap, barCountPos) {
        const boundingBox = [
            [pos[0], pos[1] - 20],
            [pos[0] + gap, pos[1] - 20],
            [pos[0] + gap, pos[1] + 90],
            [pos[0], pos[1] + 90]
        ];
        super(pos, boundingBox);
        this.gap = gap;
        this.barCountPos = barCountPos;
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
            ctx.fillText(this.items.length, this.pos[0] + this.barCountPos[0], this.pos[1] + this.barCountPos[1]);
        }
    }
}

export default Star;