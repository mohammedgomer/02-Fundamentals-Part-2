/////////////////////// Activating Strict Mode ///////////////////////

// Strict Mode is a special mode that we can actiavte in JS which makes it easier for us to write secure JS code

// How to activate strict mode
// Has to be the very first statement in the script

'use strict';

// 1. Strict mode forbids us to do certain things 
// 2. It will actually create visible errors for us in certian situations
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
// It will not log 'I can drive' due to hasDriverLicense being mispelled above
if (hasDriversLicense) console.log('I can drive :D');

// These will all not work as they are reserved keywords
// Future reserved keyword
// const interface = 'Audio';
// // Future reserved keyword
// const private = 534;
// const if = 23;
*/

/////////////////////// Functions ///////////////////////
// A function is a piece of code that we can reuse over and over again in our code. 
// Its a little bit like a variable but for like whole chunks of code 

function logger() {
  console.log('My name is Jonas');
}

// Invoking, calling or running the function 
logger();
logger();
logger();





// Assignment - Functions //









/////////////////////// Coding Challenge #1 ///////////////////////