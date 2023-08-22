
document.getElementById('btn-calculate').addEventListener('click', function(){
    totalExpenses = 0;
    otherBalance = 0;
    income = 0
    income = getValueElementId('total-income');
    const food = getValueElementId('food-total');
    const rent = getValueElementId('rent-total');
    const clothes = getValueElementId('clothes-total');
    totalExpenses = food + rent + clothes;
    otherBalance = income - totalExpenses;
    setTextElementValueById("total-expense",totalExpenses +` TK`);
    setTextElementValueById("others-balance",otherBalance +` TK`);

})

document.getElementById('btn-saving').addEventListener('click', function(){
    const discountValue = getValueElementId('discount-value');
    const discountedTotal = income * discountValue/100;
    const newBalanceTotal = otherBalance - discountedTotal;
    setTextElementValueById("saving-value",discountedTotal +` TK`);
    setTextElementValueById("remain-value",newBalanceTotal +` TK`);

    // document.getElementById("saving-value").innerText = discountedTotal +` TK`;
    // document.getElementById("remain-value").innerText = newBalanceTotal.toFixed(2) +` TK`; 
})

document.getElementById('reset-btn').addEventListener('click', function(){
    totalExpenses = 0
    otherBalance = 0;
    discountedTotal = 0;
    newBalanceTotal = 0;
    setTextElementValueById("total-expense",totalExpenses +` TK`);
    setTextElementValueById("others-balance",otherBalance +` TK`);
    setTextElementValueById("saving-value",discountedTotal +` TK`);
    setTextElementValueById("remain-value",newBalanceTotal +` TK`);

})

function getValueElementId (elementId){
    const elementValue = document.getElementById(elementId);
    const elementString = elementValue.value;
    const element = parseFloat(elementString);
    elementValue.value = '';
    return element;

}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
    textElement.value = '';
}
