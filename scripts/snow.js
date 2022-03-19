
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.setAttribute("style", `
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999999;
	pointer-events: none;
`);

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const textures = [
	[
		[0, 1, 0],
		[1, 0, 1],
		[0, 1, 0]
	],
	[
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1]
	],
	[
		[0, 1, 0],
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	]
]

document.body.appendChild(canvas);

class Snowflake {
	constructor() {
		this.x = Math.floor(Math.random() * canvas.clientWidth);
		this.y = Math.floor(Math.random() * canvas.scrollHeight);
		this.frameLifetime = Math.floor(Math.random() * 10) + 5;
		this.i = Math.floor(Math.random() * 1000);
		this.pxSize = 5;
		this.fallingSpeed = (Math.random() * 5) + 2;
	}
	
	update() {
		this.i++
		this.y += this.fallingSpeed;
		if(this.y > canvas.scrollHeight) {
			this.y = -(this.pxSize * 3);
		}
	}
	
	draw() {
		let textureIndex = Math.floor(this.i / this.frameLifetime) % textures.length;
		let texture = textures[textureIndex];
		
		ctx.save();
		ctx.fillStyle = "white";
		ctx.translate(this.x, this.y);
		
		for(let y = 0; y < texture.length; y++) {
			for(let x = 0; x < texture[y].length; x++) {
				if(texture[x][y]) {
					ctx.fillRect(x * this.pxSize, y * this.pxSize, this.pxSize, this.pxSize)
				}
			}
		}
		
		ctx.restore();
	}
	
}

const snowflakes = [];
for(let i = 0; i < 20; i++) {
	snowflakes.push(new Snowflake())
}

function draw() {
	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;
	
	for(let snowflake of snowflakes) {
		snowflake.update();
		snowflake.draw();
	}
	
}
setInterval(draw, 100)
draw();