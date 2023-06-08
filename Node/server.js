const { rmSync } = require("fs")
const anyName = require("./demoImportExport.js")

// console.log(anyName)
// console.log(anyName.function(2, 3))

// const dotenv = require('dotenv')
// console.log('dotenv', dotenv)

// dotenv.config()
// console.log(process.env)

// OR

require('dotenv').config()


const http = require('http')
// console.log(http)

const firstRequestListener = (req, res) => {
    // console.log('firstRequestListener is EXECUTED')
    // console.log(req)
    // console.log(res)
    res.end('Hello')
}

// console.log(process.env)

const server = http.createServer(firstRequestListener)
// console.log(server)


// server.listen(2611, () => console.log('Server 2611 is up and running'))

// OR

const port = process.env.PORT;
server.listen(port, () => console.log('Server is up and running', port))
