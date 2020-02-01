import LeftMostStar from "./left_most_star";

class PartitionAlt {
    constructor(stars) {
        this.stars = stars;
    }

    checkStars(stars, rules) {
        if(rules === "unrestricted") {
            if(this.stars[0] instanceof LeftMostStar && stars[0] instanceof LeftMostStar) {
                if(this.stars[0].leftBars.length !== stars[0].leftBars.length) return false;
            }

            for(let i = 0; i < this.stars.length; i++) {
                if(this.stars[i].bars.length !== stars[i].bars.length) {
                    return false; //this implies that the partition doesn't exist
                }
            }
            return true;
        } else { //if rules are surjective
            if(this.stars[0].leftBars.length > 0 || this.stars[this.stars.length - 1].bars.length > 0) return true; 

            for (let i = 1; i < this.stars.length - 1; i++) { //do not account for the right-most gap
                if (this.stars[i].bars.length !== stars[i].bars.length) {
                    return false; //this implies that the partition doesn't exist
                }
            }

            return true;
        }
    }
}

export default PartitionAlt;