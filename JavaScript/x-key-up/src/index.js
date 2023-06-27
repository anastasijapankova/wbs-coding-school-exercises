document.addEventListener("DOMContentLoaded", function () {
    var inputElement = document.querySelector('input[name="name"]');

    inputElement.addEventListener("keyup", function (event) {
        var value = event.target.value;
        console.log(value);
    });
});
