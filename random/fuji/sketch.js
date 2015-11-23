var r = new Rune({
	container: "body",
	width:700,
	height:500,
	//debug:true,
});

//Top layers--------------------------------------
r.rect(0,0, r.width, r.height)
.fill("#c1b4a2", 0.6)
.stroke(false)

for (i = 0; i < r.width; i++) {
	var y1 = Rune.random(0,50)
	var y2 = Rune.random(80,120)
	r.line(i, y1, i, y2)
	.stroke("#079c4b", 0.8)
}
for (i = 0; i < r.width; i++) {
	var y = Rune.random(40,380)
	r.line(i, 0, i, y)
	.stroke("#0ab6a9", 0.3)
}
for (i = 0; i < r.width; i++) {
	var y = Rune.random(180,320)
	r.line(i, 0, i, y)
	.stroke("#04735f", 0.4)
}
for (i = 0; i < r.width; i++) {
	var y = Rune.random(70,230)
	r.line(i, 0, i, y)
	.stroke("#04453a", 0.7)
}
//---------------------------------------------
//blue horizontal
for (i = 0; i < 90; i++) {
	var y1 = Rune.random(440,490)
	var y2 = Rune.random(440,490)
	r.line(Rune.random(0,r.width), y1, Rune.random(0,r.width), y2)
	.stroke("#557d86", 0.3);
}
//bottom layer

for (i = 0; i < r.width; i++) {
	var y1 = Rune.random(430, 500)
	r.line(i, r.height, i, y1)
	.stroke("#173a3f", Rune.random(0.4,0.9))
}
//bottom layer
for (i = 0; i < r.width; i++) {
	var y1 = Rune.random(400, 500)
	var y2= Rune.random(400, 500)
	r.line(i, y1, i, y2)
	.stroke("#557d86", Rune.random(0.4,0.9))
}

//----------------------------------------------
//red horiontal 
for (i = 0; i < 80; i++) {
	var y1 = Rune.random(170,240)
	var y2 = Rune.random(170,240)
	r.line(Rune.random(0,r.width), y1, Rune.random(0,r.width), y2)
	.stroke("#a32925", 0.2)
}
// red middle
for (i = 0; i < r.width; i++) {
	var y1 = Rune.random(140, 240)
	var y2 = Rune.random(140, 240)
	r.line(i, y1, i, y2)
	.stroke("#ba4a4f")
	.strokeWidth(Rune.random(0,1))
}

for (i = 0; i < r.width; i++) {
if (i > 100 && i < 274) {
	var y1 = Rune.random(90, 280)
	var y2 = Rune.random(90, 280)
	r.line(i, y1, i, y2)
	.stroke("#a32925")
	.strokeWidth(Rune.random(0,1))
} else {
	var y1 = Rune.random(140, 280)
	var y2 = Rune.random(140, 280)
	r.line(i, y1, i, y2)
	.stroke("#a32925")
	.strokeWidth(Rune.random(0,1))
}}

var grid = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  columns: 5,
  rows: 5
});

r.draw();