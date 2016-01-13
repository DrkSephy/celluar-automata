var draw = require('./draw.js');
var grid = require('./grid.js');

draw.drawGrid();
var internalGrid = grid.configureGrid(15, 15);
grid.printGrid(internalGrid, 15);