// return type inferred from the return, number
function pow(x, y) {
    return Math.pow(x, y);
}
// return type specified
function pow2(x, y) {
    return Math.pow(x, y).toString();
}
// no returns
function pow3(x, y) {
    Math.pow(x, y);
}
