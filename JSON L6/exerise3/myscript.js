const person = {name: "Ana",  age: 20 , city: "Gorontalo City"};

let txt ="";
for (let x in person) {
    txt += person[x] + " ";
};

document.getElementById("exercise3").innerHTML = txt;