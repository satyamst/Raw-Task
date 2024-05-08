import expenses from './task4.js';

function ExpensesByDate() {
    return expenses.sort((a, b) => a.date - b.date);
}

function getUniqueid() {
    return [...new Set(expenses.map(expense => expense.id))];
}



function getCategory() {
    return [...new Set(expenses.map(expense => expense.category))];
}
function calculateTotalExpenses() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

console.log(ExpensesByDate());
console.log(getUniqueid());
console.log(getCategory());
console.log(calculateTotalExpenses());
