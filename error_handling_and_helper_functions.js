// TODO: Create a function that validates user input

function validateInput(inputValue, fieldName) {
    const error = [];

    if (inputValue.getFriendlyErrrMessage() === "") {
        errors.push("${fieldName} cannot be empty.");
    }
    if (fieldName === "Password" && inputValue.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }
    return errors;
}

const usernameInput = "Lutfeeya Cupido";
const passwordInput = "TheGreatXiao8";

const usernameErrors = validateInput(usernameInput, "Username");
const passwordErrors = validateInput(passwordInput, "Password");

if (usernameErrors.length > 0) {
    console.log("Username errors:",usernameErrors);
}
if (passwordErrors.length > 0) {
    console.log("Password error:", passwordErrors);
}




// TODO: Create a function that demonstrates multiple error types 

function demonstrateMultipleErrors(value1, value2) {
    try {
        if (typeof value1 !== "number" || typeof value2 !== "number") {
            throw new TypeError("Both arguments must be numbers.");
        }
        if (value1 < 0 || value2 < 0) {
            throw new RangeError("Arguments cannot be negative");
        }

        try {
            console.log(nonExistentVariable);
        } catch (error) {
            if (error instanceof ReferenceError) {
                console.warn("Caught a simulated ReferenceError:", error.message);
            } else {
                throw error;
            }
        }
        if (value1 === 0 && value2 === 0) {
            throw new Error("Both values cannot be zero at the same time");
        }
        return value1 / value2;
    }


// TODO: Create a collection of helper functions for string manipulation

//stringHeplers.js
const stringHelpers = {
    capitalize: (str) => {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    reverse: (str) => {
        if (!str) return "";
        return str.split("").reverse().join("");
    },
    truncate: (str) => {
        if (!str || str.length <= maxLength) return str;
        return str.slice(0, maxLength) +"...";
    },
};

export default stringHelpers;

import stringHelpers from './stringHelpers.js';

const myString = "Hello World!";
console.log(stringHelpers.capatalize(myString));
console.log(stringHelpers.reverse(myString));
console.log(stringHelpers.truncate(myString, 5));




// TODO: Create helper functions for array operations 

function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = filterEvenNumbers(numbers);

console.log(evenNumbers);



//help this is not working and I dont know why :'(