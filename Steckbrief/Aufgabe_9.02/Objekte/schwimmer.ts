namespace L09_2_StrandCanvas2 {
    export class schwimmer {
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
        
            let scale: number = ((context.canvas.width)/1000);
            console.log(scale);
    
            context.save();
    
            context.translate(this.position.x, this.random);
            context.scale(scale, scale);
    
            context.beginPath();
                context.arc(109, 45, 9, 0, Math.PI * 2, true);
                context.fillStyle = '#ff0000';
                context.strokeStyle = '#ff0000';
                context.fill();
                context.stroke();
    
            context.beginPath();            
                context.moveTo(60, 60);
                context.bezierCurveTo(60,60,100,30, 140,50);
                context.bezierCurveTo(140, 50, 125, 45, 110, 55);
                context.lineTo(110,60);
                context.closePath();
                
                context.fillStyle = '#ff8661';
                context.fill();
                context.strokeStyle = '#ff8661';
                context.stroke();
    
            context.beginPath();
                context.moveTo(40, 60);
                context.lineTo(140, 60);
                context.strokeStyle = '#ffffff';
                context.lineWidth = 3;
                context.stroke();
    
            context.restore();
            context.save();

        }        
    
        animate (_timeslice: number) {
            let offset: Vector = new Vector(this.valocity.x, -60);
            offset.scale(_timeslice);
            this.position.add(offset);
    
            if (this.position.x < 0) {
                this.position.x += context.canvas.width;
            }
            if (this.position.x > context.canvas.width) {
                this.position.x -= context.canvas.width;
            }
        }

    }

    
       
}