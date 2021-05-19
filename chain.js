class SlingShot{
    constructor(bodyA,pointB){

        var option={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10

        }

        this.chain=Matter.Constraint.create(option)
        World.add(world , this.chain)

        
        

    }

    display(){
        line(this.chain.bodyA.position.x,this.pointB.position.)

    }
}