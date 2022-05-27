var L09_2_StrandCanvas2;
(function (L09_2_StrandCanvas2) {
    class bird {
        position;
        valocity;
        type;
        constructor() {
            this.position = new L09_2_StrandCanvas2.Vector(0, 0);
            this.valocity = new L09_2_StrandCanvas2.Vector(0, 0);
            this.valocity.random(300, 200);
        }
        draw() {
            let scale = ((L09_2_StrandCanvas2.context.canvas.width) / 500);
            console.log(scale);
            L09_2_StrandCanvas2.context.save();
            L09_2_StrandCanvas2.context.translate(this.position.x, this.position.y);
            L09_2_StrandCanvas2.context.scale(scale, scale);
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.moveTo(0, 10);
            L09_2_StrandCanvas2.context.bezierCurveTo(0, 10, 10, -5, 20, 10);
            L09_2_StrandCanvas2.context.bezierCurveTo(20, 10, 30, -5, 40, 10);
            L09_2_StrandCanvas2.context.strokeStyle = '#000000';
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.restore();
        }
        animate(_timeslice) {
            let offset = new L09_2_StrandCanvas2.Vector(this.valocity.x, this.valocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += L09_2_StrandCanvas2.context.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += L09_2_StrandCanvas2.context.canvas.height;
            }
            if (this.position.x > L09_2_StrandCanvas2.context.canvas.width) {
                this.position.x -= L09_2_StrandCanvas2.context.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += L09_2_StrandCanvas2.context.canvas.height;
            }
        }
    }
    L09_2_StrandCanvas2.bird = bird;
})(L09_2_StrandCanvas2 || (L09_2_StrandCanvas2 = {}));
//# sourceMappingURL=bird.js.map