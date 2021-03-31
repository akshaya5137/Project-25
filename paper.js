class Paper {
	constructor(x,y,r) {
	  var options = {
         isStatic:false,
         restitution:1,
		 friction:0,
         density:1.2
	  }
        
		this.x=x;
		this.y=y;
		this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r, options);
        this.image=loadImage("paper.png");
		World.add(world, this.body);
	}

	display() {
			var paperpos=this.body.position;	
            var paperang=this.body.angle;	
			push();
			translate(paperpos.x, paperpos.y);
            rotate(paperang);
            imageMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            image(this.image, 0, 0, this.r);
			pop();
	}
};