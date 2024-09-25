// Data array
var xArray = [40, 50,60,70,80,90,100,110,120,130,140,150];
var yArray = [5, 7,8,8,9,9,9,10,11,14,14,15];
// Define Data
var data = [{
  x: xArray,
  y: yArray,
  mode: "lines"
}];
// Define Layout
var layout = {
  xaxis: {range: [10, 160], title: "Square Meters"},
  yaxis: {range: [3, 16], title: "Price in Millions"},
  title: "House Prices vs. Size"
};
// Display using Plotly
Plotly.newPlot ("myPlot", data, layout);
