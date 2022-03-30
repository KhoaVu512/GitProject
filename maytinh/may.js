function setOutput(value) {
    document.getElementById('input').value += value
}

function calculator() {
    let input = document.getElementById('input').value;

    // dung ham co san eval() thuc hien tinh toan bieu thuc string
    result = eval(input);

    // dat lai gia tri cho o input
    document.getElementById('input').value = result;
}

function clearTex() {
    document.getElementById('input').value = '';
}