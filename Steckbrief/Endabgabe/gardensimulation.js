var GardenSimulation;
(function (GardenSimulation) {
    //  Zum zeurst Inhalt laden
    window.addEventListener("load", hdlLoad);
    GardenSimulation.allFields = [];
    GardenSimulation.allPlants = [];
    GardenSimulation.player = new GardenSimulation.Player();
    GardenSimulation.time = 0;
    GardenSimulation.animationTime = 0;
    GardenSimulation.allBugs = [];
    GardenSimulation.fertilizeMenge = 0;
    GardenSimulation.pestizideMenge = 0;
    let fertilizePreis = 10;
    let pestizidePreis = 5;
    let fertilizePreisNeu;
    let pestizidePreisNeu;
    let gameField;
    let h1;
    let formValues;
    let moneyChange;
    // HdlLoad-Funktion zum Laden vom Feld und Startbutton
    function hdlLoad() {
        GardenSimulation.Load.loading();
        let assets = document.querySelector("#assets");
        assets.setAttribute("style", "display: none");
        gameField = document.querySelector("#gameField");
        gameField.style.visibility = ("hidden");
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", buildField);
    }
    // Funktion vom Laden vom Spielfeld 
    function buildField() {
        getFormSettings();
        update();
        createGameButtons();
        createGardenField();
        startTimer();
        startTimerShop();
        let h1 = document.querySelector("h1");
        h1.style.visibility = ("hidden");
        gameField.style.visibility = ("visible");
        let formData = document.querySelector("#settings");
        formData.setAttribute("style", "display:none");
    }
    // Funktion für die einzelnen Felder
    function createGardenField() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 10; j++) {
                GardenSimulation.allFields.push(new GardenSimulation.Field(j, i));
            }
        }
        for (let field of GardenSimulation.allFields) {
            field.draw();
        }
    }
    // verschiedenen Buttons für Interaktionen
    function createGameButtons() {
        GardenSimulation.canvas = document.querySelector("canvas");
        GardenSimulation.cr2 = GardenSimulation.canvas.getContext("2d");
        GardenSimulation.cr2.fillStyle = "red";
        GardenSimulation.cr2.fillRect(0, 0, 100, 100);
        GardenSimulation.canvas.height = 400;
        GardenSimulation.canvas.width = 4000;
        GardenSimulation.canvas.addEventListener("click", (evt) => { getMousePosition(evt); });
        let buyBtn1 = document.querySelector("#buyKarotten");
        let buyBtn2 = document.querySelector("#buyMelone");
        let buyBtn3 = document.querySelector("#buyRadieschen");
        let buyBtn4 = document.querySelector("#buySalat");
        let buyBtn5 = document.querySelector("#buySellerie");
        let buyfertilize = document.querySelector("#buyFertilize");
        let buypestizide = document.querySelector("#buyPesticide");
        // Durch Klick kann Spieler Sachen kaufen
        buyBtn1.addEventListener("click", () => GardenSimulation.player.buy(buyBtn1.value));
        buyBtn2.addEventListener("click", () => GardenSimulation.player.buy(buyBtn2.value));
        buyBtn3.addEventListener("click", () => GardenSimulation.player.buy(buyBtn3.value));
        buyBtn4.addEventListener("click", () => GardenSimulation.player.buy(buyBtn4.value));
        buyBtn5.addEventListener("click", () => GardenSimulation.player.buy(buyBtn5.value));
        // Durch Kauf von Fertilizer und Pestiziden werden diese aufgestocked
        buyfertilize.addEventListener("click", stackfertilize);
        buypestizide.addEventListener("click", stackpesticide);
        let seedButton1 = document.querySelector("#s1");
        let seedButton2 = document.querySelector("#s2");
        let seedButton3 = document.querySelector("#s3");
        let seedButton4 = document.querySelector("#s4");
        let seedButton5 = document.querySelector("#s5");
        let harvestButton = document.querySelector("#h");
        let waterButton = document.querySelector("#w");
        let fertilizeButton = document.querySelector("#f");
        let pesticideButton = document.querySelector("#p");
        // Durch Klick kann Spieler Sachen pflanzen
        seedButton1.addEventListener("click", () => GardenSimulation.player.plant(seedButton1.value));
        seedButton2.addEventListener("click", () => GardenSimulation.player.plant(seedButton2.value));
        seedButton3.addEventListener("click", () => GardenSimulation.player.plant(seedButton3.value));
        seedButton4.addEventListener("click", () => GardenSimulation.player.plant(seedButton4.value));
        seedButton5.addEventListener("click", () => GardenSimulation.player.plant(seedButton5.value));
        // Durch Klick kann Spieler Sachen wässer, ernten usw.
        harvestButton.addEventListener("click", GardenSimulation.player.harvest);
        waterButton.addEventListener("click", GardenSimulation.player.water);
        fertilizeButton.addEventListener("click", GardenSimulation.player.fertilize);
        pesticideButton.addEventListener("click", GardenSimulation.player.pesticide);
    }
    // Maus Position wird ermittelt für das betroffene Feld
    function getMousePosition(_evt) {
        let rect = GardenSimulation.canvas.getBoundingClientRect();
        GardenSimulation.mX = _evt.clientX - rect.left;
        GardenSimulation.mY = _evt.clientY - rect.top;
        for (let field of GardenSimulation.allFields) {
            field.isHit(GardenSimulation.mX, GardenSimulation.mY);
        }
    }
    // Formular am Anfang ausgewertet
    function getFormSettings() {
        formValues = new FormData(document.forms[0]);
        GardenSimulation.money = Number(formValues.get("capital"));
        moneyChange = Number(formValues.get("schwankung"));
    }
    // Timer der läuft während dem Spiel
    function startTimer() {
        setInterval(timer, 1000);
    }
    function timer() {
        GardenSimulation.time++;
        console.log(GardenSimulation.time);
        // cr2.clearRect(0, 0, canvas.width, canvas.height);
        // createGardenField();
        for (let field of GardenSimulation.allFields) {
            field.draw();
        }
        // Timer für Bedürfnisse von Pflanze
        GardenSimulation.cr2.resetTransform();
        for (let plant of GardenSimulation.allPlants) {
            plant.grow();
            plant.plantNeedsWater();
            plant.plantNeedsDuenger();
            plant.draw();
            random(plant);
        }
        for (let pest of GardenSimulation.allBugs) {
            pest.draw();
        }
        document.querySelector("#money").innerHTML = "Money: " + GardenSimulation.money + " €";
    }
    GardenSimulation.timer = timer;
    // Random event, dass random Pflanze von Bug befallen wird
    function random(_plant) {
        let randomEvent = Math.random() * 60;
        if (randomEvent < 2) {
            _plant.createBug();
        }
    }
    // Funktion vom Timer vom Shop Preiänderung
    function startTimerShop() {
        setInterval(update, 3000);
    }
    GardenSimulation.startTimerShop = startTimerShop;
    // Fertilizer werden aufezählt
    function stackfertilize() {
        GardenSimulation.fertilizeMenge++;
        updateSeedAmount();
    }
    // Pestizide werden aufgezählt
    function stackpesticide() {
        GardenSimulation.pestizideMenge++;
        updateSeedAmount();
    }
    // Preis wird durch random geändert
    function update() {
        GardenSimulation.Karotte.priceNeu = GardenSimulation.Karotte.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Melone.priceNeu = GardenSimulation.Melone.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Radish.priceNeu = GardenSimulation.Radish.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Salat.priceNeu = GardenSimulation.Salat.price + (Math.floor(Math.random() * moneyChange));
        GardenSimulation.Sellerie.priceNeu = GardenSimulation.Sellerie.price + (Math.floor(Math.random() * moneyChange));
        fertilizePreisNeu = fertilizePreis + (Math.floor(Math.random() * moneyChange));
        pestizidePreisNeu = pestizidePreis + (Math.floor(Math.random() * moneyChange));
        updatePrice();
    }
    // Random IntZahl
    function getRandomInt(_min, _max) {
        let min = Math.ceil(_min);
        let max = Math.floor(_max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    GardenSimulation.getRandomInt = getRandomInt;
    // Geänderter Preis wird im Shop geupdated
    function updatePrice() {
        document.querySelector("#karottePrice").innerHTML = GardenSimulation.Karotte.priceNeu.toString() + "€";
        document.querySelector("#melonePrice").innerHTML = GardenSimulation.Melone.priceNeu.toString() + "€";
        document.querySelector("#radischenPrice").innerHTML = GardenSimulation.Radish.priceNeu.toString() + "€";
        document.querySelector("#salatPrice").innerHTML = GardenSimulation.Salat.priceNeu.toString() + "€";
        document.querySelector("#selleriePrice").innerHTML = GardenSimulation.Sellerie.priceNeu.toString() + "€";
        document.querySelector("#FertilizePrice").innerHTML = pestizidePreisNeu.toString() + "€";
        document.querySelector("#pesticidePrice").innerHTML = fertilizePreisNeu.toString() + "€";
    }
    // Geänderte Anzahl im Inventar wird geupdatet
    function updateSeedAmount() {
        document.querySelector("#karotteMenge").innerHTML = GardenSimulation.Karotte.seedamount.toString();
        document.querySelector("#meloneMenge").innerHTML = GardenSimulation.Melone.seedamount.toString();
        document.querySelector("#radieschenMenge").innerHTML = GardenSimulation.Radish.seedamount.toString();
        document.querySelector("#salatMenge").innerHTML = GardenSimulation.Salat.seedamount.toString();
        document.querySelector("#sellerieMenge").innerHTML = GardenSimulation.Sellerie.seedamount.toString();
        document.querySelector("#FertilizeMenge").innerHTML = GardenSimulation.fertilizeMenge.toString();
        document.querySelector("#pesticideMenge").innerHTML = GardenSimulation.pestizideMenge.toString();
    }
    GardenSimulation.updateSeedAmount = updateSeedAmount;
})(GardenSimulation || (GardenSimulation = {}));
//# sourceMappingURL=gardensimulation.js.map