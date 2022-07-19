var GardenSimulation;
(function (GardenSimulation) {
    class Plant {
        constructor(_row, _collum) {
            this.waterImages = [GardenSimulation.Load.empty, GardenSimulation.Load.tropfenS, GardenSimulation.Load.tropfenM, GardenSimulation.Load.tropfenB];
            this.fertiImages = [GardenSimulation.Load.empty, GardenSimulation.Load.fertilizS, GardenSimulation.Load.fertilizM, GardenSimulation.Load.fertilizB];
            this.age = 1;
            this.needsWater = false;
            this.bugs = [];
            this.water = 0;
            this.duenger = 0;
            this.row = _row;
            this.collum = _collum;
        }
        // Wachsen-Funktion der Pflanzen und welches Bild zu welchem Stadium gehört
        grow() {
            if (this.age < this.finalAge && this.needsWater == false && this.bugs.length == 0) {
                this.age++;
                if (this.age == this.age1) {
                    this.image = this.images[1];
                    console.log(GardenSimulation.allPlants[1]);
                }
                if (this.age == this.age2) {
                    this.image = this.images[2];
                    console.log(GardenSimulation.allPlants[1]);
                }
                if (this.age == this.finalAge) {
                    console.log("Ich bin alt");
                    //this.clear(this.plant);
                    //timer();
                }
            }
        }
        // Funktion, wann die Pflanze Wasser braucht und welches Wasserbild gezeigt wird
        plantNeedsWater() {
            this.water++;
            console.log(this.water + "wasserstand");
            if (this.water < this.waterLevel1) {
                this.waterImage = this.waterImages[0];
            }
            if (this.waterLevel1 <= this.water && this.water < this.waterLevel2) {
                this.waterImage = this.waterImages[1];
            }
            if (this.waterLevel2 <= this.water && this.water < this.waterLevel3) {
                this.waterImage = this.waterImages[2];
            }
            if (this.waterLevel3 <= this.water && this.water < this.waterLevelMax) {
                this.waterImage = this.waterImages[3];
            }
            if (this.waterLevelMax == this.water) {
                console.log("Wasser Test");
                this.waterImage = this.waterImages[0];
                this.clear(this.plant);
                this.water = 0;
            }
            // this.draw();
        }
        // Funktion, wann die Pflanze Dünger braucht und wwelches Düngerbild gezeigt wird
        plantNeedsDuenger() {
            this.duenger++;
            console.log(this.duenger + "Düngerrrr");
            if (this.duenger < this.duengerLevel1) {
                this.test = this.fertiImages[0];
            }
            if (this.duengerLevel1 <= this.duenger && this.duenger < this.duengerLevel2) {
                this.test = this.fertiImages[1];
            }
            if (this.duengerLevel2 <= this.duenger && this.duenger < this.duengerLevel3) {
                this.test = this.fertiImages[2];
            }
            if (this.duengerLevel3 <= this.duenger && this.duenger < this.duengerLevelMax) {
                this.test = this.fertiImages[3];
            }
            if (this.duengerLevelMax == this.duenger) {
                console.log("Dünger Test");
                this.test = this.fertiImages[0];
                this.clear(this.plant);
                this.duenger = 0;
            }
            // this.draw();
        }
        // Pflanze wird gewässert und der Wasserstand wird erneuert
        plantWatering() {
            if (this.water > this.waterLevel1) {
                this.water = this.water - this.waterLevel1;
                this.plantNeedsWater();
                console.log(this.water + "wasserstand NEU");
            }
        }
        // Pflanze wird gedüngert und der Düngerstand wird erneuert
        plantDuengering() {
            if (this.duenger > this.duengerLevel1) {
                this.duenger = this.duenger - this.duengerLevel1;
                this.plantNeedsDuenger();
                console.log(this.duenger + "düngerstand NEU");
            }
        }
        // Bug wird getötet durch Pestizide = funktioniert nicht
        getsBug() {
            if (this.bugs.length > 0) {
                if (this.bug.position <= 0 && GardenSimulation.Player.pesticidesMenge > 0) {
                    GardenSimulation.Player.pesticidesMenge--;
                    this.bugs = [];
                }
            }
            //     let randomBug: number = Math.round(Math.random() * 5);
            //     //let numberPests: number = this.getRandomInt(1, 3);
            //     if (randomBug == 0) {
            //         let bug: Bug = new Bug ();
            //         this.bugs.push(bug);
            //     }
        }
        // killBug(): void {
        //     Player.pesticidesMenge--;
        //     this.bugs = [];
        // }
        draw() {
            GardenSimulation.cr2.resetTransform();
            GardenSimulation.cr2.translate(this.row * 100, this.collum * 100);
            GardenSimulation.cr2.drawImage(this.image, 10, 0);
            if (this.waterImage !== undefined) {
                GardenSimulation.cr2.drawImage(this.waterImage, 10, 0);
            }
            if (this.test !== undefined) {
                GardenSimulation.cr2.drawImage(this.test, 10, 0);
            }
            console.log(this.row, this.collum + "draw Plant test test");
        }
        // Bug wird erstellt 
        createBug() {
            GardenSimulation.allBugs.push(new GardenSimulation.Bug(this.row, this.collum));
        }
        // Pflanzen werden geräumt 
        clear(_plant) {
            GardenSimulation.allPlants.splice(GardenSimulation.allPlants.findIndex((_plant) => _plant == this.plant), 1);
            this.bugs = [];
            GardenSimulation.timer();
        }
    }
    GardenSimulation.Plant = Plant;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Plant.js.map