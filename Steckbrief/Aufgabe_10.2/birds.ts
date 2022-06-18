namespace L10_2 {

    export class Birds extends Moveable {
        randomNumber: number = (Math.floor(Math.random() * 2000) + 1000);
        counter: number = 0;

        constructor( _position: Vector, _velocity: Vector) {
            super(_position, _velocity);
        }

        draw(): void {
           
            let scale: number = ((crc2.canvas.width) / 500);
            console.log(scale);
    
            crc2.save();
            crc2.translate(this.posX, this.posY);           
            crc2.scale(scale, scale);
    
            crc2.beginPath();
            crc2.moveTo(0, 10);
            crc2.bezierCurveTo(0, 10, 10, -5, 20, 10 );
            crc2.bezierCurveTo(20 , 10, 30, -5, 40, 10 );
                
            crc2.strokeStyle = "#000000";
            crc2.stroke();
        
            crc2.restore();
        }

        update(): void {

            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

            if (this.posY > crc2.canvas.height || this.posY < 0) {
                this.velocityY = -this.velocityY;
            }

            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            }

            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter ++;
        }
    }
}