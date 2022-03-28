let selectedElement=document.getElementById("inputValue");
selectedElement.addEventListener('click', valueMoney);
function valueMoney() {
    let input = document.getElementById("amount").value;
    parseInt(input);
    let value1 = document.getElementById("fromCurrency").value;
    parseInt(value1);
    let value2 = document.getElementById("toCurrency").value;
    parseInt(value2);
    let result = input * value1 / value2;
    document.getElementById("result").innerHTML = result;
}
