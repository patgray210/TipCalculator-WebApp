

let button=document.getElementById('Submit');
button.addEventListener('click',buttonEvent);

function buttonEvent(){
    let tipInput=document.getElementById('tip');
    let billInput=document.getElementById('bill');

    tipInput=tipInput.value;
    billInput=billInput.value;
    printTip(billInput,tipInput);
}


