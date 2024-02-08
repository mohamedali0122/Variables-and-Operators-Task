/*******************************************************************************
 These tasks will provide you with an opportunity to practice creating and manipulating variables,
 as well as using string concatenation and getting familiar with different datatypes.
 // Have fun! //😃
********************************************************************************/

/*******************************************************************************
 Task 1 (Variables):
 
 Steps:
    1. Create three variables named 'personName', 'age', and 'isHappy', where:
        - 'personName' should hold a string value
        - 'age' should hold a numeric value
        - 'isHappy' should hold a boolean value.
    2. Use console.log() to output the value of each variable.
 ********************************************************************************/
// TODO: ADD YOUR CODE BELOW
let personName ="mohamed ali";
let age =24;
let isHappy = true;

console.log(personName);
console.log(age);
console.log(isHappy);

/*******************************************************************************
 Task 2 (Reassigning variables):
 
 Steps:
    1. Create a new variable named 'nickName' and assign the value of the 'personName' variable to the 'nickName' variable.
    2. Use console.log o output the value of 'nickName'
 *******************************************************************************/
// TODO: ADD YOUR CODE BELOW

let nickName = personName;
console.log(nickName);

/*******************************************************************************
 Task 3 (Naming variables):
 
 Steps:
    1. Create a variable with the title of your favorite movie. How would you name such a variable?
    2. Declare a variable that stores the age of a user. What name would you choose for this variable?
*******************************************************************************/
// TODO: ADD YOUR CODE BELOW

let myFilm ="johan waek";
let myAge =34;
console.log(`my best film is ${myFilm}, and my age ${myAge}`);
/*******************************************************************************
Task 4 (String Concatenation):
    Build upon the previous task by completing the following steps:

Steps:
    1. Declare a new variable called 'msg'.
    2. Use the `prompt()` function to ask the user to enter a message for the person you just created. Then assign the value to the `msg` variable.
    3. Declare a new variable called 'finalMsg'.
    4. Then complete the message by following these steps:
        - If the value of the 'isHappy' variable above is true, add this text: "And by the way, why are you happy?" to the `msg` variable using string concatenation.
        - If the value of the 'isHappy' variable is false, concatenate the message: "And btw, Good for you. There's nothing to be happy about." to the `msg` variable.
        - Assign the completed message to the `finalMsg` variable
    5. Print the final message to the console, including the `personName` in uppercase in this format `Dear personName_VALUE, here's your message: finalMsg_VALUE.`.
*******************************************************************************/
// TODO: ADD YOUR CODE BELOW
let msg =prompt(" Why are you happy?");
let final_message=`${msg}  And btw, Why are you happy?`;
console.log(`Dear ${final_message}, here's your message: ${personName.toUpperCase()}`);