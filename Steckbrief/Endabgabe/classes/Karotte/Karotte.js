var GardenSimulation;
(function (GardenSimulation) {
    class Karotte extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 10;
            this.images = [GardenSimulation.Load.carotS, GardenSimulation.Load.carotM, GardenSimulation.Load.carotB];
            this.image = this.images[0];
            this.type = "seed1";
            this.row = this.row;
            this.collum = this.collum;
            // Wie schnell sie wächst
            this.finalAge = 25;
            this.age1 = 5;
            this.age2 = 15;
            // Ab wann welches Wasserlevel erscheint
            this.waterLevel1 = 5;
            this.waterLevel2 = 15;
            this.waterLevel3 = 20;
            this.waterLevelMax = 20;
            // Ab wann welches Düngerlevel erscheint
            this.duengerLevel1 = 10;
            this.duengerLevel2 = 15;
            this.duengerLevel3 = 20;
            this.duengerLevelMax = 20;
        }
    }
    Karotte.price = 5;
    Karotte.seedamount = 0;
    GardenSimulation.Karotte = Karotte;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Karotte.js.map