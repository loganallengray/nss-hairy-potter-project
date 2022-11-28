// empty array variable, to be filled with pottery that will be sold
const sellablePottery = [];

// define and export tosellornottosell function
// pottery object as parameter
// if cracked, add no price property at all
// if weight under 6, add price property at a value of 20
// if not, price is 40
// push pottery to sellable pottery array
// return pottery object
export const toSellOrNotToSell = (pot) => {
    if (!pot.cracked) {
        if (pot.weight < 6) {
            pot.price = 20;
        } else {
            pot.price = 40;
        }
        sellablePottery.push(pot);
    }

    return pot;
}

// define and export usepottery array
// returns a copy of sellablepottery array
export const usePottery = () => {
    const potteryCopy = [...sellablePottery];

    return potteryCopy;
}