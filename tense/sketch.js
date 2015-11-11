var r = new Rune({
	container:"body",
	width: 800,
	height: 500,

});

r.rect(0,0,r.width, r.height)
.fill(250)
.fill('hsv', 5, 23.5, 82)
.stroke(false);


/*r.polygon(-120,-100)
.lineTo(480, 140)
.lineTo(160,220)
.lineTo(460,570)
.lineTo(330,620)
.fill("hsv", 0, 80,80)
.stroke(false);*/


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

r.polygon(0,-10)
.lineTo(450, r.height+10)
.lineTo(650, r.height+10)
.lineTo(r.width+200, r.height/2-50)
.lineTo(r.width/2 + 150, 200)
.fill('hsv', Rune.random(240,300), 65, 75, 0.7)
.stroke(0)

r.rect(0, 500, r.width, 100)
.fill('hsv', 240, 15, 15)
.stroke(false)
.rotate(-15)

for (var i = 0; i <3; i++) {
	var size = Rune.random(10, 80)
	r.circle(Rune.random(360, 550), Rune.random(320, 500), size)
	.fill('hsv', Rune.random(240,300), 65, 75, 0.7)
	.stroke(false)
}


for (var i = 0; i <130; i++) {
	var x1 = 300+ Math.floor(Math.random() * (150))
	var x2 = 600 + Math.floor(Math.random() * (350))
	var y1 = 400 + (Math.floor(Math.random() * (150)))
	r.line(250, Rune.random(340,360), x2, 0)
		.stroke('hsv', Rune.random(359,360), 65, 75, 0.7);
	r.line(250, Rune.random(340,360), x1, r.height)
		.stroke('hsv', Rune.random(340,360), 60, 75, 0.5);
	r.line(0, Rune.random(360,390), 250, Rune.random(340,360))
		.stroke('hsv', Rune.random(340,360), 60, 75, 0.5);	
}

for (var i = 0; i <3; i++) {
	var x1 = 400 + Math.floor(Math.random() * (400))
	var x2 = 500+ Math.floor(Math.random() * (500))
	var y1 = 300+(Math.floor(Math.random() * (250)))
	var y2 = 300+Math.floor(Math.random() * (350))
	r.triangle(Rune.random(450,r.width+100), r.height+50, x1, y1, x2, y2)
		.fill('hsv', Rune.random(340,360), 65, 75)
		.stroke(false);		
}




r.draw(); 
