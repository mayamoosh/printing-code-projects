var r = new Rune({
	container:"body",
	width: 500,
	height: 500,

});



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var colorlist = [
  new Rune.Color(134,39,41, 0.3),
  new Rune.Color(253, 168, 170, 0.3),
  new Rune.Color(166,68,71, 0.3),
  new Rune.Color(203,51,55, 0.3),
  new Rune.Color(99,0,3, 0.3),
]


function randomColor() {
  var index = Math.round(Rune.random(colorlist.length-1));
  return colorlist[index];
}

r.rect(0,0,r.width, r.height)
.fill('hsv', Rune.random(358,359), 100, Rune.random(11.8, 22.7))
.stroke(false);


for (var i = 0; i <150; i++) {
	//upper left
	r.line(250, Rune.random(315,325), 0 , Rune.random(0, 200))
		.stroke(randomColor(), 0.5);
	//lower mid right
	r.line(250, Rune.random(315,325), r.width, Rune.random(350, 500))
		.stroke(randomColor(), 0.5);	
	//top middle right
	r.line(250, Rune.random(300,330), Rune.random(150, 300), 0)
		.stroke(randomColor(), 0.5);
	//bottom mide left
	r.line(250, Rune.random(330,340), Rune.random(50,200), r.height)
		.stroke(randomColor(), 0.5);	
}


for (var i = 0; i <150; i++) {
	var x1 = Math.floor(Math.random() * (r.width- 0))
	var y2 = 100 + Math.floor(Math.random() * (250))
	var y1 = 400 + (Math.floor(Math.random() * (150)))
	//bottom left
	r.line(250, Rune.random(330,350), 0, y1)
		.stroke(randomColor());
	//middle right
	r.line(250, Rune.random(330,350), r.width, y2)
		.stroke(randomColor());	
	//top middle
	r.line(250, Rune.random(325,340), Rune.random(0,250), 0)
		.stroke(randomColor());
	//bottom middle
	r.line(250, Rune.random(330,350), Rune.random(200,300), r.height)
		.stroke(randomColor());	
}








r.draw(); 
