'use strict';

const program = require('commander');

program.version('0.1.0')
    .option('-d, --day [day]', 'Puzzle day')
    .option('-p, --part [part]', 'Puzzle part')
    .option('-i, --input [input]', 'Puzzle input')
    .parse(process.argv);

const input = program.input;
let result = "";

if (program.day == 1) {
    if (program.part == 1) {
        result = require('./day01_01.js')(input);
    }
    if (program.part == 2) {
        result = require('./day01_02.js')(input);
    }
}


console.log(result);