// 01
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, ${this.name}!`);
    }
  }
  
  const person = new Person("John", 30);
  person.greet(); // Output: Hello, John!

//   02
class Vehicle {
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
  
  const vehicle = new Vehicle("Toyota", "Corolla", 2015);
  console.log(vehicle.getAge()); // Output: 8
 
//   03
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  const rectangle = new Rectangle(10, 5);
  console.log(rectangle.getArea()); // Output: 50
  
//   04
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
  
  const account = new BankAccount("12345", "John Doe", 1000);
  console.log(account.balance); // Output: 1000
  account.deposit(500);
  console.log(account.balance); // Output: 1500
  account.withdraw(2000); // Output: Insufficient funds
  account.withdraw(500);
  console.log(account.balance); // Output: 1000
  
//   05
class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    speak() {
      console.log(`The ${this.type} named ${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log(`The ${this.type} named ${this.name} barks.`);
    }
  }
  
  const dog = new Dog("Rover", "dog");
  dog.speak(); // Output: The dog named Rover makes a sound.
  dog.bark(); // Output: The dog named Rover barks.

// 06
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
  console.log(shape.x, shape.y); // Output: 0 0
  shape.moveTo(5, 10);
  console.log(shape.x, shape.y); // Output: 5 10

// 07
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
  console.log(deck.size); // Output: 52
  deck.shuffle();
  console.log(deck.draw().toString()); // Output: King of Clubs
  console.log(deck.size); // Output: 51
  
// 08
class Track {
    constructor(title, artist) {
      this.title = title;
      this.artist = artist;
    }
  
    toString() {
      return `${this.title} by ${this.artist}`;
    }
  }
  
  class Playlist {
    constructor(name) {
      this.name = name;
      this.tracks = [];
    }
  
    addTrack(track) {
      this.tracks.push(track);
    }
  
    removeTrack(track) {
      const index = this.tracks.findIndex(t => t.title === track.title && t.artist === track.artist);
      if (index !== -1) {
        this.tracks.splice(index, 1);
      }
    }
  }
  
  // create an instance of the Playlist class
  const myPlaylist = new Playlist('My Playlist');
  
  // add some tracks to the playlist
  const track1 = new Track('Song 1', 'Artist 1');
  const track2 = new Track('Song 2', 'Artist 2');
  myPlaylist.addTrack(track1);
  myPlaylist.addTrack(track2);
  
  // remove a track from the playlist
  myPlaylist.removeTrack(track1);
  
  console.log(myPlaylist);
  