export const determineCases = (ballType, binType) => {

    if (ballType.toLowerCase() === "distinguishable") {
        if (binType.toLowerCase() === "distinguishable") {
            return (balls1, balls2) => {
                return checkOrderOfBalls(balls1, balls2);
            }
        } else if (binType.toLowerCase() === "indistinguishable") {
            return (bin1, bin2) => {

            }
        }
    } else if (ballType.toLowerCase() === "indistinguishable") {
        if (binType.toLowerCase() === "distinguishable") {
            return (bin1, bin2) => {
                return this.checkTotalBalls(bin1, bin2);
            }
        } else if (binType.toLowerCase() === "indistinguishable") {
            return null;
        }
    }
}

//only if the bins and balls are distinguishable
const checkOrderOfBalls = (balls1, balls2) => {

    if (balls1.length !== balls2.length) return false;

    for (let i = 0; i < balls1.length; i++) {
        if (balls1[i].label !== balls2[i].label) return false; //return false if the order is incorrect
    }
    return true; //return true if the order is the same for both bins
}

export const checkConstraints = (rules, bin) => {
    if (rules.toLowerCase() === "injective") {
        return checkInjective(bin);
    } else if (rules.toLowerCase() === "surjective") {
        return checkSurjective(bin);
    } else {
        return true;
    }
}

//if a bin has at most one ball
const checkInjective = (bin) => {
    if (bin.balls.length <= 1) {
        return true;
    } else {
        return false;
    }
}

//if a bin has at least one ball
const checkSurjective = (bin) => {
    if (bin.balls.length > 0) {
        return true;
    } else {
        return false;
    }
}