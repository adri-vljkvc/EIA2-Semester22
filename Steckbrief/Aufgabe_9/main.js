var A09_1_OldMcDonald;
(function (A09_1_OldMcDonald) {
    let headline;
    let startButton;
    let generalLyrics;
    let animalCharacteristics;
    let animalLyrics;
    let foodSupplies;
    let groceryList;
    let restartButton;
    let dog;
    let cat;
    let sheep;
    let cow;
    let chicken;
    let macDonaldsAnimals;
    let currentSupplies;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
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
    function farmSettings() {
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
        let suppliesHeadline = document.createElement("h3");
        suppliesHeadline.innerHTML = "Food Supplies";
        document.body.appendChild(generalLyrics);
        document.body.appendChild(animalCharacteristics);
        document.body.appendChild(animalLyrics);
        document.body.appendChild(foodSupplies);
        foodSupplies.appendChild(suppliesHeadline);
        createAnimals();
        createFoodSupplies();
        farm();
        setTimeout(function () {
            farm();
            setTimeout(function () {
                farm();
                setTimeout(function () {
                    endFarm();
                }, 7000);
            }, 7000);
        }, 7000);
    }
    function createAnimals() {
        cat = new A09_1_OldMcDonald.Animal("Catto", "cat", "fish", "meow", 1);
        dog = new A09_1_OldMcDonald.Animal("Doggo", "dog", "meat", "woof", 2);
        sheep = new A09_1_OldMcDonald.Animal("Floof", "sheep", "hay", "mäh", 5);
        cow = new A09_1_OldMcDonald.Animal("Milka", "cow", "grass", "moo", 10);
        chicken = new A09_1_OldMcDonald.Animal("Chimcken", "chicken", "corn", "cuh", 3);
        macDonaldsAnimals = [cat, dog, sheep, cow, chicken];
    }
    function createFoodSupplies() {
        currentSupplies = new Map();
        currentSupplies.set("meat", getRandomNumber(2, 10));
        currentSupplies.set("fish", getRandomNumber(3, 10));
        currentSupplies.set("wheat", getRandomNumber(3, 10));
        currentSupplies.set("grass", getRandomNumber(5, 20));
        currentSupplies.set("corn", getRandomNumber(1, 10));
    }
    function farm() {
        let currentAnimal = macDonaldsAnimals[getRandomNumber(0, macDonaldsAnimals.length)];
        currentAnimal.eat(currentSupplies);
        refreshSupplies();
        refreshAnimalCharacteristics(currentAnimal);
        refreshAnimalLyrics(currentAnimal);
    }
    function refreshSupplies() {
        let supplyString = "";
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
    function refreshAnimalCharacteristics(currentAnimal) {
        let characteristics = "";
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
    function refreshAnimalLyrics(currentAnimal) {
        let lyricsOfAnimal = "";
        lyricsOfAnimal = currentAnimal.lyrics;
        animalLyrics.innerHTML = lyricsOfAnimal;
    }
    function endFarm() {
        generalLyrics.remove();
        animalCharacteristics.remove();
        animalLyrics.remove();
        foodSupplies.remove();
        groceryList = document.createElement("span");
        groceryList.classList.add("grocery");
        let groceries = "";
        groceries += "Old MacDonald needs to restock these things:";
        groceries += "<br>";
        groceries += "<br>";
        currentSupplies.forEach((value, key) => {
            if (value <= 1) {
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
    function restartFunction() {
        document.body.innerHTML = "";
        farmSettings();
    }
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
})(A09_1_OldMcDonald || (A09_1_OldMcDonald = {}));
//# sourceMappingURL=main.js.map