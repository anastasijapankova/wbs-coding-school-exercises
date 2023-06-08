// The Node REPL
// REPL is an abbreviation for read–eval–print loop. 
// It’s a program that loops, or repeatedly cycles, through three different states: 
// a read state where the program reads input from a user, the eval state where the program evaluates the user’s input, 
// and the print state where the program prints out its evaluation to a console. Then it loops through these states again.
// When you install Node, it comes with a built-in JavaScript REPL. 
// You can access the REPL by typing the command node (with nothing after it) into the terminal and hitting enter. 
// A > character will show up in the terminal indicating the REPL is running and prompting your input. 
// The Node REPL will evaluate your input line by line.

// By default, you indicate the input is ready for eval when you hit enter. 
// If you’d like to type multiple lines and then have them evaluated at once you can type .editor while in the REPL. 
// Once in “editor” mode, you can type control + d when you’re ready for the input to be evaluated. 
// Each session of the REPL has a single shared memory; you can access any variables or functions you define until you exit the REPL.

// A REPL can be extremely useful for performing calculations, learning a language, and developing code. 
// It’s a place where you can explore language features and try things out while receiving immediate feedback. 
// Figuring out how to do this outside of the browser or a website can be really empowering.
// The Node environment contains a number of Node-specific global elements in addition to those built into the JavaScript language. 
// Every Node-specific global property sits inside the the Node global object. 
// This object contains a number of useful properties and methods that are available anywhere in the Node environment.
// Let’s try out the Node REPL. This will be a good way for you to explore the Node global object!

//  1. Let’s enter the Node REPL. Type node in the terminal and press enter.

// 2.Experiment on your own within the REPL to get a better sense of it. Here are some suggestions for things to try:
// Access the global object. You can console.log(global) or, since the REPL displays the return of each evaluated line, simply type global and then enter.

// Woah… it looks huge. A lot of that is because of the global.process object. Check out an easier to read list of the properties on the global object with Object.keys(global).

// The global object has a lot of useful properties and methods, and it’s not common to add any to it. However, it is just an object, so we can! Add a property to the global object, eg. global.cat = 'meow!'.

// Now print or return the property you just added:
// > console.log(global.cat)
// 'meow!'

// If you’re familiar with running JavaScript on the browser, you’ve likely encountered the Window object. 
// Here’s one major way that Node differs: try to access the Window object (this will throw an error). 
// The Window object is the JavaScript object in the browser that holds the DOM, since we don’t have a DOM here, 
// there’s no Window object.

// You’ll learn more about the global object as you explore Node, but remember that, 
// at its core, it’s just a JavaScript object!
