import Configuration from './configuration';
import { determineCases, checkConstraints } from '../util/checks';

class Interaction {
    constructor(moveableShapes, staticShapes) {
        this.moveableShapes = moveableShapes;
        this.staticShapes = staticShapes;
        this.configurations = [];
    }

    setMoveableShapes(moveableShapes) {
        this.moveableShapes = moveableShapes;
    }

    setStaticShapes(staticShapes) {
        this.staticShapes = staticShapes;
    }

    addMoveableShape(moveableShape) {
        this.moveableShapes.push(moveableShape);
    }

    removeMoveableShape() {
        this.moveableShapes.pop();
    }

    addStaticShape(staticShape) {
        this.staticShapes.push(staticShape);
    }

    removeStaticShape() {
        this.staticShapes.pop();
    }

    violateRestriction(restriction) {
        for(let i = 0; i < this.staticShapes.length; i++) {
            if(!checkConstraints(restriction, this.staticShapes[i])) return true;
        }

        return false;
    }

    //this function checks if all balls are in the bins by checking if the total balls in bins equals to the total balls
    checkMoveableShapes() {
        return this.moveableShapes.length === this.staticShapes.reduce((acc, shape) => acc + shape.items.length, 0);
    }

    //checks if there exists a partition that is identical. Returns true if that's the case
    checkEachPartition(moveableType, staticType) {
        for (let i = 0; i < this.configurations.length; i++) {
            if (this.configurations[i].checkStaticShapes(this.staticShapes, determineCases(moveableType, staticType))) {
                return true;
            }
        }

        return false;
    }

    addPartition(event, restriction, moveableType, staticType) {
        event.preventDefault();
        if(this.checkEachPartition(moveableType, staticType) || this.violateRestriction(restriction) || !this.checkMoveableShapes()) return false;

        this.configurations.push(new Configuration(JSON.parse(JSON.stringify(this.staticShapes))));
        return true;
    }

    // cloneBins() {
    //     let newBins = [];
    //     let newBalls;
    //     let newBin;
    //     let newBall;

    //     this.bins.forEach(bin => {
    //         newBalls = [];
    //         bin.balls.forEach(ball => {
    //             newBall = Object.assign({}, ball);
    //             newBalls.push(newBall);
    //         });
    //         newBin = Object.create(Bin.prototype, bin);
    //         console.log(newBin);
    //         newBin.balls = newBalls;
    //         newBins.push(newBin);
    //     });
    //     return newBins;
    // }

    draw(ctx, moveableType, staticType) {
        this.moveableShapes.forEach(shape => shape.draw(ctx, moveableType));
        this.staticShapes.forEach(shape => shape.draw(ctx, staticType));
    }
}

export default Interaction;