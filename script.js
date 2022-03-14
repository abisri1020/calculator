// giving a heading using dom and setting id

var heading = document.createElement("h1")
heading.setAttribute('id', 'title')
heading.innerHTML = "CALCULATOR"
document.body.append(heading)

// giving a discription
var para = document.createElement('p')
para.setAttribute('id', 'description')
para.innerHTML = 'DOM calculator for operating simple calculation'
document.body.append(para)
    // This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}