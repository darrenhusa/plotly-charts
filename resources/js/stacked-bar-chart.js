// import 'plotly.js';
import 'plotly.js/dist/plotly';

var trace1 = {
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [20, 14, 23],
  name: 'SF Zoo',
  type: 'bar'
};

var trace2 = {
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [12, 18, 29],
  name: 'LA Zoo',
  type: 'bar'
};

var data = [trace1, trace2];

// var layout = {barmode: 'stack'};

var layout = {
  barmode: 'stack',
  title: 'US Export of Plastic Scrap',
  // xaxis: {tickfont: {
  //     size: 14,
  //     color: 'rgb(107, 107, 107)'
  //   }},
  yaxis: {
    title: 'USD (millions)',
    // titlefont: {
    //   size: 16,
    //   color: 'rgb(107, 107, 107)'
    // },
    // tickfont: {
    //   size: 14,
    //   color: 'rgb(107, 107, 107)'
    // }
  },
  // legend: {
  //   x: 0,
  //   y: 1.0,
  //   bgcolor: 'rgba(255, 255, 255, 0)',
  //   bordercolor: 'rgba(255, 255, 255, 0)'
  // },
  // barmode: 'group',
  // bargap: 0.15,
  // bargroupgap: 0.1
};


Plotly.newPlot('stacked-bar-chart1', data, layout);
