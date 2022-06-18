var L10_2;
(function (L10_2) {
    class Cloud extends L10_2.Moveable {
        velocityX = 0.9;
        velocityY = 0.1;
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            let scale = ((L10_2.crc2.canvas.width * 0.3) / 1000);
            L10_2.crc2.save();
            L10_2.crc2.translate(this.posX, this.posY);
            L10_2.crc2.scale(scale, scale);
            L10_2.crc2.beginPath();
            L10_2.crc2.moveTo(170, 80);
            L10_2.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            L10_2.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            L10_2.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            L10_2.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            L10_2.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            L10_2.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            L10_2.crc2.closePath();
            L10_2.crc2.lineWidth = 5;
            L10_2.crc2.fillStyle = "#ffffff";
            L10_2.crc2.fill();
            L10_2.crc2.strokeStyle = "#ffffff";
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
    L10_2.Cloud = Cloud;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=wolke.js.map