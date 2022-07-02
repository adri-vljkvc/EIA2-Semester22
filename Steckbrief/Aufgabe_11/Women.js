var L11;
(function (L11) {
    class Women extends L11.Moveable {
        velocityX = 0.9;
        velocityY = 0.1;
        constructor(_position, _velocity, _mor) {
            super(_position, _velocity, _mor);
        }
        draw() {
            let scale = ((L11.crc2.canvas.width * 2) / 1000);
            console.log(scale);
            L11.crc2.save();
            L11.crc2.translate(this.posX, this.posY);
            L11.crc2.scale(scale, scale);
            L11.crc2.beginPath();
            L11.crc2.moveTo(10, 70);
            L11.crc2.lineTo(60, 70);
            L11.crc2.lineTo(50, 60);
            L11.crc2.lineTo(20, 60);
            L11.crc2.closePath();
            L11.crc2.strokeStyle = '#ff0000';
            L11.crc2.fillStyle = "#ff0000";
            L11.crc2.fill();
            L11.crc2.stroke();
            L11.crc2.beginPath();
            L11.crc2.moveTo(20, 60);
            L11.crc2.bezierCurveTo(20, 60, 35, 75, 50, 60);
            L11.crc2.lineTo(50, 55);
            L11.crc2.lineTo(45, 50);
            L11.crc2.lineTo(45, 40);
            L11.crc2.lineTo(50, 50);
            L11.crc2.lineTo(52.5, 45);
            L11.crc2.lineTo(50, 30);
            L11.crc2.bezierCurveTo(50, 30, 35, 20, 20, 30);
            L11.crc2.lineTo(17.5, 45);
            L11.crc2.lineTo(20, 50);
            L11.crc2.lineTo(25, 40);
            L11.crc2.lineTo(25, 50);
            L11.crc2.lineTo(20, 55);
            L11.crc2.closePath();
            L11.crc2.fillStyle = '#ff8661';
            L11.crc2.fill();
            L11.crc2.strokeStyle = '#ff8661';
            L11.crc2.stroke();
            L11.crc2.stroke();
            L11.crc2.beginPath();
            L11.crc2.moveTo(20, 60);
            L11.crc2.bezierCurveTo(20, 60, 35, 75, 50, 60);
            L11.crc2.lineTo(50, 55);
            L11.crc2.lineTo(20, 55);
            L11.crc2.closePath();
            L11.crc2.fillStyle = '#800080';
            L11.crc2.fill();
            L11.crc2.strokeStyle = '#800080';
            L11.crc2.stroke();
            L11.crc2.stroke();
            L11.crc2.beginPath();
            L11.crc2.moveTo(25, 45);
            L11.crc2.lineTo(45, 45);
            L11.crc2.fillStyle = '#800080';
            L11.crc2.fill();
            L11.crc2.strokeStyle = '#800080';
            L11.crc2.stroke();
            L11.crc2.beginPath();
            L11.crc2.arc(35, 20, 12, 0, Math.PI * 2);
            L11.crc2.fillStyle = "#800080";
            L11.crc2.strokeStyle = '#800080';
            L11.crc2.fill();
            L11.crc2.stroke();
            L11.crc2.beginPath();
            L11.crc2.arc(35, 20, 4, 0, Math.PI * 2);
            L11.crc2.fillStyle = "#551054";
            L11.crc2.strokeStyle = '#551054';
            L11.crc2.fill();
            L11.crc2.stroke();
            L11.crc2.restore();
        }
        update() {
            // if (this.posX > crc2.canvas.width || this.posX < 0) {
            //     this.velocityX = -this.velocityX;
            // }
            // if (this.posY > crc2.canvas.height * 0.10 || this.posY < 100) {
            //     this.velocityY = -this.velocityY;
            // }
            // this.posX += this.velocityX;
            // this.posY += this.velocityY;
        }
        click() {
        }
    }
    L11.Women = Women;
})(L11 || (L11 = {}));
//# sourceMappingURL=Women.js.map