/**
 * Module containing all methods for drawing to canvas.
*/

class Draw {

	constructor(canvas, context, gridPixelSize, color) {
		this.canvas = canvas;
		this.context = context;
		this.gridPixelSize = gridPixelSize;
		this.color = color;
	}

	renderGrid() {
		this.context.lineWidth = 0.5;
		this.context.strokeStyle = this.color;

		// Draw horizontal grid lines
		for(var i = 0; i <= this.canvas.height; i = i + this.gridPixelSize) {
			this.context.beginPath();
			this.context.moveTo(0, i);
			this.context.lineTo(this.canvas.width, i);
			this.context.closePath();
			this.context.stroke();
		}

		// Draw vertical grid lines
		for(var j = 0; j <= this.canvas.width; j = j + this.gridPixelSize) {
			this.context.beginPath();
			this.context.moveTo(j, 0);
			this.context.lineTo(j, this.canvas.height);
			this.context.closePath();
			this.context.stroke();
		}
	}

	drawRectangle() {
		this.context.fillStyle = 'green';
		this.context.fillRect(0, 0, 15, 15);
	}

  /**
   * @param {array} squares An array of objects containing x/y draw locations.
   * @returns {undefined}
  */
	fillSquares(squares) {
		this.context.fillStyle = 'green';
		for(var i = 0; i < squares.length; i++) {
			this.context.fillRect(squares[i].x * 15, squares[i].y * 15, 15, 15);
		}
	}
}

export default Draw