"use strict";

let sum = (arr) => arr.reduce((acc, item) => acc + item, 0);
let multiply = (arr) => arr.reduce((a, b) => a * b, 1);
let reverse = (str) => [...str].reverse().join("");
let filterLongWords = (words, i) => words.filter(word => word.length > i);


class Computer {
    constructor(ram, cpu, storage) {
        this._ram = ram;
        this._cpu = cpu;
        this._storage = storage;
    }

    runProgram(name) {
        console.log(`running: ${name}`);
    }
}

class Laptop extends Computer {
    constructor(ram, cpu, storage, battery) {
        super(ram, cpu, storage);
        this._battery = battery;
    }

    carryAround() {
        console.log(`carrying laptop:  cpu ${this._cpu} ram: ${this._ram} storage: ${this._storage} battery: ${this._battery}`);
    }
}

// make sure it works
let laptop = new Laptop("8GB", "1.6Ghz", "1TB", "75%");
laptop.runProgram("Visual Studio Code");
laptop.carryAround();