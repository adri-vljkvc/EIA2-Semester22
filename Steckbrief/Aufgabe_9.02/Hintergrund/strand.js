var L09_2_StrandCanvas2;
(function (L09_2_StrandCanvas2) {
    class strand {
        x;
        y;
        constructor(_X, _Y) {
            this.x = _X;
            this.y = _Y;
        }
        draw() {
            L09_2_StrandCanvas2.context.fillStyle = "#c2b280";
            L09_2_StrandCanvas2.context.fillRect(0, L09_2_StrandCanvas2.context.canvas.height * this.x, L09_2_StrandCanvas2.context.canvas.width, L09_2_StrandCanvas2.context.canvas.height * this.x);
        }
    }
    L09_2_StrandCanvas2.strand = strand;
})(L09_2_StrandCanvas2 || (L09_2_StrandCanvas2 = {}));
//# sourceMappingURL=strand.js.map