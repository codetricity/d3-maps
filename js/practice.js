var animals = ['cow', 'horse', 'sheep'];
var flowers = ['rose', 'tulip'];

var ol = d3.select('#practice-list');



var items = ol.selectAll('li')
  .data(animals);

// updateData(items, animals);

// updateData(items, flowers);

items
  .enter()
  .append('li')
  .text(d => d);


items = ol.selectAll('li')
   .data(flowers);

items
  .text(d => d)
  .exit().remove();

// function updateData(items, dataset) {
//   items
//     // .text(d => d)
//     .exit().remove()
//     .data(dataset)
//     .enter()
//     .append('li')
//     .text(d => d);
// }
console.log(items);
  