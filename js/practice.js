var animals = ['cow', 'horse', 'sheep'];
var flowers = ['rose', 'tulip'];

var ol = d3.select('#practice-list');

// var svg = d3.select('body').append('svg')
//   .attr('width', '600')
//   .attr('height', '300')
//   .append('g');

// var text = svg.selectAll('text')
//   .data(animals);

// text.exit().remove();

// text.attr('class', 'update')
//   .attr('fill', 'red');

// text.enter().append('text')
//   .attr('class', 'enter')
//   .attr('x', (d, i) => i * 52)
//   .attr('y', 20)
//   .attr('fill', 'green')
//   .text(d => d);



// first set
var items = ol.selectAll('li')
  .data(animals)
  .enter()
  .append('li')
  .text(d => d);

// update data
//
// data
// exit
// update
// enter

items = ol.selectAll('li')
  .data(flowers);
items
  .exit().remove()
  .text(d => d)
  .enter()
    .append('li')
    .text(d => d);


// items = ol.selectAll('li')
//   .data(animals)
//   .text(d => d);
// console.log(items);


//   .enter()
//   .append('li')
//   .text(d => d);


// items = ol.selectAll('li')
// .data(flowers)
// .text(d => d)
// .exit().remove()
// .enter()
// .append('li')
// .text(d => d);

// updateData(ol, flowers);
// updateData(ol, animals);

// function updateData(ol, dataset) {
//   let items = ol.selectAll('li');

//   items
//     .data(dataset)
//     .text(d => d)
//     .enter()
//     .append('li')
//     .text(d => d)
//     .exit().remove();
// }
// console.log(items);
  