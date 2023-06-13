import express from "express";
import { books } from "./books.js"

const app = express()

app.use(express.json())

app.listen(3000, () => console.log("Server is up and running at port 3000"))

// List all books at `/books` should return an array of all books
// localhost:3000/books

app.get('/books', (req, res) => {
    res.send(books)
    console.log(books)
})

// List one book by id. Should return an object containing the book requested
// localhost:3000/bookID?id=16

app.get('/bookID', handleBookSearchByID)

function handleBookSearchByID(req, res) {

    // console.log(req.query)
    // res.send(req.query)
    const bookID = parseInt(req.query.id)
    const result = books.filter((item) => item.id === bookID)
    console.log(result)
    res.send(result)
}

// List one book by title. Should return an object containing the book requested
// localhost:3000/bookTitle?title=1984
// localhost:3000/bookTitle?title=Catch-22
// localhost:3000/bookTitle?title=The Odyssey

app.get('/bookTitle', handleBookSearchByTitle)

function handleBookSearchByTitle(req, res) {

    // console.log(req.query)
    // res.send(req.query)

    const result = books.filter((item) => item.title === req.query.title)
    console.log(result)
    res.send(result)
}

// List all books of an author. Should return an array of books written by the given author
// localhost:3000/bookAuthor?author=Homer
// localhost:3000/bookAuthor?author=Leo Tolstoy

app.get('/bookAuthor', handleBookSearchByAuthor)

function handleBookSearchByAuthor(req, res) {

    // console.log(req.query)
    // res.send(req.query)

    const result = books.filter((item) => item.author === req.query.author)
    console.log(result)
    res.send(result)
}

// Add one book. Should return an object containing the result of the operation
// localhost:3000/book/add

app.post('/book/add', handleBookAdd)

function handleBookAdd(req, res) {
    books.push(req.body)
    res.send("Book added successfully!")
    console.log(books)
}

// Inside Thunder Client (Body)
// {
//     "id": "21",
//     "title": "A",
//     "author": "B"
// }

// Delete a book by id. Should return an object containing the result of the operation
// localhost:3000/book/delete?id=20

app.delete('/book/delete', handleBookDelete)

function handleBookDelete(req, res) {
    // console.log(req.query)
    const bookID = parseInt(req.query.id)
    let bookArray = books.filter(item => item.id !== bookID)
    console.log(bookArray)
    res.send(bookArray)
}

// PUT - Update a book. Should return an object containing the result of the operation
// localhost:3000/books/edit

app.put('/books/edit', handleBookEdit)

function handleBookEdit(req, res) {

    // res.send(req.body)
    // console.log(req.body)

    const editedBook = books.map((element) => {
        const bookID = parseInt(req.body.id)
        if (element.id === bookID) {
            element = req.body
        }
        return element
    })
    console.log(editedBook)
    // res.send("Book edited with PUT")
    res.send(editedBook)
}

// Inside Thunder Client (Body)
//  {
//     "id": "20",
//     "title": "Alice’s Adventures in Wonderland",
//     "author": "Anastasija Pankova"
//   }


// PATCH - Update a book. Should return an object containing the result of the operation
// localhost:3000/books/patch

app.patch('/books/patch', handleBookPatch)

function handleBookPatch(req, res) {

    // console.log(req.body)
    // res.send("Book patched")

    const patchedBook = books.map((element) => {

        const bookID = parseInt(req.body.id)
        if (element.id === bookID) {
            element = { ...element, ...req.body }
        }
        return element
    })
    console.log(patchedBook)
    res.send(patchedBook)
}

// Inside Thunder Client (Body)
// {
//    "id": "20", 
//    "author": "Anastasija Pankova"
//  }


