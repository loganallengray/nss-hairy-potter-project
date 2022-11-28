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
export const potteryList = (pottery) => {
    let potteryToHTML = '';
    console.log(pottery)
    for (const pot of pottery) {
        potteryToHTML += `
        <section>
            <h2 class="pottery__shape">${pot.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pot.weight} grams and is ${pot.height} cm in height
            </div>
            <div class="pottery__price">Price is $${pot.price}</div>
        </section>`
    }

    return potteryToHTML;
}