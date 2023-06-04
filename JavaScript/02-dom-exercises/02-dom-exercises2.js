// Question 1

const myQ1 = document.getElementById("myQ1");

myQ1.addEventListener("click", function () {
    let userInput1 = prompt("What is your favorite song?");
    let userInputLowerCase1 = userInput1.toLowerCase();

    if (userInputLowerCase1 == "birdie song") {
        alert("Congrats!")
    } else {
        alert("It seems that we have different taste but we still can be friends!");
    }
});

// Question 2

const myQ2 = document.getElementById("myQ2");

myQ2.addEventListener("click", function () {
    let userInput2 = prompt("What is your favorite drink?");
    let userInputLowerCase2 = userInput2.toLowerCase();

    if (userInputLowerCase2 == "soda") {
        alert("Congrats!")
    } else {
        alert("It seems that we have different taste but we still can be friends!");
    }
});

// Question 3

const myQ3 = document.getElementById("myQ3");

myQ3.addEventListener("click", function () {
    let userInput3 = prompt("What is your favorite food?");
    let userInputLowerCase3 = userInput3.toLowerCase();

    if (userInputLowerCase3 == "pasta") {
        alert("Congrats!")
    } else {
        alert("It seems that we have different taste but we still can be friends!");
    }
});

// Question 4

const myQ4 = document.getElementById("myQ4");

myQ4.addEventListener("click", function () {
    let userInput4 = prompt("What is your favorite hobby?");
    let userInputLowerCase4 = userInput4.toLowerCase();

    if (userInputLowerCase4 == "scuba") {
        alert("Congrats!")
    } else {
        alert("It seems that we have different taste but we still can be friends!");
    }
});

