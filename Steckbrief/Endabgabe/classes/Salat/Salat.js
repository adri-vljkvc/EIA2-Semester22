var GardenSimulation;
(function (GardenSimulation) {
    class Salat extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 10;
            this.images = [GardenSimulation.Load.salatS, GardenSimulation.Load.salatM, GardenSimulation.Load.salatB];
            this.image = this.images[0];
            this.type = "seed4";
            this.row = this.row;
            this.collum = this.collum;
            // Wie lange sie zum Altern brauchen
            this.finalAge = 25;
            this.age1 = 14;
            this.age2 = 18;
            // Wie lange das Wasserlevel dauert
            this.waterLevel1 = 6;
            this.waterLevel2 = 15;
            this.waterLevel3 = 20;
            this.waterLevelMax = 20;
            // Wie lange das Düngerlevel dauert
            this.duengerLevel1 = 4;
            this.duengerLevel2 = 12;
            this.duengerLevel3 = 15;
            this.duengerLevelMax = 20;
        }
    }
    Salat.seedamount = 0;
    Salat.price = 4;
    GardenSimulation.Salat = Salat;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Salat.js.map