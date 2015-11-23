var r = new Rune({
	container: "body",
	width:500,
	height:700,

});

//Random lines 
r.rect(0,0, r.width, r.height)
.fill(182,33,37, 0.2)
.stroke(false)

for (i = 0; i < 1500; i++) {
	var y = Rune.random(0,r.height)
	r.line(i, 0, i, y)
	.stroke(164,30,34, 0.4)
	.strokeWidth(2)
}

for (i = 0; i < 1500; i++) {
	var y = Rune.random(0,400)
	r.line(i, 0, i, y)
	.stroke(62,47,104, 0.4)
	.strokeWidth(2)
}

for (i = 0; i < 1500; i++) {
	var y = Rune.random(0,550)
	r.line(i, 0, i, y)
	.stroke(173,73,98, 0.4)
	.strokeWidth(2)
}






r.play();






