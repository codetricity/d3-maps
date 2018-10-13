const width = 400,
  height = 400;
const margin = { left: 100, right: 20, top: 20, bottom: 100 };
const svgWidth = width + margin.left + margin.right;
const svgHeight = height + margin.top + margin.bottom;

let svg = d3.select('body').append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight)
  .call(d3.zoom().on("zoom", () => {
    svg.attr("transform", d3.event.transform);
    console.log("zooming");
  }))
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

const xScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, width]);

const xAxis = d3.axisBottom(xScale);

svg.append('g')
  .call(xAxis)
  .attr('transform', `translate(0, ${height})`);

