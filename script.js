// Character sets

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";


// Update password length

function updateLength() {

    const length = document.getElementById("length").value;

    document.getElementById("lengthValue").textContent = length;

}


// Generate Password

function generatePassword() {

    const length = parseInt(
        document.getElementById("length").value
    );

    const useUppercase =
        document.getElementById("uppercase").checked;

    const useNumbers =
        document.getElementById("numbers").checked;

    const useSymbols =
        document.getElementById("symbols").checked;


    let characters = lowercase;

    let password = "";


    // Add selected character types

    if (useUppercase) {
        characters += uppercase;
    }

    if (useNumbers) {
        characters += numbers;
    }

    if (useSymbols) {
        characters += symbols;
    }


    // Make sure at least one selected option is available

    if (characters.length === 0) {

        document.getElementById("message").textContent =
            "Please select at least one option!";

        return;
    }


    // Generate random password

    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];

    }


    // Display password

    document.getElementById("password").value = password;

    document.getElementById("message").textContent =
        "Password generated successfully! 🔐";

}


// Copy password

function copyPassword() {

    const password =
        document.getElementById("password").value;


    if (password === "") {

        document.getElementById("message").textContent =
            "Generate a password first!";

        return;
    }


    navigator.clipboard.writeText(password)
        .then(function () {

            document.getElementById("message").textContent =
                "Password copied! 📋";

        })
        .catch(function () {

            document.getElementById("message").textContent =
                "Unable to copy password.";

        });

}


// Generate password automatically when page loads

generatePassword();
