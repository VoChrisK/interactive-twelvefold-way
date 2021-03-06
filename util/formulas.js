//function naming convention: First character is label (Distinguishable or Indistinguishable) of ball, second character is label of bin, last word is rules

export const determineFormula = (ballType, binType, rules) => {
    switch(ballType) {
        case "distinguishable":
            switch(binType) {
                case "distinguishable":
                    switch(rules) {
                        case "unrestricted":
                            return calculateDDUnrestricted;
                        case "injective":
                            return calculateDDInjective;
                        case "surjective":
                            return calculateDDSurjective;
                    }
                case "indistinguishable":
                    switch(rules) {
                        case "unrestricted":
                            return calculateDIUnrestricted;
                        case "injective":
                            return calculateDIInjective;
                        case "surjective":
                            return calculateDISurjective;
                    }
            }
        case "indistinguishable":
            switch (binType) {
                case "distinguishable":
                    switch (rules) {
                        case "unrestricted":
                            return calculateIDUnrestricted;
                        case "injective":
                            return calculateIDInjective;
                        case "surjective":
                            return calculateIDSurjective;
                    }
                case "indistinguishable":
                    switch (rules) {
                        case "unrestricted":
                            return calculateIIUnrestricted;
                        case "injective":
                            return calculateIIInjective;
                        case "surjective":
                            return calculateIISurjective;
                    }
            }
        default:
            return null;
    };
};

//k distinguishable balls, n distinguishable bins, no restrictions
const calculateDDUnrestricted = (k, n) => {
    return Math.pow(n, k);
};

//k distinguishable balls, n distinguishable bins, injective
const calculateDDInjective = (k, n) => {
    if(k > n) return 0;

    return calculateFactorial(n) / calculateFactorial(n-k);
};

//k distinguishable balls, n distinguishable bins, surjective
const calculateDDSurjective = (k, n) => {
    return calculateStirlingNumber(k, n) * calculateFactorial(n);
};

//k indistinguishable balls, n distinguishable bins, no restrictions
const calculateIDUnrestricted = (k, n) => {
    k += 1; //since I removed one less bar than usual
    n -= 1; //since I added one more star than usual
    return calculateBinomialCoefficient(n + k - 1, k - 1);
};

//k indistinguishable balls, n distinguishable bins, injective
const calculateIDInjective = (k, n) => {
    return calculateBinomialCoefficient(n, k);
};

//k indistinguishable balls, n distinguishable bins, surjective
const calculateIDSurjective = (k, n) => {
    k += 1;
    n -= 1;
    return calculateBinomialCoefficient(n - 1, k - 1);
};

//k distinguishable balls, n indistinguishable bins, no restrictions
const calculateDIUnrestricted = (k, n) => {
    let numbers = getNumbersArray(n);
    let formula = (acc, i) => acc + calculateStirlingNumber(k, i)
    return numbers.reduce(formula, 0);
};

//k distinguishable balls, n indistinguishable bins, injective
const calculateDIInjective = (k, n) => {
    if(k <= n) {
        return 1;
    } else {
        return 0;
    }
};

//k distinguishable balls, n indistinguishable bins, surjective
const calculateDISurjective = (k, n) => {
    return calculateStirlingNumber(k, n);
};

//k indistinguishable balls, n indistinguishable bins, no restrictions
const calculateIIUnrestricted = (k, n) => {
    let numbers = getNumbersArray(n);
    let formula = (acc, i) => acc + calculatePartition(k, i)
    return numbers.reduce(formula, 0);
};

//k indistinguishable balls, n indistinguishable bins, injective
const calculateIIInjective = (k, n) => {
    if (k <= n) {
        return 1;
    } else {
        return 0;
    }
};

//k indistinguishable balls, n indistinguishable bins, surjective
const calculateIISurjective = (k, n) => {
    return calculatePartition(k, n);
};

//calculated using recurrence relation P(n,k)=P(n-1,k-1)+P(n-k,k) <- by wolfram mathworld
//k and n will be reversed because we use k balls and n bins
const calculatePartition = (k, n) => {
    if (k === n) {
        return 1;
    }
    
    if (k <= 0 || n <= 0) {
        return 0;
    }

    return calculatePartition(k - 1, n - 1) + calculatePartition(k - n, n);
}

const calculateStirlingNumber = (n, k) => {
    let numbers = getNumbersArray(k);
    let formula = (acc, i) => acc + (Math.pow(-1, i) * calculateBinomialCoefficient(k, i) * Math.pow(k - i, n))
    let sumResults = numbers.reduce(formula, 0);

    return (1/calculateFactorial(k)) * sumResults;
};

const calculateBinomialCoefficient = (n, k) => {
    return Math.floor(calculateFactorial(n) / (calculateFactorial(n-k) * calculateFactorial(k)));
};

const calculateFactorial = (n) => {
    let total = 1;
    while(n > 0) {
        total *= n;
        n -= 1;
    }
    return total;
}

const getNumbersArray = (n) => {
    let numbers = new Array(n + 1);
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = i;
    }
    return numbers;
}