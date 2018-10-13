
var svg = d3.select("body").append('svg')
    .attr('width', '400')
    .attr('height', '400')
    .style('border', 'solid 1px');

var dragHandler = d3.drag()
    .on('drag', dragged)
    // .on('start', dragstarted);

var circle = svg.append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr('r', 20);

dragHandler(circle);


function dragged() {
    var current = d3.select(this);
    current
        .attr('cx', d3.event.x)
        .attr('cy', d3.event.y);
}

// function dragstarted(d) {
//     d3.select(this).raise();
// }