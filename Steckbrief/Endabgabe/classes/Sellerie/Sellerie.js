var GardenSimulation;
(function (GardenSimulation) {
    class Sellerie extends GardenSimulation.Plant {
        constructor(_row, _collum) {
            super(_row, _collum);
            this.verkaufPrice = 15;
            this.images = [GardenSimulation.Load.sellerieS, GardenSimulation.Load.sellerieM, GardenSimulation.Load.sellerieB];
            this.image = this.images[0];
            this.type = "seed5";
            this.row = this.row;
            this.collum = this.collum;
            // Wie lnage sie zum Altern brauchen
            this.finalAge = 45;
            this.age1 = 13;
            this.age2 = 40;
            // Wie lange das Wasserlevel dauert
            this.waterLevel1 = 7;
            this.waterLevel2 = 13;
            this.waterLevel3 = 20;
            this.waterLevelMax = 20;
            // Wie lange das Düngerlevel dauert
            this.duengerLevel1 = 5;
            this.duengerLevel2 = 14;
            this.duengerLevel3 = 18;
            this.duengerLevelMax = 20;
        }
    }
    Sellerie.seedamount = 0;
    Sellerie.price = 3;
    GardenSimulation.Sellerie = Sellerie;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Sellerie.js.map