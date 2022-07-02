var L11;
(function (L11) {
    class Schwimmer extends L11.Moveable {
        velocityX = 0.9;
        velocityY = 0.1;
        constructor(_position, _velocity, _mor) {
            super(_position, _velocity, _mor);
        }
        // From Codepen
        draw() {
            let scale = ((L11.crc2.canvas.width) / 1000);
            console.log(scale);
            L11.crc2.save();
            L11.crc2.translate(this.posX, this.posY);
            L11.crc2.scale(scale, scale);
            L11.crc2.beginPath();
            L11.crc2.arc(109, 45, 9, 0, Math.PI * 2, true);
            L11.crc2.fillStyle = '#ff0000';
            L11.crc2.strokeStyle = '#ff0000';
            L11.crc2.fill();
            L11.crc2.stroke();
            L11.crc2.beginPath();
            L11.crc2.moveTo(60, 60);
            L11.crc2.bezierCurveTo(60, 60, 100, 30, 140, 50);
            L11.crc2.bezierCurveTo(140, 50, 125, 45, 110, 55);
            L11.crc2.lineTo(110, 60);
            L11.crc2.closePath();
            L11.crc2.fillStyle = '#ff8661';
            L11.crc2.fill();
            L11.crc2.strokeStyle = '#ff8661';
            L11.crc2.stroke();
            L11.crc2.beginPath();
            L11.crc2.moveTo(40, 60);
            L11.crc2.lineTo(140, 60);
            L11.crc2.strokeStyle = '#ffffff';
            L11.crc2.lineWidth = 3;
            L11.crc2.stroke();
            L11.crc2.restore();
            L11.crc2.save();
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
    L11.Schwimmer = Schwimmer;
})(L11 || (L11 = {}));
//# sourceMappingURL=schwimmer.js.map