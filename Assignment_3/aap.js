// Qno:01

const arr = ["apple", "banana"];
arr.push("mango", "orange");
console.log(arr);

// Qno:02
const tasks = ["login", "dashboard", "logout"];
let popVal = tasks[2];
tasks.pop(tasks[2]);
console.log(popVal);
console.log(tasks);

// Qno:03
const queue = ["stud 1", "stud 2"];
queue.unshift("stud 0");
console.log(queue);
queue.shift();
console.log(queue);

// Qno:4

const topics = ["HTMl", "CSS", "JS", "React", "Node"];
console.log(topics);
const newTopics = topics.slice(1, 4);
console.log(newTopics);

// Qno:05

const technologies = ["HTML", "CSS", "jQuery", "React"];
// console.log(technologies.splice(2, 1));
const newTech = technologies.splice(2, 1);
console.log(technologies);

// Qno:06

const RegEmails = ["admin@gmail.com", "user@gmail.com", "staff@gmail.com"];
let token = RegEmails.includes("admin@gmail.com");
console.log(token);

// Qno:07

const cities = ["karachi", "islamabad", "lahore", "karachi"];
console.log(cities.indexOf("karachi"));

// Qno:08

const topic = ["HTMl", "CSS", "JS", "React", "Node"];
const newTopic = topics.slice(1, 4);
console.log(newTopics);

const technology = ["HTML", "CSS", "jQuery", "React"];
const newTechs = technology.splice(2, 1);
console.log(technology);
console.log("splice changes the orignal array");

// Qno:09

const prices = [1000, 2500, 800, 1500];

const taxedPrices = prices.map((price) => price * 1.1);

console.log(taxedPrices);

// Qno:10

const students = [
  { firstName: "Ali", lastName: "Khan" },
  { firstName: "Hani", lastName: "Wasim" },
  { firstName: "Ahmed", lastName: "Raza" },
];

const fullNames = students.map(
  (student) => student.firstName + " " + student.lastName,
);

console.log(fullNames);

// Qno:11
const marks = [35, 76, 49, 90, 50, 20];

const passingMarks = marks.filter((mark) => mark >= 50);

console.log(passingMarks);

// Qno:12

const users = [
  { name: "Ali", age: 20 },
  { name: "Hani", age: 19 },
  { name: "Ahmed", age: 16 },
  { name: "Sara", age: 22 },
];

const adultNames = users
  .filter((user) => user.age >= 18)
  .map((user) => user.name);

console.log(adultNames);

// Qno:13

const man = [
  { id: 101, name: "Ali" },
  { id: 102, name: "Ahmed" },
  { id: 103, name: "Hani" },
];

const user = man.find((user) => user.id === 103);

if (user) {
  console.log(user);
} else {
  console.log("User not found");
}

// Qno14

const usr = [
  { id: 101, name: "Ali" },
  { id: 102, name: "Hani" },
  { id: 103, name: "Ahmed" },
];

const useres = usr.find((useres) => useres.id === 103);
// { id: 103, name: "Ahmed" }

const adults = usr.filter((usr) => usr.id >= 102);
// [
//   { id: 102, name: "Hani" },
//   { id: 103, name: "Ahmed" }
// ]

// Qno :15

const cart = [1200, 350, 999, 450];

const total = cart.reduce((sum, price) => sum + price, 0);

console.log(total);

// Qno 16

const techn = ["JS", "React", "JS", "Node", "React", "JS"];

const counts = techn.reduce((acc, tech) => {
  acc[tech] = (acc[tech] || 0) + 1;
  return acc;
}, {});

console.log(counts);

// Qno: 17;

const numbers = [25, 3, 100, 12, 8];

numbers.sort((a, b) => a - b);

console.log(numbers);

// Qno: 18;

console.log(
  "sort() mutates the original array, which can directly mutate React state. So I create a copy using spread syntax and sort the copy instead.",
);

Qno: 19;

const stock = [5, 0, 7, 2];

const outOfStock = stock.some((quantity) => quantity === 0);

console.log(outOfStock);

// Qno:20

const markings = [55, 72, 90, 48, 65];

const everyPassed = markings.every((mark) => mark >= 50);
const has90Plus = markings.some((mark) => mark >= 90);

console.log(everyPassed);
console.log(has90Plus);
