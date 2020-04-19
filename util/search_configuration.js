import Bin from './../src/bin';

export const findDDUConfiguration = (moveableShapes, staticLength, binsArray) => {
    if(moveableShapes.length === 0) {
        return createBins(binsArray);   
    }

    let configurations = [];

    for(let i = 0; i < staticLength; i++) {
        binsArray = refreshBins(binsArray);
        for(let j = 0; j < moveableShapes.length; j++) {
            binsArray[i].push(moveableShapes[j]);
            configurations.push(findDDUConfiguration(moveableShapes.slice(1), staticLength, binsArray));
        }
    }

    return configurations;
}

export const findDDIConfiguration = (moveableShapes, staticShapes, idx) => {
    if(moveableShapes.length === 0) return staticShapes;

    let configurations = [];

    for (let i = idx; i < staticShapes.length; i++) {
        for (let j = 0; j < moveableShapes.length; j++) {
            staticShapes[i].addItem(moveableShapes[j]);
            configurations.push(findDDIConfiguration(moveableShapes.slice(1), staticShapes, i+1));
        }
    }

    return configurations;
}

const refreshBins = (bins) => {
    let binsArray = [];
    for (let i = 0; i < bins.length; i++) {
        binsArray.push([]);
    }
    return binsArray;
}

const createBins = (bins) => {
    let newBins = [];
    let newBin;

    for(let i = 0; i < bins.length; i++) {
        newBin = new Bin(i + 1, [245, 440], [40, 160, 300]);
        newBin.items = bins[i].slice();
        newBins.push(newBin);
    }

    return newBins;
};



//essentially you iterate

/*

1 2 3 4
*/


