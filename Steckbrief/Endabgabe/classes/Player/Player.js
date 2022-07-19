var GardenSimulation;
(function (GardenSimulation) {
    // Spezielle Aufgaben des Spielers
    let TASK;
    (function (TASK) {
        TASK[TASK["PLANTSEED1"] = 0] = "PLANTSEED1";
        TASK[TASK["PLANTSEED2"] = 1] = "PLANTSEED2";
        TASK[TASK["PLANTSEED3"] = 2] = "PLANTSEED3";
        TASK[TASK["PLANTSEED4"] = 3] = "PLANTSEED4";
        TASK[TASK["PLANTSEED5"] = 4] = "PLANTSEED5";
        TASK[TASK["HARVEST"] = 5] = "HARVEST";
        TASK[TASK["WATER"] = 6] = "WATER";
        TASK[TASK["FERTILIZE"] = 7] = "FERTILIZE";
        TASK[TASK["PESTICIDE"] = 8] = "PESTICIDE";
    })(TASK = GardenSimulation.TASK || (GardenSimulation.TASK = {}));
    class Player {
        // static pesticidesMenge: number = 20;
        // static duengerMenge: number = 20;
        // Saaten pflanzen 
        plant(_value) {
            // Wenn Saa1 dann wird Karotte gepflanzt
            if (_value == "seed1") {
                Player.task = TASK.PLANTSEED1;
                GardenSimulation.Karotte.seedamount--;
            }
            // Wenn Saat2 dann wird Melone gepflanzt
            if (_value == "seed2") {
                Player.task = TASK.PLANTSEED2;
                GardenSimulation.Melone.seedamount--;
            }
            // Wenn Saat3 dann wird Raddisschen gepflanzt
            if (_value == "seed3") {
                Player.task = TASK.PLANTSEED3;
                GardenSimulation.Radish.seedamount--;
            }
            // Wenn Saat4 dann wird Salat gepflanzt
            if (_value == "seed4") {
                Player.task = TASK.PLANTSEED4;
                GardenSimulation.Salat.seedamount--;
            }
            // Wenn Saat5 dann wird Sellerie gepflanzt
            if (_value == "seed5") {
                Player.task = TASK.PLANTSEED5;
                GardenSimulation.Sellerie.seedamount--;
            }
        }
        // Spieler kann ernten
        harvest() {
            Player.task = TASK.HARVEST;
        }
        // Spieler kann wässern
        water() {
            Player.task = TASK.WATER;
        }
        // Spieler kann düngern
        fertilize() {
            Player.task = TASK.FERTILIZE;
        }
        // Spieler kann Pestizide benutzen
        pesticide() {
            Player.task = TASK.PESTICIDE;
        }
        // Spieler kann Sachen im Shop kaufen
        buy(_value) {
            // Wenn man erste Option drückt kauft man Karotten = Karottenmenge im Inventar geht hoch
            if (_value == "buy1" && GardenSimulation.money >= GardenSimulation.Karotte.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Karotte.priceNeu;
                GardenSimulation.Karotte.seedamount++;
            }
            // Wenn man zweite Option drückt kauft man Melonen = Melonenmenge im Inventar geht hoch
            if (_value == "buy2" && GardenSimulation.money >= GardenSimulation.Melone.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Melone.priceNeu;
                GardenSimulation.Melone.seedamount++;
            }
            // Wenn man dritte Option drückt kauft man Radisschen = Radisschenmenge im Inventar geht hoch
            if (_value == "buy3" && GardenSimulation.money >= GardenSimulation.Radish.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Radish.priceNeu;
                GardenSimulation.Radish.seedamount++;
            }
            // Wenn man vierte Option drückt kauft man Salat = Salatmenge im Inventar geht hoch
            if (_value == "buy4" && GardenSimulation.money >= GardenSimulation.Salat.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Salat.priceNeu;
                GardenSimulation.Salat.seedamount++;
            }
            // Wenn man fünfte Option drückt kauft man Sellerie = Selleriemenge im Inventar geht hoch
            if (_value == "buy5" && GardenSimulation.money >= GardenSimulation.Sellerie.priceNeu) {
                GardenSimulation.money = GardenSimulation.money - GardenSimulation.Sellerie.priceNeu;
                GardenSimulation.Sellerie.seedamount++;
            }
            GardenSimulation.updateSeedAmount();
        }
    }
    Player.pesticidesMenge = 20;
    Player.duengerMenge = 20;
    Player.duengerPrice = 5;
    Player.pesticidesPrice = 5;
    GardenSimulation.Player = Player;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Player.js.map