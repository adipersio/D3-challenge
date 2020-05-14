var svgWidth = 960;
var svgHeight = 660;

var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);


var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

d3.csv("data.csv").then(function(censusData) {
  console.log(censusData);

  censusData.forEach(function(data) {
    state = censusData.state;
    poverty = censusData.poverty;
    obesity = censusData.obesity;
    console.log(poverty);
    console.log(state);
 

//   var barSpacing = 10; // desired space between each bar
//   var scaleY = 10; // 10x scale on rect height

//   // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
//   var barWidth = (chartWidth - (barSpacing * (tvData.length - 1))) / tvData.length;

//   // @TODO
//   // Create code to build the bar chart using the tvData.
//   chartGroup.selectAll(".bar")
//     .data(tvData)
//     .enter()
//     .append("rect")
//     .classed("bar", true)
//     .attr("width", d => barWidth)
//     .attr("height", d => d.hours * scaleY)
//     .attr("x", (d, i) => i * (barWidth + barSpacing))
//     .attr("y", d => chartHeight - d.hours * scaleY);
// }).catch(function(error) {
//   console.log(error);


});
});
