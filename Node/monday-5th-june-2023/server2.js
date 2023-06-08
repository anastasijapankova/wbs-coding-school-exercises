const http = require('http')

const students = [
    {
        name: "Anastasija",
        age: 28
    },
    {
        name: "Jelizaveta",
        age: 12
    },
    {
        name: "Natalja",
        age: 50
    }
]

const server = http.createServer(reqListener)

function reqListener(req, res) {
    // res.end('Hello from Server 2')
    res.end(JSON.stringify(students))
}

server.listen(8000, () => console.log('Server 2 is running'))