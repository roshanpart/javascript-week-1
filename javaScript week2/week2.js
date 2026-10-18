const userRole = "guest";
const isAdmin = userRole ==="admin";
const isLoggedIn = userRole !== "guest";


// Exercise: bank balance

const balance = 15000;

/* if (balance <= 0) {
    console.log(`Please deposit swome money!`);
} else if (balance <= 1000) {
    console.log(`Your balance is looking okay`);
} else if (balance <= 3000) {
    console.log(`Your balance is looking good`);
} else if (balance <= 10000) {
    console.log(`Your balance is fantastic`);
} else if(balance <= 15000) {
    console.log(`Your balance is Amazing`);
} */


// Exercise: circle area


function getCricleArea(radius) {
    
    return Math.PI * radius * radius;
}
const result = getCricleArea;

console.log(result(3));


function celsiusToFahrenheit(celsius) {
    return (celsius * 9)/5 + 32

}

const fahrenheit = celsiusToFahrenheit(0);
const fahrenheit2 = celsiusToFahrenheit(100);

console.log(fahrenheit);
console.log(fahrenheit2);



function logString(string, repetitions) {
for (let i = 0; i < 3; i++) {
    console.log(string);
}
    
}

logString("hello", 3)


for (let i = 74; i <= 98; i++) {
console.log(i);
}



const emailList = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|" +
  "ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com";

const emailsArray = emailList.split("|");

  function sendEmailTo(recipient) {
for (let i = 0; i < recipient.length; i++) {
    console.log("email sent to " + recipient[i]);
}
  
  }

  
function getTicketPrice(age, isStudent) {
    if (age < 6) return 0;
    if (isStudent || age >= 65) return 50;
    return 100;

}


function getRectangleArea(width, height) {
    return width * height;

    const result = (4, 3);
    console.log(result);
}
const getRectangleArea = (width)