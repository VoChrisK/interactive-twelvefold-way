import StaticShape from './static_shape';

class Bin extends StaticShape {
    constructor(label, pos, bounds) {
        const boundingBox = [
            [pos[0], pos[1]],
            [pos[0] + bounds[0] + bounds[1], pos[1]],
            [pos[0] + bounds[1], pos[1] + bounds[2]],
            [pos[0] + bounds[0], pos[1] + bounds[2]]
        ];
        super(pos, boundingBox);
        this.label = label;
        this.bounds = bounds //[X1, X2, Y]
    }

    // checkBounds(x, y) {
    //     return (x >= this.boundingBox[0][0] && y >= this.boundingBox[0][1]) && (x >= this.boundingBox[1][0] && y < this.boundingBox[1][1]) && (x < this.boundingBox[2][0] && y < this.boundingBox[2][1]) && (x < this.boundingBox[3][0] && y >= this.boundingBox[3][1]);
    // }

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

    draw(ctx, binType, y) {
        if (typeof ctx === "object") {
            this.recalculateBoundingBox();
            let newPos = this.pos[1];
            if(this.pos[1] > y) {
                newPos = y;
            }

            ctx.beginPath();
            ctx.moveTo(this.pos[0], newPos);
            ctx.lineTo(this.pos[0] + this.bounds[0], newPos + this.bounds[2]);
            ctx.lineTo(this.pos[0] + this.bounds[1], newPos + this.bounds[2]);
            ctx.lineTo(this.pos[0] + this.bounds[0] + this.bounds[1], newPos);
            
            ctx.stroke();

            ctx.font = "24px arial";
            if(binType === "distinguishable") {
                ctx.fillText(this.label, this.pos[0] + 95, newPos + 150);
            }

            ctx.fillText(this.items.length, this.pos[0] + this.bounds[1] - 65, newPos + this.bounds[2] + 30);
        }
    }

    recalculateBoundingBox() {
        this.boundingBox = [
            [this.pos[0], this.pos[1]],
            [this.pos[0] + this.bounds[0] + this.bounds[1], this.pos[1]],
            [this.pos[0] + this.bounds[1], this.pos[1] + this.bounds[2]],
            [this.pos[0] + this.bounds[0], this.pos[1] + this.bounds[2]]
        ];
    }
}

export default Bin;