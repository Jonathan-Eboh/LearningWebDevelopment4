"use strict"

let fs = require("fs");

//throughtout this program record is an element of the array that is split over the \n char. So its a string like "type=weaksubj len=1 word1=abandoned pos1=adj stemmed1=n priorpolarity=negative"

function getRecordsFromFile(filename, cb) {
    fs.readFile(filename, "utf8", function(err, data) {
        if (err) {
            console.log("-------ERROR-------");
            console.log(err);
            return;
        }
        let records  = data.split("\n"); //This splits the incomming data into an array where each element is decided by where the newline char ("\n") is met
        cb(records);
    })
}

function parseWord(record) { //we need to make sure the word exsist within our string
    let wordRecord = record.split(" ")[2]//This is spliting each element further
    //so each line by where there is a space char and then grabbing that 3rd element(element number 2) which is the the string containing the word itself
    return wordRecord.split("=")[1]//here is where we finally grab the actual word.
    //each string that contains the word has the structure "word1=(the word we want)"
    // so we split it up into an array that looks like [word1, (word we want)]
    //this is why we split it on the "=" and then we proceed to grab the second element in that array
}

function parseSentiment(record) {
    let sentimentRecord = record.split(" ")[5]; //in this line we go back to spliting each line by space. However this time we grab the last element in that array which looks like priorpolarity=(sentiment-either negative or positive)
    return sentimentRecord.split("=")[1];//again this is the part of the previous string that we are interested in that actually contains our sentiment
}

function detectSentiment(filename, sentence, cb) {
    getRecordsFromFile(filename, function(records) {
        let score = 0;
        let splitSentence = sentence.toLowerCase().split(" ");

        records.forEach(function(record) {
            if (!record) { //check just to make sure we actually have a record
                return;
            }

            let word = parseWord(record).toLowerCase();//this is to make sure the word is in the string passed in
            let sentiment = parseSentiment(record);//sending the string to get its sentiment evaluated

            if (splitSentence.includes(word)) {
                if (sentiment === "negative") {
                    score -= 1;
                } else if (sentiment === "positive") {
                    score += 1;
                }
            }
        });

        cb(sentence, score);
    });
}



// getRecordsFromFile("sentimentDict.txt");


// function detectSentiment(filename, sentence, cb) {
//     let records = getRecordsFromFile(filename, function(records){
//         let sentiment;
//         let sentimentRating = 0;
//         let sentimentArr = sentence.split(" ");
//         sentimentArr.forEach(function(record) {
//             let sentiment = record.split(" ")[4];
//             console.log(sentiment);
//             if (sentiment.includes("positive")) {
//                 sentimentRating += 1;
//             }else {
//                 sentimentRating -= 1;
//             }
//         });
//         cb(sentiment);
//     })
// }




detectSentiment("sentimentDict.txt", "I love you", function(sentence, score) {
  console.log("~~~~Example 1~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});

detectSentiment("sentimentDict.txt", "I LOVE you so much", function(sentence, score) {
  console.log("~~~~Example 2~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});

detectSentiment("sentimentDict.txt", "You are a loveless fool", function(sentence, score) {
  console.log("~~~~Example 3~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});

detectSentiment("sentimentDict.txt", "I cherish your smile", function(sentence, score) {
  console.log("~~~~Example 4~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});


var sentence = "I despise your hateful attitude";

detectSentiment("sentimentDict.txt", sentence, function(sentence, score) {
  console.log("~~~~Example 5~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
