namespace L10_2 {

    export class Schwimmer extends Moveable {
        declare posX: number;
        declare posY: number;
        velocityX: number = 0.9;
        velocityY: number = 0.1;

        constructor(_position: Vector, _velocity: Vector) {
            super(_position, _velocity);
        }
        // From Codepen
        draw (): void {
        
            let scale: number = ((crc2.canvas.width) / 1000);
            console.log(scale);
    
            crc2.save();
    
            crc2.translate(this.posX, this.posY);
            crc2.scale(scale, scale);
    
            crc2.beginPath();
            crc2.arc(109, 45, 9, 0, Math.PI * 2, true);
            crc2.fillStyle = "#ff0000";
            crc2.strokeStyle = "#ff0000";
            crc2.fill();
            crc2.stroke();
    
            crc2.beginPath();            
            crc2.moveTo(60, 60);
            crc2.bezierCurveTo(60, 60, 100, 30, 140, 50);
            crc2.bezierCurveTo(140, 50, 125, 45, 110, 55);
            crc2.lineTo(110, 60);
            crc2.closePath();
                
            crc2.fillStyle = "#ff8661";
            crc2.fill();
            crc2.strokeStyle = "#ff8661";
            crc2.stroke();
    
            crc2.beginPath();
            crc2.moveTo(40, 60);
            crc2.lineTo(140, 60);
            crc2.strokeStyle = "#ffffff";
            crc2.lineWidth = 3;
            crc2.stroke();
    
            crc2.restore();
            crc2.save();

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