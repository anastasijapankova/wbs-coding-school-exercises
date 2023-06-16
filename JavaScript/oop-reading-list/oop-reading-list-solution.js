class BookList {
    constructor() {
        this.booksRead = 0;
        this.unreadBooks = 0;
        this.nextBook = {}
        this.currentBook = {}
        this.lastBookRead = {}
        this.books = []
    }
    add(books) {
        this.books.push(books)
        console.log("Books after adding:", books)
    }

    startReadingBook(book) {
        this.currentBook = book
        console.log("Current Book:", this.currentBook)
    }

    finishCurrentBook(book) {
        book.read = true;
        book.readDate = Date(Date.now())
        console.log("Just Finished Book", book)

        this.findNextBook()
        this.currentBook = this.nextBook
    }

    updateBook() {
        const updatedBookIndex = this.books.findIndex(book => book.title === this.currentBook.title)
        this.books[updatedBookIndex].read = true
        this.books[updatedBookIndex].readDate = Date.now()
        console.log("Updated book is", this.books[updatedBookIndex])
    }

    findNextBook() {
        const nextBook = this.books.findIndex(book => book.read === false)

        if (nextBook > -1) {
            this.nextBook = this.books[nextBook]
            console.log("Next Book:", this.nextBook)
        } else {
            console.log("All books read")
        }
    }
}


class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = null;
    }
}


const myBookList = new BookList()
const book1 = new Book("War and Piece", "Novel", "Leo Tolstoy")
const book2 = new Book("Eugene Onegin", "Novel", "Alexander Pushkin")
const book3 = new Book("Doctor Zhivago", "Novel", "Boris Pasternak")
myBookList.add(book1)
myBookList.add(book2)
myBookList.add(book3)
myBookList.startReadingBook(book1)
myBookList.finishCurrentBook(book1)
myBookList.startReadingBook(book2)
myBookList.finishCurrentBook(book2)
myBookList.startReadingBook(book3)
myBookList.finishCurrentBook(book3)













