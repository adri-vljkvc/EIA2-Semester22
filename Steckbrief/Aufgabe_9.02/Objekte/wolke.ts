namespace L09_2_StrandCanvas2 {
    export class wolke {
        position: Vector;
        valocity: Vector;
        type: number
        random: number


        constructor(_random: number) {
            
            this.position = new Vector(0,0); 
            this.valocity = new Vector(0,0);  
            this.valocity.random(300, 200); 
            this.random = _random;   
        }

        draw () {
        
        let scale: number = ((context.canvas.width*0.3)/1000);

        context.save();        
        context.translate(this.position.x, this.random);
        context.scale(scale, scale);
            context.beginPath();
            context.moveTo(170, 80);
            context.bezierCurveTo(130, 100, 130, 150, 230, 150);
            context.bezierCurveTo(250, 180, 320, 180, 340, 150);
            context.bezierCurveTo(420, 150, 420, 120, 390, 100);
            context.bezierCurveTo(430, 40, 370, 30, 340, 50);
            context.bezierCurveTo(320, 5, 250, 20, 250, 50);
            context.bezierCurveTo(200, 5, 150, 20, 170, 80);
            context.closePath();
            context.lineWidth = 5;
            context.fillStyle = '#ffffff';
            context.fill();
            context.strokeStyle = '#ffffff';
            context.stroke();

        context.restore();

        }
        
        animate (_timeslice: number) {
            let offset: Vector = new Vector(this.valocity.x, 0);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < -30) {
                this.position.x += context.canvas.width;
            }
            if (this.position.x > context.canvas.width) {
                this.position.x -= context.canvas.width;
            }
        }
            
    }
       
}