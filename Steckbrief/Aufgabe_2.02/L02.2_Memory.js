var L03_Sequenzmemory;
(function (L03_Sequenzmemory) {
    let cardArray = [];
    let cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardValue = [];
    let pairAmount;
    let pairFound = 0;
    let gameField;
    let cardContainer = [];
    let startButton;
    let divMenu;
    let winMessage;
    let seconds = 0;
    let minutes = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        gameField = document.querySelector("#gameField");
        gameField.classList.add("visible");
        startButton = document.querySelector("#startButton");
        divMenu = document.querySelector("#menu");
        divMenu.addEventListener("submit", handleChange);
        winMessage = document.querySelector("#winMessage");
        winMessage.classList.add("visible");
    }
    // Kartenanzahl-Form auswerten = Kartenanzahl generieren
    function handleChange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]);
        cardValue = [];
        for (let thisGame of formData) {
            cardValue.push(String(thisGame[1]));
        }
        startGame();
    }
    // Spiel starten -> Spielfeld anzeigen
    function startGame() {
        divMenu.classList.add("hidden");
        startButton.classList.add("hidden");
        gameField.classList.add("show");
        pairAmount = Number(cardValue[0]);
        for (let index = 0; index < 2; index++) {
            for (let x = 0; x < pairAmount; x++) {
                cardArray.push(cardNumber[x]);
            }
        }
        // Kartengenerierung 
        cardArray.sort(() => 0.5 - Math.random());
        gameField.innerHTML = "";
        for (let index = 0; index < cardArray.length; index++) {
            let card = document.createElement(thisElement());
            gameField.style.background = "lightpink";
            card.style.width = "100px";
            card.style.height = "125px";
            card.style.background = "black";
            card.style.color = "black";
            card.innerHTML = "<span>" + cardArray[index] + "</span";
            gameField.appendChild(card);
            card.addEventListener("click", flipCard);
            let allSpans = document.querySelectorAll("span");
            allSpans[index].classList.add("visible");
        }
        function thisElement() {
            return "div";
        }
        startTimer();
    }
    // Timer starten
    function startTimer() {
        setInterval(timer, 1000);
    }
    // Timer generierung    
    function timer() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (seconds < 10 && minutes < 10)
            document.querySelector("#timer").innerHTML = "0" + minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes < 10)
            document.querySelector("#timer").innerHTML = "0" + minutes + ":" + seconds;
        else if (seconds < 10 && minutes >= 10)
            document.querySelector("#timer").innerHTML = minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes >= 10)
            document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
    }
    // Karte umdrehen bei Klick
    function flipCard(_event) {
        let target = _event.target;
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
    function compareCards() {
        let spanValue0 = cardContainer[0].querySelector("span").innerHTML;
        let spanValue1 = cardContainer[1].querySelector("span").innerHTML;
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
    function winCheck() {
        if (pairFound == pairAmount) {
            winMessage.classList.add("show");
            document.querySelector("#win").innerHTML = "You won! It took you: <br>  " + minutes + " minutes and " + seconds + " seconds " + "! <br> If you want to play again click the Button!";
            let timer = document.getElementById("timer");
            timer.remove();
            let gameField = document.getElementById("gameField");
            gameField.remove();
        }
    }
})(L03_Sequenzmemory || (L03_Sequenzmemory = {}));
//# sourceMappingURL=L02.2_Memory.js.map