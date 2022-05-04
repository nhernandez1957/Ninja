class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Hello, my name is ${this.name}`);
    }

    showStats() {
        console.log(`These are my stats: health = ${this.health}, speed = ${this.speed}, strength = ${this.strength}`);
    }

    drinkShake() {
        this.health += 10;
        console.log(`${this.name} just drank a health shake.`)
        console.log(`${this.name}'s health is now at ${this.health}`);
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200)
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkShake();
        console.log("I am one with the force, the force is with me.")
    }
}

// const ninja = new Ninja("Nicholas", 100);
// ninja.sayName();
// ninja.showStats();
// ninja.drinkShake();

const sensei = new Sensei("Master Splinter");
sensei.speakWisdom();
sensei.showStats();