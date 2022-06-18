var L10_2;
(function (L10_2) {
    L10_2.rotate = 0;
    let move = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        L10_2.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBirds(20);
        createBackground();
        L10_2.drawBesucher(canvas.width * 0.4, canvas.height * 0.7);
        L10_2.drawBesucher(canvas.width * 0.8, canvas.height * 0.6);
        L10_2.drawBesucher(canvas.width * 0.16, canvas.height * 0.53);
        createCloud();
        createSchiff();
        createSchwimmer();
        imageData = L10_2.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animation();
    }
    function createBackground() {
        L10_2.drawBackground();
    }
    function createBirds(_nbrBird) {
        for (let index = 0; index < 10; index++) {
            let randomVelocityX = (Math.random()) * 8;
            let randomVelocityY = (Math.random()) * 5;
            move.push(new L10_2.Birds({ x: 0, y: 0 }, { x: randomVelocityX, y: randomVelocityY }));
        }
    }
    function createCloud() {
        move.push(new L10_2.Cloud({ x: L10_2.crc2.canvas.width * .5, y: L10_2.crc2.canvas.height * .01 }, { x: 0.5, y: 0.8 }));
        move.push(new L10_2.Cloud({ x: L10_2.crc2.canvas.width * .1, y: L10_2.crc2.canvas.height * .08 }, { x: 0.5, y: 0.8 }));
    }
    function createSchiff() {
        move.push(new L10_2.Boot({ x: L10_2.crc2.canvas.width * .9, y: L10_2.crc2.canvas.height * .23 }, { x: 0.7, y: 0.8 }));
        move.push(new L10_2.Boot({ x: L10_2.crc2.canvas.width * 0.2, y: L10_2.crc2.canvas.height * .34 }, { x: 0.7, y: 0.8 }));
    }
    function createSchwimmer() {
        move.push(new L10_2.Schwimmer({ x: L10_2.crc2.canvas.width * 0, y: L10_2.crc2.canvas.height * .23 }, { x: 1.7, y: 0.8 }));
        move.push(new L10_2.Schwimmer({ x: L10_2.crc2.canvas.width * 1, y: L10_2.crc2.canvas.height * .34 }, { x: 1.7, y: 0.8 }));
    }
    function animation() {
        requestAnimationFrame(animation);
        L10_2.crc2.clearRect(0, 0, L10_2.crc2.canvas.width, L10_2.crc2.canvas.height);
        L10_2.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < move.length; index++) {
            move[index].update();
            move[index].draw();
        }
    }
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=ts.js.map