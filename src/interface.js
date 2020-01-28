import Bin from './bin';
import Ball from './ball';
import Partition from './partiton';

class Interface {
    constructor(numBalls, numBins) {
        this.balls = new Array(numBalls);
        for(let i = 0; i < this.balls.length; i++) {
            this.balls[i] = new Ball(i, [100 * (i + 1), 50], 35);
        }
        this.bins = new Array(numBins);
        for (let i = 0; i < this.bins.length; i++) {
            this.bins[i] = new Bin(i, [350 * i, 200], [40, 250, 250]);
        }
    }

    draw(ctx) {
        this.balls.forEach(ball => ball.draw(ctx));
        this.bins.forEach(bin => bin.draw(ctx));
    }
}

export default Interface;