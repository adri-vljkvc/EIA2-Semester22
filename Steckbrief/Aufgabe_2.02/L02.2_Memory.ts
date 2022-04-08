namespace L03_Sequenzmemory {
      
    let cardArray: number[] = [];
    let cardNumber: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardValue: string[] = [];
    let pairAmount: number;
    let pairFound: number = 0;
    let gameField: HTMLElement;
    let cardContainer: HTMLElement[] = [];
    let startButton: HTMLElement;
    let divMenu: HTMLFormElement;
    let winMessage: HTMLElement;
    let seconds: number = 0;
    let minutes: number = 0;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        gameField = <HTMLDivElement>document.querySelector("#gameField");
        gameField.classList.add("visible");
        startButton = <HTMLElement>document.querySelector("#startButton");
        divMenu = <HTMLFormElement>document.querySelector("#menu");
        divMenu.addEventListener("submit", handleChange);
        winMessage = <HTMLSpanElement>document.querySelector("#winMessage");
        winMessage.classList.add("visible");
    }

    // Kartenanzahl-Form auswerten = Kartenanzahl generieren
    function handleChange(_event: Event): void {
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]);
        cardValue = [];
        for (let thisGame of formData) {
            cardValue.push(String(thisGame[1]));
        }
        startGame();
    }

    // Spiel starten -> Spielfeld anzeigen
    function startGame(): void {
        divMenu.classList.add("hidden");
        startButton.classList.add("hidden");
        gameField.classList.add("show");
        pairAmount = Number(cardValue[0]);

        for (let index: number = 0; index < 2; index++) {
            for (let x: number = 0; x < pairAmount; x++) { 
            cardArray.push(cardNumber[x]);
             }
        }

        // Kartengenerierung 
        cardArray.sort(() => 0.5 - Math.random());
        gameField.innerHTML = "";


        for (let index: number = 0; index < cardArray.length; index++) {
            let card: HTMLElement = <HTMLElement>document.createElement(thisElement());

            gameField.style.background = "lightpink";
            card.style.width = "100px";
            card.style.height = "125px";
            card.style.background = "black";
            card.style.color = "black";
            card.innerHTML = "<span>" + cardArray[index] + "</span";

            gameField.appendChild(card);
            card.addEventListener("click", flipCard);

            let allSpans: NodeListOf<HTMLElement> = document.querySelectorAll("span");
            allSpans[index].classList.add("visible");
        }
        function thisElement(): "div" {
            return "div";
        }
        startTimer();
    }

    // Timer starten
    function startTimer(): void {
        setInterval(timer, 1000);
    }

    // Timer generierung    
    function timer(): void {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }

        if (seconds < 10 && minutes < 10) document.querySelector("#timer").innerHTML = "0" + minutes + ":0" + seconds;

        else if (seconds >= 10 && minutes < 10) document.querySelector("#timer").innerHTML = "0" + minutes + ":" + seconds;
        else if (seconds < 10 && minutes >= 10) document.querySelector("#timer").innerHTML = minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes >= 10) document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
    }

    // Karte umdrehen bei Klick
    function flipCard(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement> _event.target;

        cardContainer.push(target);
        cardContainer[0].style.background = "white";
        cardContainer[0].querySelector("span").classList.remove("visible");

        if (cardContainer.length == 2) {
            cardContainer[1].style.background = "white";
            cardContainer[1].querySelector("span").classList.remove("visible");
            setTimeout(compareCards, 500);
        }

    }

    // Karten werden verglichen
    function compareCards(): void {
        let spanValue0: string = <string>cardContainer[0].querySelector("span").innerHTML;
        let spanValue1: string = <string>cardContainer[1].querySelector("span").innerHTML;
        if (spanValue0 == spanValue1) {
            cardContainer[0].classList.add("visible");
            cardContainer[1].classList.add("visible");
            cardContainer = [];
            window.alert("You found a pair!");

            pairFound++;
            winCheck();
        }
        else {
            cardContainer[0].style.background = "black";
            cardContainer[1].style.background = "black";
            cardContainer[0].querySelector("span").classList.add("visible");
            cardContainer[1].querySelector("span").classList.add("visible");
            cardContainer = [];

            window.alert("Thats not a pair!");
            setTimeout(compareCards, 2000);
  
        }
    }

    // Prüfen, ob man gewonnen hat
    function winCheck(): void {
        if (pairFound == pairAmount) {
            winMessage.classList.add("show");
            document.querySelector("#win").innerHTML = "You won! It took you: <br>  " + minutes + " minutes and " + seconds + " seconds " + "! <br> If you want to play again click the Button!";

            let timer: HTMLElement = document.getElementById("timer");
            timer.remove();
            let gameField: HTMLElement = document.getElementById("gameField");
            gameField.remove();

        }
    }    
}