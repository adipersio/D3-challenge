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

var svg = d3.select("scatter")
  .attr("height", svgHeight)
  .attr("width", svgWidth);
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);


d3.csv("data.csv").then(function(censusData) {
  console.log(censusData);

  censusData.forEach(function(data) {
    state = censusData.state;
    poverty = censusData.poverty;
    obesity = censusData.obesity;
    console.log(poverty);
    console.log(state);
 

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 4000])
    .range([ 0, svgWidth]);
  svg.append("g")
    .attr("transform", "translate(0," + svgHeight + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 500000])
    .range([ svgHeight, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)

    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.GrLivArea); } )
      .attr("cy", function (d) { return y(d.SalePrice); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")

});
});
