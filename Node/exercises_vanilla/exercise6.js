// Exercise 6

// npm i axios

const axios = require('axios')

axios.get('https://www.google.com')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

//When you run the code, it will send an HTTP GET request to http://www.google.com using axios. 
//Upon receiving the response, the HTML code of the webpage will be logged to the console. 
// If an error occurs, such as a network issue or the webpage is not accessible, 
// the error will be logged to the console as well.