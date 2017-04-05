#!/usr/bin/env node

const basicsetup = require('./basicsetup/basicsetup');

var path = process.cwd();

var myArgs = process.argv.splice(1);

switch (myArgs[1]) {
    case "basicsetup":
        basicsetup.start(path);
        break;
    // case "gulp":
    //     break;
    // case "tslint":
    //     break;
    default:
        console.error('invalid input');
        break;
}