var r = new Rune( {
	container: "body" ,
	width: 500,
	height: 400
});

r.rect(0, 0, r.width+30, r.height/2 +30).fill(0,0,0);

r.ellipse(r.width/2, r.height/2, 125, 125).fill(255,255,255).stroke(255,255,255);

r.triangle(r.width/2 - 55, r.height/2 + 30.5, r.width/2 + 55, r.height/2 + 30.5, r.width/2 , r.height/2 +180).fill(0,0,0);

r.draw();


