var L11;
(function (L11) {
    L11.rotate = 0;
    let move = [];
    let imageData;
    let canvas;
    let currentHitbox = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        canvas = document.querySelector("canvas");
        L11.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.addEventListener("click", (_e) => { clicked(_e); });
        createBirds(20);
        createBackground();
        createWomen();
        createCloud();
        createSchiff();
        createSchwimmer();
        imageData = L11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animation();
    }
    function createBackground() {
        L11.drawBackground();
    }
    function createBirds(_nbrBird) {
        for (let index = 0; index < 10; index++) {
            let randomVelocityX = (Math.random()) * 8;
            let randomVelocityY = (Math.random()) * 5;
            move.push(new L11.Birds({ x: 0, y: 0 }, { x: randomVelocityX, y: randomVelocityY }, 0));
        }
    }
    function createCloud() {
        move.push(new L11.Cloud({ x: L11.crc2.canvas.width * .5, y: L11.crc2.canvas.height * .01 }, { x: 0.5, y: 0.8 }, 0));
        move.push(new L11.Cloud({ x: L11.crc2.canvas.width * .1, y: L11.crc2.canvas.height * .08 }, { x: 0.5, y: 0.8 }, 0));
    }
    function createWomen() {
        move.push(new L11.Women({ x: L11.crc2.canvas.width * .4, y: L11.crc2.canvas.height * .7 }, { x: 0.5, y: 0.8 }, 0));
        move.push(new L11.Women({ x: L11.crc2.canvas.width * .8, y: L11.crc2.canvas.height * .6 }, { x: 0.5, y: 0.8 }, 0));
    }
    function createSchiff() {
        move.push(new L11.Boot({ x: L11.crc2.canvas.width * .9, y: L11.crc2.canvas.height * .23 }, { x: 0.7, y: 0.8 }, 0));
        move.push(new L11.Boot({ x: L11.crc2.canvas.width * 0.2, y: L11.crc2.canvas.height * .34 }, { x: 0.7, y: 0.8 }, 0));
    }
    function createSchwimmer() {
        move.push(new L11.Schwimmer({ x: L11.crc2.canvas.width * 0, y: L11.crc2.canvas.height * .23 }, { x: 1.7, y: 0.8 }, 0));
        move.push(new L11.Schwimmer({ x: L11.crc2.canvas.width * 1, y: L11.crc2.canvas.height * .34 }, { x: 1.7, y: 0.8 }, 0));
    }
    function clicked(_e) {
        const rect = canvas.getBoundingClientRect();
        const x = _e.clientX - rect.left;
        const y = _e.clientY - rect.top;
        currentHitbox = 0;
        for (let moveables = move.length - 1; moveables >= 0; moveables--) {
            move[moveables].click(x, y);
            currentHitbox++;
        }
    }
    function animation() {
        requestAnimationFrame(animation);
        L11.crc2.clearRect(0, 0, L11.crc2.canvas.width, L11.crc2.canvas.height);
        L11.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < move.length; index++) {
            move[index].update();
            move[index].draw();
        }
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=ts.js.map