//text logging init @ output.txt
const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./output.txt'));

//init colorthief
const { resolve } = require('path');
const ColorThief = require('colorthief');

//load image
const img = resolve(process.cwd(), 'Solid_black.png');

//getting color
ColorThief.getColor(img)
	.then((color) => {
		myConsole.log(color);
	})

  