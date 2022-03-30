let a=document.getElementById("inputValue");
a.addEventListener('click', valueMoney);
function valueMoney() {
    let input = document.getElementById("amount").value;
    let value1 = document.getElementById("fromCurrency").value;
    let value2 = document.getElementById("toCurrency").value;
    let result = input * value1 / value2;
    document.getElementById("result").innerHTML = "kq: " + result;
}
