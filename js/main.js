const svg = d3.select('body').append('svg')
  .attr('width', '600')
  .attr('height', '600')
  .style('border', '2px solid');

let hawaiiPath = "m 212.21006,483.88965 3.00214,-5.50391 3.5025,-0.50034 0.50034,1.25086 -3.25231,4.75339 -3.75267,0 z m 15.76124,-5.7541 9.50677,4.00285 3.25231,-0.50036 2.50179,-6.00426 -1.00072,-5.25374 -6.50464,-0.75054 -6.25445,2.75195 -1.50106,5.7541 z m 47.53385,15.51106 5.75408,8.50605 3.75268,-0.50035 1.75126,-0.75053 2.25159,2.00142 5.7541,-0.25018 1.50108,-2.2516 -4.50323,-2.75195 -3.00212,-5.75411 -3.25232,-5.50391 -9.00641,4.5032 -1.00071,2.75196 z m 31.27226,13.75981 2.00143,-3.00215 7.25516,1.50106 1.00072,-0.75053 9.50675,1.00071 -0.50034,2.00143 -4.00286,2.2516 -6.75481,-0.50036 -8.50605,-2.50176 z m 8.25589,8.00569 3.00216,6.00428 4.75334,-1.75126 0.50038,-2.50178 -2.50177,-3.25232 -5.75411,-0.50034 0,2.00142 z m 10.75765,-1.75125 3.50252,-4.50322 7.25515,3.75268 6.75481,1.75127 6.75481,4.25301 0,3.00214 -5.50391,2.75197 -7.50536,1.50106 -3.75266,-2.2516 -7.50536,-10.25731 z m 25.76837,24.0171 2.50177,-2.00141 5.25376,2.50178 11.75836,5.50393 5.25375,3.25229 2.50176,3.75267 3.00215,6.75481 6.25445,4.00286 -0.50036,2.00144 -6.00427,5.00356 -6.50463,2.25161 -2.2516,-1.00071 -4.7534,2.75194 -3.75266,5.00357 -3.5025,4.5032 -2.75196,-0.25018 -5.50391,-4.00286 -0.50037,-7.00496 1.00071,-3.75269 -2.50177,-8.75623 -3.25233,-2.75197 -0.25017,-4.00286 3.5025,-1.50106 3.2523,-4.75337 0.75056,-1.50106 -2.5018,-2.75198 -0.50034,-3.25232 z";

svg.append('path')
  .attr('d', hawaiiPath)
  .attr('fill', 'gray');