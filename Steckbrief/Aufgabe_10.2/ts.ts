namespace L10_2 {
    
    export let crc2: CanvasRenderingContext2D;
    export let rotate: number = 0;
    let move: Moveable[] = [];
    let imageData: ImageData;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBirds(20);
        createBackground();
        drawBesucher(canvas.width * 0.4, canvas.height * 0.7);
        drawBesucher(canvas.width * 0.8, canvas.height * 0.6);
        drawBesucher(canvas.width * 0.16, canvas.height * 0.53);
        createCloud();
        createSchiff();
        createSchwimmer();
        imageData =  crc2.getImageData(0, 0, canvas.width, canvas.height);
        animation();
    }   

    function createBackground(): void {
        drawBackground();
        
    }



    function createBirds (_nbrBird: number): void {
        for (let index: number = 0; index < 10; index++) {
            
            let randomVelocityX: number = (Math.random()) * 8;
            let randomVelocityY: number = (Math.random()) * 5;

            move.push(<Moveable> new Birds({ x: 0, y: 0}, { x: randomVelocityX, y: randomVelocityY }));
        }

        
        
    }

    function createCloud (): void {
        move.push(<Moveable> new Cloud({ x: crc2.canvas.width * .5, y: crc2.canvas.height * .01 }, {x: 0.5, y: 0.8}));
        move.push(<Moveable> new Cloud({ x: crc2.canvas.width * .1, y: crc2.canvas.height * .08 }, {x: 0.5, y: 0.8}));
    }

    function createSchiff (): void {
        move.push(<Moveable> new Boot({ x: crc2.canvas.width * .9, y: crc2.canvas.height * .23 }, {x: 0.7, y: 0.8}));
        move.push(<Moveable> new Boot({ x: crc2.canvas.width * 0.2, y: crc2.canvas.height * .34 }, {x: 0.7, y: 0.8}));
    }

    function createSchwimmer (): void {
        move.push(<Moveable> new Schwimmer({ x: crc2.canvas.width * 0, y: crc2.canvas.height * .23 }, {x: 1.7, y: 0.8}));
        move.push(<Moveable> new Schwimmer({ x: crc2.canvas.width * 1, y: crc2.canvas.height * .34 }, {x: 1.7, y: 0.8}));
    }



    function animation(): void {
        requestAnimationFrame(animation);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        for (let index: number = 0; index < move.length; index ++) {
            move[index].update();
            move[index].draw(); 
        }
    }
}