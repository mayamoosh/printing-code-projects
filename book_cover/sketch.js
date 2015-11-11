var r = new Rune({
	container:"body",
	width: 400,
	height: 600,
	//debug: true
});

//background
r.rect(0,0,r.width,r.height)
.fill(230, 181, 43)
.stroke(false)

//white piano keys
for(i = 0; i < 40 ; i++) {
	r.rect(r.width/2 +110, -10+ 45*i, 200, 30)
	.fill(255)
	.stroke(false)
	.rotate(10, r.width- r.width/3, 0)
}
//black piano keys
for(i = 0; i < 40 ; i++) {
	r.rect(r.width/2+200, 60*i, 200, 20)
	.fill(0)
	.rotate(10, r.width- r.width/3, 0)
}

r.text("the pianist", 25, r.height/3)
.fill(0)
.stroke(false)
.fontSize(35)
.fontFamily("Bebas Neue")
.fontWeight("bold");


//rule of thirds
var grid1 = r.grid( {
	x: 0,
	y: 0,
	width: r.width,
	height: r.height,
	columns:3,
	rows:3,
})

//rule of thirds
var grid2 = r.grid( {
	x: r.width - r.width/3,
	y: 0,
	width: r.width,
	height: r.height/3,
	columns: 2,
	rows:3,
})

//rule of thirds - golden ratio
var grid2 = r.grid( {
	x: 0,
	y: r.height - (r.height/3),
	width: r.width,
	height: r.height,
	columns:1,
	rows:3,
})

//frame
var grid2 = r.grid( {
	x: 25,
	y: 25,
	width: r.width -50,
	height: r.height -50,
	columns:1,
	rows:1,
})








r.draw(); 
