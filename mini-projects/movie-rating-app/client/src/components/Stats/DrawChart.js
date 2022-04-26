import * as d3 from "d3";

const margin = { top: 50, right: 30, bottom: 30, left: 60 };

export default function DrawChart(data, chart, xAxis, yAxis) {
  const chartwidth = 800;
  const chartheight = 400;

  const svg = d3
    .select(chart.current)
    .attr("width", chartwidth + margin.left + margin.right)
    .attr("height", chartheight + margin.top + margin.bottom);

  // x scale
  const x = d3
    .scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, chartwidth - margin.right])
    .padding(0.1);

  svg
    .append("g")
    .attr("transform", "translate(0," + chartheight + ")")
    .call(
      d3
        .axisBottom(x)
        .tickFormat((i) => data[i].category)
        .tickSizeOuter(0)
    );

  const max = d3.max(data, function (d) {
    return d.quantity;
  });

  // y scale
  const y = d3.scaleLinear().domain([0, max]).range([chartheight, margin.top]);

  svg
    .append("g")
    .attr("transform", "translate(" + margin.left + ",0)")
    .call(d3.axisLeft(y));

  svg
    .append("text")
    .attr(
      "transform",
      "translate(" + 800 / 2 + " ," + (400 + margin.top + 20) + ")"
    )
    .style("text-anchor", "middle")
    .text(xAxis);

  svg
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 60 - margin.left)
    .attr("x", 60 - (300 )) 
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text(yAxis);

  // Draw bars
  svg
    .append("g")
    .attr("fill", "lightblue")
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", (d) => y(d.quantity))
    .attr("height", (d) => y(0) - y(d.quantity))
    .attr("width", x.bandwidth());
}
