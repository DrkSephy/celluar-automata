/**
 * Module containing all methods for drawing to canvas.
*/

function drawGrid() {
	var canvas = document.getElementById('grid');
	var context = canvas.getContext('2d');
	renderGrid(canvas, context, 15, 'black');
	drawRectangle(context);
}

function renderGrid(canvas, context, gridPixelSize, color) {
	context.save();
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

	context.restore();
}

function drawRectangle(context) {
	context.fillStyle = 'green';
	context.fillRect(0, 0, 15, 15);
}

module.exports = {
	drawGrid: drawGrid,
	renderGrid: renderGrid,
	drawRectangle: drawRectangle
}
