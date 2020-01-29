import Bin from './bin';
import Ball from './ball';
import Partition from './partiton';
import { determineCases, checkConstraints } from '../util/checks';

class Interface {
    constructor(numBalls, numBins, ballType, binType) {
        this.balls = new Array(numBalls);
        this.bins = new Array(numBins);
        this.partitions = [];
        document.getElementsByClassName("submit-partition")[0].addEventListener("submit", event => {
            if(this.addPartition(event)) {
                console.log(this.partitions);
            } else {
                console.log("Cannot add partition!");
            }
        });

        for(let i = 0; i < this.balls.length; i++) {
            this.balls[i] = new Ball(i + 1, [100 * (i + 1), 50], 35);
        }

        for (let i = 0; i < this.bins.length; i++) {
            this.bins[i] = new Bin(i + 1, [(300 * i) + 20, 400], [40, 210, 200]);
        }
    }

    violateConstraints() {
        for(let i = 0; i < this.bins.length; i++) {
            if(!checkConstraints("unrestricted", this.bins[i])) return true;
        }

        return false;
    }

    //this function checks if all balls are in the bins by checking if the total balls in bins equals to the total balls
    checkBalls() {
        return this.balls.length === this.bins.reduce((acc, bin) => acc + bin.balls.length, 0);
    }

    //checks if there exists a partition that is identical. Returns true if that's the case
    checkEachPartition() {
        for (let i = 0; i < this.partitions.length; i++) {
            if (this.partitions[i].checkBins(this.bins, determineCases("distinguishable", "distinguishable"))) {
                return true;
            }
        }

        return false;
    }

    addPartition(event) {
        event.preventDefault();
        if(this.checkEachPartition() || this.violateConstraints() || !this.checkBalls()) return false;

        //create a deep copy of bins <- JSON.parse(JSON.stringify(bins))
        this.partitions.push(new Partition(JSON.parse(JSON.stringify(this.bins)), "surjective"));
        return true;
    }

    draw(ctx) {
        this.balls.forEach(ball => ball.draw(ctx));
        this.bins.forEach(bin => bin.draw(ctx));
    }
}

export default Interface;