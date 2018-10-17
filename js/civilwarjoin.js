const svg = d3.select('body').append('svg')
  .attr('width', '600')
  .attr('height', '600');

svg.append('image')
  .attr('xlink:href', 'assets/civilwarmap.jpg')
  .attr('x', '0')
  .attr('y', '0')
  .attr('width', '600')
  .attr('height', '600')
  .attr('opacity', '0.2');
  


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
      listAlliance(union);
    } else if (selection == 'confederate') {
      listAlliance(confederate);
    } else if (selection == 'border') {
      listAlliance(border);
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


