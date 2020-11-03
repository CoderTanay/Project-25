class Paper {
	constructor(x, y, r) {
		var options = {
          'restitution':0.8,
          'friction':0.3,
		  'density':0.5
		}
		this.body = Bodies.circle(x, y, r, options);
		this.radius = r;
		this.image = loadImage("paper.png");
		World.add(engine.world, this.body);
	}
	display() {
		imageMode(RADIUS);
		image(
			this.image,
			this.body.position.x,
			this.body.position.y,
			this.radius,
			this.radius
		);
	}
  }