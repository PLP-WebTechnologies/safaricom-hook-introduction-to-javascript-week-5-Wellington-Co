// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let fruits = ["apple", "banana", "cherry"]; // Array
let person = { name: "John", age: 30 }; // Object

console.log("Name:", name, "(Type: string)");
console.log("Age:", age, "(Type: number)");
console.log("Is student:", isStudent, "(Type: boolean)");
console.log("Fruits:", fruits, "(Type: array)");
console.log("Person:", person, "(Type: object)");

// Operators - Simple Calculator
function calculator() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let operation = prompt("Choose an operation (+, -, *, /):");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 === 0) {
            alert("Cannot divide by zero.");
            return;
        }
        result = num1 / num2;
    } else {
        alert("Invalid operation.");
        return;
    }

    alert(`Result: ${result}`);
}

calculator();

// Functions - Greet User
function greetUser(name) {
    return "Hello, " + name + "!";
}

let greetingMessage = greetUser("John");
console.log(greetingMessage);

// Part 2: JavaScript Control Structures

// If Statements - Checking eligibility to vote
let ageForVoting = prompt("Please enter your age:");

if (ageForVoting >= 18) {
    document.body.innerHTML += "<p>You are eligible to vote.</p>";
} else {
    document.body.innerHTML += "<p>You are not eligible to vote yet.</p>";
}

// Loops - Display numbers from 1 to 10
let listHTML = "<ol>";
for (let i = 1; i <= 10; i++) {
    listHTML += "<li>" + i + "</li>";
}
listHTML += "</ol>";
document.body.innerHTML += listHTML;

// Part 3: Introduction to the DOM

// Creating HTML structure dynamically using JavaScript
let dynamicContent = document.getElementById("dynamic-content");

// Selecting and Modifying HTML Elements
document.querySelector("h1").textContent = "JavaScript in Action!";
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph);
