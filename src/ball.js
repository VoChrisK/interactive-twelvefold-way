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

    draw(ctx, ballType, y) {
        if(typeof ctx === "object") { //ctx is a number when clicked so I need to have a conditional here
            this.recalculateBoundingBox();

            let newPos = this.pos[1];
            if (this.pos[1] > y) {
                newPos -= y * 2.5;
            }

            ctx.beginPath();
            ctx.arc(this.pos[0], newPos, this.radius, 0, Math.PI * 2);
            ctx.stroke();

            if(ballType === "distinguishable") {
                ctx.font = "24px arial";
                ctx.fillText(this.label, this.pos[0] - 8, newPos + 8);
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