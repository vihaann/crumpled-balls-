class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.2 ,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

		    push()
			translate(paperpos.x, paperpos.y);
			ellipseMode(RADIUS)
			ellipse(this.x,this.y,this.r ,this.r ) ;
	        pop()
			
	}
}