namespace L11 {
    
export abstract class Moveable {
    posX: number;
    posY: number;

    velocityX: number;
    velocityY: number;

    mor: number

    constructor(_position: Vector, _velocity: Vector, _mor:number) {
          this.posX = _position.x; 
          this.posY = _position.y; 

          this.velocityX = _velocity.x;
          this.velocityY = _velocity.y;

          this.mor = _mor;
    }

    abstract draw();
    abstract update();
    
    abstract click?(_x: number, _y: number);
}
}