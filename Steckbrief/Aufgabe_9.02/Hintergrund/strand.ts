namespace L09_2_StrandCanvas2 {
    export class strand {
        x: number;
        y: number;

        constructor(_X:number, _Y: number) {
            
            this.x = _X;
            this.y = _Y;        
        }

        draw () {
            context.fillStyle = "#c2b280";
            context.fillRect(0, context.canvas.height*this.x, context.canvas.width, context.canvas.height*this.x);
        } 
    }       
            
}