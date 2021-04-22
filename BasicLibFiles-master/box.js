class Box{
    constructor(x,y,width,height){
        var options={
            'dencity':0.04,
            'restitution':0.8,
            'friction':1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle); 
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,50,50);
        pop();
    }
}