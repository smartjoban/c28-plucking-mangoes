class Mango{
    constructor(x, y, radius){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.radius = radius;
        this.body=  Bodies.circle(x, y, this.radius, options)
        this.image = loadImage("mango.png")
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position

        push()
        ellipse(0, 0, this.radius, this.radius);
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 70, 70)
        pop() 
    }
}