// Form Input Validation
const emailInput = document.getElementById("email-input");
const inputMessage = document.getElementById("input-validation-message");
const divContainer = document.getElementById("form__input-and-button-container");
const errorIcon = document.getElementById("error-icon");

emailInput.addEventListener("input", function () 
{
    const email = emailInput.value;

    inputMessage.style.display = "block";

    if (isValidEmail(email)) 
    {
        divContainer.style.border = "1px solid #28cd28"; // Set the border color to green.
        inputMessage.textContent = "Valid email";
        inputMessage.style.color = "#28cd28";
        errorIcon.style.display = "none";
    } else {
        divContainer.style.border = "1px solid hsl(0, 93%, 68%)"; // Set the border color to red.
        inputMessage.textContent = "Please provide a valid email";
        inputMessage.style.color = "hsl(0, 93%, 68%)";
        errorIcon.style.display = "block";
    }
});

emailInput.addEventListener("blur", function () 
{
    divContainer.style.border = "1px solid hsl(0, 36%, 70%)"; // Resets the border color when leaving the field.
    inputMessage.style.display = "none";
    errorIcon.style.display = "none";
});

function isValidEmail(email) 
{
    // Use a regular expression to validate the email format.
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
// Form Input Validation