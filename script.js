document.getElementById('calculate').addEventListener('click', function(){
    const income = document.getElementById('income');
    const incomeValue = parseFloat(income.value);

    const food = document.getElementById('food');
    const foodValue = parseFloat(food.value);

    const rent = document.getElementById('rent');
    const rentValue = parseFloat(rent.value);

    const clothes = document.getElementById('clothes');
    const clothesValue = parseFloat(clothes.value);

    const expenses = document.getElementById('expenses');
    const  expensesValue = foodValue + rentValue + clothesValue;

    expenses.innerText = expensesValue;

    const balence = document.getElementById('balance');
    const balenceValue = incomeValue - expensesValue;

    if(balenceValue<0){
        alert('Your expences is more than your income balance')
    }
    else{
        balence.innerText = balenceValue;
    }
});

document.getElementById('save').addEventListener('click', function(){
    const savings = document.getElementById('savings');
    const savingsValue = parseFloat(savings.value);

    const income = document.getElementById('income');
    const incomeValue = parseFloat(income.value);

    const saveAmount = document.getElementById('savaAmount');
    const saveAmountValue = (incomeValue * savingsValue)/100;

    saveAmount.innerText = saveAmountValue;

    const remainAmount = document.getElementById('remainAmount');
    const balence = document.getElementById('balance').innerText;
    const remainAmountValue = parseFloat(balence) - saveAmountValue;

    if(remainAmountValue<0){
        alert('Do not have enough balance')
    }
    else{
        remainAmount.innerText = remainAmountValue;
    }


});
