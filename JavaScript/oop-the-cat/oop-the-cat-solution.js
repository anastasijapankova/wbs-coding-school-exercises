class Cat {
    constructor(name) {
        this.tiredness = 50;
        this.hunger = 50;
        this.lonliness = 50;
        this.happiness = 50;
        this.name = name;
        console.log("Your name is: ", this.name)
    }

    feed(amount) {
        this.hunger -= amount;
        console.log('My hunger is:', this.hunger)
    }

    sleep(amount) {
        this.tiredness -= amount;
        console.log('My Tiredness is:', this.tiredness)
    }

    pet(amount) {
        if (this.tiredness < 40) {
            console.log(Don't touch me you #@!$)
        } else {
            this.lonliness -= amount;
        }
    }

}

const jim = new Cat('Jim');
jim.feed(10)
jim.sleep(30);
jim.pet(20)

console.log(jim.name)
const jane = new Cat('Jane');