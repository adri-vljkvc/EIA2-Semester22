var L08_2_StrandCanvas;
(function (L08_2_StrandCanvas) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        let context = document.querySelector("canvas").getContext("2d");
        var render = function () {
            context.canvas.width = document.documentElement.clientWidth * 0.5;
            context.canvas.height = document.documentElement.clientHeight * 0.5;
            context.fillStyle = "#add8e6";
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            Ocean(crc2);
            Sand(crc2);
            Sun(crc2);
            Clouds(crc2);
            Birds(crc2);
            People(crc2);
            Swimmer(crc2);
            Boats(crc2);
            Palm(crc2);
        };
        window.addEventListener("resize", render);
        render();
    }
    function Ocean(crc2) {
        let sea = crc2.createLinearGradient(600, 150, 600, 450);
        sea.addColorStop(0, "#00008b");
        sea.addColorStop(0.2, "#008b8b");
        sea.addColorStop(0.8, "#00ffff");
        crc2.fillStyle = sea;
        crc2.fillRect(0, crc2.canvas.height * 0.3, crc2.canvas.width, crc2.canvas.height * 0.7);
    }
    function Sand(crc2) {
        crc2.fillStyle = "#deb943";
        crc2.fillRect(0, crc2.canvas.height * 0.6, crc2.canvas.width, crc2.canvas.height * 0.4);
    }
    function Sun(crc2) {
        crc2.fillStyle = "#f2ad61";
        crc2.arc(crc2.canvas.width * 0.5, crc2.canvas.height * 0.3, 70, 0, Math.PI, true);
        crc2.fill();
    }
    function Clouds(crc2) {
        crc2.save();
        let scale = ((crc2.canvas.width * 0.7) / 1000);
        crc2.translate(crc2.canvas.width * 0.0005, crc2.canvas.height * 0.0005);
        crc2.scale(scale, scale);
        // Wolke1
        crc2.beginPath();
        crc2.moveTo(170, 80);
        crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
        crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        crc2.closePath();
        crc2.lineWidth = 5;
        crc2.fillStyle = '#FFFFFF';
        crc2.fill();
        crc2.strokeStyle = '#FFFFFF';
        crc2.stroke();
        // Wolke2
        crc2.translate(1000, 20);
        crc2.beginPath();
        crc2.moveTo(170, 80);
        crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
        crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        crc2.closePath();
        crc2.lineWidth = 5;
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.restore();
        crc2.restore();
    }
    function Birds(crc2) {
        crc2.save();
        let scale = ((crc2.canvas.width * 0.7) / 1000);
        crc2.translate(crc2.canvas.width * 0.0005, crc2.canvas.height * 0.0005);
        crc2.scale(scale, scale);
        // Vogel1
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.bezierCurveTo(100, 50, 125, -10, 150, 50);
        crc2.bezierCurveTo(150, 50, 175, -10, 200, 50);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        // Vogel2
        crc2.translate(500, 80);
        crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.bezierCurveTo(100, 50, 125, -10, 150, 50);
        crc2.bezierCurveTo(150, 50, 175, -10, 200, 50);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        // Vogel3
        crc2.translate(600, 30);
        crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.bezierCurveTo(100, 50, 125, -10, 150, 50);
        crc2.bezierCurveTo(150, 50, 175, -10, 200, 50);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.restore();
        crc2.restore();
    }
    function People(crc2) {
        crc2.save();
        let scale = ((crc2.canvas.width * 1) / 1000);
        crc2.translate(crc2.canvas.width * 0.0005, crc2.canvas.height * 0.5);
        crc2.scale(scale, scale);
        // Person1
        crc2.save();
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.fillRect(310, 210, 10, 25);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#d4a985";
        crc2.arc(315, 205, 6, 0, 2 * Math.PI);
        crc2.fill();
        crc2.translate(10, 10);
        crc2.beginPath();
        crc2.fillStyle = "red";
        crc2.fillRect(510, 180, 10, 25);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#d4a985";
        crc2.arc(515, 175, 6, 0, 2 * Math.PI);
        crc2.fill();
        crc2.translate(10, 10);
        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.fillRect(710, 200, 10, 25);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#d4a985";
        crc2.arc(715, 195, 6, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.restore();
    }
    function Swimmer(crc2) {
        crc2.save();
        let scale = ((crc2.canvas.width * 1) / 1000);
        crc2.translate(crc2.canvas.width * 0.0005, crc2.canvas.height * 0.2);
        crc2.scale(scale, scale);
        // Schwimmer1
        crc2.save();
        crc2.beginPath();
        crc2.fillStyle = "#c9d4c4";
        crc2.fillRect(300, 170, 7, 10);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#8c6013";
        crc2.arc(303.5, 166, 4, 0, 2 * Math.PI);
        crc2.fill();
        // Schwimmer2
        crc2.translate(400, 10);
        crc2.beginPath();
        crc2.fillStyle = "#006400";
        crc2.fillRect(300, 170, 7, 10);
        crc2.fill();
        crc2.beginPath();
        crc2.fillStyle = "#8c6013";
        crc2.arc(303.5, 166, 4, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        crc2.restore();
    }
    function Boats(crc2) {
        crc2.save();
        let scale = ((crc2.canvas.width * 1) / 1000);
        crc2.translate(crc2.canvas.width * 0.0005, crc2.canvas.height * 0.2);
        crc2.scale(scale, scale);
        // Stange
        crc2.beginPath();
        crc2.fillStyle = "#322e2e";
        crc2.fillRect(535, 110, 5, 50);
        crc2.fill();
        // Fahne
        crc2.moveTo(540, 110);
        crc2.lineTo(540, 135);
        crc2.lineTo(565, 122.5);
        crc2.fillStyle = "#a52a2a";
        crc2.fill();
        // Schiff
        crc2.beginPath();
        crc2.strokeStyle = "#8b4513";
        crc2.moveTo(550, 185);
        crc2.lineTo(495, 185);
        crc2.lineTo(470, 160);
        crc2.lineTo(575, 160);
        crc2.fillStyle = "#8b4513";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        crc2.restore();
    }
    function Palm(crc2) {
        crc2.save();
        let scale = ((crc2.canvas.width * 1) / 1000);
        crc2.translate(crc2.canvas.width * 0.0005, crc2.canvas.height * 0.4);
        crc2.scale(scale, scale);
        // Palme
        crc2.translate(100, 50);
        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.fillRect(100, 100, 20, 200);
        crc2.closePath();
        // Palmenblätter 
        crc2.beginPath();
        crc2.moveTo(100 + 10, 100);
        crc2.quadraticCurveTo(100 + 20, 100 - 30, 100 + 100, 100 + 60);
        crc2.moveTo(100 + 10, 100);
        crc2.quadraticCurveTo(100 - 20, 100 - 30, 100 - 100, 100 + 60);
        crc2.moveTo(100 + 10, 100);
        crc2.quadraticCurveTo(100 + 20, 100 - 30, 100 - 100, 100 - 60);
        crc2.moveTo(100 + 10, 100);
        crc2.quadraticCurveTo(100 - 20, 100 - 30, 100 + 100, 100 - 60);
        crc2.strokeStyle = "green";
        crc2.lineWidth = 15;
        crc2.stroke();
        crc2.closePath();
        // Palme
        crc2.translate(700, 0);
        crc2.beginPath();
        crc2.fillStyle = "orange";
        crc2.fillRect(100, 100, 20, 200);
        crc2.closePath();
        // Palmenblätter 
        crc2.beginPath();
        crc2.moveTo(100 + 10, 100);
        crc2.quadraticCurveTo(100 + 20, 100 - 30, 100 + 100, 100 + 60);
        crc2.moveTo(100 + 10, 100);
        crc2.quadraticCurveTo(100 - 20, 100 - 30, 100 - 100, 100 + 60);
        crc2.moveTo(100 + 10, 100);
        crc2.quadraticCurveTo(100 + 20, 100 - 30, 100 - 100, 100 - 60);
        crc2.moveTo(100 + 10, 100);
        crc2.quadraticCurveTo(100 - 20, 100 - 30, 100 + 100, 100 - 60);
        crc2.strokeStyle = "green";
        crc2.lineWidth = 15;
        crc2.stroke();
        crc2.closePath();
        crc2.restore();
        crc2.restore();
    }
})(L08_2_StrandCanvas || (L08_2_StrandCanvas = {}));
//# sourceMappingURL=L08.2_Strand.js.map