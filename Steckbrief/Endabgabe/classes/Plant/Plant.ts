namespace GardenSimulation {

    export abstract class Plant {
        static image: HTMLImageElement;
        static price: number;
        static priceNeu: number;

        static seedamount: number;
        verkaufPrice: number;
        type: string; 

        images: HTMLImageElement [];
        image: HTMLImageElement;
        waterImages: HTMLImageElement [] = [Load.empty, Load.tropfenS, Load.tropfenM, Load.tropfenB];
        waterImage: HTMLImageElement;
        fertiImages: HTMLImageElement [] = [Load.empty, Load.fertilizS, Load.fertilizM, Load.fertilizB];
        test: HTMLImageElement;

        currentcolor: string;
        row: number;
        collum: number;
        age: number = 1;
        finalAge: number;
        age1: number;
        age2: number;
        price: number;
        needsWater: boolean = false;

        bugs: Bug[] = [];
        bug: Bug;

        plant: Plant;

        water: number = 0;
        waterLevel1: number;
        waterLevel2: number;
        waterLevel3: number;
        waterLevelMax: number;

        duenger: number = 0;
        duengerLevel1: number;
        duengerLevel2: number;
        duengerLevel3: number;
        duengerLevelMax: number;

        public constructor(_row: number, _collum: number) {
            this.row = _row;
            this.collum = _collum;
        }

        // Wachsen-Funktion der Pflanzen und welches Bild zu welchem Stadium gehört
        grow(): void {
            if (this.age < this.finalAge && this.needsWater == false && this.bugs.length == 0) {
                this.age++;
                if (this.age == this.age1) {
                    this.image = this.images[1];
                    console.log(allPlants[1]);
                }
                if (this.age == this.age2) {
                    this.image = this.images[2];
                    console.log(allPlants[1]);
                }
                if (this.age == this.finalAge) {
                    console.log("Ich bin alt");
                    //this.clear(this.plant);
                    //timer();
                }
            }
        }

        // Funktion, wann die Pflanze Wasser braucht und welches Wasserbild gezeigt wird
        plantNeedsWater(): void {
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
        plantNeedsDuenger(): void {
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
        plantWatering(): void {
            if (this.water > this.waterLevel1) {
                this.water = this.water - this.waterLevel1;
                this.plantNeedsWater();
                console.log(this.water + "wasserstand NEU");
            }
        }

        // Pflanze wird gedüngert und der Düngerstand wird erneuert
        plantDuengering(): void {
            if (this.duenger > this.duengerLevel1) {
                this.duenger = this.duenger - this.duengerLevel1;
                this.plantNeedsDuenger();
                console.log(this.duenger + "düngerstand NEU");

            }
        }

        // Bug wird getötet durch Pestizide = funktioniert nicht
        getsBug(): void {
            
            if (this.bugs.length > 0) {
                if (this.bug.position <= 0 && Player.pesticidesMenge > 0) {
                    Player.pesticidesMenge--;
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



        draw(): void {
            cr2.resetTransform();
            cr2.translate(this.row * 100, this.collum * 100);
            cr2.drawImage(this.image, 10, 0);
            if (this.waterImage !== undefined) {
                cr2.drawImage(this.waterImage, 10, 0);
            }
            if (this.test !== undefined) {
                cr2.drawImage(this.test, 10, 0);
            }
            console.log(this.row, this.collum + "draw Plant test test");
        }

        // Bug wird erstellt 
        createBug(): void {
            allBugs.push(new Bug(this.row, this.collum));
        }

        // Pflanzen werden geräumt 
        clear(_plant: Plant): void {
            allPlants.splice(allPlants.findIndex((_plant) => _plant == this.plant), 1); 
            this.bugs = [];
            timer();

        }

    }
}