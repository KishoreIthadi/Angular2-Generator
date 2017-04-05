"use strict";

var prompt = require('prompt');
var copydir = require('copy-dir');
var path = require('path');
var fs = require('fs');

function readInput(destPath) {

    var input = {
        appname: 'my-app',
        version: '1.0.0',
        description: ''
    }

    prompt.start();

    var schema = {
        properties: {
            appname: {
                pattern: /^[^A-Z\s]+$/,
                message: 'follow package.json naming convention'
            },
            version: {
                message: 'Version?',
            },
            description: {
                message: 'Description?',
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

        copy(input, destPath);
    });
}

function copy(input, destPath) {

    var sourcePath = path.resolve(__dirname, '..', '..', '..') + "/generatorfiles/basicsetup/";

    copydir.sync(sourcePath, destPath, function (stat, filepath, filename) {

            if (filename === 'index.html' || filename === 'app.component.html' ||
                filename === 'package.json' || filename === 'app.component.ts') {

                var temp1 = filepath;

                fs.readFile(temp1, 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }

                    var result = data;
                    var temp2 = '';

                    if (filename === 'index.html') {
                        temp2 = destPath + '/' + filename;

                        result = result.replace('<title>Angular2</title>', `<title>${input.appname}</title>`);
                        result = result.replace('<my-app>', `<${input.appname}>`);
                        result = result.replace('</my-app>', `</${input.appname}>`);
                    }

                    if (filename === 'app.component.html') {
                        temp2 = destPath + '/src/app/' + filename;

                        result = result.replace('<h1>title</h1>', `<h1>${input.appname}</h1>`);
                    }

                    if (filename === 'package.json') {

                        temp2 = destPath + '/' + filename;

                        var jsonData = JSON.parse(result);

                        jsonData["name"] = input.appname;
                        jsonData["description"] = input.description;
                        jsonData["version"] = input.version;

                        result = JSON.stringify(jsonData);
                    }

                    if (filename === 'app.component.ts') {

                        temp2 = destPath + '/src/app/' + filename;
                        result = result.replace("my-app", `${input.appname}`);
                    }

                    fs.writeFile(temp2, result, 'utf8', function (err) {
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
            console.log('ok');
        });
}

module.exports = {
    start: function (destPath) {
        return readInput(destPath)
    }
};