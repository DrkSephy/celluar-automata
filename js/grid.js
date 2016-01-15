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

module.exports = {
	configureGrid: configureGrid,
	isCellEmpty: isCellEmpty,
	printGrid: printGrid
}