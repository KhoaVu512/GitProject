// function showMessage(){
//     alert('Xin chào!');
// }

// let x; //create a variable but assign it no value
//
// console.log("x's value is ", x) //logs "x's value is undefined"

// let i = 10;
// let f = 20.5;
// let b = "true";
// let s = 'Ha noi';
//
// document.write('i = ' + i );
// document.write('</br>');
// document.write('f = ' + f);
// document.write('</br>');
// document.write('b = ' + b);
// document.write('</br>');
// document.write('s = ' + s);

// let width = 20;
// let  height = 10;
// let area = width * height;
// document.write("Area = " + area)

// a = prompt("Nhap bien a: ");
// b = prompt("nhap bien b: ")
// if (a%b) {
//     alert("a chia het cho b")
// }
// else {
//     alert("a khong chia het cho b");
// }
let inputWidth;
let inputHeight;
inputWidth = prompt("Enter the width")
inputHeight = prompt("Enter the height")
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area = width * height;
document.write("there area is:  " + area)
