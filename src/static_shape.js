class StaticShape {
    constructor(pos, boundingBox) {
        this.pos = pos;
        this.boundingBox = boundingBox;
        this.items = [];
    }

    checkBounds(x, y) {
        let topLeft = (x >= this.boundingBox[0][0] && y >= this.boundingBox[0][1]);
        let topRight = (x < this.boundingBox[1][0] && y >= this.boundingBox[1][1]);
        let bottomRight = (x < this.boundingBox[2][0] && y < this.boundingBox[2][1]);
        let bottomLeft = (x >= this.boundingBox[3][0] && y < this.boundingBox[3][1]);

        return topLeft && topRight && bottomRight && bottomLeft;
    }

    checkItem(item) {
        let bound1 = this.checkBounds(item.boundingBox[0][0], item.boundingBox[0][1]);
        let bound2 = this.checkBounds(item.boundingBox[1][0], item.boundingBox[1][1]);
        let bound3 = this.checkBounds(item.boundingBox[2][0], item.boundingBox[2][1]);
        let bound4 = this.checkBounds(item.boundingBox[3][0], item.boundingBox[3][1]);

        return bound1 || bound2 || bound3 || bound4;
    }

    addItem(item) {
        if(!this.items.includes(item) && this.checkItem(item)) {
            this.items.push(item);
        }
    }

    removeItem(item) {
        if (this.items.includes(item) && !this.checkItem(item)) {
            let index = this.items.indexOf(item);
            this.items.splice(index, 1);
        }
    }

    recalculateBoundingBox() {}

    draw(ctx) {}
}

export default StaticShape;