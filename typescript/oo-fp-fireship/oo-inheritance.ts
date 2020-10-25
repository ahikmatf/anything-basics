// base class
class Human {
    constructor(public name) {}

    sayHi() {
        return `Hello, ${this.name}`
    }
}

let wade = new Human("Dwayne wade")
console.log(wade.sayHi()) // Hello, Dwayne wade



// inherit from human
class SuperHuman extends Human {
    heroName

    constructor(name) {
        super(name) // run parent constructor
        this.heroName = `HERO ${name}`
    }

    superpower() {
        return `${this.heroName} three pointer 🏀🏀🏀`
    }
}

let steph = new SuperHuman("Steph curry")
console.log(steph.superpower()) // HERO Steph curry three pointer 🏀🏀🏀
console.log(steph.sayHi()) // Hello, Steph curry