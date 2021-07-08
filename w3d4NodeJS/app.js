"use strict";
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Drivers License
function driversLicenseTest() {
    readline.question('What is your name? ', name => {
        console.log(`Welcome ${name}`);
        readline.question('How old are you? ', age => {
            if (age < 16) {
                console.log("You're not allowed to drive in Iowa");
            } else {
                console.log("You're allowed to get a drivers license in Iowa");
            }
            readline.close();
        });
    });
}

// 2. Sum of numbers
function sumOfInputNumbers() {
    let sum = 0;
    const getNumber = function () {
        readline.question('Enter a number, or "stop" to exit: ', reply => {
            if (reply.toLowerCase() === 'stop') {
                console.log(`SUM: ${sum}`);
                readline.close();
            } else {
                sum += parseInt(reply);
                getNumber();
            }
        })
    }
    getNumber();
}

// 3. My Math module
function algebra() {
    const math = require('./my_math');
    console.log("3 + 5 = ", math.add(3, 5));
    console.log("3 - 5 = ", math.subtract(3, 5));
    console.log("3 * 5 = ", math.multiply(3, 5));
    console.log("3 / 5 = ", math.divide(3, 5));
    console.log("PI = ", math.pi);
}

algebra();

// 4. MyCar module
function automobile() {
    const myCar = require('./my_car');
    myCar.drive();
    myCar.turn(50);
    myCar.turn(60);
    myCar.turn(90);
    myCar.break();
}

automobile();

// driversLicenseTest();
// sumOfInputNumbers();