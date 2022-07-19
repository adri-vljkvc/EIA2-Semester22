namespace GardenSimulation {
    export class Karotte extends Plant {
        static price: number = 5;
        static seedamount: number = 0;
        verkaufPrice: number = 10;
        priceNeu: number;
        
        
        images: HTMLImageElement[] = [Load.carotS, Load.carotM, Load.carotB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed1";
        row: number = this.row;
        collum: number = this.collum;

        // Wie schnell sie wächst
        finalAge: number = 25;
        age1: number = 5;
        age2: number = 15;

        // Ab wann welches Wasserlevel erscheint
        waterLevel1: number = 5;
        waterLevel2: number = 15;
        waterLevel3: number = 20;
        waterLevelMax: number = 20;

        // Ab wann welches Düngerlevel erscheint
        duengerLevel1: number = 10;
        duengerLevel2: number = 15;
        duengerLevel3: number = 20;
        duengerLevelMax: number = 20;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }

    }

    
}