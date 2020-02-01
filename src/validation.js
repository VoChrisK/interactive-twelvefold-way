import Ball from './ball';
import Bin from './bin';
import Bar from './bar';
import Star from './star';
import LeftMostStar from './left_most_star';

class Validation {
    constructor() {
        this.starsAndBars = false;
        this.moveableShapePosition;
        this.staticShapePosition;
        this.setMoveableShapePosition();
        this.setStaticShapePosition();
    }

    usesStarsAndBars(moveableType, staticType, restriction) {
        this.starsAndBars = (moveableType === "indistinguishable" && staticType === "distinguishable") && (restriction === "unrestricted" || restriction === "surjective");
    }

    setMoveableShapePosition() {
        if(this.starsAndBars) {
            this.moveableShapePosition = [100, 200];
        } else {
            this.moveableShapePosition = [100, 50];
        }
    }

    setStaticShapePosition() {
        if (this.starsAndBars) {
            this.staticShapePosition = [200, 400];
        } else {
            this.staticShapePosition = [245, 440];
        }
    }

    setMoveableShapes(numMoveableShapes) {
        const moveableShapes = new Array(parseInt(numMoveableShapes));

        if(this.starsAndBars) {
            for (let i = 0; i < moveableShapes.length; i++) {
                moveableShapes[i] = new Bar([this.moveableShapePosition[0] * (i + 1), this.moveableShapePosition[1]], 10, 60);
            }
        } else {
            for (let i = 0; i < moveableShapes.length; i++) {
                moveableShapes[i] = new Ball(i + 1, [this.moveableShapePosition[0] * (i + 1), this.moveableShapePosition[1]], 35);
            }
        }

        return moveableShapes;
    }

    setStaticShapes(numStaticShapes) {
        const staticShapes = new Array(parseInt(numStaticShapes));

        if(this.starsAndBars) {
            for (let i = 0; i < staticShapes.length; i++) {
                if (i === 0) {
                    staticShapes[i] = new LeftMostStar([this.staticShapePosition[0] * (i + 1), this.staticShapePosition[1]], this.staticShapePosition[0]);
                } else {
                    staticShapes[i] = new Star([this.staticShapePosition[0] * (i + 1), this.staticShapePosition[1]], this.staticShapePosition[0]);
                }
            }
        }
        for (let i = 0; i < staticShapes.length; i++) {
            staticShapes[i] = new Bin(i + 1, [(this.staticShapePosition[0] * i) + 20, this.staticShapePosition[1]], [40, 160, 300]);
        }

        return staticShapes;
    }

    addMoveableShape(length) {
        if(this.starsAndBars) {
            return new Bar([this.moveableShapePosition[0] * (length + 1), this.moveableShapePosition[1]], 10, 60);
        } else {
            return new Ball(length + 1, [this.moveableShapePosition[0] * (length + 1), this.moveableShapePosition[1]], 35);
        }
    }

    addStaticShape(length) {
        if(this.starsAndBars()) {
            return new Star([this.staticShapePosition[0] * (length + 1), this.staticShapePosition[1]], this.staticShapePosition[0]);
        } else {
            return new Bin(length + 1, [(this.staticShapePosition[0] * (length)) + 20, this.staticShapePosition[1]], [40, 160, 300]);
        }
    }

    changeLabels() {
        let ballLabel = document.getElementById("ball-label-header");
        let binLabel = document.getElementById("bin-label-header");

        if (this.starsAndBars) {
            ballLabel.innerText = "Bars";
        } else {
            ballLabel.innerText = "Balls";
        }

        if (this.starsAndBars) {
            binLabel.innerText = "Stars";
        } else {
            binLabel.innerText = "Bins";
        }
    }

    //updateAmount
    updateDisplayCount(value) {
        if (this.starsAndBars) {
            document.getElementsByClassName("num-balls")[0].innerHTML = value - 1;
        } else {
            document.getElementsByClassName("num-balls")[0].innerHTML = value;
        }
    }
}

export default Validation;