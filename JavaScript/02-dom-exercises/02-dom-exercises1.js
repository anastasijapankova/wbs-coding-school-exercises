let counter = 0;

const buttonPlus = document.getElementById('plus')
console.log(buttonPlus);

const buttonMinus = document.getElementById('minus')
console.log(buttonMinus);

const cart = document.querySelector('.items')
console.log(cart)


buttonPlus.addEventListener('click', () => {
    counter++;
    console.log(counter)

    cart.textContent = counter
})

buttonMinus.addEventListener('click', () => {
    if (counter > 0)
        counter--;
    console.log(counter)

    cart.textContent = counter
})