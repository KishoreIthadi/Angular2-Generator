"use strict";

var prompt = require('prompt');
var copydir = require('copy-dir');
var path = require('path');
var fs = require('fs');

/*
Reading appname, version and discription from the user.
Package.json will be created based on these values
*/
function readInput(destPath) {


    // setting default values
    var input = {
        appname: 'my-app',
        version: '1.0.0',
        description: ''
    }

    prompt.start();
    // This property will remove the extra 'Prompt' console text displayed by prompt npm
    prompt.message = '';

    var schema = {
        properties: {
            appname: {
                pattern: /^[^A-Z\s]+$/,
                message: 'Invalid app name',
                description: 'App Name'
            },
            version: {
                pattern: /^([v=]{0,2}\d+).(\d+).(\d+-[A-z0-9.]+[^\W_]|\d+)+$/,
                message: 'Invalid version',
                description: 'Version'
            },
            description: {
                description: 'Description'
            }
        }
    };

    prompt.get(schema, function (err, result) {

        if (result.appname != '') {
            input.appname = result.appname;
        }
        if (result.version != '') {
            input.version = result.version;
        }
        if (result.description != '') {
            input.description = result.description;
        }

        // initiating the copy process
        copy(input, destPath);
    });
}

/*
Copies all the files requred for the basic template.
While copying the files replaces the requre strig literals like appname,version title etc.
*/
function copy(input, destPath) {

    // This will resolve the source path to the root folder
    var sourcePath = path.resolve(__dirname, '..', '..', '..') + "/generatorfiles/basicsetup/";

    copydir.sync(sourcePath, destPath,
        function (stat, filepath, filename) {

            if (filename === 'index.html' || filename === 'app.component.html' ||
                filename === 'package.json' || filename === 'app.component.ts') {

                fs.readFile(filepath, 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }

                    var result = data;
                    var temp = '';

                    if (filename === 'index.html') {
                        temp = destPath + '/' + filename;

                        result = result.replace('<title>Angular2</title>', `<title>${input.appname}</title>`);
                        result = result.replace('<my-app>', `<${input.appname}>`);
                        result = result.replace('</my-app>', `</${input.appname}>`);
                    }

                    if (filename === 'app.component.html') {
                        temp = destPath + '/src/app/' + filename;

                        result = result.replace('<h1>title</h1>', `<h1>${input.appname}</h1>`);
                    }

                    if (filename === 'package.json') {

                        temp = destPath + '/' + filename;

                        var jsonData = JSON.parse(result);

                        jsonData["name"] = input.appname;
                        jsonData["description"] = input.description;
                        jsonData["version"] = input.version;

                        result = JSON.stringify(jsonData);
                    }

                    if (filename === 'app.component.ts') {

                        temp = destPath + '/src/app/' + filename;
                        result = result.replace("my-app", `${input.appname}`);
                    }

                    fs.writeFile(temp, result, 'utf8', function (err) {
                        if (err) {
                            return console.log(err);
                        };
                    });
                });

                return false;
            }

            return true;

        },
        function (err) {
            console.log(err);
        });
}

/*
Exporting start function for the basicsetup
*/

module.exports = {
    start: function (destPath) {
        return readInput(destPath)
    }
};