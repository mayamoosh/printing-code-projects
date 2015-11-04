
var r = new Rune({
	container: "body",
	width: 500,
	height: 700,

});


r.rect(0,0, r.width, r.height)
.fill(0)
.stroke(false)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//stars
for (var i = 0; i <40; i++) {
	var x = Math.floor(Math.random() * (r.width- 0))
	var y = Math.floor(Math.random() * (r.height - 0))
	var stars = Rune.random(2,6)
	var planets = Rune.random(10,15)
	r.ellipse(x,y,stars,stars)
	.fill(0)
	.stroke(255)
}

//planets
for (var i = 0; i <7; i++) {
	var x = Math.floor(Math.random() * (r.width- 0))
	var y = Math.floor(Math.random() * (r.height - 0))
	var stars = Rune.random(10,30)
	var planets = Rune.random(10,15)
	r.ellipse(x,y,stars,stars)
	.fill(255)
	.stroke(0)
}

//mars

r.ellipse(r.width,r.height, 400, 400)
.move(-100, -100, true)
.fill(255)

for(var i=0;i<10; i++) {
	var x = Rune.random(r.width-200, r.width) 
	var y = Rune.random(r.height-350,r.height - 300) 
	r.triangle(r.width-100,r.height-200, x,y, r.width,r.height-200)
	.fill(255)
	.stroke(255)
	.strokeWidth(10);
}

r.draw();
