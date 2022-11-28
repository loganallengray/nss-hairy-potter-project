// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
// import { usePottery } from './PotteryCatalog.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery('Cylinder', 5, 15);
let vase = makePottery('Round', 15, 20);
let bowl = makePottery('Semi-circle', 10, 5);
let teapot = makePottery('Intricate', 10, 15);
let teacup = makePottery('Semi-circle', 5, 5);

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



