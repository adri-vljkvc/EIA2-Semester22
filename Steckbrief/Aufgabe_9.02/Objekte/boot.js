var L09_2_StrandCanvas2;
(function (L09_2_StrandCanvas2) {
    class boot {
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
            let scale = ((L09_2_StrandCanvas2.context.canvas.width * 2) / 1000);
            console.log(scale);
            L09_2_StrandCanvas2.context.save();
            L09_2_StrandCanvas2.context.translate(this.position.x, this.random);
            L09_2_StrandCanvas2.context.scale(scale, scale);
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.moveTo(10, 50);
            L09_2_StrandCanvas2.context.lineTo(60, 50);
            L09_2_StrandCanvas2.context.lineTo(70, 40);
            L09_2_StrandCanvas2.context.lineTo(0, 40);
            L09_2_StrandCanvas2.context.closePath();
            L09_2_StrandCanvas2.context.moveTo(35, 40);
            L09_2_StrandCanvas2.context.lineTo(35, 0);
            L09_2_StrandCanvas2.context.lineWidth = 1.5;
            L09_2_StrandCanvas2.context.strokeStyle = '#a52a2a';
            L09_2_StrandCanvas2.context.fillStyle = "#a52a2a";
            L09_2_StrandCanvas2.context.fill();
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.moveTo(0, 50);
            L09_2_StrandCanvas2.context.lineTo(70, 50);
            L09_2_StrandCanvas2.context.strokeStyle = '#ffffff';
            L09_2_StrandCanvas2.context.lineWidth = 3;
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.moveTo(35, 0);
            L09_2_StrandCanvas2.context.lineTo(55, 30);
            L09_2_StrandCanvas2.context.lineTo(15, 30);
            L09_2_StrandCanvas2.context.closePath();
            L09_2_StrandCanvas2.context.strokeStyle = '#ffffff';
            L09_2_StrandCanvas2.context.fillStyle = "#ffffff";
            L09_2_StrandCanvas2.context.lineWidth = 3;
            L09_2_StrandCanvas2.context.fill();
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.restore();
        }
        animate(_timeslice) {
            let offset = new L09_2_StrandCanvas2.Vector(this.valocity.x, -70);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += L09_2_StrandCanvas2.context.canvas.width;
            }
            if (this.position.x > L09_2_StrandCanvas2.context.canvas.width) {
                this.position.x -= L09_2_StrandCanvas2.context.canvas.width;
            }
        }
    }
    L09_2_StrandCanvas2.boot = boot;
})(L09_2_StrandCanvas2 || (L09_2_StrandCanvas2 = {}));
//# sourceMappingURL=boot.js.map