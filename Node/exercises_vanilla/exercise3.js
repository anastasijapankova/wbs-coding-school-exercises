// Exercise 3 (Help - fs https://nodejs.org/api/fs.html)

const fs = require('fs')

// The second argument 'utf8' specifies the encoding of the file content, which is set to UTF-8 in this case.

// The callback function is executed once the file has been read. 
// If an error occurs during the reading process, it will be logged to the console. 
// Otherwise, the data parameter will contain the content of the file, which is then displayed in the console using console.log(data).

fs.readFile('test.html', 'utf8', (error, data) => {
    if (error) {
        console.log(error)
        return
    } console.log(data)
})