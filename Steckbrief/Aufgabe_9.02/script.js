var L09_2_StrandCanvas2;
(function (L09_2_StrandCanvas2) {
    let birds = [];
    let clouds = [];
    let boats = [];
    let swimmers = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        L09_2_StrandCanvas2.context = document.querySelector("canvas").getContext("2d");
        L09_2_StrandCanvas2.context.canvas.width = 500;
        L09_2_StrandCanvas2.context.canvas.height = 500;
        createBird(6);
        createcloud(4);
        createboot(2);
        createswimmer(3);
        window.setInterval(update, 20);
    }
    function Hintergrund() {
        L09_2_StrandCanvas2.context.fillStyle = "#add8e6";
        L09_2_StrandCanvas2.context.fillRect(0, 0, L09_2_StrandCanvas2.context.canvas.width, L09_2_StrandCanvas2.context.canvas.height);
    }
    function createBird(_nBird) {
        for (let index = 0; index < _nBird; index++) {
            let Bird = new L09_2_StrandCanvas2.bird();
            birds.push(Bird);
        }
    }
    function createcloud(_ncloud) {
        for (let index = 0; index < _ncloud; index++) {
            let random = Math.round(Math.random() * 80);
            let cloud = new L09_2_StrandCanvas2.wolke(random);
            clouds.push(cloud);
        }
    }
    function createboot(_nboot) {
        for (let index = 0; index < _nboot; index++) {
            let random = 80 + Math.round(Math.random() * 80);
            let boat = new L09_2_StrandCanvas2.boot(random);
            boats.push(boat);
        }
    }
    function createswimmer(_nswimmer) {
        for (let index = 0; index < _nswimmer; index++) {
            let random = 80 + Math.round(Math.random() * 80);
            let swimmer = new L09_2_StrandCanvas2.schwimmer(random);
            swimmers.push(swimmer);
        }
    }
    function update() {
        L09_2_StrandCanvas2.context.fillRect(0, 0, L09_2_StrandCanvas2.context.canvas.width, L09_2_StrandCanvas2.context.canvas.height);
        Hintergrund();
        let _wasser = new L09_2_StrandCanvas2.wasser(0.2, 0.8);
        _wasser.draw();
        let _strand = new L09_2_StrandCanvas2.strand(0.5, 0.5);
        _strand.draw();
        for (let cloud of clouds) {
            cloud.animate(1 / 700);
            cloud.draw();
        }
        for (let swimmer of swimmers) {
            swimmer.animate(1 / 700);
            swimmer.draw();
        }
        for (let boat of boats) {
            boat.animate(1 / 800);
            boat.draw();
        }
        let _strandbesucher = new L09_2_StrandCanvas2.strandbesucher(20, 350);
        _strandbesucher.draw();
        let _strandbesucher2 = new L09_2_StrandCanvas2.strandbesucher(230, 400);
        _strandbesucher2.draw();
        let _strandbesucher3 = new L09_2_StrandCanvas2.strandbesucher(400, 240);
        _strandbesucher3.draw();
        for (let Bird of birds) {
            Bird.animate(1 / 50);
            Bird.draw();
        }
    }
})(L09_2_StrandCanvas2 || (L09_2_StrandCanvas2 = {}));
//# sourceMappingURL=script.js.map