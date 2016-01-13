var draw = require('./draw.js');
var grid = require('./grid.js');

draw.drawGrid();
var canvas = document.getElementById('grid');
var context = canvas.getContext('2d');
console.log(typeof (context));
draw.fillSquares(context, [{'x': 0, 'y': 0}, {'x': 7, 'y': 8}, {'x': 13, 'y': 5}]);