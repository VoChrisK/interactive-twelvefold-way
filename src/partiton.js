import Bin from './bin';

//true values denote there exists a partition, false values denote there doesn't not exist a partition
class Partition {
    constructor(bins, ballType, binType, rules) {
        this.bins = bins; //array or object of bins
        this.ballType = ballType;
        this.binType = binType;
        this,rules = rules; //unrestricted, injective, surjective
    }

    //this function checks if there is a parititon. 
    //It matches each input's bin with each partition's 
    //bin to check if they have the same configuration. 
    //A counter variable keeps track of simiarities: if 
    //the counter equals to the total # of bins, then this 
    //implies that the partition already exists
    checkBins(bins) {
        let counter = 0;
        for(let i = 0; i < this.bins.length; i++) {

        }

        return counter === this.bins.length;
    }

    //only if the bins and balls are distinguishable
    checkOrderOfBalls(bin1, bin2) {
        if(bin1.length !== bin2.length) return false;

        for(let i = 0; i < bin1.length; i++) {
            if(bin1[i] !== bin2[i]) return false; //return false if the order is incorrect
        }
        return true; //return true if the order is the same for both bins
    }

    //only if the bins are indistinguishable and the balls are not.
    //For a given order of balls, check against other bins in a partition 
    // if there exist similar order. Return true 
    //exist
    checkAgainstOtherBins() {

    }

    //only if the bins are distinguishable, and balls are indistinguishable, check count of bins
    checkTotalBalls(bin1, bin2) {
        return bin1.length === bin2.length
    }

    checkRules(bin) {
        if(this.rules.toLowerCase() === "injective") {
            return this.checkInjective(bin);
        } else if (this.rules.toLowerCase() === "surjective") {
            return this.checkSurjective(bin);
        } else {
            return true;
        }
    }

    //if a bin has at most one ball
    checkInjective(bin) {
        if(bin.length <= 1) {
            return true;
        } else {
            return false;
        }
    }

    //if a bin has at least one ball
    checkSurjective(bin) {
        if(bin.length > 0) {
            return true;
        } else {
            return false;
        }
    }
}

export default Partition;