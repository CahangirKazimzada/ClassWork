const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
let demo = document.getElementById("demo");

eventListeners();
function eventListeners(){
    multiplyButton.addEventListener("click", multiply);
    divideButton.addEventListener("click", divide);
}
function multiply(e){
    demo.innerHTML = firstNumber.value*1 * secondNumber.value*1;
}
function divide(e){
    demo.innerHTML = firstNumber.value*1 / secondNumber.value*1;
}