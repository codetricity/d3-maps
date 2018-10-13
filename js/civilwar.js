const width = 1000;
const height = 600;
const margin = {left: 100, right: 100, top: 100, bottom: 100};
const svgWidth = width + margin.left + margin.right;
const svgHeight = height + margin.top + margin.bottom;

const svg = d3.select('body').append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);


d3.csv('data/civil-war.csv').then((data) => {
  let union = [];
  let confederate = [];
  let border = [];

  for (var i=0; i<data.length; i = i+1) {
    if (data[i].union != "") {
      union.push(data[i].union);
    }
    if (data[i].confederate != "") {
      confederate.push(data[i].confederate);
    }
    if (data[i].border != "") {
      border.push(data[i].border);
    }
  }

  xScale = d3.scaleBand()
    .domain(union)
    .range([0, width])
    .padding(0.1);

  let unionCircles = svg.selectAll('circle')
    .data(union)
    .enter()
    .append('circle')
    .style('fill', '#2E9AFE')
    .attr('cx', (d, i) => i * xScale.bandwidth())
    .attr('cy', 100)
    .attr('r', 15);

  svg.append('text')
    .text('Union')
    .attr('class', 'state')
    .attr('x', 0)
    .attr('y', 50)
    .attr('text-anchor', 'start');
});

