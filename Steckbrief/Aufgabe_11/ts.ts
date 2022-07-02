namespace L11 {
    
    export let crc2: CanvasRenderingContext2D;
    export let rotate: number = 0;
    let move: Moveable[] = [];
    let imageData: ImageData;
    let canvas: HTMLCanvasElement;
    let currentHitbox: number = 0;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.addEventListener("click", (_e) => { clicked(_e); });
        createBirds(20);
        createBackground();
        createWomen();
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

            move.push(<Moveable> new Birds({ x: 0, y: 0}, { x: randomVelocityX, y: randomVelocityY}, 0));
        }

        
        
    }

    function createCloud (): void {
        move.push(<Moveable> new Cloud({ x: crc2.canvas.width * .5, y: crc2.canvas.height * .01 }, {x: 0.5, y: 0.8},0));
        move.push(<Moveable> new Cloud({ x: crc2.canvas.width * .1, y: crc2.canvas.height * .08 }, {x: 0.5, y: 0.8},0));
    }

    function createWomen (): void {
        move.push(<Moveable> new Women({ x: crc2.canvas.width * .4, y: crc2.canvas.height * .7 }, {x: 0.5, y: 0.8},0));
        move.push(<Moveable> new Women({ x: crc2.canvas.width * .8, y: crc2.canvas.height * .6 }, {x: 0.5, y: 0.8},0));
    }

    function createSchiff (): void {
        move.push(<Moveable> new Boot({ x: crc2.canvas.width * .9, y: crc2.canvas.height * .23 }, {x: 0.7, y: 0.8},0));
        move.push(<Moveable> new Boot({ x: crc2.canvas.width * 0.2, y: crc2.canvas.height * .34 }, {x: 0.7, y: 0.8},0));
    }

    function createSchwimmer (): void {
        move.push(<Moveable> new Schwimmer({ x: crc2.canvas.width * 0, y: crc2.canvas.height * .23 }, {x: 1.7, y: 0.8}, 0));
        move.push(<Moveable> new Schwimmer({ x: crc2.canvas.width * 1, y: crc2.canvas.height * .34 }, {x: 1.7, y: 0.8},0));
    }

    function clicked(_e: MouseEvent): void{
        const rect = canvas.getBoundingClientRect();

        const x: number = _e.clientX - rect.left;
        const y: number = _e.clientY - rect.top;

        currentHitbox = 0;
        for (let moveables: number = move.length - 1; moveables >= 0; moveables--) {
            move[moveables].click(x, y);
            currentHitbox++;
        }
        

    
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