namespace GardenSimulation {
//  Zum zeurst Inhalt laden
window.addEventListener("load", hdlLoad);

// exportieren aller Variablen
export let canvas: HTMLCanvasElement;
export let cr2: CanvasRenderingContext2D;
export let allFields: Field[] = [];
export let allPlants: Plant[] = [];
export let player: Player = new Player();
export let mX: number;
export let mY: number;
export let time: number = 0;
export let animationTime: number = 0;
export let allBugs: Bug[] = [];

export let fertilizeMenge: number = 0;
export let pestizideMenge: number = 0;

let fertilizePreis: number = 10;
let pestizidePreis: number = 5;

let fertilizePreisNeu: number;
let pestizidePreisNeu: number;

let gameField: HTMLDivElement;
let h1: HTMLElement;

let formValues: FormData;
export let money: number;
let moneyChange: number;

// HdlLoad-Funktion zum Laden vom Feld und Startbutton
function hdlLoad(): void {
    Load.loading();

    let assets: HTMLDivElement = document.querySelector("#assets");
    assets.setAttribute("style", "display: none");

    gameField = document.querySelector("#gameField");
    gameField.style.visibility = ("hidden");

    let startButton: HTMLButtonElement = document.querySelector("#startButton");
    startButton.addEventListener("click", buildField);
}

// Funktion vom Laden vom Spielfeld 
function buildField(): void {
    getFormSettings();
    update();
    createGameButtons();
    createGardenField(); 
    startTimer();
    startTimerShop();

    let h1: HTMLElement = document.querySelector("h1");
    h1.style.visibility = ("hidden");


    gameField.style.visibility = ("visible");

    let formData: HTMLDivElement = document.querySelector("#settings");
    formData.setAttribute("style", "display:none");
}

// Funktion für die einzelnen Felder
function createGardenField(): void {
    for (let i: number = 0; i < 4; i++) {
        for (let j: number = 0; j < 10; j++) {
            allFields.push(new Field(j, i));
        }
    }
    for (let field of allFields) {
        field.draw();
    }
}

// verschiedenen Buttons für Interaktionen
function createGameButtons(): void {
    canvas = document.querySelector("canvas");
    cr2 = canvas.getContext("2d");
    cr2.fillStyle = "red";
    cr2.fillRect(0, 0, 100, 100);
    canvas.height = 400;
    canvas.width = 4000;
    canvas.addEventListener("click", (evt) => {getMousePosition(evt); });

    let buyBtn1: HTMLInputElement = document.querySelector("#buyKarotten");
    let buyBtn2: HTMLInputElement = document.querySelector("#buyMelone");
    let buyBtn3: HTMLInputElement = document.querySelector("#buyRadieschen");
    let buyBtn4: HTMLInputElement = document.querySelector("#buySalat");
    let buyBtn5: HTMLInputElement = document.querySelector("#buySellerie");
    let buyfertilize: HTMLInputElement = document.querySelector("#buyFertilize");
    let buypestizide: HTMLInputElement = document.querySelector("#buyPesticide");

    // Durch Klick kann Spieler Sachen kaufen
    buyBtn1.addEventListener("click", () => player.buy(buyBtn1.value) );
    buyBtn2.addEventListener("click", () => player.buy(buyBtn2.value) );
    buyBtn3.addEventListener("click", () => player.buy(buyBtn3.value) );
    buyBtn4.addEventListener("click", () => player.buy(buyBtn4.value) );
    buyBtn5.addEventListener("click", () => player.buy(buyBtn5.value) );

    // Durch Kauf von Fertilizer und Pestiziden werden diese aufgestocked
    buyfertilize.addEventListener("click", stackfertilize);
    buypestizide.addEventListener("click", stackpesticide);

    let seedButton1: HTMLInputElement = document.querySelector("#s1");
    let seedButton2: HTMLInputElement = document.querySelector("#s2");
    let seedButton3: HTMLInputElement = document.querySelector("#s3");
    let seedButton4: HTMLInputElement = document.querySelector("#s4");
    let seedButton5: HTMLInputElement = document.querySelector("#s5");
    let harvestButton: HTMLInputElement = document.querySelector("#h");
    let waterButton: HTMLInputElement = document.querySelector("#w");
    let fertilizeButton: HTMLInputElement = document.querySelector("#f");
    let pesticideButton: HTMLInputElement = document.querySelector("#p");

    // Durch Klick kann Spieler Sachen pflanzen
    seedButton1.addEventListener("click", () => player.plant(seedButton1.value) );
    seedButton2.addEventListener("click", () => player.plant(seedButton2.value) );
    seedButton3.addEventListener("click", () => player.plant(seedButton3.value) );
    seedButton4.addEventListener("click", () => player.plant(seedButton4.value) );
    seedButton5.addEventListener("click", () => player.plant(seedButton5.value) );
   
    // Durch Klick kann Spieler Sachen wässer, ernten usw.
    harvestButton.addEventListener("click", player.harvest);
    waterButton.addEventListener("click", player.water);
    fertilizeButton.addEventListener("click", player.fertilize);
    pesticideButton.addEventListener("click", player.pesticide);
}

// Maus Position wird ermittelt für das betroffene Feld
function getMousePosition(_evt: MouseEvent): void {
    let rect: DOMRect = canvas.getBoundingClientRect();
    mX = _evt.clientX - rect.left;
    mY = _evt.clientY - rect.top;
    for (let field of allFields) {
        field.isHit(mX, mY);
    }
}

// Formular am Anfang ausgewertet
function getFormSettings(): void {
    formValues = new FormData(document.forms[0]);
    money = Number(formValues.get("capital"));
    moneyChange = Number(formValues.get("schwankung"));
}

// Timer der läuft während dem Spiel
function startTimer(): void {
    setInterval(timer, 1000);
}

export function timer(): void {
    time ++;
    console.log(time);
    // cr2.clearRect(0, 0, canvas.width, canvas.height);
    // createGardenField();
    for (let field of allFields) {
        field.draw();
    }
    
    // Timer für Bedürfnisse von Pflanze
    cr2.resetTransform();
    for (let plant of allPlants) {  
        plant.grow();
        plant.plantNeedsWater(); 
        plant.plantNeedsDuenger();
        plant.draw();
        random(plant);
    }
    for (let pest of allBugs) {
        pest.draw();
    }
    document.querySelector("#money").innerHTML = "Money: " + money + " €";
}

// Random event, dass random Pflanze von Bug befallen wird
function random(_plant: Plant): void {
    let randomEvent: number = Math.random() * 60;
    if (randomEvent < 2) {
        _plant.createBug();
    }
}

// Funktion vom Timer vom Shop Preiänderung
export function startTimerShop(): void {
    setInterval(update, 3000);
}

// Fertilizer werden aufezählt
function stackfertilize (): void {
    fertilizeMenge++;
    updateSeedAmount();

}

// Pestizide werden aufgezählt
function stackpesticide (): void {
    pestizideMenge++;
    updateSeedAmount();
}

// Preis wird durch random geändert
function update (): void {
    Karotte.priceNeu = Karotte.price + (Math.floor(Math.random() * moneyChange));
    Melone.priceNeu = Melone.price + (Math.floor(Math.random() * moneyChange));
    Radish.priceNeu = Radish.price + (Math.floor(Math.random() * moneyChange));
    Salat.priceNeu = Salat.price + (Math.floor(Math.random() * moneyChange));
    Sellerie.priceNeu = Sellerie.price + (Math.floor(Math.random() * moneyChange));
    fertilizePreisNeu = fertilizePreis + (Math.floor(Math.random() * moneyChange));
    pestizidePreisNeu = pestizidePreis + (Math.floor(Math.random() * moneyChange));
    updatePrice();
}

// Random IntZahl
export function getRandomInt(_min: number, _max: number): number {
    let min: number = Math.ceil(_min);
    let max: number = Math.floor(_max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Geänderter Preis wird im Shop geupdated
function updatePrice (): void {
    document.querySelector("#karottePrice").innerHTML = Karotte.priceNeu.toString() + "€";
    document.querySelector("#melonePrice").innerHTML = Melone.priceNeu.toString() + "€";
    document.querySelector("#radischenPrice").innerHTML = Radish.priceNeu.toString() + "€";
    document.querySelector("#salatPrice").innerHTML = Salat.priceNeu.toString() + "€";
    document.querySelector("#selleriePrice").innerHTML = Sellerie.priceNeu.toString() + "€";
    document.querySelector("#FertilizePrice").innerHTML = pestizidePreisNeu.toString() + "€";
    document.querySelector("#pesticidePrice").innerHTML = fertilizePreisNeu.toString() + "€";
}

// Geänderte Anzahl im Inventar wird geupdatet
export function updateSeedAmount(): void {
    document.querySelector("#karotteMenge").innerHTML = Karotte.seedamount.toString();
    document.querySelector("#meloneMenge").innerHTML = Melone.seedamount.toString();
    document.querySelector("#radieschenMenge").innerHTML = Radish.seedamount.toString();
    document.querySelector("#salatMenge").innerHTML = Salat.seedamount.toString();
    document.querySelector("#sellerieMenge").innerHTML = Sellerie.seedamount.toString();
    document.querySelector("#FertilizeMenge").innerHTML = fertilizeMenge.toString();
    document.querySelector("#pesticideMenge").innerHTML = pestizideMenge.toString();

}

}