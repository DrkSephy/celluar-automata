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
	console.log(grid);
}

module.exports = {
	configureGrid: configureGrid
}