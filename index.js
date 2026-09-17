// let first = prompt("whats your first name?");
// let last = prompt("whats your last name?");

// function formatName(firstName, lastName){

//     if (firstName  == "" || lastName == ""){
//         return "invalid name input"
//     }

//     else {
//     let fn = firstName.charAt(0).toUpperCase() + firstName.slice(1);
//     let ln = lastName.charAt(0).toUpperCase() + lastName.slice(1);
//     let fullName = fn + " " + ln;
    
//     return (fullName);
//     }

// }

// console.log(formatName(first,last));

// let price = parseFloat(prompt("type the price"));
// let quantity = parseFloat(prompt("type the quantity"));
// let taxRate = parseFloat(prompt("type the tax rate"));

// function calculateTotalCost(price, quantity, taxRate){

//     if( isNaN(price) || isNaN(quantity)||isNaN(taxRate)){
//         return "invalid input";
//     }
//     else{
//         let totalCost = (price * quantity) * (1 + taxRate)
//         return totalCost
//     }
    
// }

// console.log(calculateTotalCost(price,quantity,taxRate))

let age = Number(window.prompt("type your age", ""));
let isEmployed = prompt("are you employed?");

function checkEligibility(age, isEmployed){
    if(age >=18 && isEmployed == true){
        return "you are eligable";
    }
    else if(age >= 18 && isEmployed == false){

    }

}