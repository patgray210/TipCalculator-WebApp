let total;
let tipAmount;
let resultText;
function printTip(bill, tip){
    
    total=(bill*((tip/100)+1)).toFixed(2);
    tipAmount =(bill*(tip/100)).toFixed(2);
    resultText = document.getElementById('results');
    resultText.innerHTML +=`<li>$${tipAmount} is the Tip amount and $${total} is your bill total</li>`;
    localStorage.setItem('pastTipAmount',tipAmount);
    localStorage.setItem('pastTotal',total);
    localStorage.setItem('pastTipPercent',tip);
    localStorage.setItem('pastBill',bill);
}
function printPastTips(){
    let pastText=document.getElementById('results');
    if(localStorage.getItem('pastBill')==undefined){
        pastText.innerHTML += 'Previous Spending: Bill: None, Tip %: None, Tip Amount: None, Total bill: None';
    }else{
    pastText.innerHTML += 'Previous Spending: Bill: $'+localStorage.getItem('pastBill')+', Tip %: '+localStorage.getItem('pastTipPercent')+', Tip Amount: $'+localStorage.getItem('pastTipAmount')+', Total bill: $'+localStorage.getItem('pastBill');
    }
}
printPastTips();