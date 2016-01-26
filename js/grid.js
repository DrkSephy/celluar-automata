/**
 * Module containing methods for setting up
 * and interacting with the underlying grid.
*/

class Grid {

	constructor(numRows, numCols) {
		this.rows = numRows;
		this.cols = numCols;
		this.grid = this.configureGrid(this.rows, this.cols);
	}

	/**
	 * @param {number} numRows The number of rows.
	 * @param {number} numCols The number of cols.
	 * @returns {object} grid A 2D array.	
	*/
	configureGrid(numRows, numCols) {
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
	isCellEmpty(row, col) {
		return this.grid[row][col] == -1 ? true : false;
	}

	/**
	 * @param {object} grid The grid to print.
	 * @param {number} numRows The number of rows.
	 * @returns {undefined}
	*/
	printGrid() {
		for(var i = 0; i < this.rows; i++) {
			console.log(this.grid[i]);
		}
	}

	/**
	 * @param {object} grid The grid object.
	 * @param {number} row The row of the cell to check.
	 * @param {number} col The col of the cell to check.
	*/
	checkNeighbors(row, col) {
		var cell = grid[row][col];
		var numNeighborsAlive = 0;
		
		// Top left neighbor
		if(grid[row - 1][col - 1] !== -1 && grid[row - 1][col - 1] !== undefined) { 
			numNeighborsAlive += 1;
		} 

		// Top neighbor
		if(grid[row - 1][col] !== -1 && grid[row - 1][col] !== undefined) {
			numNeighborsAlive += 1;
		}

		// Top right neighbor
		if(grid[row - 1][col + 1] !== -1 && grid[row - 1][col + 1] !== undefined) {
			numNeighborsAlive += 1;
		}

		// Left neighbor
		if(grid[row][col - 1] !== -1 && grid[row][col - 1] !== undefined) {
			numNeighborsAlive += 1;
		}

		// Right neighbor
		if(grid[row][col + 1] !== -1 && grid[row][col + 1] !== undefined) {
			numNeighborsAlive += 1;
		}

		// Bottom left neighbor
		if(grid[row + 1][col - 1] !== -1 && grid[row + 1][col - 1] !== undefined) {
			numNeighborsAlive += 1;
		}

		// Bottom neighbor
		if(grid[row + 1][col] !== -1 && grid[row + 1][col] !== undefined) {
			numNeighborsAlive += 1;
		}

		// Bottom right neighbor
		if(grid[row + 1][col + 1] !== -1 && grid[row + 1][col + 1] !== undefined) {
			numNeighborsAlive += 1;
		}

		return numNeighborsAlive;
	}
}

export default Grid
