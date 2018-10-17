const svg = d3.select('body').append('svg')
  .attr('width', '600')
  .attr('height', '600');


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

  listAlliance(union);
  listAlliance(confederate);
  listAlliance(border);
});

  
function listAlliance(allianceData) {
  /**
   * Pattern:
   *  1. data join
   *  2. exit and remove excess information on screen
   *  3. update information on screen
   *  4. enter
   *  5. append new items
   */
  const allianceText = svg.selectAll('text')
  .data(allianceData);  // 1. data join

  allianceText.exit().remove();   // 2. exit and remove excess information on screen

  allianceText.text(d => d); // 3. update information on screen

  allianceText.enter()  // 4. enter and return list of information that needs to be on screen
    .append('text')     // 5. append
    .text((d) => d)
    .attr('x', '50')
    .attr('y', (d, i) => i * 20 + 50);
}


