namespace L11 {

    export class Cloud extends Moveable {
        declare posX: number;
        declare posY: number;
        velocityX: number = 0.9;
        velocityY: number = 0.1;
        color: string;

        constructor(_position: Vector, _velocity: Vector, _mor:number) {
            super(_position, _velocity, _mor);
        }
      
        draw(): void {

            let scale: number = ((crc2.canvas.width*0.3)/1000);

        crc2.save();        
        crc2.translate(this.posX, this.posY);
        crc2.scale(scale, scale);
            crc2.beginPath();
            crc2.moveTo(170, 80);
            crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            crc2.closePath();
            crc2.lineWidth = 5;
            crc2.fillStyle = '#ffffff';
            crc2.fill();
            crc2.strokeStyle = '#ffffff';
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

        click?(xmouse: number, ymouse: number): void {
            console.log("click");

            let hitboxX: number = 90;
            let hitboxY: number = 600;
            
            const distanceX: number = Math.sqrt(((xmouse - this.posX) * (xmouse - this.posX)));
            const distanceY: number = Math.sqrt((ymouse - this.posY) * (ymouse - this.posY));
        

            if (Math.abs(this.mor) > 1) {
                hitboxX = 600;
                hitboxY = 90;
            }
            
            if (distanceX < hitboxX * 1.5 * this.posX && distanceY < hitboxY * 1.5 * this.posY) {
                this.changecolor("yellow");
            }
            else {
                this.changecolor("rot");
            }  
            console.log(distanceX);
                     

        }

        changecolor(newColor: string): void {
            this.color = newColor;
            this.draw();
        }
    }
}