var draw = require('./draw.js');
var grid = require('./grid.js');

var CONFIG = {
	height: 600,
	width:  600, 
	lineColor: 'black',
	fillColor: 'green',
	lineWidth: 0.5,
	cellSize:  15
}

var canvas = document.getElementById('grid');
var context = canvas.getContext('2d');
draw.renderGrid(canvas, context, CONFIG.cellSize, CONFIG.lineColor);
draw.fillSquares(context, [{'x': 0, 'y': 0}, {'x': 7, 'y': 8}, {'x': 13, 'y': 5}]);