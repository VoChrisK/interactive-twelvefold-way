import Ball from './ball';
import Bin from './bin';
import Bar from './bar';
import Star from './star';

class Distribution {
    constructor() {
        this.starsAndBars = false;
        this.moveableShapePosition;
        this.staticShapePosition;
        this.radius;
        this.binBounds;
        this.ballCountPos;
        this.barCountPos;
        this.barWidth;
        this.barHeight;
        this.setUp();
    }

    usesStarsAndBars(moveableType, staticType, restriction) {
        return moveableType === "indistinguishable" && staticType === "distinguishable" && (restriction === "unrestricted" || restriction === "surjective");
    }

    setMoveableShapePosition() {
        if(this.starsAndBars) {
            this.moveableShapePosition = [100, 200];
        } else {
            this.moveableShapePosition = [100, 50];
        }
    }

    setStaticShapePosition(num) {
        if (this.starsAndBars) {
            this.staticShapePosition = [40 * num * 1.2, 80 * num * 1.2];
        } else {
            this.staticShapePosition = [49 * num, 88 * num];
        }
    }

    setUp() {
        this.setMoveableShapePosition();
        
        if (window.innerWidth <= 1500) {
            this.setStaticShapePosition(3);
            this.binBounds = [25, 100, 187.5];
            this.radius = 25;
            this.ballCountPos = [58, 85];
            this.barCountPos = [65, 120];
            this.countPos = [45, 25];
            this.barWidth = 8;
            this.barHeight = 50;
        } else if (window.innerWidth > 1500 && window.innerWidth <= 1850) {
            this.setStaticShapePosition(3.5);
            this.binBounds = [32, 128, 240];
            this.radius = 30;
            this.ballCountPos = [75, 120];
            this.barCountPos = [75, 150];
            this.countPos = [52, 30];
            this.barWidth = 10;
            this.barHeight = 60;
        } else {
            this.setStaticShapePosition(5);
            this.binBounds = [40, 160, 300];
            this.radius = 35;
            this.ballCountPos = [95, 150];
            this.barCountPos = [90, 150];
            this.countPos = [65, 30];
            this.barWidth = 10;
            this.barHeight = 60;
        }
    }

    setMoveableShapes(numMoveableShapes) {
        const moveableShapes = new Array(parseInt(numMoveableShapes));

        if(this.starsAndBars) {
            for (let i = 0; i < moveableShapes.length; i++) {
                moveableShapes[i] = new Bar([this.moveableShapePosition[0] * (i + 1), this.moveableShapePosition[1]], this.barWidth, this.barHeight);
            }
        } else {
            for (let i = 0; i < moveableShapes.length; i++) {
                moveableShapes[i] = new Ball(i + 1, [this.moveableShapePosition[0] * (i + 1), this.moveableShapePosition[1]], this.radius);
            }
        }

        return moveableShapes;
    }

    setStaticShapes(numStaticShapes) {
        const staticShapes = new Array(parseInt(numStaticShapes));
        if(this.starsAndBars) {
            for (let i = 0; i < staticShapes.length; i++) {
                staticShapes[i] = new Star([this.staticShapePosition[0] * i - 50, this.staticShapePosition[1]], this.staticShapePosition[0], this.barCountPos);
            }
            staticShapes.push(this.addStaticShape(staticShapes.length));
        } else {
            for (let i = 0; i < staticShapes.length; i++) {
                staticShapes[i] = new Bin(i + 1, [(this.staticShapePosition[0] * i) + 20, this.staticShapePosition[1]], this.binBounds, this.ballCountPos, this.countPos);
            }
        }

        return staticShapes;
    }

    addMoveableShape(length) {
        if(this.starsAndBars) {
            return new Bar([this.moveableShapePosition[0] * (length + 1), this.moveableShapePosition[1]], this.barWidth, this.barHeight);
        } else {
            return new Ball(length + 1, [this.moveableShapePosition[0] * (length + 1), this.moveableShapePosition[1]], this.radius);
        }
    }

    addStaticShape(length) {
        if(this.starsAndBars) {
            return new Star([this.staticShapePosition[0] * length - 50, this.staticShapePosition[1]], this.staticShapePosition[0], this.barCountPos);
        } else {
            return new Bin(length + 1, [(this.staticShapePosition[0] * (length)) + 20, this.staticShapePosition[1]], this.binBounds, this.ballCountPos, this.countPos);
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

    updateDisplayCount(value) {
        if (this.starsAndBars) {
            document.getElementsByClassName("num-balls")[0].innerHTML = value - 1;
        } else {
            document.getElementsByClassName("num-balls")[0].innerHTML = value + 1;
        }
    }
}

export default Distribution;