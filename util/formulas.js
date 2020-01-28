//function naming convention: First character is label (Distinguishable or Indistinguishable) of ball, second character is label of bin, last word is rules

//k distinguishable balls, n distinguishable bins, no restrictions
export const calculateDDUnrestricted = (n, k) => {
    return Math.pow(n, k);
};

//k distinguishable balls, n distinguishable bins, injective
export const calculateDDInjective = (n, k) => {
    let max = n - k + 1;
    let total = 1;
    while (n > max) {
        total *= n;
        n -= 1;
    }
    return total * max;
};

//k distinguishable balls, n distinguishable bins, surjective
export const calculateDDSurjective = (n, k) => {
    return calculateStirlingNumber(n, k) * calculateFactorial(n);
};

//k distinguishable balls, n indistinguishable bins, no restrictions
export const calculateDIUnrestricted = (n, k) => {
    return calculateBinomialCoefficient(k-1, n-1);
};

export const calculateDIInjective = (n, k) => {
    return calculateBinomialCoefficient(n, k);
};

//k distinguishable balls, n indistinguishable bins, surjective
export const calculateDISurjective = (n, k) => {
    return calculateBinomialCoefficient(n+k+1, n-1);
};

//k indistinguishable balls, n distinguishable bins, no restrictions
export const calculateIDUnrestricted = (n, k) => {
    let numbers = getNumbersArray(k);
    let formula = (acc, i) => acc + calculateStirlingNumber(k, i)
    return numbers.reduce(formula, 0);
};

//k indistinguishable balls, n distinguishable bins, injective
export const calculateIDInjective = (n, k) => {
    if(k <= n) {
        return 1;
    } else {
        return 0;
    }
};

//k indistinguishable balls, n distinguishable bins, surjective
export const calculateIDSurjective = (n, k) => {
    return calculateStirlingNumber(n, k);
};

//k indistinguishable balls, n indistinguishable bins, no restrictions
export const calculateIIUnrestricted = (n, k) => {

};

//k indistinguishable balls, n indistinguishable bins, injective
export const calculateIIInjective = (n, k) => {
    if (k <= n) {
        return 1;
    } else {
        return 0;
    }
};

//k indistinguishable balls, n indistinguishable bins, surjective
export const calculateIISurjective = (n, k) => {

};

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