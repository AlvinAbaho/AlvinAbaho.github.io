"use strict";

let sum = (arr) => arr.reduce((acc, item) => acc + item, 0);
let multiply = (arr) => arr.reduce((a, b) => a * b, 1);
let reverse = (str) => [...str].reverse().join("");
let filterLongWords = (words, i) => words.filter(word => word.length > i);


// function f(a, b) {
//     console.log(a + b);
// }
//
// function multi(...args) {
//     console.log(args.reduce((x, y) => x * y, 1));
// }
//
// Function.prototype.defer = function (timeout) {
//     return (...args) => {
//         setTimeout(() => this.apply(this, args), timeout);
//     }
// }

// Function.prototype.defer = function(ms) {
//     let f = this;
//     return function(...args) {
//         setTimeout(() => f.apply(this, args), ms);
//     }
// };

// let user = {
//     name: "John",
//     sayHi() {
//         console.log(this.name);
//     }
// }
//
// user.sayHi = user.sayHi.defer(1000);
//
// user.sayHi();
//
// f.defer(1000)(1, 2); // shows 3 after 1 second
// multi.defer(1000)(4, 3, 2);


class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('s', secs)
            .replace('m', mins);
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock {
    constructor({template, precision = 1000}) {
        super({template});
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}


// function Clock({template}) {
//
//     let timer;
//
//     function render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     this.stop = function () {
//         clearInterval(timer);
//     };
//
//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };
//
// }

// let clock = new Clock({template: 'h:m:s'});
// clock.start();
let lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 2000
});
lowResolutionClock.start();