const fs = require('fs');

function sourojitReadFile(cb) {
    fs.readFile("m.txt", "utf-8", function(err, data) {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        cb(data);
    });
}

function onDone(data) {
    console.log(data);
}

sourojitReadFile(onDone);