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
  .data(flowers)
  .text(d => d)
  .exit().remove();

items = ol.selectAll('li')
  .data(animals)
  .text(d => d)
  .enter()
  .append('li')
  .text(d => d);


items = ol.selectAll('li')
.data(flowers)
.text(d => d)
.exit().remove()
.enter()
.append('li')
.text(d => d);

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
  