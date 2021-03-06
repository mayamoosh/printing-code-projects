var r = new Rune({
	container: "body",
	width: 200,
	height: 200,
	debug: true

});
//colors for cocoon
var colorlist = [
  new Rune.Color("#B7E6FA", 0.7),
  new Rune.Color("#4F5D6A", 0.7),
  new Rune.Color("#8A9EC3", 0.7),
  new Rune.Color("#4B779C", 0.7),
]


var sideLength = 100;
var a = sideLength / 2;
var b = Math.sin(Rune.radians(60)) * sideLength;

var hexagon = r.path(0,5)
  .lineTo(0, b)
  .lineTo(a, 0)
  .lineTo(a+sideLength, 0)
  .lineTo(2*sideLength, b)
  .lineTo(a+sideLength, 2*b)
  .lineTo(a, 2*b)
  .lineTo(0, b)
  .stroke(false)
  .fill("#7AB7FA")
    .closePath()
  .moveTo(0,0)
  .lineTo(200,0)
  .lineTo(200,200)
  .lineTo(0,200)
  .closePath()



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function randomColor() {
  var index = Math.round(Rune.random(colorlist.length-1));
  return colorlist[index];
 }

var numLines = 20;
var radius = 100;
var angle = 360/numLines;
var group = r.group(r.width/2, r.height/2)

for (i = 0; i < numLines; i++) {

	var startAngle = Rune.random(360);
	var stopAngle = Rune.random(360);

	var startX = Math.cos(Rune.radians(startAngle)) * radius;
	var startY = Math.sin(Rune.radians(startAngle)) * radius;

	var stopX = Math.cos(Rune.radians(stopAngle)) * radius;
	var stopY = Math.sin(Rune.radians(stopAngle)) * radius;

	r.line(startX, startY, stopX, stopY, group)
		.stroke(randomColor())
		.strokeWidth(8);
} 

//center line down middle
r.line(50, -10, 110, r.height)
.stroke(255)
.strokeWidth(8)

////copy rotate not working? (criss crossed lines)
r.line(0,30,160,r.height)
.stroke(255)
.strokeWidth(8)

r.line(r.width,20,0,r.height)
.stroke(255)
.strokeWidth(8)

//second shape to 'mask' the lines extending beyond the hexagon
 var hex2 = hexagon
  .copy()
  .moveTo(0,0)
  .fill(255)
  .fillRule('evenodd')

r.text("ROARK&KEATING", r.width/2, r.height-5)
  .fill(0)
  .stroke(false)
  .fontSize(18)
  .textAlign("center")
  .fontFamily("Bebas Kai")

r.draw();



