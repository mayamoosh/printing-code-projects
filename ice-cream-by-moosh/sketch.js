var r = new Rune( {
	container: "body" ,
	width: 600,
	height: 600
});

r.rect(0, 0, r.width+30, r.height/2 +30).fill(0,0,0);


r.ellipse(r.width/2 - 30, r.height/2 - 40, 100, 100)
.fill(255,255,255)
.stroke(0,0,0)
.strokeWidth(6);

r.ellipse(r.width/2 + 20, r.height/2, 100, 100)
.fill(255,255,255)
.stroke(0,0,0)
.strokeWidth(6);

r.ellipse(r.width/2 - 50, r.height/2, 100, 100)
.fill(255,255,255)
.stroke(0,0,0)
.strokeWidth(6);

r.triangle(r.width/2 - 92, r.height/2 +30, r.width/2 +62, r.height/2 +30, r.width/2 +30, 550)
.fill(0,0,0);

r.rect(r.width/2 + 40, r.height/2 + 50, 10, 20)
.fill(255,255,255);

r.rect(r.width/2 + 25, r.height/2 + 50, 10, 30)
.fill(255,255,255);



r.draw();