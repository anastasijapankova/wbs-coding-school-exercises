// // The Cat
// class Cat {
//     constructor(name) {
//         this.tiredness = 50;
//         this.hunger = 50;
//         this.lonliness = 50;
//         this.happiness = 50;
//         this.name = name;
//         console.log("Your name is: ", this.name)
//     }

//     feed(amount) {
//         this.hunger -= amount;
//         console.log('My hunger is:', this.hunger)
//     }

//     sleep(amount) {
//         this.tiredness -= amount;
//         console.log('My Tiredness is:', this.tiredness)
//     }

//     pet(amount) {
//         if (this.tiredness < 40) {
//             console.log(`Don't touch me you #@!$`)
//         } else {
//             this.lonliness -= amount;
//         }
//     }

// }

// const jim = new Cat('Jim');
// jim.feed(10)
// jim.sleep(30);
// jim.pet(20)

// console.log(jim.name)
// const jane = new Cat('Jane');

/**
 * The Reading List
 */
class BookList {
    constructor() {
        this.booksRead = 0;
        this.unreadBooks = 0;
        this.nextBook = {}
        this.currentBook = {}
        this.lastBookRead = {}
        this.books = []
    }

    addBook(...books) {
        this.books.push(...books)
        console.log('Books after adding:', books)
    }

    startReadingBook(book) {
        this.currentBook = { ...book }
    }

    finishCurrentBook() {
        // this.currentBook = {...book}
        // this.currentBook.read = true; //mark the book that is currently being read as "read"

        this.updateBook()
        // this.currentBook.readDate = Date.now()// Give it a read date of new Date(Date.now())
        this.lastBookRead = { ...this.currentBook }// Change the last book read to be the book that just got finished
        this.findNextBook()
        this.currentBook = { ...this.nextBook }; // Change the current book to be the next book to be read
    }

    updateBook() {
        const updatedBookIndex = this.books.findIndex(item => item.title === this.currentBook.title)

        this.books[updatedBookIndex].read = true
        this.books[updatedBookIndex].readDate = Date.now()
        console.log('Updated book is', this.books[updatedBookIndex])
    }

    findNextBook() {
        const nextBookIndex = this.books.findIndex(item => item.read === false)

        if (nextBookIndex > -1) {
            this.nextBook = { ...this.books[nextBookIndex] }
            console.log('Next to be read is', this.nextBook)
        } else console.log('All books are read. You should add more')

    }
}

class Book {
    constructor(title, genres, author) {
        this.title = title;
        this.genres = genres;
        this.author = author;
        this.read = false
        this.readDate = null
    }
}

const personalBookList = new BookList()
const theMatrix = new Book('The Matrix', 'Fantasy', 'Matrix Author')
const hannibal = new Book('Hannibal Lecter', 'Thriller', 'Tom Harris')
const harryPotter = new Book('Harry Potter', 'Fantasy', 'She')
personalBookList.addBook(theMatrix, hannibal, harryPotter)

personalBookList.startReadingBook(theMatrix)
personalBookList.finishCurrentBook()