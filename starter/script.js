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





// Assignment - Functions //









/////////////////////// Coding Challenge #1 ///////////////////////


let country = 'United Kingdom';
let continent = 'Europe';
let population = 67000000;
let language = 'English';
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`


console.log(country, continent, population);

let isIsland = true;

console.log(typeof isIsland, typeof population, typeof country, typeof language);

const halfPopulation = (population / 2) + 1;
console.log(population > 6000000, population > 33000000, description);

if (population > 68000000) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33000000 - population} below average`);
}
