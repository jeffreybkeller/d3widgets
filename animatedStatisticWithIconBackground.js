// anime
function animatedStatisticWithIconBackground(divId, stat, caption, topIcon, titleText, iconBgSize, iconBgY){

  var root = d3.select(divId)
    .append("svg")
    .attr("width", circleXY * 2)
    .attr("height", circleXY * 2);

  var border = root.append("circle")
    .attr("cx", circleXY)
    .attr("cy", circleXY)
    .attr("r", circleXY / 2 + 5)
    .style("fill", "white");

  var background = root.append("circle")
    .attr("cx", circleXY)
    .attr("cy", circleXY)
    .attr("r", circleXY / 2)
    .style("fill", "white");

  if (stat !== "") {
    root.append("text")
      .attr("x", circleXY)
      .attr("y", circleXY)
      .style("font-family", "sans-serif")
      .style("font-size", (circleXY / 3) + "px")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .text(stat);
  } else {
    root.append("text")
      .attr("x", circleXY)
      .attr("y", iconBgY)
      .style("font-family", "FontAwesome")
      .style("font-size", iconBgSize + "px")
      .style("text-anchor", "middle")
      .style("fill", "#56C4F5")
      .text(function(d) { return topIcon });
  }

  root.append("text")
    .attr("x", circleXY)
    .attr("y", circleXY + (circleXY * .16))
    .style("font-family", "sans-serif")
    .style("font-size", (circleXY * .33) + "px")
    .style("text-anchor", "middle")
    .style("fill", "white")
    .text(caption);

  if (titleText !== "") {
    root.append("text")
      .attr("x", circleXY)
      .attr("y", circleXY * 1.9)
      .style("font-family", "sans-serif")
      .style("font-size", (circleXY / 5) + "px")
      .style("text-anchor", "middle")
      .style("fill", "black")
      .text(titleText);
  }

  border
    .transition()
    .duration(1000)
    .style("fill", "#56C4F5");

  background
    .transition()
    .duration(1000)
    .style("fill", "#3FA6EA");
}


