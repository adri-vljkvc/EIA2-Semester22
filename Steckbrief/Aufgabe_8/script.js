var A08_1_generativeArt;
(function (A08_1_generativeArt) {
    let crc2;
    let hue;
    let saturation;
    let lightness;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        let gradient = crc2.createRadialGradient(50, 100, 150, 200, 250, 500);
        hue = Math.round(Math.random() * 300);
        let hue1 = Math.round(Math.random() * 400);
        let hue2 = Math.round(Math.random() * 100);
        gradient.addColorStop(0, "hsl(" + hue + "," + "60%," + "80%" + ")");
        gradient.addColorStop(0.5, "hsl(" + hue1 + "," + "60%, " + "80%" + ")");
        gradient.addColorStop(1, "hsl(" + hue2 + "," + "60%, " + "80%" + ")");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 800);
        for (let index = 0; index < 20; index++) {
            let X = Math.floor(Math.random() * 1000);
            let Y = Math.floor(Math.random() * 800);
            drawCircle(X, Y);
            drawBubble(X, Y);
        }
    }
    function drawCircle(_X, _Y) {
        hue = Math.round(Math.random() * 50);
        saturation = Math.round(Math.random() * 80);
        lightness = Math.round(Math.random() * 100);
        let radius = Math.round(Math.random() * 100);
        _X = Math.random() * 1000;
        _X = Math.random() * 800;
        crc2.beginPath();
        crc2.arc(_X, _Y, radius, 0, Math.PI * 2);
        crc2.fillStyle = "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.fill();
        crc2.closePath();
    }
    function drawBubble(_X, _Y) {
        hue = Math.round(Math.random() * 500);
        saturation = Math.round(Math.random() * 90);
        lightness = Math.round(Math.random() * 100);
        let radius = Math.floor(Math.random() * 100);
        _X = Math.random() * 1000;
        _X = Math.random() * 800;
        crc2.beginPath();
        crc2.arc(_X, _Y, radius, 0, Math.PI * 2);
        crc2.strokeStyle = "hsl(" + hue + "," + saturation + "% , " + lightness + "%" + ")";
        crc2.lineWidth = 1.5;
        crc2.stroke();
        crc2.closePath();
    }
})(A08_1_generativeArt || (A08_1_generativeArt = {}));
//# sourceMappingURL=script.js.map