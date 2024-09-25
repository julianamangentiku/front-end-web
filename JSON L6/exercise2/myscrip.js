// Store data:
const myObj = { 
    name: "Ana", 
    age: 20, 
    city: "Gorontalo city" 
  };
  
  // Konversi object menjadi string JSON
  const myJSON = JSON.stringify(myObj);
  
  // Simpan data ke localStorage
  localStorage.setItem("testJSON", myJSON);
  
  // Cetak console
  console.log(myJSON);
  
  // Retrieve data:
  let text = localStorage.getItem("testJSON");
  
  // Konversi string JSON menjadi object
  let obj = JSON.parse(text);
  
  // Tampilkan data di HTML
  document.getElementById("txt-name").innerHTML = `My name is ${obj.name}`;
  document.getElementById("txt-age").innerHTML = `I am ${obj.age} years old.`;
  document.getElementById("txt-city").innerHTML = `I live in ${obj.city}.`;