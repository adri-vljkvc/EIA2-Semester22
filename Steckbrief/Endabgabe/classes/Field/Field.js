var GardenSimulation;
(function (GardenSimulation) {
    class Field {
        constructor(_row, _collum) {
            this.isClear = true;
            this.row = _row;
            this.collum = _collum;
        }
        // Welches Feld getroffen wurde durch Maus
        isHit(_mX, _mY) {
            if (_mX - 100 < this.row * 100 && _mX - 100 > this.row * 100 - 100 && _mY - 100 < this.collum * 100 && _mY - 100 > this.collum * 100 - 100) {
                switch (GardenSimulation.Player.task) {
                    // Spieler pflanzt erste Saat: Karotte und die Karottenmenge wird geupdated
                    case GardenSimulation.TASK.PLANTSEED1:
                        if (this.isClear == true && GardenSimulation.Karotte.seedamount >= 0) {
                            GardenSimulation.allPlants.push(new GardenSimulation.Karotte(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    // Spieler pflanzt zweite Saat: Melone und die Melonenmenge wird geupdated
                    case GardenSimulation.TASK.PLANTSEED2:
                        if (this.isClear == true && GardenSimulation.Melone.seedamount >= 0) {
                            console.log("seed 2");
                            GardenSimulation.allPlants.push(new GardenSimulation.Melone(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    // Spieler pflanzt dritte Saat: Radiesschen und die radiesschenmenge wird geupdated    
                    case GardenSimulation.TASK.PLANTSEED3:
                        if (this.isClear == true && GardenSimulation.Radish.seedamount >= 0) {
                            console.log("seed 3");
                            GardenSimulation.allPlants.push(new GardenSimulation.Radish(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    // Spieler pflanzt vierte Saat: Salat und die Salatmenge wird geupdated    
                    case GardenSimulation.TASK.PLANTSEED4:
                        if (this.isClear == true && GardenSimulation.Salat.seedamount >= 0) {
                            GardenSimulation.allPlants.push(new GardenSimulation.Salat(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    // Spieler pflanzt fünfte Saat: Sellerie und die Selelriemenge wird geupdated
                    case GardenSimulation.TASK.PLANTSEED5:
                        if (this.isClear == true && GardenSimulation.Sellerie.seedamount >= 0) {
                            GardenSimulation.allPlants.push(new GardenSimulation.Sellerie(this.row, this.collum));
                            this.plant = GardenSimulation.allPlants[GardenSimulation.allPlants.length - 1];
                            this.isClear = false;
                            GardenSimulation.updateSeedAmount();
                        }
                        break;
                    // Spieler erntet die Saat (falls Saat ausgewachsen ist) und Timer vom Shop geht los
                    case GardenSimulation.TASK.HARVEST:
                        if (this.isClear == false) {
                            if (this.plant.age >= this.plant.age2 && this.plant.age <= this.plant.finalAge) {
                                GardenSimulation.allPlants.splice(GardenSimulation.allPlants.findIndex((e) => e == this.plant), 1);
                                GardenSimulation.money = GardenSimulation.money + this.plant.verkaufPrice;
                                console.log(this.plant);
                                this.isClear = true;
                                //timer();
                                GardenSimulation.startTimerShop();
                            }
                        }
                        break;
                    // Spieler wässert die Pflanze
                    case GardenSimulation.TASK.WATER:
                        if (this.isClear == false) {
                            console.log("water");
                            this.plant.plantWatering();
                        }
                        break;
                    // Spieler düngert die Pflanze
                    case GardenSimulation.TASK.FERTILIZE:
                        if (GardenSimulation.fertilizeMenge > 0)
                            if (this.isClear == false) {
                                console.log("fertilize");
                                this.plant.plantDuengering();
                                GardenSimulation.fertilizeMenge--;
                                GardenSimulation.updateSeedAmount();
                            }
                        break;
                    // Versuch durch Pestizide Bug umzubringen, aber funktioniert nicht
                    // case TASK.PESTICIDE:
                    //     if (this.isClear == false) {
                    //         console.log("pesticide");
                    //         this.plant.killBug();
                    //     }
                    //     break;
                }
                this.draw();
                for (let plant of GardenSimulation.allPlants) {
                    plant.draw();
                }
            }
        }
        draw() {
            GardenSimulation.cr2.resetTransform();
            GardenSimulation.cr2.translate(this.row * 100, this.collum * 100);
            GardenSimulation.cr2.fillStyle = "#705E4E";
            GardenSimulation.cr2.fillRect(5, 5, 95, 95);
        }
    }
    GardenSimulation.Field = Field;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=Field.js.map