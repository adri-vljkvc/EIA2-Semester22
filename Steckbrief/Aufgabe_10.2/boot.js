var L10_2;
(function (L10_2) {
    class Boot extends L10_2.Moveable {
        velocityX = 0.9;
        velocityY = 0.1;
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        // From Codepen
        draw() {
            let scale = ((L10_2.crc2.canvas.width * 2) / 1000);
            console.log(scale);
            L10_2.crc2.save();
            L10_2.crc2.translate(this.posX, this.posY);
            L10_2.crc2.scale(scale, scale);
            L10_2.crc2.beginPath();
            L10_2.crc2.moveTo(10, 50);
            L10_2.crc2.lineTo(60, 50);
            L10_2.crc2.lineTo(70, 40);
            L10_2.crc2.lineTo(0, 40);
            L10_2.crc2.closePath();
            L10_2.crc2.moveTo(35, 40);
            L10_2.crc2.lineTo(35, 0);
            L10_2.crc2.lineWidth = 1.5;
            L10_2.crc2.strokeStyle = "#a52a2a";
            L10_2.crc2.fillStyle = "#a52a2a";
            L10_2.crc2.fill();
            L10_2.crc2.stroke();
            L10_2.crc2.beginPath();
            L10_2.crc2.moveTo(0, 50);
            L10_2.crc2.lineTo(70, 50);
            L10_2.crc2.strokeStyle = "#ffffff";
            L10_2.crc2.lineWidth = 3;
            L10_2.crc2.stroke();
            L10_2.crc2.beginPath();
            L10_2.crc2.moveTo(35, 0);
            L10_2.crc2.lineTo(55, 30);
            L10_2.crc2.lineTo(15, 30);
            L10_2.crc2.closePath();
            L10_2.crc2.strokeStyle = "#ffffff";
            L10_2.crc2.fillStyle = "#ffffff";
            L10_2.crc2.lineWidth = 3;
            L10_2.crc2.fill();
            L10_2.crc2.stroke();
            L10_2.crc2.restore();
        }
        update() {
            if (this.posX > L10_2.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L10_2.crc2.canvas.height * 0.10 || this.posY < 100) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
        }
    }
    L10_2.Boot = Boot;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=boot.js.map