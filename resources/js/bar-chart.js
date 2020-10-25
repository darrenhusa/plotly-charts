// import 'plotly.js';
import 'plotly.js/dist/plotly';

var data = [
{
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: [20, 14, 23],
  type: 'bar'
}
];

Plotly.newPlot('bar-chart1', data);
