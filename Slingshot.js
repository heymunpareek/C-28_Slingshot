class Slingshot {
    constructor(bodya, pointB) {
        var op={
            bodyA: bodya,
            pointB: pointB,
            stiffness: 0.004,
            length: 10             
        }
        this.sling = Matter.Constraint.create(op);
        this.pointB = pointB;
        World.add(world,this.sling);
    }
    fly() {
        this.sling.bodyA = null;
    }
    display() {
        if (this.sling.bodyA) {
        var pb = this.pointB
        var pa = this.sling.bodyA.position        

        strokeWeight(3);
        line(pa.x,pa.y,pb.x,pb.y);

        }
        
    }
}