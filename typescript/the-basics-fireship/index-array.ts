const arr = [] // inferred as type any
arr.push(1)
arr.push("2")
arr.push(undefined)


// array using specified type
const numbers: number[] = []
numbers.push(2)
numbers.push(5)
// numbers.push(false) -- error


// custom type
type MyList = [number, string, boolean]
const defaultMyList: MyList = [1, "is", true]


// optional type
type OptionalMyList = [number?, string?]
const defaultOptionalMyLis: OptionalMyList = [] // can be initialize with empty array since its optional

defaultOptionalMyLis.push(1)
// defaultOptionalMyLis.push(true) -- error, the second should be string
defaultOptionalMyLis.push("Hidetoshi")
defaultOptionalMyLis.push(1) // no error, why?
defaultOptionalMyLis.push(3) // no error, why?