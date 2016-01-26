class Draw {

	constructor( ) {

	}

	renderGrid(canvas, context, gridPixelSize, color) {
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

	drawRectangle(context) {
		context.fillStyle = 'green';
		context.fillRect(0, 0, 15, 15);
	}

	fillSquares(context, squares) {
		context.fillStyle = 'green';
		for(var i = 0; i < squares.length; i++) {
			context.fillRect(squares[i].x * 15, squares[i].y * 15, 15, 15);
		}
	}
}

export default Draw