function simpleStatistic(divId, stat, caption, topIcon, titleText){

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
        .attr("y", circleXY)
        .style("font-family", "FontAwesome")
        .style("font-size", (circleXY / 3) + "px")
        .style("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return topIcon });
    }

    root.append("text")
      .attr("x", circleXY)
      .attr("y", circleXY + (circleXY * .25))
      .style("font-family", "sans-serif")
      .style("font-size", (circleXY / 5) + "px")
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

    border.style("fill", "#3FA6EA");

    background.style("fill", "#56C4F5");

}
