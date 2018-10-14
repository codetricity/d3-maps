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

  svg.append('text')
    .text('U.S. Civil War Sides')
    .attr('x', width/2)
    .attr('text-anchor', 'middle')
    .attr('class', 'chart-title');

  let unionCircles = svg.selectAll('circle')
    .data(union)
    .enter()
    .append('circle')
    .style('fill', '#2E9AFE')
    .style('opacity', '0.1')
    .attr('cy', 100)
    .attr('r', 15);
  
  unionCircles
    .transition()
    .style('opacity', '1')
    .attr('cx', (d, i) => i * xScale.bandwidth())
    .duration(2000);

  svg.append('text')
    .text('Union')
    .attr('class', 'state')
    .attr('x', 0)
    .attr('y', 50)
    .attr('text-anchor', 'start');

  unionCircles.on('mouseover', function(d, i) {
    svg.append('text')
      .text(d)
      .attr('x', i * xScale.bandwidth())
      .attr('y', 80)
      .attr('text-anchor', 'middle')
      .attr('class', 'state-label')
      .attr('id', 'stateName')
      .transition()
      .delay(300)
      .style('font-size', '20px')
      .duration(1000);
  });

  unionCircles.on('mouseout', function(d) {
    d3.select('#stateName').remove();
  });

  const confederateGroup = svg.append('g');
  
  const confederateCircles = confederateGroup.selectAll('circle')
  .data(confederate)
  .enter()
  .append('circle')
  .style('fill', '#848484')
  .attr('cy', 300)
  .attr('r', 15);

  confederateCircles
  .transition()
  .style('opacity', '1')
  .attr('cx', (d, i) => i * xScale.bandwidth())
  .duration(2000);

  svg.append('text')
    .text('Confederate')
    .attr('class', 'state')
    .attr('x', 0)
    .attr('y', 250)
    .attr('text-anchor', 'start');

  confederateCircles.on('mouseover', function(d, i) {
      svg.append('text')
        .text(d)
        .attr('x', i * xScale.bandwidth())
        .attr('y', 280)
        .attr('text-anchor', 'middle')
        .attr('class', 'state-label')
        .attr('id', 'stateName');
    });

  confederateCircles.on('mouseout', function(d, i) {
    d3.select('#statename').remove();
  });

  const borderGroup = svg.append('g');
  
  const borderCircles = borderGroup.selectAll('circle')
  .data(border)
  .enter()
  .append('circle')
  .style('fill', '#F79F81')
  .attr('cy', 500)
  .attr('r', 15);

  borderCircles
  .transition()
  .style('opacity', '1')
  .attr('cx', (d, i) => i * xScale.bandwidth())
  .duration(2000);

  svg.append('text')
  .text('Border')
  .attr('class', 'state')
  .attr('x', 0)
  .attr('y', 450)
  .attr('text-anchor', 'start');

  borderCircles.on('mouseover', function(d, i) {
    svg.append('text')
      .text(d)
      .attr('x', i * xScale.bandwidth())
      .attr('y', 480)
      .attr('text-anchor', 'middle')
      .attr('class', 'state-label')
      .attr('id', 'stateName');
  });

  borderCircles.on('mouseout', function(d, i) {
    d3.select('#statename').remove();
  });

});
