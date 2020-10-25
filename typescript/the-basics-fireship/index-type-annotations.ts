let lucky = 23 // inferred to number
// lucky = "23" -- lucky should be number

let anything: any = 23
anything = "23" // no problem as type is any

let numberOnly: number = 23
numberOnly = 0 // only accept number


// creating your own type
type Style = 'bold' | 'italic'

let font: Style
font = 'bold' // just like enum


// shape of the object, model
interface Person {
    first: string
    last: string
}

const theOne: Person = {
    first: 'jeff',
    last: 'devron'
}


interface PersonCustom {
    first: string
    last: string
    [key: string]: any // anything can be anything as long as the key is string
}

const theTwo: PersonCustom = {
    first: "usain",
    last: "bolt",
    age: 30,
    winner: true
}