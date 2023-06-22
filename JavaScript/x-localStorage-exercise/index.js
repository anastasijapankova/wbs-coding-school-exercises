const forms = document.querySelectorAll("form");

forms.forEach((form) =>
    form.addEventListener("submit", (e) => e.preventDefault())
);

// Here are all DOM elements you need

const resultsDiv = document.querySelector(".results");
const keyInput = document.querySelector(".key");
const valueInput = document.querySelector(".value");
const removeInput = document.querySelector(".remove");
const storeBtn = document.querySelector(".store");
const showBtn = document.querySelector(".show");
const clearOneBtn = document.querySelector(".clearOne");
const clearAllBtn = document.querySelector(".clearAll");

// Add your code below

// 1
storeBtn.addEventListener("click", () => {
    const key = keyInput.value;
    const value = valueInput.value;

    if (key && value) {
        localStorage.setItem(key, value);
        keyInput.value = "";
        valueInput.value = "";
        resultsDiv.textContent = "Item stored successfully.";
    } else {
        resultsDiv.textContent = "Please enter both key and value.";
    }
});

// 2

clearOneBtn.addEventListener("click", () => {
    const keyToRemove = removeInput.value;

    if (keyToRemove) {
        localStorage.removeItem(keyToRemove);
        removeInput.value = "";
        resultsDiv.textContent = "Item removed successfully.";
    } else {
        resultsDiv.textContent = "Please enter a key to remove.";
    }
});

// 3

showBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";

    if (localStorage.length === 0) {
        resultsDiv.textContent = "No items found in localStorage.";
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            resultsDiv.textContent += `${key}: ${value}\n`;
        }
    }
});

// 4

clearAllBtn.addEventListener("click", () => {
    localStorage.clear();
    resultsDiv.textContent = "localStorage cleared successfully.";
});
