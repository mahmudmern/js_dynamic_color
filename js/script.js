let inputBox = document.getElementById ("input_box");
let resultBox = document.getElementById ("result_box");

let changeColor = () =>{
    let input = inputBox.value;
    resultBox.style.backgroundColor = input
};
inputBox.addEventListener("input",changeColor);
window.addEventListener("load",changeColor)



