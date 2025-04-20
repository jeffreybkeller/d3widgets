// anime
function implementAnimated(divId, topText, bottomText, topIcon, titleText){

    var anime = d3.select(divId)
      .append("svg")
      .attr("width", circleXY * 2)
      .attr("height", circleXY * 2);

    var animeBorder = anime.append("circle")
      .attr("cx", circleXY)
      .attr("cy", circleXY)
      .attr("r", circleXY / 2 + 5)
      .style("fill", "white");

    var animeDetails = anime.append("circle")
      .attr("cx", circleXY)
      .attr("cy", circleXY)
      .attr("r", circleXY / 2)
      .style("fill", "white");

    if (topText !== "") {
      var animeTopText = anime.append("text")
        .attr("x", circleXY)
        .attr("y", circleXY)
        .style("font-family", "sans-serif")
        .style("font-size", (circleXY / 3) + "px")
        .style("text-anchor", "middle")
        .style("fill", "white")
        .text(topText);
    } else {
      var animeTopText = anime.append("text")
        .attr("x", circleXY)
        .attr("y", circleXY)
        .style("font-family", "FontAwesome")
        .style("font-size", (circleXY / 3) + "px")
        .style("text-anchor", "middle")
        .style("fill", "white")
        .text(function(d) { return topIcon });
    }

    var animeBottomText = anime.append("text")
      .attr("x", circleXY)
      .attr("y", circleXY + (circleXY * .25))
      .style("font-family", "sans-serif")
      .style("font-size", (circleXY / 5) + "px")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .text(bottomText);

    if (titleText !== "") {
      var animeTitleText = anime.append("text")
        .attr("x", circleXY)
        .attr("y", circleXY * 1.8)
        .style("font-family", "sans-serif")
        .style("font-size", (circleXY / 5) + "px")
        .style("text-anchor", "middle")
        .style("fill", "black")
        .text(titleText);
    }

    animeBorder
      .transition()
      .duration(1000)
      .style("fill", "#3FA6EA");

    animeDetails
      .transition()
      .duration(1000)
      .style("fill", "#56C4F5");
}
