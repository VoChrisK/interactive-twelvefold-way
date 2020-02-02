import MoveableShape from './moveable_shape';

class Bar extends MoveableShape {
    constructor(pos, width, height) {
        const boundingBox = [
            [pos[0], pos[1]],
            [pos[0] + width, pos[1]],
            [pos[0] + width, pos[1] + height],
            [pos[0], pos[1] + height]
        ];
        super(pos, boundingBox);
        this.width = width;
        this.height = height;
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