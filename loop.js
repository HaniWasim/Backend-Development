// Qno :1 Print numbers 1 to 10  

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Qno :02 Sum of first N numbers 

let N = 5;
let sum = 0,i=1;

while(i<=N){
      sum += i;
      i++;
}
 console.log("Sum of first " + N + " numbers is: " + sum);

// Qno:3 Multiplication table

let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log("The table of " + num + " is: " + (num * i));
}

// Qno: 4 Reverse counting 

let counter = 10;
console.log("Reverse counting from " + counter + " to 1 is:");
for(let i = counter;i>=1;i--){
    console.log(i);
}

// Qno:5 Even numbers up to N

let evenNum= 20;
console.log("Even numbers up to " + evenNum + " are:");
let I=0;
do{
    if(I % 2 == 0){
        console.log(I);
    }
    I++;
} while(I <= evenNum);

// Qno:6 Sum of digits 

let number = 1;
let sumDigits = 0;
while(number<=5){
    sumDigits += number;
    number++;
}
console.log("the Sum of digits is:"+sumDigits);

// Qno:7 Fibonacci series

let a =0;
let b =1;
let c;
console.log(a);
console.log(b);
for(let i=0;i<8;i++){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}   

// Qno:8 Guessing game
 
let secretNumber = 7;
let userGuess = 4; 
do{
   if(secretNumber === userGuess){
    console.log("Congratulations! You guessed the correct number.");
    break;
}
else{
    console.log("Sorry, your guess is incorrect. Please try again.");
    break;
}
}
while(userGuess !== secretNumber);

// Qno 9 : Prime number check
let primeNum = 20;
for(let i = 2; i < primeNum; i++) {
    if(primeNum % i === 0) {
        console.log(primeNum + " is not a prime number.");
        break;
    }else{
        console.log(primeNum + " is a prime number.");
    }}