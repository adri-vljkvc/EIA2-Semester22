namespace GardenSimulation {
    export class Sellerie extends Plant {
        static seedamount: number = 0;
        static price: number = 3;
        verkaufPrice: number = 15;
        priceNeu: number; 
        
        images: HTMLImageElement[] = [Load.sellerieS, Load.sellerieM, Load.sellerieB];
        image: HTMLImageElement = this.images[0];
        type: string = "seed5";
        row: number = this.row;
        collum: number = this.collum;
        
        // Wie lnage sie zum Altern brauchen
        finalAge: number = 45;
        age1: number = 13;
        age2: number = 40;

        // Wie lange das Wasserlevel dauert
        waterLevel1: number = 7;
        waterLevel2: number = 13;
        waterLevel3: number = 20;
        waterLevelMax: number = 20;

        // Wie lange das Düngerlevel dauert
        duengerLevel1: number = 5;
        duengerLevel2: number = 14;
        duengerLevel3: number = 18;
        duengerLevelMax: number = 20;

        constructor(_row: number, _collum: number) {
            super(_row, _collum);
        }
    }
}