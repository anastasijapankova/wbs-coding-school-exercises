# Book server exercise

- Setup an express server which listens at any valid and unused port.
- Create apis for
  - List all books at `/books` should return an array of all books
  - List one book by id. Should return an object containing the book requested
  - List one book by title. Should return an object containing the book requested
  - List all books of an author. Should return an array of books written by the given author
  - Add one book. Should return an object containing the result of the operation
  - Delete a book by id. Should return an object containing the result of the operation
  - Update a book. Should return an object containing the result of the operation

Here is the array of books:

```
let books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
  { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 6, title: 'Moby-Dick', author: 'Herman Melville' },
  { id: 7, title: 'War and Peace', author: 'Leo Tolstoy' },
  { id: 8, title: 'Ulysses', author: 'James Joyce' },
  { id: 9, title: 'Lolita', author: 'Vladimir Nabokov' },
  { id: 10, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
  { id: 11, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { id: 12, title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain' },
  { id: 13, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 14, title: 'Fahrenheit 451', author: 'Ray Bradbury' },
  { id: 15, title: 'Don Quixote', author: 'Miguel de Cervantes' },
  { id: 16, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez' },
  { id: 17, title: 'The Odyssey', author: 'Homer' },
  { id: 18, title: 'Catch-22', author: 'Joseph Heller' },
  { id: 19, title: 'The Divine Comedy', author: 'Dante Alighieri' },
  { id: 20, title: 'Alice’s Adventures in Wonderland', author: 'Lewis Carroll' },
];
```
