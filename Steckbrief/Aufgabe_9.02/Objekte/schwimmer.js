var L09_2_StrandCanvas2;
(function (L09_2_StrandCanvas2) {
    class schwimmer {
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
            let scale = ((L09_2_StrandCanvas2.context.canvas.width) / 1000);
            console.log(scale);
            L09_2_StrandCanvas2.context.save();
            L09_2_StrandCanvas2.context.translate(this.position.x, this.random);
            L09_2_StrandCanvas2.context.scale(scale, scale);
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.arc(109, 45, 9, 0, Math.PI * 2, true);
            L09_2_StrandCanvas2.context.fillStyle = '#ff0000';
            L09_2_StrandCanvas2.context.strokeStyle = '#ff0000';
            L09_2_StrandCanvas2.context.fill();
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.moveTo(60, 60);
            L09_2_StrandCanvas2.context.bezierCurveTo(60, 60, 100, 30, 140, 50);
            L09_2_StrandCanvas2.context.bezierCurveTo(140, 50, 125, 45, 110, 55);
            L09_2_StrandCanvas2.context.lineTo(110, 60);
            L09_2_StrandCanvas2.context.closePath();
            L09_2_StrandCanvas2.context.fillStyle = '#ff8661';
            L09_2_StrandCanvas2.context.fill();
            L09_2_StrandCanvas2.context.strokeStyle = '#ff8661';
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.moveTo(40, 60);
            L09_2_StrandCanvas2.context.lineTo(140, 60);
            L09_2_StrandCanvas2.context.strokeStyle = '#ffffff';
            L09_2_StrandCanvas2.context.lineWidth = 3;
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.restore();
            L09_2_StrandCanvas2.context.save();
        }
        animate(_timeslice) {
            let offset = new L09_2_StrandCanvas2.Vector(this.valocity.x, -60);
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
    L09_2_StrandCanvas2.schwimmer = schwimmer;
})(L09_2_StrandCanvas2 || (L09_2_StrandCanvas2 = {}));
//# sourceMappingURL=schwimmer.js.map