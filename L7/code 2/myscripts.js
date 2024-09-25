// Data array
var xArray = ["Indonesia", "Taiwan", "China", "USA", "Malaysia"];
var yArray = [55, 49, 44, 24, 15];

// Define Data
var data = [{
  x: xArray,
  y: yArray,
  type: "bar"
}];

// Define Layout
var layout = {title: "World Wide Wine Production"};

// Display using Plotly
Plotly.newPlot ("myPlot", data, layout);