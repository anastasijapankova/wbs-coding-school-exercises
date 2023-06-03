class Cat {
    constructor(name) {
        this.hunger = 0;
        this.tiredness = 0;
        this.lonliness = 0;
        this.name = name;
        console.log("Hey! I am a cat and my name is: ", this.name)
    }

    feed(amount) {
        this.hunger += amount;
        if (this.hunger < 40) {
            console.log("My hunger is: ", this.hunger + " I'm super hungry!")
        } else if (this.hunger < 80) {
            console.log("My hunger is:", this.hunger + " Not really! Do you have a snack tho?")
        } else {
            console.log("My hunger is:", this.hunger + " Thanks! I'm full")
        }
    }

    sleep(amount) {
        this.tiredness += amount;
        if (this.tiredness < 40) {
            console.log("My tiredness is: ", this.tiredness + " I'm super tired and want to sleep!")
        } else if (this.tiredness < 80) {
            console.log("My tiredness is:", this.tiredness + " Maybe a quick nap?")
        } else {
            console.log("My tiredness is:", this.tiredness + " Noo! I had enough sleep!")
        }
    }

    play(amount) {
        this.lonliness += amount;
        if (this.lonliness < 40) {
            console.log("My loneliness is: ", this.lonliness + " I'm feeling lonely! Please play with me")
        } else if (this.tlonliness < 80) {
            console.log("My loneliness is:", this.lonliness + " Not lonely! I'll just watch you")
        } else {
            console.log("My loneliness is:", this.lonliness + " Don't touch me! I want to stay alone")
        }
    }

}

const kitty = new Cat('Kitty');
kitty.feed(60);
kitty.sleep(20);
kitty.play(90);

console.log("***")

const gerry = new Cat('Gerry');
kitty.feed(20);
kitty.sleep(80);
kitty.play(10);


