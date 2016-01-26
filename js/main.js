import Draw from './draw.js'
import Grid from './grid.js'

const CONFIG = {
	height: 600,
	width:  600, 
	lineColor: 'black',
	fillColor: 'green',
	lineWidth: 0.5,
	cellSize:  15
}

const canvas = document.getElementById('grid');
const context = canvas.getContext('2d');
const draw = new Draw(canvas, context, CONFIG.cellSize, CONFIG.lineColor);
const grid = new Grid(40, 40);
grid.printGrid(40);
draw.renderGrid(canvas, CONFIG.cellSize, CONFIG.lineColor);
draw.fillSquares([{'x': 0, 'y': 0}, {'x': 7, 'y': 8}, {'x': 13, 'y': 5}]);