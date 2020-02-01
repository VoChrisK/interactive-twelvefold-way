import MoveableShape from './moveable_shape';

class Ball extends MoveableShape {
    constructor(label, pos, radius) {
        const boundingBox = [
            [pos[0] - radius, pos[1] - radius],
            [pos[0] + radius, pos[1] - radius],
            [pos[0] + radius, pos[1] + radius],
            [pos[0] - radius, pos[1] + radius]
        ];
        super(pos, boundingBox);
        this.label = label;
        this.radius = radius;
    }

    draw(ctx, ballType) {
        if(typeof ctx === "object") { //ctx is a number when clicked so I need to have a conditional here
            this.recalculateBoundingBox();
            ctx.beginPath();
            ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.font = "30px sans-serif";

            if(ballType === "distinguishable") {
                ctx.fillText(this.label, this.pos[0] - 8, this.pos[1] + 8);
            }
        }
    }

    recalculateBoundingBox() {
        this.boundingBox = [
            [this.pos[0] - this.radius, this.pos[1] - this.radius],
            [this.pos[0] + this.radius, this.pos[1] - this.radius],
            [this.pos[0] + this.radius, this.pos[1] + this.radius],
            [this.pos[0] - this.radius, this.pos[1] + this.radius]
        ];
    }
}

export default Ball;