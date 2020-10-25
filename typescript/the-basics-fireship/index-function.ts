// return type inferred from the return, number
function pow(x: number, y: number) {
    return Math.pow(x, y)
}

// return type specified
function pow2(x: number, y: number): string {
    return Math.pow(x, y).toString()
}

// no returns
function pow3(x: number, y: number): void {
    Math.pow(x, y)
}