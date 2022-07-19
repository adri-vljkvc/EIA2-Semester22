 namespace GardenSimulation {
    export class Melone extends Plant {
        static seedamount: number = 0;
        static price: number = 9;
        verkaufPrice: number = 10;
        priceNeu: number;

        images: HTMLImageElement[] = [Load.melonS, Load.melonM, Load.melonB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed2";
        row: number = this.row;
        collum: number = this.collum;

        // Wie lange sie zum Altern braucht
        finalAge: number = 30;
        age1: number = 10;
        age2: number = 22;

        // Wie lange welches Wasserlevel geht
        waterLevel1: number = 7;
        waterLevel2: number = 15;
        waterLevel3: number = 20;
        waterLevelMax: number = 20;

        // Wie lange welches Düngerlevel geht
        duengerLevel1: number = 5;
        duengerLevel2: number = 20;
        duengerLevel3: number = 25;
        duengerLevelMax: number = 20;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }

    
}