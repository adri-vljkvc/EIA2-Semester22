namespace GardenSimulation {
    export class Bug {
        public position: number = 400;
        private row: number;
        private collum: number;

        public constructor(_row: number, _collum: number) {
            this.row = _row * 100;
            this.collum = _collum * 100;
        }

        // Bug wird gezeichnet
        public draw(): void {
            cr2.resetTransform();
            this.fly(this.row, this.collum);
            cr2.scale(.15, .15);
            cr2.drawImage(Load.bug, 0, 0);
            console.log("drawBug");

        }
        // Bug fliegt herum: ! habs aber nicht hinbekommen, dass es funktioniert
        private fly(_row: number, _collum: number): void {
            cr2.translate(this.row, this.collum);
            if (this.position <= 0) {
                            
                cr2.rotate(-animationTime);
                }
            else {
                this.position -= 5;
            }
        }
    }
}