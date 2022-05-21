namespace A09_1_OldMcDonald {

    let headline: HTMLSpanElement;
    let startButton: HTMLButtonElement;
    let generalLyrics: HTMLSpanElement;
    let animalCharacteristics: HTMLSpanElement;
    let animalLyrics: HTMLSpanElement;
    let foodSupplies: HTMLSpanElement;
    let groceryList: HTMLSpanElement;
    let restartButton: HTMLButtonElement;


    let dog: Animal;
    let cat: Animal;
    let sheep: Animal;
    let cow: Animal;
    let chicken: Animal;
    let macDonaldsAnimals: Animal[];

    let currentSupplies: Map<string, number>;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        headline = document.createElement("span");
        headline.classList.add("headline");
        headline.innerHTML = "Welcome to old MacDonalds Farm";

        startButton = document.createElement("button");
        startButton.classList.add("startButton");
        startButton.innerHTML = "Start a new day!";

        document.body.appendChild(headline);
        document.body.appendChild(startButton);

        startButton.addEventListener("click", farmSettings);
    }

    function farmSettings(): void {
        headline.remove();
        startButton.remove();

        generalLyrics = document.createElement("span");
        generalLyrics.classList.add("genLyricsBox");
        generalLyrics.innerHTML = "Old MacDonald had a Farm E-I-E-I-O and on the farm ...";

        animalCharacteristics = document.createElement("span");
        animalCharacteristics.classList.add("animalCharact");

        animalLyrics = document.createElement("span");
        animalLyrics.classList.add("animalLyrics");

        foodSupplies = document.createElement("span");
        foodSupplies.classList.add("supplies");
        let suppliesHeadline: HTMLHeadingElement = document.createElement("h3");
        suppliesHeadline.innerHTML = "Food Supplies";

        document.body.appendChild(generalLyrics);
        document.body.appendChild(animalCharacteristics);
        document.body.appendChild(animalLyrics);
        document.body.appendChild(foodSupplies);
        foodSupplies.appendChild(suppliesHeadline);


        createAnimals();
        createFoodSupplies();
        farm();
        setTimeout(function (): void {
            farm(); 
            setTimeout(function (): void {
                farm();
                setTimeout(function (): void {
                    endFarm();
                },         7000);
            },         7000);
        },         7000); 
    }

    function createAnimals(): void {
        cat = new Animal("Catto", "cat", "fish", "meow", 1);
        dog = new Animal("Doggo", "dog", "meat", "woof", 2);
        sheep = new Animal("Floof", "sheep", "hay", "mäh", 5);
        cow = new Animal("Milka", "cow", "grass", "moo", 10);
        chicken = new Animal("Chimcken", "chicken", "corn", "cuh", 3);

        macDonaldsAnimals = [cat, dog, sheep, cow, chicken];

    }

    function createFoodSupplies(): void {
        currentSupplies = new Map();

        currentSupplies.set("meat", getRandomNumber(2, 10));
        currentSupplies.set("fish", getRandomNumber(3, 10));
        currentSupplies.set("wheat", getRandomNumber(3, 10));
        currentSupplies.set("grass", getRandomNumber(5, 20));
        currentSupplies.set("corn", getRandomNumber(1, 10));
    }


    function farm(): void {
        let currentAnimal: Animal = macDonaldsAnimals[getRandomNumber(0, macDonaldsAnimals.length)];
        currentAnimal.eat(currentSupplies);



        refreshSupplies();
        refreshAnimalCharacteristics(currentAnimal);
        refreshAnimalLyrics(currentAnimal);
    }

    function refreshSupplies(): void {
        let supplyString: string = "";
        supplyString += "Food supply: ";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "fish: ";
        supplyString += currentSupplies.get("fish");
        supplyString += " kg";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "meat: ";
        supplyString += currentSupplies.get("meat");
        supplyString += " kg";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "wheat: ";
        supplyString += currentSupplies.get("wheat");
        supplyString += " kg";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "grass: ";
        supplyString += currentSupplies.get("grass");
        supplyString += " kg";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "corn: ";
        supplyString += currentSupplies.get("corn");
        supplyString += " kg";

        foodSupplies.innerHTML = supplyString;
    }

    function refreshAnimalCharacteristics(currentAnimal: Animal): void {
        let characteristics: string = "";
        characteristics += "<br>";
        characteristics += "My name is " + currentAnimal.name;
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "I'm a " + currentAnimal.species;
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "I like to eat " + currentAnimal.food;
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "I make " + currentAnimal.sound;

        animalCharacteristics.innerHTML = characteristics;
    }

    function refreshAnimalLyrics(currentAnimal: Animal): void {
        let lyricsOfAnimal: string = "";
        lyricsOfAnimal = currentAnimal.lyrics;

        animalLyrics.innerHTML = lyricsOfAnimal;
    }

    function endFarm (): void {
        generalLyrics.remove();
        animalCharacteristics.remove();
        animalLyrics.remove();
        foodSupplies.remove();

        groceryList = document.createElement("span");
        groceryList.classList.add("grocery");

        let groceries: string = "";
        groceries += "Old MacDonald needs to restock these things:";
        groceries += "<br>";
        groceries += "<br>";

        currentSupplies.forEach(( value: number, key: string) => {
            if (value <= 1 ) {
                groceries += "-" + key;
                groceries += "<br>";
                groceries += "<br>";
            }
        });

        groceryList.innerHTML = groceries;

        restartButton = document.createElement("button");
        restartButton.classList.add("restart");
        restartButton.innerHTML = "New Day!";

        document.body.appendChild(groceryList);
        document.body.appendChild(restartButton);

        restartButton.addEventListener("click", restartFunction);
    }


    function restartFunction (): void {
        document.body.innerHTML = "";

        farmSettings();
    }


    function getRandomNumber(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

}