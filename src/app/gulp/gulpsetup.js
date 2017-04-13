"use strict";

var copydir = require('copy-dir');
var fs = require('fs');
var path = require('path');

/*
Copies all the files requred for the gulp template.
*/

function copy(destPath) {

    // This will resolve the source path to the root folder
    var sourcePath = path.resolve(__dirname, '..', '..', '..') + "/generatorfiles/gulp";

    copydir.sync(sourcePath, destPath,
        function (stat, filepath, filename) {

            if (filename === 'index.html') {

                var appname = 'my-app';

                fs.readFile(destPath + '/package.json', 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }

                    // adding required dependencies to package.json
                    var jsonData = JSON.parse(data);
                    appname = jsonData["name"];

                    jsonData.devDependencies["gulp"] = "^3.9.1";
                    jsonData.devDependencies["gulp-clean"] = "^0.3.2";
                    jsonData.devDependencies["gulp-concat"] = "^2.6.1";
                    jsonData.devDependencies["gulp-cssnano"] = "^2.1.2";
                    jsonData.devDependencies["gulp-rename"] = "^1.2.2";
                    jsonData.devDependencies["gulp-sourcemaps"] = "^2.4.0";
                    jsonData.devDependencies["gulp-typescript"] = "^3.1.4";
                    jsonData.devDependencies["gulp-uglify"] = "^2.0.1";
                    jsonData.devDependencies["run-sequence"] = "^1.2.2";
                    jsonData.devDependencies["systemjs-builder"] = "^0.16.2";
                    jsonData.devDependencies["require-dir"] = "^0.3.1";

                    jsonData.scripts["build-web"] = "gulp build-web";

                    let result = JSON.stringify(jsonData);

                    // Writing changes to package.json
                    fs.writeFile(destPath + '/package.json', result, 'utf8', function (err) {
                        if (err) {
                            return console.log(err);
                        };
                    });

                });

                fs.readFile(sourcePath + '/productionfiles/index.html', 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }

                    var result = data;

                    //Changing angular2 tag, title based on the package.json
                    result = result.replace('<title>Angular2</title>', `<title>${appname}</title>`);
                    result = result.replace('<my-app>', `<${appname}>`);
                    result = result.replace('</my-app>', `</${appname}>`);

                    fs.writeFile(destPath + "/productionfiles/" + filename, result, 'utf8', function (err) {
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
Exporting start function for the gulpsetup
*/

module.exports = {
    start: function (destPath) {
        return copy(destPath);
    }
};