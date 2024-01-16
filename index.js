
//1. Check if a no. is odd or even in javascript......
function isEvenOrOdd(a) {
    if (a % 2 === 0) {
        console.log("Number is even")
    }
    else {
        console.log("Number is odd");
    }
}

isEvenOrOdd(9);






// 2. Find the largest of two no's---------
// function findLargest(num1, num2) {
//     switch (true) {
//         case (num1 > num2):
//             console.log(num1 + " is the largest no.")
//             break;
//         case (num1 < num2):
//             console.log(num2 + " is the largest no.")
//             break;
//         default:
//             console.log(num1 + " is equal to " + num2);
//             break;
//     }
// }

// findLargest(15, 15)




// 3. Find the largest of three number......
// function largestAmongThree(num1, num2, num3) {
//     if ((num1 >= num2) && (num1 >= num3)) {
//         console.log(num1 + " is the largest");
//     }
//     else if ((num2 >= num1) && (num2 >= num3)) {
//         console.log(num2 + " is the largest no.");
//     }
//     else {
//         console.log(num3 + " is the largest no.");
//     }
// }

// largestAmongThree(69, 3, 123)




// 4. Perform the arithematic operations on two no's.
// function evalNumbers(num1, num2, operation) {
//     switch (true) {
//         case (operation == "add"):
//             console.log(num1 + num2);
//             break;
//         case (operation == "subtract"):
//             console.log(num1 - num2);
//             break;
//         case (operation == "multiply"):
//             console.log(num1 * num2);
//             break;
//         case (operation == "divide"):
//             console.log(num1 / num2);
//             break;
//         case (operation == "modulus"):
//             console.log(num1 % num2);
//             break;
//         case (operation == "square"):
//             console.log("Square is an invalid operation");
//             break;
//         default:
//             console.log("Invalid operation")
//             break;
//     }
// }

// evalNumbers(45, 23, "add");







// 5. Find check if a year is leap year or not....
// function checkLeapYear(year) {
//     if (year % 4 == 0 && year % 100 != 0) {
//         console.log(year + " is a leap year.")
//     }
//     else if (year % 400 == 0) {
//         console.log(year + " is a leap year.");
//     }
//     else {
//         console.log(year + " is not a leap year.");
//     }
// }
// checkLeapYear(2000)