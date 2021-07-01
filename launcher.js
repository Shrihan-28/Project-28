class Launcher {
    constructor(body1,point2){
        var options={
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10

        }

        this.pointB = point2;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);

    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.launcher.bodyA = null;

    }

    attach(obj){
        this.launcher.bodyA = obj;

        
    }


}