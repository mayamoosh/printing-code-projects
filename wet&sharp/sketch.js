
var r = new Rune({
	container: "body",
	width: 800,
	height: 800,
	//debug: true

});

r.rect(0,0, r.width, r.height)
.fill(0)
.stroke(false);

/*var diamond = r.polygon(r.width/2 - 200, r.height/2 - 200)
.lineTo(r.width/2+200,r.height/2-200)
.lineTo(r.width/2+300, r.height/2-80)
.lineTo(r.width/2, r.height-150)
.lineTo(r.width/2-300, r.height/2-80)
.lineTo(r.width/2 - 200, r.height/2 - 200)

diamond.fill(255).stroke(255).strokeWidth(3);

diamond.move(-200,-300, true);*/

var diamond = r.polygon(200, 300)
.lineTo(600,100)
.lineTo(700,220)
.lineTo(400,550)
.lineTo(100,220)
.lineTo(200,100)

diamond.fill(255).stroke(255).strokeWidth(3);

diamond.move(-200,-300, true);


r.line(200,95, 300,220).stroke(0).strokeWidth(15)
r.line(300,220, 400,95).stroke(0).strokeWidth(15)
r.line(400,100, 500,220).stroke(0).strokeWidth(15)
r.line(500,220, 600,95).stroke(0).strokeWidth(15)
r.line(95,220, 705,220).stroke(0).strokeWidth(15)
r.line(300,220, 400,555).stroke(0).strokeWidth(15)
r.line(500,220, 400,555).stroke(0).strokeWidth(15)


r.triangle(311,229, 490,229,400, 542)
.fill(255)
.stroke(255)

var blood = r.path(400,560)
.curveTo(-50,40)
.curveTo(-50, 100, 0, 100)
.curveTo(50, 100, 0, 0)
.closePath();

blood.fill(255).stroke(0)


r.draw();
