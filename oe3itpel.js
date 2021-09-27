const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');

let myTotalExpenses = 0;

const clear =() =>{

reasonInput.value = '';
amountInput.value = '';
};

cancelButton.addEventListener('click',clear);

addButton.addEventListener('click',() => {
const reasonEntered = reasonInput.value;
const amountEntered = amountInput.value;

if(reasonEntered.trim().length <= 0||
amountEntered <= 0 ||
amountEntered.trim().length <=0){
return;
}
console.log(reasonEntered, amountEntered);

const newExpenses = document.createElement('ion-item');
newExpenses.textContent = reasonEntered + ': P' + amountEnetered;
expensesList.appendChild(newExpenses);
clear();
});
