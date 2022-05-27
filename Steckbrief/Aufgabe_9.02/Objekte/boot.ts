namespace L09_2_StrandCanvas2 {
    export class boot {
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
        
            let scale: number = ((context.canvas.width*2)/1000);
            console.log(scale);
    
            context.save();
    
            context.translate(this.position.x,this.random);
            context.scale(scale, scale);
    
            context.beginPath();
                context.moveTo(10, 50);
                context.lineTo(60,50);
                context.lineTo(70, 40);
                context.lineTo(0, 40);
                context.closePath();
                context.moveTo(35,40);
                context.lineTo(35,0);
    
                context.lineWidth = 1.5;
                context.strokeStyle = '#a52a2a';
                context.fillStyle = "#a52a2a"
                context.fill();
                context.stroke(); 
                
            context.beginPath();
                context.moveTo(0,50);
                context.lineTo(70,50);
                context.strokeStyle = '#ffffff';
                context.lineWidth = 3;
                context.stroke();
    
            context.beginPath();
                context.moveTo(35,0);
                context.lineTo(55,30);
                context.lineTo(15, 30);
                context.closePath();
                context.strokeStyle = '#ffffff';
                context.fillStyle = "#ffffff";
                context.lineWidth = 3;
                context.fill();
                context.stroke();
            
            context.restore();

        }
        
        animate (_timeslice: number) {
            let offset: Vector = new Vector(this.valocity.x, -70);
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