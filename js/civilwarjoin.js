const svg = d3.select('body').append('svg')
  .attr('width', '600')
  .attr('height', '500');

const background = svg.append('image')
  .attr('xlink:href', 'assets/civilwarmap.jpg')
  .attr('x', '0')
  .attr('y', '0')
  .attr('width', '600')
  .attr('height', '500')
  .attr('opacity', '0.4');
  


d3.csv('data/civil-war.csv').then((data) => {
  const union = [];
  const confederate = [];
  const border = [];


  data.forEach((element) => {
     for (var alliance in element) {
       let stateName = element[alliance];
       if (stateName != "") {
         if (alliance == 'union') {
           union.push(stateName);
         }
         else if (alliance == 'confederate') {
           confederate.push(stateName);
         } else if (alliance == 'border') {
           border.push(stateName);
         }
       } 
     }
  });

  const buttons = d3.selectAll('input');
  buttons.on('change', function(d) {
    console.log('button changed to ' + this.value);
    const selection = this.value;
    if (selection == 'union') {
      background      
        .attr('xlink:href', 'assets/union.png')
        .attr('opacity', '0')
        .attr('x', '-500')
        .transition()
        .attr('opacity', '1.0')
        .attr('x', '0')
        .duration(900);
      listAlliance(union);
    } else if (selection == 'confederate') {
      listAlliance(confederate);
      background      
      .attr('xlink:href', 'assets/confederate.png')
      .attr('opacity', '1.0');
    } else if (selection == 'border') {
      listAlliance(border);
      background      
      .attr('xlink:href', 'assets/border.png')
      .attr('opacity', '1.0');
    } else if (selection == 'all') {
      background      
      .attr('xlink:href', 'assets/civilwarmap.jpg')
      .attr('opacity', '0.2');
      listAllStates(union, confederate, border);
    }

  });
});

  
function listAlliance(allianceData) {
  /**
   * Pattern:
   *  1. select
   *  2. data join
   *  3. exit and remove excess information on screen
   *  4. update information on screen
   *  5. enter
   *  6. append new items
   */
  const allianceText = svg.selectAll('text')  // 1. select
  .data(allianceData);  // 2. data join

  allianceText.exit().remove();   // 3. exit and remove excess information on screen

  allianceText.text(d => d); // 4. update information on screen

  allianceText.enter()  // 5. enter and return list of information that needs to be on screen
    .append('text')     // 6. append
    .text((d) => d)
    .attr('x', '50')
    .attr('y', (d, i) => i * 20 + 50);
}

function listAllStates(union, confederate, border) {
  svg.selectAll('text').remove();

  svg.append('text')
  .text('Union')
  .attr('x', '50')
  .style('font-weight', 'bold')
  .attr('y', '0')
  .transition()
  .attr('y', '50')
  .duration(500);

  union.forEach((element, i) => {
    svg.append('text')
      .text(element)
      .attr('x', '50')
      .attr('y', '0')
      .transition()      
      .attr('y', i * 20 + 80)
      .duration(500);
  });

  svg.append('text')
    .text('Confederate')
    .attr('x', '200')
    .attr('y', '50')
    .style('font-weight', 'bold');

  confederate.forEach((element, i) => {
    svg.append('text')
    .text(element)
    .attr('x', '200')
    .attr('y', '0')
    .transition()
    .attr('y', i * 20 + 80)
    .duration(500);
  });

  svg.append('text')
  .text('Border')
  .attr('x', '350')
  .attr('y', '50')
  .style('font-weight', 'bold');

  border.forEach((element, i) => {
    svg.append('text')
    .text(element)
    .attr('x', '350')
    .attr('y', '0')
    .transition()
    .attr('y', i * 20 + 80)
    .duration(500);
});
  

}
