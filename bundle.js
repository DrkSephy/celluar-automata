(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Module containing all methods for drawing to canvas.
*/

function renderGrid(canvas, context, gridPixelSize, color) {
	context.lineWidth = 0.5;
	context.strokeStyle = color;

	// Draw horizontal grid lines
	for(var i = 0; i <= canvas.height; i = i + gridPixelSize) {
		context.beginPath();
		context.moveTo(0, i);
		context.lineTo(canvas.width, i);
		context.closePath();
		context.stroke();
	}

	// Draw vertical grid lines
	for(var j = 0; j <= canvas.width; j = j + gridPixelSize) {
		context.beginPath();
		context.moveTo(j, 0);
		context.lineTo(j, canvas.height);
		context.closePath();
		context.stroke();
	}
}

function drawRectangle(context) {
	context.fillStyle = 'green';
	context.fillRect(0, 0, 15, 15);
}


/**
 * @param {object} context The element to draw to.
 * @param {array} squares An array of objects containing x/y draw locations.
 * @returns {undefined}
*/
function fillSquares(context, squares) {
	context.fillStyle = 'green';
	for(var i = 0; i < squares.length; i++) {
		context.fillRect(squares[i].x * 15, squares[i].y * 15, 15, 15);
	}
}

module.exports = {
	renderGrid: renderGrid,
	drawRectangle: drawRectangle,
	fillSquares: fillSquares
}

},{}],2:[function(require,module,exports){
/**
 * Module containing methods for setting up
 * and interacting with the underlying grid.
*/

/**
 * @param {number} numRows The number of rows.
 * @param {number} numCols The number of cols.
 * @returns {object} grid A 2D array.	
*/
function configureGrid(numRows, numCols) {
	var grid = [];
	for(var i = 0; i < numRows; i++) {
		grid.push([]);
		for(var j = 0; j < numCols; j++) {
			grid[i][j] = -1;
		}
	}

	return grid;
}

/**
 * @param {object} grid The state of the simulation.
 * @param {number} row The row to search.
 * @param {number} col The col to search.
*/
function isCellEmpty(grid, row, col) {
	return grid[row][col] == -1 ? true : false;
}

/**
 * @param {object} grid The grid to print.
 * @param {number} numRows The number of rows.
 * @returns {undefined}
*/
function printGrid(grid, numRows) {
	for(var i = 0; i < numRows; i++) {
		console.log(grid[i]);
	}
}

/**
 * @param {object} grid The grid object.
 * @param {number} row The row of the cell to check.
 * @param {number} col The col of the cell to check.
*/
function checkNeighbors(grid, row, col) {
	var cell = grid[row][col];
	var numNeighborsAlive = 0;
	
	// Top left neighbor
	if(grid[row - 1][col - 1] !== -1) { 
		numNeighborsAlive += 1;
	} 

	// Top neighbor
	if(grid[row - 1][col] !== -1) {
		numNeighborsAlive += 1;
	}

	// Top right neighbor
	if(grid[row - 1][col + 1] !== -1) {
		numNeighborsAlive += 1;
	}

	// Left neighbor
	if(grid[row][col - 1] !== -1) {
		numNeighborsAlive += 1;
	}

	// Right neighbor
	if(grid[row][col + 1] !== -1) {
		numNeighborsAlive += 1;
	}

	// Bottom left neighbor
	if(grid[row + 1][col - 1] !== -1) {
		numNeighborsAlive += 1;
	}

	// Bottom neighbor
	if(grid[row + 1][col] !== -1) {
		numNeighborsAlive += 1;
	}

	// Bottom right neighbor
	if(grid[row + 1][col + 1] !== -1) {
		numNeighborsAlive += 1;
	}

	return numNeighborsAlive;
}

module.exports = {
	configureGrid: configureGrid,
	isCellEmpty: isCellEmpty,
	printGrid: printGrid
}
},{}],3:[function(require,module,exports){
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
},{"./draw.js":1,"./grid.js":2}]},{},[3])


//# sourceMappingURL=bundle.js.map
