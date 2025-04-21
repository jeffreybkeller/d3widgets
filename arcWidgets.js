

function singleArc(divId, percentage, displayText, backgroundColor, animate) {

    var parent = d3.select(divId)
      .append("svg")
      .attr("width", circleXY * 2)
      .attr("height", circleXY * 2);

    if (displayText) {
      var animeBottomText = parent.append("text")
        .attr("x", circleXY)
        .attr("y", circleXY) // + (circleXY * .16))
        .style("font-family", "sans-serif")
        .style("font-size", (circleXY * .33) + "px")
        .style("text-anchor", "middle")
        .attr("dominant-baseline", "central")
        .style("fill", "green")
        .style('font-weight', 'bold')
        .text(percentage + "%");
    }

    if (backgroundColor) {
      createArc(parent, 5, circleXY, circleXY + 1, 10, 0, 360, backgroundColor);
    }
    createArc(parent, 5, circleXY, circleXY + 1, 10, 0, percentage / 100 * 360, "green", animate);

}

function arcTween(d) {
    var i = d3.interpolate(d.startAngle, d.endAngle);
    return function (t) {
        d.endAngle = i(t);
        return arc(d);
    }
}
  
function createArc(parent, cornerRadius, widgetDiameter, diameter,
    thickness, start, end, fill, animate) {
  
    var arc = d3.arc()
        .cornerRadius(cornerRadius)
        .innerRadius(diameter / 2)
        .outerRadius(diameter / 2 + thickness);

    var svg = parent
        .append("g")
        .attr('transform','translate(' + widgetDiameter + ', ' + widgetDiameter + ')');

    if (animate) {

        var foreground = svg.append("path")
            .datum({
                endAngle: 0 * Math.PI / 180,
                startAngle: 0 * Math.PI / 180
            })
            .style("fill", fill)
            .attr("d", arc);

        setTimeout(function () {
            foreground.transition()
                .duration(750)
                .call(arcTween, 0 * Math.PI / 180, end * Math.PI/ 180); // -30 * Math.PI, 90 * Math.PI);
            }, 500);

        function arcTween(transition, newStartAngle, newFinishAngle) {
            transition.attrTween("d", function (d) {
                var interpolateStart = d3.interpolate(d.endAngle, newFinishAngle);
                return function (t) {
                d.endAngle = interpolateStart(t);
                d.startAngle = newStartAngle;
                    return arc(d);
                };
            });
        }

    } else {
        var foreground = svg.append("path")
            .datum({
            endAngle: end * Math.PI / 180,
            startAngle: start * Math.PI / 180
            })
            .style("fill", fill)
            .attr("d", arc);
    }
}
  
function multipleArcs(divId, backgroundColor, centerImage, firstColor, firstValue,
    secondColor, secondValue, thirdColor, thirdValue) {
  
      var parent = d3.select(divId)
        .append("svg")
        .attr("width", circleXY * 2)
        .attr("height", circleXY * 2);
  
      if (backgroundColor) {
          createArc(parent, 5, circleXY, circleXY + 1, 9, 0, 360, backgroundColor);
          createArc(parent, 5, circleXY, circleXY + 21, 9, 0, 360, backgroundColor);
          createArc(parent, 5, circleXY, circleXY + 41, 9, 0, 360, backgroundColor);
      }
  
      if (centerImage) {
  
        var defs = parent.append('svg:defs');
  
        defs.append("svg:pattern")
          .attr("id", divId + "_avatar")
          .attr("width", circleXY)
          .attr("height", circleXY)
          .attr("patternUnits", "userSpaceOnUse")
          .append("svg:image")
          .attr("xlink:href", centerImage)
          .attr("width", circleXY)
          .attr("height", circleXY)
          .attr("x", 0)
          .attr("y", 0);
  
        var circle = parent.append("circle")
          .attr("cx", circleXY/2)
          .attr("cy", circleXY/2)
          .attr("r", circleXY/2)
          .style("fill", "#fff")
          .style("fill", "url(#" + divId + "_avatar)")
          .attr('transform','translate(' + circleXY / 2 + ', ' + circleXY / 2 + ')');
  
      }
  
      createArc(parent, 5, circleXY, circleXY + 1, 9, 0, firstValue / 100 * 360, firstColor, true);
      createArc(parent, 5, circleXY, circleXY + 21, 9, 0, secondValue / 100 * 360, secondColor, true);
      createArc(parent, 5, circleXY, circleXY + 41, 9, 0, thirdValue / 100 * 360, thirdColor, true);
  
  }