var L11;
(function (L11) {
    class Birds extends L11.Moveable {
        randomNumber = (Math.floor(Math.random() * 2000) + 1000);
        counter = 0;
        constructor(_position, _velocity, _mor) {
            super(_position, _velocity, _mor);
        }
        draw() {
            let scale = ((L11.crc2.canvas.width) / 500);
            console.log(scale);
            L11.crc2.save();
            L11.crc2.translate(this.posX, this.posY);
            L11.crc2.scale(scale, scale);
            L11.crc2.beginPath();
            L11.crc2.moveTo(0, 10);
            L11.crc2.bezierCurveTo(0, 10, 10, -5, 20, 10);
            L11.crc2.bezierCurveTo(20, 10, 30, -5, 40, 10);
            L11.crc2.strokeStyle = '#000000';
            L11.crc2.stroke();
            L11.crc2.restore();
        }
        update() {
            if (this.posX > L11.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L11.crc2.canvas.height || this.posY < 0) {
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
            this.counter++;
        }
    }
    L11.Birds = Birds;
})(L11 || (L11 = {}));
//# sourceMappingURL=birds.js.map