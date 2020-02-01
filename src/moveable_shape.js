class MoveableShape {
    constructor(pos, boundingBox) {
        this.pos = pos;
        this.boundingBox = boundingBox;
        this.isClicked = false;
    }

    checkBounds(x, y) {
        let topLeft = (x >= this.boundingBox[0][0] && y >= this.boundingBox[0][1]);
        let topRight = (x < this.boundingBox[1][0] && y >= this.boundingBox[1][1]);
        let bottomRight = (x < this.boundingBox[2][0] && y < this.boundingBox[2][1]);
        let bottomLeft = (x >= this.boundingBox[3][0] && y < this.boundingBox[3][1]);

        return topLeft && topRight && bottomRight && bottomLeft;
    }

    recalculateBoundingBox() {}

    draw(ctx) {}
}

export default MoveableShape;