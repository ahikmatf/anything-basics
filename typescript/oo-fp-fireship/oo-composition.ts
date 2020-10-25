// This can live anywhere in your codebase: 
//-- taken from https://www.typescriptlang.org/docs/handbook/mixins.html
function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
        );
      });
    });
  }


// composition

// NOT OO
// decouple properties or behaviour into objects or func that return object
const hasName = (name) => {
    return { name }
}

const canSayHi = (name) => {
    return {
        sayHi: () => `Hrllo, ${name}`
    }
}

// known as mixins pattern, mixing behavior (?)
const Person = function(name) {
    return {
        ...hasName(name),
        ...canSayHi(name)
    }
}

const person = Person("matt")
console.log(person.sayHi()) // Hrllo, matt



// OO, in mixins pattern
class CanSayHi {
    name

    sayHi() {
        return `Hello ${this.name}`
    }
}

class HasSuperPower {
    heroName

    superpower() {
        return `${this.heroName} ⛹️‍♂️⛹️‍♂️⛹️‍♂️`
    }
}

// we put (implement) what we needed, we compose things
class SuperHeroMixins implements CanSayHi, HasSuperPower {
    heroName

    constructor(public name) {
        this.heroName = `SUPPAA ${name}`
    }

    // the implementation detail is on its own class
    sayHi: () => string
    superpower: () => string
}

applyMixins(SuperHeroMixins, [CanSayHi, HasSuperPower])
const ts = new SuperHeroMixins("typescript")
console.log(ts.sayHi())
console.log(ts.superpower())