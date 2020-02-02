export const determineCases = (moveableType, staticType) => {

    if (moveableType.toLowerCase() === "distinguishable") {
        if (staticType.toLowerCase() === "distinguishable") {
            return (shape1, shape2, i) => {
                return checkOrderOfShapes(shape1.items, shape2[i].items);
            }
        } else if (staticType.toLowerCase() === "indistinguishable") {
            return (shape1, shape2) => {
                return checkAgainstOtherShapes(shape1.items, shape2, checkForSimilarShapes);
            }
        }
    } else if (moveableType.toLowerCase() === "indistinguishable") {
        if (staticType.toLowerCase() === "distinguishable") {
            return (shape1, shape2, i) => {
                return checkTotalShapes(shape1.items, shape2[i].items);
            }
        } else if (staticType.toLowerCase() === "indistinguishable") {
            return (shape1, shape2) => {
                return checkAgainstOtherShapes(shape1.items, shape2, checkForSimilarLength);
            }
        }
    }
}

//only if the bins and balls are distinguishable
const checkOrderOfShapes = (items1, items2) => {
    if (items1.length !== items2.length) return false;

    for (let i = 0; i < items1.length; i++) {
        if (items1[i].label !== items2[i].label) return false; //return false if the order is incorrect
    }
    return true; //return true if the order is the same for both bins
}

//only if the bins are distinguishable, and balls are indistinguishable, check count of bins
const checkTotalShapes = (items1, items2) => {
    return items1.length === items2.length;
}

// For a given order of balls, check against other bins in a partition 
// if there exist similar order.
const checkAgainstOtherShapes = (items, otherShapes, checkCallback) => {
    for (let i = 0; i < otherShapes.length; i++) {
        if (checkCallback(items, otherShapes[i].items)) return true;
    }

    return false;
}

//this function checks if two bins have the same balls, but not necessarily in order
const checkForSimilarShapes = (items1, items2) => {
    if (items1.length !== items2.length) return false;

    let labels = {};
    for(let i = 0; i < items2.length; i++) {
        labels[items2[i].label] = items2[i].label;
    }

    for (let i = 0; i < items1.length; i++) {
        if (!Boolean(labels[items1[i].label])) return false; 
    }

    return true; //return true if the order is the same for both bins
}

//this function checks if two bins have the same amount of balls, regardless of their labels
const checkForSimilarLength = (items1, items2) => {
    return items1.length === items2.length;
}

export const checkConstraints = (restriction, shape) => {
    if (restriction.toLowerCase() === "injective") {
        return checkInjective(shape);
    } else if (restriction.toLowerCase() === "surjective") {
        return checkSurjective(shape);
    } else {
        return true;
    }
};

export const checkIDSurjective = (shapes) => {
    if (shapes[0].items.length > 0 || shapes[shapes.length - 1].items.length > 0) return false;
    for(let i = 1; i < shapes.length - 1; i++) {
        if(!checkInjective(shapes[i])) return false;
    }

    return true;
};

//if a bin has at most one ball
const checkInjective = (shape) => {
    if (shape.items.length <= 1) {
        return true;
    } else {
        return false;
    }
};

//if a bin has at least one ball
const checkSurjective = (shape) => {
    if (shape.items.length > 0) {
        return true;
    } else {
        return false;
    }
}