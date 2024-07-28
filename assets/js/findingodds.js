let firstNumber = parseInt(prompt("Enter your first number"));
let secondNumber = parseInt(prompt("Enter your second number"));

console.log("The odd numbers between " + firstNumber + " and " + secondNumber + " are ");
for(let num=firstNumber; num<=secondNumber; num++){
    if(num % 2 !== 0){
        // console.log("The odd numbers between the chosen numbers are ");
        console.log(num);
    }
}