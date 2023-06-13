const array = [
    () => {
        console.log("Function 1")
    },
    () => {
        console.log("Function 2")
    },
    () => {
        console.log("Function 3")
    },
    () => {
        console.log("Function 4")
    },
    () => {
        console.log("Function 5")
    },
]

array[0](); // in terminal prints just Function 1

for (let index = 0; index < array.length; index++) {
    array[index](); // it will print all the function in the terminal
}