// CODING CHALLENGE 1
/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)) 

1. Create variables for the heights and ages of two friends and assign them some values

2. Calculate their scores

3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Dont forget that there can be a draw (both players with the same score). 
*/

// POSSIBLE SOLUTION 

let heightEdwin = 178;
let ageEdwin = 30
let heightDoe = 182;
let ageDoe = 24;

let scoreEdwin = heightEdwin + 5 * ageEdwin;
let scoreDoe = heightDoe + 5 * ageDoe;


if (scoreEdwin > scoreDoe) {
    console.log('Edwin wins with ' + scoreEdwin + ' points!');
}
else if (scoreDoe > scoreEdwin) {
    console.log('Doe wins with ' + scoreDoe +  ' points!');
}
else if (scoreEdwin === ScoreDoe) {
    console.log('There is a draw')
}

