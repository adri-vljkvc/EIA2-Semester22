var L11;
(function (L11) {
    function drawBackground() {
        L11.crc2.fillStyle = "#add8e6";
        L11.crc2.fillRect(0, 0, L11.crc2.canvas.width, L11.crc2.canvas.height);
        L11.crc2.fillStyle = "#000088";
        L11.crc2.fillRect(0, L11.crc2.canvas.height * 0.2, L11.crc2.canvas.width, L11.crc2.canvas.height * 0.8);
        L11.crc2.fillStyle = "#c2b280";
        L11.crc2.fillRect(0, L11.crc2.canvas.height * 0.5, L11.crc2.canvas.width, L11.crc2.canvas.height * 0.5);
    }
    L11.drawBackground = drawBackground;
})(L11 || (L11 = {}));
//# sourceMappingURL=hintergrund.js.map