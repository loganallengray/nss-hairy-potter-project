// define and export a firepottery function
// two parameters
// pottery object
// kiln temperature
// function will add two properties
// fired, set to true
// cracked
// if above 2200 degrees, cracked is true
// if not, cracked is false

export const firePottery = (pot, temp) => {
    pot.fired = true;

    if (temp > 2200) {
        pot.cracked = true;
    } else {
        pot.cracked = false;
    }

    return pot;
}