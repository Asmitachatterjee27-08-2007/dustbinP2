class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.radius=20;
        this.body=Bodies.circle(x,y,this.radius,options);
        this.image=loadImage("pictures/paper.png");
         World.add(world,this.body);
    

    }

    display(){
        var pos=this.body.position;
        push()
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,this.radius+30,this.radius+30);
            pop();
    }
}