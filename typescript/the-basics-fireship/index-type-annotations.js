let lucky = 23; // inferred to number
// lucky = "23" -- lucky should be number
let anything = 23;
anything = "23"; // no problem as type is any
let numberOnly = 23;
numberOnly = 0; // only accept number
let font;
font = 'bold'; // just like enum
const theOne = {
    first: 'jeff',
    last: 'devron'
};
const theTwo = {
    first: "usain",
    last: "bolt",
    age: 30,
    winner: true
};
