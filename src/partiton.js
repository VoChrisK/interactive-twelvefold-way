//true values denote there exists a partition, false values denote there doesn't not exist a partition
class Partition {
    constructor(bins) {
        this.bins = bins;
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
            if (checkBothBins(bins[i], this.bins, i)) {
                counter++;
            }
        }

        return counter === this.bins.length;
    }

    draw(ctx, balls, binType) {
        balls.forEach(ball => ball.draw(ctx));
        this.bins.forEach(bin => bin.draw(ctx, binType));
    }
}

export default Partition;