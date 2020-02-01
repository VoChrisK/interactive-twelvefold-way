import Star from "./star";
import Bar from './bar';
import LeftMostStar from "./left_most_star";
import PartitionAlt from "./partition_alt";

//this class is concerned with handling the logic for stars and bars
class InterfaceAlt {
    constructor(numStars, numBars, starPosition, barPosition) {
        this.stars;
        this.bars;
        this.starPosition = starPosition;
        this.barPosition = barPosition;
        this.partitions = [];
        this.setStars(numStars);
        this.setBars(numBars);
    }

    setStars(numStars) {
        this.stars = new Array(parseInt(numStars));

        for (let i = 0; i < this.stars.length; i++) {
            if(i === 0) {
                this.stars[i] = new LeftMostStar([this.starPosition[0] * (i + 1), this.starPosition[1]], this.starPosition[0]);
            } else {
                this.stars[i] = new Star([this.starPosition[0] * (i + 1), this.starPosition[1]], this.starPosition[0]);
            }
        }
    }

    setBars(numBars) {
        this.bars = new Array(parseInt(numBars));

        for(let i = 0; i < this.bars.length; i++) {
            this.bars[i] = new Bar([this.barPosition[0] * (i + 1), this.barPosition[1]], 10, 60);
        }
    }

    addStar() {
        this.stars.push(new Star([this.starPosition[0] * (this.stars.length + 1), this.starPosition[1]], this.starPosition[0]));
    }

    removeStar() {
        this.stars.pop();
    }

    addBar() {
        this.bars.push(new Bar([this.barPosition[0] * (this.bars.length + 1), this.barPosition[1]], 10, 60));        
    }

    removeBar() {
        this.bars.pop();
    }

    checkBars() {
        return this.bars.length === this.stars.reduce((acc, star) => acc + star.bars.length, this.stars[0].leftBars.length);
    }

    checkSurjective() {
        return this.stars[0].leftBars.length > 0 || this.stars[this.stars.length - 1].bars.length > 0;
    }

    checkEachPartition(rules) {
        for(let i = 0; i < this.partitions.length; i++) {
            if(this.partitions[i].checkStars(this.stars, rules)) {
                return true;
            }
        }

        return false;
    }

    addPartition(event, rules) {
        event.preventDefault();
        if(this.checkEachPartition(rules) || !this.checkBars()) return false;
        if (rules === "surjective") {
            if(this.checkSurjective()) return false;
        }

        this.partitions.push(new PartitionAlt(JSON.parse(JSON.stringify(this.stars))));
        return true;
    }

    draw(ctx) {
        this.stars.forEach(star => star.draw(ctx));
        this.bars.forEach(bar => bar.draw(ctx));
    }
}

export default InterfaceAlt;