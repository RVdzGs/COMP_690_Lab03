//Global variables
let score1;
let score2;
let score3;
let total = 0;
let average;

//Get 3 scores from user and add them together
score1 = prompt('What is the first score?');
total += parseFloat(score1);

score2 = prompt('What is the second score?');
total += parseFloat(score2);

score3 = prompt('What is the third score?');
total += parseFloat(score3);

//Calculate the average
avg = total / 3;

// Display the result on the webpage
document.write(`<h1>The Test Scores Application</h1>`);
document.write(`The first test score was <strong>${score1}</strong><br/>`);
document.write(`The second test score was <strong>${score2}</strong><br/>`);
document.write(`The third test score was <strong>${score3}</strong><br/>`);
// Formatted to two decimal places
document.write(`The average of the three test scores is <strong>${avg.toFixed(2)}</strong>`);