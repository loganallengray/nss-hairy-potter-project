// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { usePottery } from './PotteryCatalog.js'
import { potteryList } from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery('Mug', 5, 15);
let vase = makePottery('Vase', 15, 20);
let bowl = makePottery('Bowl', 10, 5);
let teapot = makePottery('Teapot', 10, 15);
let teacup = makePottery('Teacup', 5, 5);

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2200);
let firedVase = firePottery(vase, 2200);
let crackedBowl = firePottery(bowl, 2500);
let firedTeapot = firePottery(teapot, 2200);
let firedTeacup = firePottery(teacup, 2200);

// Determine which ones should be sold, and their price
let sellableMug = toSellOrNotToSell(firedMug);
let sellableVase = toSellOrNotToSell(firedVase);
let notSellableBowl = toSellOrNotToSell(crackedBowl);
let sellableTeapot = toSellOrNotToSell(firedTeapot);
let SellableTeacup = toSellOrNotToSell(firedTeacup);

// Invoke the component function that renders the HTML list
const potteryHTMLElement = document.querySelector(".potteryList")
potteryHTMLElement.innerHTML = potteryList(usePottery());