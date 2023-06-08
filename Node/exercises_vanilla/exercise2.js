// Exercise 2 (Help - fs https://nodejs.org/api/fs.html)

// npm i fs

const fs = require('fs')

const content = "hello"


fs.writeFile('test.html', content, (error) => {
    if (error) {
        console.error(error)
        return
    }
    console.log('File created successfully!')
})