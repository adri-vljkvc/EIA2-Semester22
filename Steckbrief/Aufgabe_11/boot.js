var L11;
(function (L11) {
    class Boot extends L11.Moveable {
        velocityX = 0.9;
        velocityY = 0.1;
        constructor(_position, _velocity, _mor) {
            super(_position, _velocity, _mor);
        }
        // From Codepen
        draw() {
            let scale = ((L11.crc2.canvas.width * 2) / 1000);
            console.log(scale);
            L11.crc2.save();
            L11.crc2.translate(this.posX, this.posY);
            L11.crc2.scale(scale, scale);
            L11.crc2.beginPath();
            L11.crc2.moveTo(10, 50);
            L11.crc2.lineTo(60, 50);
            L11.crc2.lineTo(70, 40);
            L11.crc2.lineTo(0, 40);
            L11.crc2.closePath();
            L11.crc2.moveTo(35, 40);
            L11.crc2.lineTo(35, 0);
            L11.crc2.lineWidth = 1.5;
            L11.crc2.strokeStyle = '#a52a2a';
            L11.crc2.fillStyle = "#a52a2a";
            L11.crc2.fill();
            L11.crc2.stroke();
            L11.crc2.beginPath();
            L11.crc2.moveTo(0, 50);
            L11.crc2.lineTo(70, 50);
            L11.crc2.strokeStyle = '#ffffff';
            L11.crc2.lineWidth = 3;
            L11.crc2.stroke();
            L11.crc2.beginPath();
            L11.crc2.moveTo(35, 0);
            L11.crc2.lineTo(55, 30);
            L11.crc2.lineTo(15, 30);
            L11.crc2.closePath();
            L11.crc2.strokeStyle = '#ffffff';
            L11.crc2.fillStyle = "#ffffff";
            L11.crc2.lineWidth = 3;
            L11.crc2.fill();
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
    }
    L11.Boot = Boot;
})(L11 || (L11 = {}));
//# sourceMappingURL=boot.js.map