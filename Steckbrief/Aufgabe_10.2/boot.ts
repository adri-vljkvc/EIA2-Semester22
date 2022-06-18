namespace L10_2 {

    export class Boot extends Moveable {
        declare posX: number;
        declare posY: number;
        velocityX: number = 0.9;
        velocityY: number = 0.1;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
        }
        // From Codepen
        draw(): void {

            let scale: number = ((crc2.canvas.width * 2) / 1000);
            console.log(scale);
    
            crc2.save();
    
            crc2.translate(this.posX, this.posY);
            crc2.scale(scale, scale);
    
            crc2.beginPath();
            crc2.moveTo(10, 50);
            crc2.lineTo(60, 50);
            crc2.lineTo(70, 40);
            crc2.lineTo(0, 40);
            crc2.closePath();
            crc2.moveTo(35, 40);
            crc2.lineTo(35, 0);
    
            crc2.lineWidth = 1.5;
            crc2.strokeStyle = "#a52a2a";
            crc2.fillStyle = "#a52a2a";
            crc2.fill();
            crc2.stroke(); 
                
            crc2.beginPath();
            crc2.moveTo(0, 50);
            crc2.lineTo(70, 50);
            crc2.strokeStyle = "#ffffff";
            crc2.lineWidth = 3;
            crc2.stroke();
    
            crc2.beginPath();
            crc2.moveTo(35, 0);
            crc2.lineTo(55, 30);
            crc2.lineTo(15, 30);
            crc2.closePath();
            crc2.strokeStyle = "#ffffff";
            crc2.fillStyle = "#ffffff";
            crc2.lineWidth = 3;
            crc2.fill();
            crc2.stroke();
            
            crc2.restore();

        }

        update(): void {

            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

            if (this.posY > crc2.canvas.height * 0.10 || this.posY < 100) {
                this.velocityY = -this.velocityY;
            }

            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
}