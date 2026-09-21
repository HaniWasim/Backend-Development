// Qno:1 Write a program that checks if a number is positive, negative, or zero.
let num = -59;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
}

// Qno:2 Even or odd check.

let number =11;
if (number%2===0) {
    console.log("The number is even.");
} else if (number%2!==0) {
    console.log("The number is odd.");
} else {
    console.log("The number is invalid.");
}

// Qno:3 Largest of two numbers

let a = 10, b=15;
if (a>b) {
    console.log("The largest number is: "+ a);
} else {
    console.log("The largest number is: "+ b);
}

// Qno:4 Grade evaluation

let std=83;
if(std>=90){
    console.log("the grade of student is A");
}else if(std>=80){
 console.log("the grade of student is b");

}
else if(std>=70){
 console.log("the grade of student is C");

}
else if(std>=60){
 console.log("the grade of student is D");

}
else if(std>=50){
 console.log("the grade of student is E");

}else{
    console.log("you're Fail");
    
}

// Qno:5 Leap year check

let noOfYear=365;
if(noOfYear==366){
    console.log("This is a leap year");
}
else if(noOfYear==365){
console.log("this isn't a leap year");
} 
else{
    console.log("invalid no of Days");
    
}

// Qno:6 Day of week switch
let day = new Date().getDay();
switch (day) {
    case 0:
        console.log("the day is monday");
        break;
        case 1:
        console.log("the day is Tuesday");
        
        break;
        case 2:
        console.log("the day is wednesday");
        
        break;

    default:
        console.log("it's later in the week");
        break;
}

// Qno:07 Calculator switch  
num1=10;
num2=50;
character='/';
switch (character) {
    case "*":
        console.log(num1*num2)
        break;
 case "/":
        console.log(num1/num2)
        break;
         case "+":
        console.log(num1+num2)
        break;
         case "-":
        console.log(num1-num2)
        break;
    default:
        break;
}

//  let calcOpt= prompt("Enter operation you wanna perform");
//  let num01=prompt("enter number 1");
//  let numb1=Number(num01);
//  let num02=prompt("enter number 2");
//  let numb2=Number(num02);
//  switch (calcOpt) {
//     case "*":
//         console.log("mul");
        
//         break;
 
//     default:
//         break;
//  }


// Qno:8 vowel or consunant 

let vowel="o";
switch (vowel) {
    case "a":
        console.log("it's a vowel");
        
        break;
          case "e":
        console.log("it's a vowel");
        
        break;
          case "i":
        console.log("it's a vowel");
        
        break;
          case "o":
        console.log("it's a vowel");
        
        break;
          case "u":
        console.log("it's a vowel");
        
        break;
    default:
        console.log("it's a consonant");
        
        break;
}

// Qno 9 Traffic light
let color="green";
switch (color) {
    case "red":
        console.log("stop your vehicle");
        
        break;
        case "yellow":
        console.log("stop wait in your vehicle");
        
        break;
        case "green":
        console.log("Go");
        
        break;
}
// Qno10:Menu-driven program  
let numbers=3;
switch (numbers) {
    case 1:
        console.log("Check your balance");
        
        break;
        case 2:
        console.log("Deposit");
        
        break;
        case 3:
        console.log("Check your balance");
        
        break;

    default:
        break;
}