import Star from "./star";

//this class is concerned with handling the logic for stars and bars
class InterfaceAlt {
    constructor(numStars, numBars, starPosition, barPosition) {
        this.stars;
        this.bars;
        this.starPosition = starPosition;
        this.barPosition = barPosition;
        this.setStars(numStars);
    }

    setStars(numStars) {
        this.stars = new Array(numStars);

        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i] = new Star([133 * (i + 1), 400]);
        }
    }

    draw(ctx) {
        this.stars.forEach(star => star.draw(ctx));
        // this.barss.forEach(bar => bar.draw(ctx));
    }
}

export default InterfaceAlt;