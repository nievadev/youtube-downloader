const inputBox = document.getElementById("inputBox");
const submitButton = document.getElementById("submitButton");

inputBox.addEventListener("keydown", event => {
    value = inputBox.value;
    length = value.length;
    caret = inputBox.selectionStart;

    if (
        (isNaN(event.key) && event.key != "Backspace") ||
        event.key == " " ||
        (event.key > 5 && ( caret == 2 || caret == 3 || caret == 5 || caret == 6))
    ) event.preventDefault();

    else if ( event.key != "Backspace" && (length == 2 || length == 5) )
    {
        inputBox.value += ":";
    }
});

submitButton.addEventListener("click", event => {
    if (inputBox.value.match(/\d{2}:\d{2}:\d{2}/) || !inputBox.value)
    {
        document.userForm.submit();
    }

    else
    {
        alert("Invalid timestamp!");
    }
});
