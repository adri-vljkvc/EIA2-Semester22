namespace GardenSimulation {

    // Spezielle Aufgaben des Spielers
    export enum TASK {
        PLANTSEED1,
        PLANTSEED2,
        PLANTSEED3,
        PLANTSEED4,
        PLANTSEED5,
        HARVEST,
        WATER,
        FERTILIZE,
        PESTICIDE
    }

    export class Player {
        
        static task: TASK;
        static pesticidesMenge: number = 20;
        static duengerMenge: number = 20;
        static duengerPrice: number = 5;
        static pesticidesPrice: number = 5;
        static duengerpriceNeu: number;
        static pesticidespriceNeu: number;

        // static pesticidesMenge: number = 20;
        // static duengerMenge: number = 20;

        // Saaten pflanzen 
        plant(_value: string): void {

            // Wenn Saa1 dann wird Karotte gepflanzt
            if (_value == "seed1") {
                Player.task = TASK.PLANTSEED1;
                Karotte.seedamount --;
            }
            
            // Wenn Saat2 dann wird Melone gepflanzt
            if (_value == "seed2") {
                Player.task = TASK.PLANTSEED2;
                Melone.seedamount--;
            }

            // Wenn Saat3 dann wird Raddisschen gepflanzt
            if (_value == "seed3") {
                Player.task = TASK.PLANTSEED3;
                Radish.seedamount--;
            }

            // Wenn Saat4 dann wird Salat gepflanzt
            if (_value == "seed4") {
                Player.task = TASK.PLANTSEED4;
                Salat.seedamount--;
            }

            // Wenn Saat5 dann wird Sellerie gepflanzt
            if (_value == "seed5") {
                Player.task = TASK.PLANTSEED5;
                Sellerie.seedamount--;
            }
        }

        // Spieler kann ernten
        harvest(): void {
            Player.task = TASK.HARVEST;
        }

        // Spieler kann wässern
        water(): void {
            Player.task = TASK.WATER;
        }

        // Spieler kann düngern
        fertilize(): void {
            Player.task = TASK.FERTILIZE;
        }

        // Spieler kann Pestizide benutzen
        pesticide(): void {
            Player.task = TASK.PESTICIDE;
        }

        // Spieler kann Sachen im Shop kaufen
        buy (_value: string): void {
            // Wenn man erste Option drückt kauft man Karotten = Karottenmenge im Inventar geht hoch
            if (_value == "buy1" && money >= Karotte.priceNeu) {
                money = money - Karotte.priceNeu;
                Karotte.seedamount++;
            }

            // Wenn man zweite Option drückt kauft man Melonen = Melonenmenge im Inventar geht hoch
            if (_value == "buy2" && money >= Melone.priceNeu) {
                money = money - Melone.priceNeu;
                Melone.seedamount++;
            }

            // Wenn man dritte Option drückt kauft man Radisschen = Radisschenmenge im Inventar geht hoch
            if (_value == "buy3" && money >= Radish.priceNeu) {
                money = money - Radish.priceNeu;
                Radish.seedamount++;
            }

            // Wenn man vierte Option drückt kauft man Salat = Salatmenge im Inventar geht hoch
            if (_value == "buy4" && money >= Salat.priceNeu) {
                money = money - Salat.priceNeu;
                Salat.seedamount++;
            }

            // Wenn man fünfte Option drückt kauft man Sellerie = Selleriemenge im Inventar geht hoch
            if (_value == "buy5" && money >= Sellerie.priceNeu) {
                money = money - Sellerie.priceNeu;
                Sellerie.seedamount++;
            }
            updateSeedAmount();
        }

    }

}