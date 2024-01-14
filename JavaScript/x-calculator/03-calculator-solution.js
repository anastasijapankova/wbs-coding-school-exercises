class Calculator {
    constructor() {
      this.historyArr = [];
    }
  
    history(value) {
      this.historyArr.push(value);
    }
  
    equals(expression) {
     
      const result = eval(expression);
      this.history(result);
      return result;
     
    }
  
    clear() {
      this.historyArr = [];
    }
  }
  
  const calculator = new Calculator();
  const calculatorScreen = document.querySelector("#calculator .screen");
  const equals = document.querySelector("#calculator .eval");
  
  function print(val) {
    calculatorScreen.innerHTML += val;
  }
  
  document.querySelectorAll("#calculator span").forEach((key) => {
    if (key.innerText !== "=") {
      key.addEventListener("click", (e) => print(e.target.innerText));
    }
  });
  
  document
    .querySelector("#calculator .clear")
    .addEventListener("click", () => {
      calculatorScreen.innerHTML = "";
      calculator.clear();
    });
  
  equals.addEventListener("click", () => {
    const expression = calculatorScreen.innerHTML;
    const result = calculator.equals(expression);
    calculatorScreen.innerHTML = result;
  });
  