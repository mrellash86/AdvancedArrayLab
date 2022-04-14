const dayOfweek = "Monday";
console.log(dayOfweek);
const dayChange = (dayOfweek.replace("Monday", "Friday")); 
const comment = 'I cant wait for' + " " + dayChange + '.' ;
console.log(comment);

var favoriteAnimal;
favoriteAnimal = prompt('What is your favorite animal?');

var favoriteColor;
favoriteColor = prompt('What is your favorite color?');

const favoriteAnimalandColor = 'I have never seen a' + ' ' + favoriteColor + ' ' + favoriteAnimal + '!'
console.log(favoriteAnimalandColor)

//CONDITIONALS - MEALS
var timeOfDay = 1700;
if (timeOfDay < 12) {
console.log("Vegan Egg, Beyond Beef, Bell Peppers, Tomatoes wit a Vodka and Orange Juice");
}
else if (timeOfDay >= 1200 || timeOfDay <=1700){console.log("Vegan Egg on a Cauliflower Pita");//If timeOfDay is between 1200 and 1700, assign your variable the lunch you chose.
} 
else if (timeOfDay >= 1700){console.log("Squash Noodle Spaghetti");//If timeOfDay is greater than 1700, assign your variable the dinner you chose
}

//Random Number
 //a.	Declare a variable to store a random number between 0 and 10. You will need to do some research to determine how to generate a random number in JavaScript.
var random = Math.floor(Math.random()*10)+1;
console.log(random);
if (random >= 0 || random <=2) {
    console.log('Beatles');
    }
else if (random >=3 || random <=5){console.log('Stones');
} 
else if (random >=6 || random <=8){console.log('Floyd');
} 
else if (random >=9 || random <=10){console.log('Hendrix');
} 


//LOOPS

// 1.	Write your own for loop that will display the message “JavaScript is cool!” 7 times.
 for (let i = 0; i < 7; i++){
     console.log("Java Script Is Cool")
      
 }

// 2.	Write your own for loop that will display the numbers 0-10, one number per loop. You will need to utilize a variable for this!

for (var i=0; i<=10; i++) {
    console.log(i);
}


// While Loops
// A while loop is ideal in a situation where do you not know how many times you want the loop to run. Instead, the loop will continue to iterate as long as the condition remains to be true. Once the condition becomes false then the loop completes.
 
// HINT: if isInstructorAwesome is set equal to true, make sure to have a way to set isInstructorAwesome equal to false somewhere inside the while loop to prevent an infinite loop from occurring
// If you get caught in an infinite loop, you can close the browser window to stop the process.

var isInstructorAwesome = True;
while (n<5){
    n++;
    console.log("isInstructorAwesome = " + n);
}
