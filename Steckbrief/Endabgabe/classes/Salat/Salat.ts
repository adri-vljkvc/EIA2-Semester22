namespace GardenSimulation {
    export class Salat extends Plant {
        static seedamount: number = 0;
        static price: number = 4;
        verkaufPrice: number = 10;
        priceNeu: number;
        
        images: HTMLImageElement[] = [Load.salatS, Load.salatM, Load.salatB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed4";
        row: number = this.row;
        collum: number = this.collum;

        // Wie lange sie zum Altern brauchen
        finalAge: number = 25;
        age1: number = 14;
        age2: number = 18;

        // Wie lange das Wasserlevel dauert
        waterLevel1: number = 6;
        waterLevel2: number = 15;
        waterLevel3: number = 20;
        waterLevelMax: number = 20;

        // Wie lange das Düngerlevel dauert
        duengerLevel1: number = 4;
        duengerLevel2: number = 12;
        duengerLevel3: number = 15;
        duengerLevelMax: number = 20;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }


}