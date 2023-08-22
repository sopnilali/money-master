
document.getElementById('btn-calculate').addEventListener('click', function(){
    totalExpenses = 0;
    otherBalance = 0;
    const income = getValueElementId('total-income');
    const food = getValueElementId('food-total');
    const rent = getValueElementId('rent-total');
    const clothes = getValueElementId('clothes-total');
    totalExpenses = food + rent + clothes;
    otherBalance = income - totalExpenses;
    setTextElementValueById('total-expense',totalExpenses);
    setTextElementValueById('others-balance',otherBalance);
})

document.getElementById('btn-saving').addEventListener('click', function(){
    const discountValue = getValueElementId('discount-value');
    const discountedTotal = totalExpenses * (1 - discountValue/100);
    const newBalanceTotal = otherBalance - discountedTotal;
    setTextElementValueById("saving-value",discountedTotal);
    setTextElementValueById("remain-value",newBalanceTotal.toFixed(2));
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
