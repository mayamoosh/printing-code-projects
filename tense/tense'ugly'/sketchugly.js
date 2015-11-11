var r = new Rune({
	container:"body",
	width: 500,
	height: 500,

});



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var colorlist = [
  new Rune.Color(254, 97, 186, 0.3),
  new Rune.Color(255, 49, 166, 0.3),
  new Rune.Color(219, 0, 124, 0.3),
  new Rune.Color(255, 0, 144, 0.3),
  new Rune.Color(254, 97, 186, 0.3),
]

/*var colorlist = [
  new Rune.Color(255,0,146 ),
  new Rune.Color(0, 255, 0),
  new Rune.Color(255, 255, 0),
 // new Rune.Color(34,141,255, 0.3),
 // new Rune.Color(186,1,255, 0.3),
]*/


function randomColor() {
  var index = Math.round(Rune.random(colorlist.length-1));
  return colorlist[index];
}

r.rect(0,0,r.width, r.height)
.fill(randomColor())
//.fill(Rune.random(162,186), Rune.random(243,255), Rune.random(0,49))
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




/*for (var i = 0; i <130; i++) {
	var x1 = Math.floor(Math.random() * (r.width- 0))
	var y2 = 100 + Math.floor(Math.random() * (250))
	var y1 = 400 + (Math.floor(Math.random() * (150)))
	//bottom left
	r.line(Rune.random(260,270), Rune.random(330,350), 0, y1)
		.stroke(randomColor());
	//middle right
	r.line(Rune.random(250,260), Rune.random(330,350), r.width, y2)
		.stroke(randomColor());	
	//top middle
	r.line(Rune.random(240,260), Rune.random(330,350), Rune.random(0,250), 0)
		.stroke(randomColor());
	//bottom middle
	r.line(Rune.random(250,260), Rune.random(330,350), Rune.random(200,300), r.height)
		.stroke(randomColor());	
}


for (var i = 0; i <80; i++) {
	//upper left
	r.line(Rune.random(240,250), Rune.random(340,360), 0 , Rune.random(0, 100))
		.stroke(randomColor(), 0.5);
	//lower mid right
	r.line(Rune.random(240,250), Rune.random(340,360), r.width, Rune.random(300, 450))
		.stroke(randomColor(), 0.5);	
	//top middle right
	r.line(Rune.random(240,250), Rune.random(340,360), Rune.random(150, 250), 0)
		.stroke(randomColor(), 0.5);
	//bottom mide left
	r.line(Rune.random(240,250), Rune.random(340,360), Rune.random(50,200), r.height)
		.stroke(randomColor(), 0.5);	
}*/



r.draw(); 
