var L09_2_StrandCanvas2;
(function (L09_2_StrandCanvas2) {
    class strandbesucher {
        x;
        y;
        constructor(_X, _Y) {
            this.x = _X;
            this.y = _Y;
        }
        draw() {
            let scale = ((L09_2_StrandCanvas2.context.canvas.width * 2) / 1000);
            console.log(scale);
            L09_2_StrandCanvas2.context.save();
            L09_2_StrandCanvas2.context.translate(this.x, this.y);
            L09_2_StrandCanvas2.context.scale(scale, scale);
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.moveTo(10, 70);
            L09_2_StrandCanvas2.context.lineTo(60, 70);
            L09_2_StrandCanvas2.context.lineTo(50, 60);
            L09_2_StrandCanvas2.context.lineTo(20, 60);
            L09_2_StrandCanvas2.context.closePath();
            L09_2_StrandCanvas2.context.strokeStyle = '#ff0000';
            L09_2_StrandCanvas2.context.fillStyle = "#ff0000";
            L09_2_StrandCanvas2.context.fill();
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.moveTo(20, 60);
            L09_2_StrandCanvas2.context.bezierCurveTo(20, 60, 35, 75, 50, 60);
            L09_2_StrandCanvas2.context.lineTo(50, 55);
            L09_2_StrandCanvas2.context.lineTo(45, 50);
            L09_2_StrandCanvas2.context.lineTo(45, 40);
            L09_2_StrandCanvas2.context.lineTo(50, 50);
            L09_2_StrandCanvas2.context.lineTo(52.5, 45);
            L09_2_StrandCanvas2.context.lineTo(50, 30);
            L09_2_StrandCanvas2.context.bezierCurveTo(50, 30, 35, 20, 20, 30);
            L09_2_StrandCanvas2.context.lineTo(17.5, 45);
            L09_2_StrandCanvas2.context.lineTo(20, 50);
            L09_2_StrandCanvas2.context.lineTo(25, 40);
            L09_2_StrandCanvas2.context.lineTo(25, 50);
            L09_2_StrandCanvas2.context.lineTo(20, 55);
            L09_2_StrandCanvas2.context.closePath();
            L09_2_StrandCanvas2.context.fillStyle = '#ff8661';
            L09_2_StrandCanvas2.context.fill();
            L09_2_StrandCanvas2.context.strokeStyle = '#ff8661';
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.moveTo(20, 60);
            L09_2_StrandCanvas2.context.bezierCurveTo(20, 60, 35, 75, 50, 60);
            L09_2_StrandCanvas2.context.lineTo(50, 55);
            L09_2_StrandCanvas2.context.lineTo(20, 55);
            L09_2_StrandCanvas2.context.closePath();
            L09_2_StrandCanvas2.context.fillStyle = '#800080';
            L09_2_StrandCanvas2.context.fill();
            L09_2_StrandCanvas2.context.strokeStyle = '#800080';
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.moveTo(25, 45);
            L09_2_StrandCanvas2.context.lineTo(45, 45);
            L09_2_StrandCanvas2.context.fillStyle = '#800080';
            L09_2_StrandCanvas2.context.fill();
            L09_2_StrandCanvas2.context.strokeStyle = '#800080';
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.arc(35, 20, 12, 0, Math.PI * 2);
            L09_2_StrandCanvas2.context.fillStyle = "#800080";
            L09_2_StrandCanvas2.context.strokeStyle = '#800080';
            L09_2_StrandCanvas2.context.fill();
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.beginPath();
            L09_2_StrandCanvas2.context.arc(35, 20, 4, 0, Math.PI * 2);
            L09_2_StrandCanvas2.context.fillStyle = "#551054";
            L09_2_StrandCanvas2.context.strokeStyle = '#551054';
            L09_2_StrandCanvas2.context.fill();
            L09_2_StrandCanvas2.context.stroke();
            L09_2_StrandCanvas2.context.restore();
        }
    }
    L09_2_StrandCanvas2.strandbesucher = strandbesucher;
})(L09_2_StrandCanvas2 || (L09_2_StrandCanvas2 = {}));
//# sourceMappingURL=strandbesucher.js.map