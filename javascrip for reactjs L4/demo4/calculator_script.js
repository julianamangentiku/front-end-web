// Function clear calculator screen.
function clearScreen() {
  document.getElementById("result").value = "";
}

// Function show values
function display(value) {
  document.getElementById("result").value += value;
}

// Function calculate result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}