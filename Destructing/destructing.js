var expense = {
    type:'Business',
    amount:'$45 USD'
}

var type = expense.type;
var amount = expense.amount;


console.log(type);   
console.log(amount);



// Destructuring the object with Es6

var {type, amount} = expense;

console.log(type);   
console.log(amount);


// Destructuring with aliasing

var {type: expenseType, amount: expenseAmount} = expense;

console.log(expenseType);   
console.log(expenseAmount);


// Destructuring in function parameters

function printExpense({type, amount}){
    return `Expense type: ${type} \nExpense amount: ${amount}`;
}

console.log(printExpense(expense));


// Destructuring with Lists/Arrays
var companies = [
    'Google',
    'Facebook',
    'Uber'
];

var [name1, name2, name3] = companies;

console.log(name1);  
console.log(name2);
console.log(name3);


// Alternate way using spread operator
var [nameA, ...restNames] = companies;

console.log(nameA);  
console.log(restNames);



// Destructuring in Array and Object combined
var companiesInfo = [
    {name: 'Google', location: 'Mountain View'},
    {name: 'Facebook', location: 'Menlo Park'},
    {name: 'Uber', location: 'San Francisco'}
];

var [{name: nameOne}, , {location: locationThree}] = companiesInfo;

console.log(nameOne);        



const numbers = [1, 2, 3];



function double([number, ...rest]) {
    if (rest.length === 0) return;
    // console.log(number * 2);
    for ( let i=0; i<rest.length; i++){
        console.log(rest[i]*2);
        console.log('here')
        // double(rest);
    }
}
console.log(double(numbers));