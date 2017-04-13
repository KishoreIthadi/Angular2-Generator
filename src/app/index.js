#!/usr/bin/env node

const basicsetup = require('./basicsetup/basicsetup');
const gulpsetup = require('./gulp/gulpsetup');

// Getting the command executed path
var destPath = process.cwd();

var myArgs = process.argv.splice(1);

/*
The below logic will handle multiple options provided by the user
For Example : a2 basicsetup gulp
It will also log any invalid option
*/

for (let i = 1; i < myArgs.length; i++) {

    switch (myArgs[i]) {
        case "basicsetup":
            basicsetup.start(destPath,"basicsetup");
            break;
        case "basicsetuprouter":
            basicsetup.start(destPath,"basicsetuprouter");
            break;
        case "gulp":
            gulpsetup.start(destPath);
            break;
        default:
            console.error('invalid input' + myArgs[i]);
            break;
    }
}