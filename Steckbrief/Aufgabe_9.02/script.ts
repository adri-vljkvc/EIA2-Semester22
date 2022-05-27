namespace L09_2_StrandCanvas2 {

    export let context: CanvasRenderingContext2D; 
    let birds: bird[] = [];
    let clouds: wolke[] = [];
    let boats: boot[] = [];
    let swimmers: schwimmer[] = [];

    window.addEventListener("load", handleLoad);

    function handleLoad() {

        context = document.querySelector("canvas").getContext("2d");

        context.canvas.width = 500;
        context.canvas.height = 500;

        createBird(6);
        createcloud(4);
        createboot(2);
        createswimmer(3);

        window.setInterval(update, 20);

    }
    
   
    function Hintergrund() {
        context.fillStyle = "#add8e6";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }

    function createBird (_nBird: number): void {
        for (let index = 0; index < _nBird; index++) {
            let Bird : bird = new bird();
            birds.push(Bird);            
        }
    }

    function createcloud (_ncloud: number): void {
        for (let index = 0; index < _ncloud; index++) {
            let random: number = Math.round(Math.random()*80);
            let cloud : wolke = new wolke(random);
            clouds.push(cloud);
        }
    }

    function createboot (_nboot: number): void {
        for (let index = 0; index < _nboot; index++) {
            let random: number = 80 + Math.round(Math.random()*80);
            let boat : boot = new boot(random);
            boats.push(boat);
        }
    }

    function createswimmer (_nswimmer: number): void {
        for (let index = 0; index < _nswimmer; index++) {
            let random: number = 80 + Math.round(Math.random()*80);
            let swimmer : schwimmer = new schwimmer(random);
            swimmers.push(swimmer);
        }
    }
    
    function update(): void {
        context.fillRect(0,0,context.canvas.width, context.canvas.height);

        Hintergrund(); 
        
        let _wasser: wasser = new wasser(0.2, 0.8);
        _wasser.draw();

        let _strand: strand = new strand(0.5, 0.5);
        _strand.draw();
        
        for (let cloud of clouds) {
            cloud.animate(1/700);
            cloud.draw();          
            }

        for (let swimmer of swimmers) {
            swimmer.animate(1/700);
            swimmer.draw();          
            }

        for (let boat of boats) {
            boat.animate(1/800);
            boat.draw();
        }

        let _strandbesucher : strandbesucher = new strandbesucher(20, 350);
        _strandbesucher.draw();

        let _strandbesucher2 : strandbesucher = new strandbesucher(230, 400);
        _strandbesucher2.draw();

        let _strandbesucher3 : strandbesucher = new strandbesucher(400, 240);
        _strandbesucher3.draw();
        
        for (let Bird of birds) {
            Bird.animate(1/50);
            Bird.draw();
        }
    }
    

}