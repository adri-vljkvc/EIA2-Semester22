namespace L09_2_StrandCanvas2 {
    export class strandbesucher {
        x: number;
        y: number;


        constructor(_X:number, _Y: number) {
            
            this.x = _X;
            this.y = _Y;        
        }

        draw () {
        
            let scale: number = ((context.canvas.width*2)/1000);
        console.log(scale);

        context.save();

        context.translate(this.x,this.y);
        context.scale(scale, scale);

        context.beginPath();
            context.moveTo(10,70);
            context.lineTo(60,70);
            context.lineTo(50, 60);
            context.lineTo(20, 60);
            context.closePath();
            context.strokeStyle = '#ff0000';
            context.fillStyle = "#ff0000";
            context.fill();
            context.stroke();

        context.beginPath();
            context.moveTo(20,60);
            context.bezierCurveTo(20, 60, 35 , 75, 50, 60);
            context.lineTo(50, 55);
            context.lineTo(45, 50);
            context.lineTo(45, 40);
            context.lineTo(50, 50);
            context.lineTo(52.5, 45);
            context.lineTo(50, 30);
            context.bezierCurveTo(50, 30, 35 , 20, 20, 30);
            context.lineTo(17.5, 45);
            context.lineTo(20, 50);
            context.lineTo(25, 40);
            context.lineTo(25, 50);
            context.lineTo(20, 55);
            context.closePath();

            context.fillStyle = '#ff8661';
            context.fill();
            context.strokeStyle = '#ff8661';
            context.stroke();
            
            context.stroke();

            context.beginPath();
            context.moveTo(20,60);
            context.bezierCurveTo(20, 60, 35 , 75, 50, 60);
            context.lineTo(50, 55);
            context.lineTo(20, 55);
            context.closePath();

            context.fillStyle = '#800080';
            context.fill();
            context.strokeStyle = '#800080';
            context.stroke();
            
            context.stroke();

        context.beginPath();

            context.moveTo(25,45);
            context.lineTo(45,45);

            context.fillStyle = '#800080';
            context.fill();
            context.strokeStyle = '#800080';
            context.stroke();
            
        context.beginPath();
    
            context.arc(35, 20, 12, 0, Math.PI * 2);
            context.fillStyle = "#800080";
            context.strokeStyle = '#800080';
            context.fill();
            context.stroke();
        
        context.beginPath();

            context.arc(35, 20, 4, 0, Math.PI * 2);
            context.fillStyle = "#551054";
            context.strokeStyle = '#551054';
            context.fill();
            context.stroke();

        context.restore();
        }        
            
    }
       
}