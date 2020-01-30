import Bin from './bin';
import Ball from './ball';
import Partition from './partiton';
import { determineCases, checkConstraints } from '../util/checks';

//this class is concerned with the logic of the interface
class Interface {
    constructor(numBalls, numBins, ballPosition, binPosition) {
        this.balls;
        this.bins;
        this.ballPosition = ballPosition;
        this.binPosition = binPosition;
        this.partitions = [];
        this.setBalls(numBalls);
        this.setBins(numBins);
    }

    setBalls(numBalls) {
        this.balls = new Array(parseInt(numBalls));

        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i] = new Ball(i + 1, [this.ballPosition[0] * (i + 1), this.ballPosition[1]], 35);
        }
    }

    setBins(numBins) {
        this.bins = new Array(parseInt(numBins));

        for (let i = 0; i < this.bins.length; i++) {
            this.bins[i] = new Bin(i + 1, [(this.binPosition[0] * i) + 20, this.binPosition[1]], [40, 160, 300]);
        }
    }

    addBall() {
        this.balls.push(new Ball(this.balls.length + 1, [this.ballPosition[0] * (this.balls.length + 1), this.ballPosition[1]], 35));
    }

    removeBall() {
        this.balls.pop();
    }

    addBin() {
        this.bins.push(new Bin(this.bins.length + 1, [(this.binPosition[0] * (this.bins.length)) + 20, this.binPosition[1]], [40, 160, 300]));
    }

    removeBin() {
        this.bins.pop();
    }

    violateConstraints(rules) {
        for(let i = 0; i < this.bins.length; i++) {
            if(!checkConstraints(rules, this.bins[i])) return true;
        }

        return false;
    }

    //this function checks if all balls are in the bins by checking if the total balls in bins equals to the total balls
    checkBalls() {
        return this.balls.length === this.bins.reduce((acc, bin) => acc + bin.balls.length, 0);
    }

    //checks if there exists a partition that is identical. Returns true if that's the case
    checkEachPartition(ballType, binType) {
        for (let i = 0; i < this.partitions.length; i++) {
            if (this.partitions[i].checkBins(this.bins, determineCases(ballType, binType))) {
                return true;
            }
        }

        return false;
    }

    addPartition(event, rules, ballType, binType) {
        event.preventDefault();
        if(this.checkEachPartition(ballType, binType) || this.violateConstraints(rules) || !this.checkBalls()) return false;

        //create a deep copy of bins <- JSON.parse(JSON.stringify(bins))
        this.partitions.push(new Partition(JSON.parse(JSON.stringify(this.bins)), rules));
        return true;
    }

    draw(ctx, ballType, binType) {
        this.balls.forEach(ball => ball.draw(ctx, ballType));
        this.bins.forEach(bin => bin.draw(ctx, binType));
    }
}

export default Interface;