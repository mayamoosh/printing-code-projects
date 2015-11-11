var r = new Rune({
	container:"body",
	width: 1000,
	height: 400,

});

var colorlist = [
  new Rune.Color(180,49,244, 0.4),
  new Rune.Color(204,55,194, 0.4),
  new Rune.Color(255,36,164, 0.4),
  new Rune.Color(172,233,0, 0.4),
  new Rune.Color(70,228,188, 0.4),
]

/*var colorlist = [
  new Rune.Color(249,61,108, 0.3),
  new Rune.Color(227,34,108, 0.3),
  new Rune.Color(144,78,109, 0.3),
  new Rune.Color(105,76,88, 0.3),
  new Rune.Color(205,15,131, 0.3),
]*/


function randomColor() {
  var index = Math.round(Rune.random(colorlist.length-1));
  return colorlist[index];
}

//r.line
var always = [

//A
[50, 0, 0, 6, 40, 0],
//L - dont show triangle 
[false, false, false, 20, 65, 0],
[false, false, false, -60, 0, 90],
//W  
[-50, 65, 180, -80, -10, 0],
[-80, 65, 180, -90, -10, 0],
//A 
[-50, 0, 0, -95, 40, 0],
//Y
[-50,65, 180, -40, 20, 90],
//S
[-50, 15, 270, -50, 65, 0],

//etc 
];

for(var i =0; i < always.length; i++) {
		// x starting point, increment by 80, y placement
		var letter = r.group(50 + (i*80), 50) //this is where the entire group of always is placed 

		if(always[i][0] != false) {
			// values = x1,y1, x2,y2,x3,y3 of the triangle, group name
			r.triangle(always[i][0]-10, always[i][1], always[i][0] + 25, always[i][1] + 65, always[i][0] + -50, always[i][1] + 65, letter)
				//.fill(255,0.9)
				.fill(randomColor())
				.rotate(always[i][2], always[i][0], always[i][1])
				.strokeWidth(4)
				//.stroke(255)
				.stroke(randomColor())
		}
		r.line(always[i][3], always[i][4], always[i][3] + 65, always[i][4], letter)
			.rotate(always[i][5], always[i][3], always[i][4])
			.strokeWidth(4)	
			//.stroke(255)
			.stroke(randomColor())	

}

var flawed = [

//F 
[75, 45, 90, 10, -10 , 0],
//L
[false, false, false, 20, 65, 0],
[false, false, false, -60, 0, 90],
//A
[-5, 0, 0, -50, 40, 0],
//W
[-20, 65, 180, -50, -10, 0],
[-50, 65, 180, -60, -10, 0],
//E 0 1   2   3    4    5  6  7 8
//[20, 55, 90, -35, 50 , 90, 0,0,0],
[5, 40, 90, -60, 65 , 0],
// D
[15, 40, 90, -140, -10, 0],
];


for(var i =0; i < flawed.length; i++) {
		// x starting point, increment by 120, y placement
		var letterTwo = r.group(50 + (i*80), 200) //this is where the entire group of flawed is placed 

		if (flawed[i][0] != false) {
			// values = x1,y1, x2,y2,x3,y3 of the triangle, group name
			r.triangle (flawed[i][0]-10, flawed[i][1], flawed[i][0] + 25, flawed[i][1] + 65, flawed[i][0] + -50, flawed[i][1] + 65, letterTwo)
				//.fill(255,0.9)
				.fill(randomColor())
				.rotate (flawed[i][2], flawed[i][0], flawed[i][1])
				.strokeWidth(4)
				//.stroke(255)
				.stroke(randomColor())

		}
		r.line (flawed[i][3], flawed[i][4], flawed[i][3] + 65, flawed[i][4], letterTwo)
			.rotate (flawed[i][5], flawed[i][3], flawed[i][4])
			.strokeWidth(4)	
			//.stroke(255)
			.stroke(randomColor())

//Here I tried to add another line to the letter "E" - see above in array added values
//6,7,8 of the "E" array 

/*r.line flawed[i][6], flawed[i][7], flawed[i][6] + 75, flawed[i][7], letterTwo)
	.rotate flawed[i][8], flawed[i][6], flawed[i][7])
	.strokeWidth(4)	
	.stroke(randomColor())*/

}


r.draw(); 
