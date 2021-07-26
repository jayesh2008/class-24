class Sand {

    constructor(x, y, radius) {

      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }

      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      
      World.add(world, this.body);

    }

    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      ellipse(0, 0, this.radius);
      pop();
      
    }

  }


