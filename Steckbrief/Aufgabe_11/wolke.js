var L11;
(function (L11) {
    class Cloud extends L11.Moveable {
        velocityX = 0.9;
        velocityY = 0.1;
        color;
        constructor(_position, _velocity, _mor) {
            super(_position, _velocity, _mor);
        }
        draw() {
            let scale = ((L11.crc2.canvas.width * 0.3) / 1000);
            L11.crc2.save();
            L11.crc2.translate(this.posX, this.posY);
            L11.crc2.scale(scale, scale);
            L11.crc2.beginPath();
            L11.crc2.moveTo(170, 80);
            L11.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            L11.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            L11.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            L11.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            L11.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            L11.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            L11.crc2.closePath();
            L11.crc2.lineWidth = 5;
            L11.crc2.fillStyle = '#ffffff';
            L11.crc2.fill();
            L11.crc2.strokeStyle = '#ffffff';
            L11.crc2.stroke();
            L11.crc2.restore();
        }
        update() {
            if (this.posX > L11.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L11.crc2.canvas.height * 0.10 || this.posY < 100) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
        click(xmouse, ymouse) {
            console.log("click");
            let hitboxX = 90;
            let hitboxY = 600;
            const distanceX = Math.sqrt(((xmouse - this.posX) * (xmouse - this.posX)));
            const distanceY = Math.sqrt((ymouse - this.posY) * (ymouse - this.posY));
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
        changecolor(newColor) {
            this.color = newColor;
            this.draw();
        }
    }
    L11.Cloud = Cloud;
})(L11 || (L11 = {}));
//# sourceMappingURL=wolke.js.map