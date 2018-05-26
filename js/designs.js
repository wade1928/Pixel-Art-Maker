// Select color input

// Select size input

document.getElementById("sizePicker").addEventListener("submit", function(event) {
	event.preventDefault();
});

document.getElementById('sizePicker').addEventListener('submit', function() {
	const gridHeight = document.getElementById('inputHeight').value;
	const gridWidth = document.getElementById('inputWidth').value;
	makeGrid(gridWidth, gridHeight);
})

// When size is submitted by the user, call makeGrid()

function makeGrid(gridWidth, gridHeight) {
	$("#pixelCanvas").empty();
	for (let i = 0; i < gridHeight; i++) {
		const newRow = document.createElement('tr');
		const gridTable = document.getElementById("pixelCanvas")
		gridTable.appendChild(newRow);
		for (let j = 0; j < gridWidth; j++) {
			const newColumn = document.createElement('td')
			//var x = document.querySelector("#pixelCanvas").rows[j].addEventListener('click', changeBackground())
			newRow.appendChild(newColumn);

		}
	}


}


$('body').on('click', 'td', function() {
	var color = document.getElementById('colorPicker').value;
	$(this).css('background-color', color);
});

