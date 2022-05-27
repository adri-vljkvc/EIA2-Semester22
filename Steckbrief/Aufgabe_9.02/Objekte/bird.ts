namespace L09_2_StrandCanvas2 {
    export class bird {
        position: Vector;
        valocity: Vector;
        type: number

        constructor() {
            this.position = new Vector(0,0);
            this.valocity = new Vector(0,0);  
            this.valocity.random(300, 200);      
        }

        draw () {
            let scale: number = ((context.canvas.width)/500);
            console.log(scale);
    
            context.save();
            context.translate(this.position.x,this.position.y);           
            context.scale(scale, scale);
    
            context.beginPath();
                context.moveTo(0,10);
                context.bezierCurveTo(0,10, 10, -5, 20, 10 );
                context.bezierCurveTo(20 ,10, 30, -5, 40, 10 )
                
                context.strokeStyle = '#000000';
                context.stroke();
        
                context.restore();
        }  
        
        animate (_timeslice: number) {
            let offset: Vector = new Vector(this.valocity.x, this.valocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0) {
                this.position.x += context.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += context.canvas.height;
            }
            if (this.position.x > context.canvas.width) {
                this.position.x -= context.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += context.canvas.height;
            }

        }
            
    }
       
}