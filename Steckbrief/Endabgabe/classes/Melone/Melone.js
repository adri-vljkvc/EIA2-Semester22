var GardenSimulation;
(function (GardenSimulation) {
    class Melone extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 10;
            this.images = [GardenSimulation.Load.melonS, GardenSimulation.Load.melonM, GardenSimulation.Load.melonB];
            this.image = this.images[0];
            this.type = "seed2";
            this.row = this.row;
            this.collum = this.collum;
            // Wie lange sie zum Altern braucht
            this.finalAge = 30;
            this.age1 = 10;
            this.age2 = 22;
            // Wie lange welches Wasserlevel geht
            this.waterLevel1 = 7;
            this.waterLevel2 = 15;
            this.waterLevel3 = 20;
            this.waterLevelMax = 20;
            // Wie lange welches Düngerlevel geht
            this.duengerLevel1 = 5;
            this.duengerLevel2 = 20;
            this.duengerLevel3 = 25;
            this.duengerLevelMax = 20;
        }
    }
    Melone.seedamount = 0;
    Melone.price = 9;
    GardenSimulation.Melone = Melone;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Melone.js.map