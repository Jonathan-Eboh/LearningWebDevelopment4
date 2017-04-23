// "use strict"
//
// function isAlpha(char) {
//     let alphabet = [
//       "a","b","c","d","e",
//       "f","g","h","i","j",
//       "k","l","m","n","o",
//       "p","q","r","s","t",
//       "u","v","w","x","y",
//       "z"
//     ];
//     return (alphabet.includes(char));
// }
//
// function isNumericOrSymbol(char) {
//
//     let numbersAndSymbols = [ "1","2","3","4","5","6","7","8","9","0","_","." ];//added "-" and "." to this array for convience
//
// }
//
// function isAlphanumeric(char) {
//     return (isAlpha(char) || isNumericOrSymbol(char))
// }
//
// //The above three functions are all ment to run on a single character at a time hence the expected input parameter
//
// /*
// ---A valid email contains one and only one "@" symbol.
// ---All the characters before the "@" symbol are alphanumeric, underscores, or dots (".").
// ---There is one and only one dot "." after the "@" symbol.
// ---Besides the dot ".", all the characters after the "@" are in the alphabet (no numbers or underscores).
//
// */
//
// //---A valid email contains one and only one "@" symbol.
// //1)~~~loop through the email string with a counter that interate by one when it encounters the @ char. If the count ever gets higher than 1 or less than one by the end break and return false
//
// //---All the characters before the "@" symbol are alphanumeric, underscores, or dots (".").
// //2)~~~Split the string over the @ delimiter then iterate through the first element of the resultant array and check each char in that string against the relevant arrays if invalid return false
//
// //---There is one and only one dot "." after the "@" symbol.
// //3)~~~check the second element in the previous split("@") array and run a similar check to the @ symbol
//
// //---Besides the dot ".", all the characters after the "@" are in the alphabet (no numbers or underscores).
// //4)~~~if the above helper function returns true then iterate
// //through the second element in that array checking it againnst the alphabet array
//
// //Each of the task above can be alloted to a function using separation of concerns via abstraction
//
//
// //1) isOnlyOneAt (working)
//
// function isOnlyOneAt(email) {
//
//     let atCounter = 0;
//     for (let i = 0; i < email.length; i++) {
//         if (email[i] === "@") {
//             atCounter += 1;
//         }
//
//     }
//
//     if (atCounter === 0) { //it ill never be negative
//         return false, "Must have one and only one @ sign, you have none!";
//     }else if (atCounter > 1) {
//         return false;
//     }else {
//         return true;
//     }
//
// }
//
//
// // console.log(isOnlyOneAt("junk@gmail.com"));
// // console.log(isOnlyOneAt("now.what@now.co"));
// // console.log(isOnlyOneAt("my@website@gmail.com"));
//
//
// //2) isFirstHalfValid (pending...)
//
// function isFirstHalfValid(email) {
//     if (isOnlyOneAt(email)) { //only want the code to run if the first function in the cascade returns true
//
//     let splitEmail = email.split("@");
//     // console.log(splitEmail);//test passed Expected output : an array with two elements dictacted by the @ symbol
//     let firstHalf = splitEmail[0];
//     console.log(firstHalf);
//     let errors = 0;
//     for (var i = 0; i < firstHalf.length; i++) {
//         let char = firstHalf[i];
//
//         if (!isAlphanumeric(firstHalf[i])) {
//             errors += 1;
//         }
//     }
//
//     if (errors !== 0) {
//         return false;
//     }else {
//         return true;
//     }
//
//     }else {
//         return false;
//     }
//
// }
//
// console.log(isFirstHalfValid('junk@gmail.com')); //test passed Expected output : [ 'junk', 'gmail.com' ]
// console.log(isFirstHalfValid('now.what@now.co'));//test passed Expected output : [ 'now.what', 'now.co' ]
// console.log(isFirstHalfValid('?now.what@now.co'));//test passed Expected output : [ 'now.what', 'now.co' ]
// console.log(isFirstHalfValid('now.what???@now.co'));//test passed Expected output : [ 'now.what', 'now.co' ]
//
// function isValidEmail(email) {
//
// }
//
//
// // console.log(isValidEmail("junk@gmail.com"));
// // //true
// //
// // console.log(isValidEmail("now.what@now.co"));
// // //true
// //
// // console.log(isValidEmail("i_am_happy@feelings.net"));
// // //true
// //
// // console.log(isValidEmail("my@website@gmail.com"));
// // //false
// //
// // console.log(isValidEmail("webby@gmail.co.net"));
// // //false
// //
// // console.log(isValidEmail("anthony@ira_ladson.com"));
// // //false
// //
// // console.log(isValidEmail("anthony!@ladson.com"));
// // //false

//------------------------------------------
//Second attempt

"use strict"

function isAlphabetic(character) {
    var alphabet = [
      "a","b","c","d","e",
      "f","g","h","i","j",
      "k","l","m","n","o",
      "p","q","r","s","t",
      "u","v","w","x","y",
      "z"
    ];

    return (alphabet.includes(character));

}

function isNumeric(character) {
    var numbers = [ "1","2","3","4","5","6","7","8","9","0" ];

    return (numbers.includes(character));
}

function isAlphanumeric(character) {
    return (isNumeric(character)|| isAlphabetic(character));
}

function isValidEmail(email) {
    //must be exactly one @ symbol
    let emailParts = email.split("@");

    if (emailParts.length !== 2) {
        return false; //means more than one @ symbole
    }
    let firstPart = emailParts[0]; //frist half of the email
    let lastPart = emailParts[1]; //last half of the email
    //all characters before the @ sign were alphanumeric + "_" + "."

    for (var i = 0; i < firstPart.length; i++) {
        let character = firstPart[i];
        if (!isAlphanumeric(character) && character !== "_" && character !== ".") {
            //!(isAlphanumeric(character) || character === "_" || character === ".") this works as well but other way is easier to read
            return false;
        }
    }

    //must be exactly one "." after the @ symbol

    if (lastPart.split(".").length !== 2) {
        return false //This will only not be two if their are either 0 dots for >1 dots
    }
    //all other characters after "@" were alphabetical
    for (var i = 0; i < lastPart.length; i++) {
        let character = lastPart[i];
        if (!isAlphabetic(character) && character!== ".") {
            return false;
        }
    }

    return true;
}





console.log(isValidEmail("junk@gmail.com"));
//true

console.log(isValidEmail("now.what@now.co"));
//true

console.log(isValidEmail("i_am_happy@feelings.net"));
//true

console.log(isValidEmail("my@website@gmail.com"));
//false

console.log(isValidEmail("webby@gmail.co.net"));
//false

console.log(isValidEmail("anthony@ira_ladson.com"));
//false

console.log(isValidEmail("anthony!@ladson.com"));
//false
