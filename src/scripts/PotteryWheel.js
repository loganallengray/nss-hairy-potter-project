// have a variable to increment as the key for each piece of pottery
let potteryKey = 1;

// define and export a makepottery function
// makepottery function should return a pottery object, where the properties are edited by the parameters
// pottery object should have shape, weight, height, and ID properties
// increment ID
export const makePottery = (potShape, potWeight, potHeight) => {
    const newPot = {
        id: potteryKey,
        shape: potShape,
        weight: potWeight,
        height: potHeight
    }

    potteryKey += 1;

    return newPot;
}