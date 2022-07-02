namespace L11 {

    export interface Vector {
        x: number;
        y: number;
    }

    export function drawBackground(): void {
       crc2.fillStyle = "#add8e6";
       crc2.fillRect(0, 0,crc2.canvas.width,crc2.canvas.height);

        crc2.fillStyle = "#000088";
        crc2.fillRect(0, crc2.canvas.height*0.2, crc2.canvas.width, crc2.canvas.height*0.8);

        crc2.fillStyle = "#c2b280";
        crc2.fillRect(0, crc2.canvas.height*0.5, crc2.canvas.width, crc2.canvas.height*0.5);
    }

}