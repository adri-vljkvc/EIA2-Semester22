var GardenSimulation;
(function (GardenSimulation) {
    class Radish extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 10;
            this.images = [GardenSimulation.Load.radishS, GardenSimulation.Load.radishM, GardenSimulation.Load.radishB];
            this.image = this.images[0];
            this.type = "seed3";
            this.row = this.row;
            this.collum = this.collum;
            // Wie lange sie zum Altern braucht
            this.finalAge = 38;
            this.age1 = 17;
            this.age2 = 33;
            // Wie lange Wasserlevel dauern
            this.waterLevel1 = 6;
            this.waterLevel2 = 14;
            this.waterLevel3 = 19;
            this.waterLevelMax = 20;
            // Wie lange Düngerlevel dauern
            this.duengerLevel1 = 5;
            this.duengerLevel2 = 14;
            this.duengerLevel3 = 19;
            this.duengerLevelMax = 20;
        }
    }
    Radish.seedamount = 0;
    Radish.price = 2;
    GardenSimulation.Radish = Radish;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Radish.js.map