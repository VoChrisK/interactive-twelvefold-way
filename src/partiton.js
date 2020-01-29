import Bin from './bin';

//true values denote there exists a partition, false values denote there doesn't not exist a partition
class Partition {
    constructor(bins, rules) {
        this.bins = bins; //array or object of bins
        this.rules = rules; //unrestricted, injective, surjective
    }

    //this function checks if there is a parititon. 
    //It matches each input's bin with each partition's 
    //bin to check if they have the same configuration. 
    //A counter variable keeps track of simiarities: if 
    //the counter equals to the total # of bins, then this 
    //implies that the partition already exists or the parition
    //does not adhere to the rules
    checkBins(bins, checkBothBins) {
        let counter = 0;
        for(let i = 0; i < this.bins.length; i++) {
            if (checkBothBins(bins[i].balls, this.bins[i].balls)) {
                counter++;
            }
        }

        console.log(counter);
        return counter === this.bins.length;
    }

    //only if the bins are indistinguishable and the balls are not.
    //For a given order of balls, check against other bins in a partition 
    // if there exist similar order. Return true if it does.
    //later I will optimize this by using objects for bins
    // checkAgainstOtherBins(balls, otherBins) {
    //     for(let i = 0; i < otherBins.length; i++) {
    //         if(otherBins[i].balls.length === balls.length) {
    //             for(let j = 0; j < otherBins[i].balls.length; j++) {
    //                 if(otherBins[i].balls[j] !== balls[j]) return false;
    //             }
    //         }
    //     }

    //     return false;
    // }

    //only if the bins are distinguishable, and balls are indistinguishable, check count of bins
    checkTotalBalls(bin1, bin2) {
        return bin1.length === bin2.length
    }
}

export default Partition;