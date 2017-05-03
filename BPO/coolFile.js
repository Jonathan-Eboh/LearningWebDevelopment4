"use strict"

let fs = require("fs");


function getRecordsFromFile(filename, cb) {
    fs.readFile(filename,"utf8", function(err, data) {
        if (err) {
            console.log("-------ERROR-------");
            console.log(err);
            return;
        }
        let records = data.split("\n");

        cb(records);
    })
}


// getRecordsFromFile("data.txt");

function mostCoolFromFile(filename, cb) {
    let records = getRecordsFromFile(filename, function(records) {
        let coolest;
        let coolestRating = -1;

        records.forEach(function(record) {
            let name = record.split(" ")[0];
            let rating = parseInt(record.split(" ")[1]);

            if (rating > coolestRating) {
                coolest = name;
                coolestRating = rating;
            }
        });
        cb(coolest);
    });


    // return coolest;
}

mostCoolFromFile("data.txt", function(coolestPerson) {
    console.log(coolestPerson);
});
