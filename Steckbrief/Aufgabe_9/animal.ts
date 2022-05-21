namespace A09_1_OldMcDonald {
    
    export class Animal {
        name: string;
        species: string;
        food: string;
        sound: string;
        lyrics: string;
        nHunger: number;
    
        constructor(_name: string, _species: string, _food: string, _sound: string, _nHunger: number) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.lyrics = "... he had a " + this.species + " E-I-E-I-O with a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there. Here a " + this.sound + " there a " + this.sound + " everywhere a " + this.sound + " " + this.sound + " old MacDonald had a Farm E-I-E-I-O.";
            this.nHunger = _nHunger;
        }
    
        eat(_supplies: Map<string, number>): void {
            let foodSupplies: number = _supplies.get(this.food)!;
            foodSupplies -= this.nHunger;
            _supplies.set(this.food, foodSupplies);
        }
    }
    
    }