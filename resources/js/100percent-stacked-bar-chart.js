// import 'plotly.js';
import 'plotly.js/dist/plotly';
// import './chart-utilities.js';
import {calculate_array_percentages, calculate_array_total} from './chart-utilities.js';

var names = ['Dave', 'Tom', 'Steve'];
var math = [9, 8, 7]
var social_science = [7, 8, 7]
var english = [9, 8, 6]

var total = [];
total = calculate_array_total(math, social_science, english)

var math_percent = [];
var ss_percent = [];
var english_percent = [];

math_percent = calculate_array_percentages(math, total)
ss_percent = calculate_array_percentages(social_science, total)
english_percent = calculate_array_percentages(english, total)

var trace1 = {
  x: names,
  y: math_percent,
  name: 'Math %',
  type: 'bar'
};

var trace2 = {
  x: names,
  y: ss_percent,
  name: 'Social Science %',
  type: 'bar'
};

var trace3 = {
  x: names,
  y: english_percent,
  name: 'English %',
  type: 'bar'
};

var data = [trace1, trace2, trace3];

var layout = {barmode: 'stack'};

Plotly.newPlot('100percent-stacked-bar-chart1', data, layout);
