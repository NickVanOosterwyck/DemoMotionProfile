// Set up the SVG canvas dimensions
const width = 500;
const height = 500;

// Create scales for the X and Y axes
const xScale = d3.scaleLinear().domain([0, 2]).range([0, width]); // only two points (start and end)
const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]); // assuming slider values range from 0 to 100

// Line generator function
const line = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d));

// Initial render of the line
const svg = d3.select("#svg");
svg.append("path")
    .datum([d3.select("#slider1").node().value, d3.select("#slider2").node().value])
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("d", line);

// Update function
function updateGraph() {
    let value1 = +d3.select("#slider1").node().value;
    let value2 = +d3.select("#slider2").node().value;

    // Update the line data and redraw
    svg.select("path")
        .datum([value1, value2])
        .attr("d", line);
}

d3.select("#slider1").on("input", updateGraph);
d3.select("#slider2").on("input", updateGraph);