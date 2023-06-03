/**
 * 01. 
 * 
 * Create a class called Person with properties for name and age. Add a method called greet() that prints a message to the console greeting the person by name. Then, create an instance of the class and call the greet() method on it.
 * 
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, ${this.name}!`)
    }
}

const person = new Person("Anastasija", 28)
person.greet()

/**
 * 02.
 * Create a class called Vehicle with properties for make, model, and year. Add a method called getAge() that calculates and returns the age of the vehicle based on the current year and the year it was made. Then, create an instance of the class and call the getAge() method on it.
 * 
 */

class Vehicles {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const vehicle = new Vehicles("BWM", "X5", 2018)
console.log(vehicle.getAge())

/**
 * 03.
 * Create a class called Rectangle with properties for width and height. Add a method called getArea() that calculates and returns the area of the rectangle. Then, create an instance of the class and call the getArea() method on it.
 * 
 */

class Rectangle {
    constructor(width, heigth) {
        this.width = width;
        this.height = heigth;
    }

    getArea() {
        return this.width * this.height
    }
}

const rectangle = new Rectangle(5, 6)
console.log(rectangle.getArea())

/**
 * 04.
 * Create a class called BankAccount with properties for accountNumber, accountHolderName, and balance. Add methods called deposit() and withdraw() that allow the user to add or subtract money from the account balance. Then, create an instance of the class and use the deposit() and withdraw() methods to modify the account balance.
 * 
 */

class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
        }
    }
}

const account = new BankAccount("12345678", "Anastasija Pankova", 1000);
console.log(account.balance)
account.deposit(500);
console.log(account.balance);
account.withdraw(2000);
account.withdraw(500);
console.log(account.balance);


/**
 * 05.
 * Create a class called Animal with properties for name and type. 
 * Add a method called speak() that prints a message to the console representing the sound the animal makes. 
 * Then, create a subclass called Dog that inherits from the Animal class and adds a method called bark() that prints 
 * a message to the console representing the sound a dog makes. Create an instance of the Dog class and call both the speak() 
 * and bark() methods on it.
 * 
 */

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    speak() {
        console.log(`This ${this.type} named ${this.name} makes a sound`)
    }
}

class Dog extends Animal {
    bark() {
        console.log(`This ${this.type} named ${this.name} barks`)
    }
}


const dog = new Dog("Gluck", "Beagle");
dog.speak();
dog.bark();

/**
 * 06.
 * Create a class called Shape with properties for x and y coordinates, as well as a method called moveTo(x, y) that changes the shape's position. 
 * Then, create an instance of the Shape class and call the moveTo() method on it.
 * 
 */

class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }
}

const shape = new Shape(0, 0);
console.log(shape.x, shape.y);
shape.moveTo(5, 10);
console.log(shape.x, shape.y);

/**
 * 07.
 * Create a class called Deck that represents a standard deck of playing cards. 
 * It should have properties for cards, which is an array of Card objects, and size, which is the number of cards in the deck. 
 * Add methods called shuffle() and draw() that allow the user to shuffle the deck and draw a card from the top of the deck, respectively. 
 * Then, create an instance of the Deck class and use the shuffle() and draw() methods to simulate a game of cards.
 * 
 */

class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    toString() {
        return `${this.rank} of ${this.suit}`;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.size = 0;
        const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

        for (let rank of ranks) {
            for (let suit of suits) {
                this.cards.push(new Card(rank, suit));
                this.size++;
            }
        }
    }

    shuffle() {
        for (let i = this.size - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw() {
        if (this.size === 0) {
            console.log("No more cards in the deck");
            return null;
        }
        this.size--;
        return this.cards.pop();
    }
}

const deck = new Deck();
console.log(deck.size);
deck.shuffle();
console.log(deck.draw().toString());
console.log(deck.size);

/**
 * 08.
 * Create a class called Playlist with properties for name and tracks, which is an array of track objects. 
 * Add methods called addTrack(track) and removeTrack(track) that allow the user to add or remove a track from the playlist, respectively. 
 * Then, create an instance of the Playlist class and use the addTrack() and removeTrack() methods to modify the playlist.
 * 
 */

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }

    toString() {
        return `${this.title} by ${this.astist}`
    }
}

class Playlist {
    constructor(name) {
        this.name = name;
        this.tracks = [];
    }

    addTrack(song) {
        this.tracks.push(song)
    }

    removeTrack(song) {
        const index = this.tracks.findIndex(t => t.title === song.title && t.artist === song.artist);
        if (index !== -1) {
            this.tracks.splice(index, 1);
        }
    }
}

const playlist = new Playlist("Evenings"); // create an instance of the Playlist class


const song1 = new Song("Mockingbird", "Eminem"); // add some tracks to the playlist
playlist.addTrack(song1);
console.log(playlist);

const song2 = new Song("Umbrella", "Rihanna"); // add some tracks to the playlist
playlist.addTrack(song2);
console.log(playlist);

playlist.removeTrack(song1); // remove a track from the playlist
console.log(playlist);

