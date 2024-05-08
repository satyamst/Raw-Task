function Expense(
    id,
    amount,
    description,
    category,
    date,
) {
this.id = "1" + Math.floor(Math.random() * 1000);
this.amount = amount;
this.description = description;
this.category = category;
this.date = Date;
return this;
};


function getRandomAmount() {
    const amount = [204.67,294.67, 2094.67,1294.67]
    return Math.floor(Math.random() * 1000) + 1; // Random amount between 1 and 1000
}

function getRandomDescription(index) {
    const description = ["order for food Zomato","watch movie in KT vision", "buy some clothes","travel to andheri by ola",];
    return `1 ${index + 1}`; 
}

function getRandomCategory() {
    const categories = ["Food", "Entertainment", "Shopping", "Transportation"];
    return categories[Math.floor(Math.random() * categories.length)]; 
}

// Function to generate an array of random expenses
function generateRandomExpenses(n) {
    const randomExpenses = [];
    for (let i = 0; i < n; i++) {
        const amount = getRandomAmount();
        const description = getRandomDescription(i);
        const category = getRandomCategory();
        const date = new Date(`2024-05-${Math.floor(Math.random() * 30) + 1}`);

        const expense = new Expense(amount, description, category, date);
        randomExpenses.push(expense);
    }
    return randomExpenses;
}

// Example usage
const randomExpenses = generateRandomExpenses(5);
console.log(randomExpenses);


// const E11 = [
//     e1={
        
//             id: 1,
//             title: "food",
//             amount: 2094.67,
//             description:"order for food Zomato",
//             date: new Date(2021, 2, 28)
        
//     },

//     e2 = {
//         id:2,
//         title: "Entertainment",
//         description:"watch movie in KT vision",
//         amount: 294.67,
//         date: new Date(2021, 3, 28)
//     },

//     e3 = {
//         id:3,
//         title: "Shopping",
//         amount: 2094.67,
//         description:"buy some clothes",
//         date: new Date(2021, 4, 28)
//     },
//     e4 = {
//         id:4,
//         title: "Transportation",
//         description:"travel to andheri by ola",
//         amount: 1294.67,
//         date: new Date(2021, 5, 28)
//     }


// ]
    