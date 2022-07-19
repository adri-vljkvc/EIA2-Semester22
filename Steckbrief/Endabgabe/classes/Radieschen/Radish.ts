namespace GardenSimulation {
    export class Radish extends Plant {
        static seedamount: number = 0;
        static price: number = 2;
        verkaufPrice: number = 10;
        priceNeu: number;
        

        images: HTMLImageElement[] = [Load.radishS, Load.radishM, Load.radishB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed3";
        row: number = this.row;
        collum: number = this.collum;

         // Wie lange sie zum Altern braucht
        finalAge: number = 38;
        age1: number = 17;
        age2: number = 33;

         // Wie lange Wasserlevel dauern
        waterLevel1: number = 6;
        waterLevel2: number = 14;
        waterLevel3: number = 19;
        waterLevelMax: number = 20;

        // Wie lange Düngerlevel dauern
        duengerLevel1: number = 5;
        duengerLevel2: number = 14;
        duengerLevel3: number = 19;
        duengerLevelMax: number = 20;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }

    
}