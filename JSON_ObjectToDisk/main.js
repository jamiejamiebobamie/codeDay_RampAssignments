// https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
var fs = require('fs');
var data = {"internship":"Code Labs",
                "location":"remote",
                "when":"summer 2020"}
var jsonData = JSON.stringify(data);
fs.writeFile("test.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});
