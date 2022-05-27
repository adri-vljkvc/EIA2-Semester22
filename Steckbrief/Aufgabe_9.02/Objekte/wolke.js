var L09_2_StrandCanvas2;
(function (L09_2_StrandCanvas2) {
    class wolke {
        position;
        valocity;
        type;
        random;
        constructor(_random) {
            this.position = new L09_2_StrandCanvas2.Vector(0, 0);
            this.valocity = new L09_2_StrandCanvas2.Vector(0, 0);
            this.valocity.random(300, 200);
            this.random = _random;
        }
        draw() {
            let scale = ((L09_2_StrandCanvas2.context.canvas.width * 0.3) / 1000);
            L09_2_StrandCanvas2.context.save();
            L09_2_StrandCanvas2.context.translate(this.position.x, this.random);
            L09_2_StrandCanvas2.context.scale(scale, scale);
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.moveTo(170, 80);
            L09_2_StrandCanvas2.context.bezierCurveTo(130, 100, 130, 150, 230, 150);
            L09_2_StrandCanvas2.context.bezierCurveTo(250, 180, 320, 180, 340, 150);
            L09_2_StrandCanvas2.context.bezierCurveTo(420, 150, 420, 120, 390, 100);
            L09_2_StrandCanvas2.context.bezierCurveTo(430, 40, 370, 30, 340, 50);
            L09_2_StrandCanvas2.context.bezierCurveTo(320, 5, 250, 20, 250, 50);
            L09_2_StrandCanvas2.context.bezierCurveTo(200, 5, 150, 20, 170, 80);
            L09_2_StrandCanvas2.context.closePath();
            L09_2_StrandCanvas2.context.lineWidth = 5;
            L09_2_StrandCanvas2.context.fillStyle = '#ffffff';
            L09_2_StrandCanvas2.context.fill();
            L09_2_StrandCanvas2.context.strokeStyle = '#ffffff';
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.restore();
        }
        animate(_timeslice) {
            let offset = new L09_2_StrandCanvas2.Vector(this.valocity.x, 0);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < -30) {
                this.position.x += L09_2_StrandCanvas2.context.canvas.width;
            }
            if (this.position.x > L09_2_StrandCanvas2.context.canvas.width) {
                this.position.x -= L09_2_StrandCanvas2.context.canvas.width;
            }
        }
    }
    L09_2_StrandCanvas2.wolke = wolke;
})(L09_2_StrandCanvas2 || (L09_2_StrandCanvas2 = {}));
//# sourceMappingURL=wolke.js.map