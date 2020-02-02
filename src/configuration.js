//true values denote there exists a partition, false values denote there doesn't not exist a partition
class Configuration {
    constructor(staticShapes) {
        this.staticShapes = staticShapes;
    }

    //this function checks if there is a parititon. 
    //It matches each input's bin with each partition's 
    //bin to check if they have the same configuration. 
    //A counter variable keeps track of simiarities: if 
    //the counter equals to the total # of bins, then this 
    //implies that the partition already exists or the parition
    //does not adhere to the rules
    checkStaticShapes(otherShapes, checkBothShapes) {
        let counter = 0;
        for(let i = 0; i < this.staticShapes.length; i++) {
            if (checkBothShapes(otherShapes[i], this.staticShapes, i)) {
                counter++;
            }
        }

        return counter === this.staticShapes.length;
    }

    draw(ctx, moveableType, staticType, y) {
        this.staticShapes.forEach(staticShape => {
            staticShape.draw(ctx, staticType, y);
            staticShape.items.forEach(moveableShape => moveableShape.draw(ctx, moveableType, y))
        });
    }
}

export default Configuration;