namespace L02_EventInspector {
    
    window.addEventListener("load", handleLoad);

    let body: HTMLElement;
    let span: HTMLSpanElement;
    let div0: HTMLDivElement; 
    let div1: HTMLDivElement;

    function handleLoad(_event: Event): void {
        console.log(_event);

        body = document.querySelector("body");
        div0 = document.querySelector(".div0");
        div1 = document.querySelector(".div1");
        span = document.querySelector("span");

        document.addEventListener("mousemove", handleMouseMove);

        div0.addEventListener("click", handleClick);
        div0.addEventListener("keyup", handleKeyup);

        div1.addEventListener("click", handleClick);
        div1.addEventListener("keyup", handleKeyup);

        document.addEventListener("click", handleClick);
        document.addEventListener("keyup", handleKeyup);

        body.addEventListener("click", handleClick);
        body.addEventListener("keyup", handleKeyup);

    }

    function setInfoBox (_event: MouseEvent): void {

        let x: number = _event.clientX;
        let y: number =  _event.clientY;

        span.innerHTML = "x = " + _event.clientX + "<br>" + "y = " + _event.clientY + "<br>";
        span.innerHTML += "target: " + _event.target;

        span.style.left = (_event.clientX + 10) + "px";
        span.style.top = (_event.clientY + 15) + "px";
    }

    function handleMouseMove (_event: MouseEvent): void {
        setInfoBox(_event);
    }

    function logInfo (_event: Event): void {
        console.log("eventType" + _event.type);
        console.log("target" , _event.target);
        console.log("currentTarget" , _event.currentTarget);
        console.log("wholeEvent" , _event);
        
    }

    function handleClick (_event: Event): void {
        logInfo(_event);
    }

    function handleKeyup (_event: Event): void {
        logInfo(_event);
    }

}