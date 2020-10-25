/**
 * functional programming
 * 1. pure function
 * 2. immutable data
 * 3. function as arguments
 * 4. functions as return value
 */
// pure functions
var num = 123;
function toStringFromAny(val) {
    return val.toString();
}
var str = toStringFromAny(num);
console.log(typeof str); // should be string
// immutable data
var data = Object.freeze([1, 2, 3, 4, 5, 6]);
// function as arguments
var addEmoji = function (val) { return toStringFromAny(val) + "😄"; }; // first order func, => 1😄, 2😄, etc
var emojiData = data.map(addEmoji); // higher order function, function with function as param
console.log(emojiData); // [ "1😄", "2😄", "3😄", "4😄", "5😄", "6😄"]
// functions as return value
var appendEmoji = function (fixed) { return function (dynamic) { return fixed + dynamic; }; };
// rain is the function returned, dynamic => fixed + dynamic
// "🌧️" is the fixed argument
var rain = appendEmoji("🌧️");
var sun = appendEmoji("🌞");
// well, i get the idea, but still can't put it in words, so here
console.log(rain("today")); // 🌧️today
console.log(sun("tomorrow")); // 🌞tomorrow
