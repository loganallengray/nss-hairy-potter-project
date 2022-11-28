import { usePottery } from './PotteryCatalog.js'

const test = usePottery();

// define and export potterylist function
// get items from sellablepottery array, by importing the usepottery function
// convert each pottery object into usable html
// example:
/* 
    <section class="pottery" id="pottery--1">
    <h2 class="pottery__shape">Mug</h2>
    <div class="pottery__properties">
        Item weighs 3 grams and is 6 cm in height
    </div>
    <div class="pottery__price">Price is $20</div>
    </section>
*/
// return single string containing all HTML data
export const PotteryList = () => {
    let potteryToHTML = '';

    console.log(test);
    console.log(usePottery());

    for (const pot of usePottery()) {
        potteryToHTML += `
        <section class="pottery" id="pottery--${pot.id}">
            <h2 class="pottery__shape">${pot.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pot.weight} grams and is ${pot.height} cm in height
            </div>
            <div class="pottery__price">Price is $${pot.price}</div>
        </section>`
    }

    return potteryToHTML;
}