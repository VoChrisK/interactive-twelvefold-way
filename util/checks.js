export const determineCases = (ballType, binType) => {

    if (ballType.toLowerCase() === "distinguishable") {
        if (binType.toLowerCase() === "distinguishable") {
            return (bin1, bin2, i) => {
                return checkOrderOfBalls(bin1.balls, bin2[i].balls);
            }
        } else if (binType.toLowerCase() === "indistinguishable") {
            return (bin1, bin2) => {
                return checkAgainstOtherBins(bin1.balls, bin2, checkForSimilarBalls);
            }
        }
    } else if (ballType.toLowerCase() === "indistinguishable") {
        if (binType.toLowerCase() === "distinguishable") {
            return (bin1, bin2, i) => {
                return checkTotalBalls(bin1.balls, bin2[i].balls);
            }
        } else if (binType.toLowerCase() === "indistinguishable") {
            return (bin1, bin2) => {
                return checkAgainstOtherBins(bin1.balls, bin2, checkForSimilarLength);
            }
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

//only if the bins are distinguishable, and balls are indistinguishable, check count of bins
const checkTotalBalls = (bin1, bin2) => {
    return bin1.length === bin2.length
}

// For a given order of balls, check against other bins in a partition 
// if there exist similar order.
const checkAgainstOtherBins = (balls, otherBins, checkCallback) => {
    for (let i = 0; i < otherBins.length; i++) {
        if (checkCallback(balls, otherBins[i].balls)) return true;
    }

    return false;
}

//this function checks if two bins have the same balls, but not necessarily in order
const checkForSimilarBalls = (balls1, balls2) => {
    if (balls1.length !== balls2.length) return false;

    let labels = {};
    for(let i = 0; i < balls2.length; i++) {
        labels[balls2[i].label] = balls2[i].label;
    }

    for (let i = 0; i < balls1.length; i++) {
        if (!Boolean(labels[balls1[i].label])) return false; 
    }

    return true; //return true if the order is the same for both bins
}

//this function checks if two bins have the same amount of balls, regardless of their labels
const checkForSimilarLength = (balls1, balls2) => {
    return balls1.length === balls2.length;
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