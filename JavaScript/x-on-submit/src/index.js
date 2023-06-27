document.addEventListener("DOMContentLoaded", function () {
    var formElement = document.querySelector("form");

    formElement.addEventListener("submit", function (event) {
        var inputElement = document.querySelector('input[name="name"]');
        var value = inputElement.value.trim();

        if (value === "") {
            event.preventDefault();
            alert("Form cannot be submitted with an empty input!");
        }
    });
});
