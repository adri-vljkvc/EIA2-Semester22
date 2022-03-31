var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad);
    let body;
    let span;
    let div0;
    let div1;
    function handleLoad(_event) {
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
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        span.innerHTML = "x = " + _event.clientX + "<br>" + "y = " + _event.clientY + "<br>";
        span.innerHTML += "target: " + _event.target;
        span.style.left = (_event.clientX + 10) + "px";
        span.style.top = (_event.clientY + 15) + "px";
    }
    function handleMouseMove(_event) {
        setInfoBox(_event);
    }
    function logInfo(_event) {
        console.log("eventType" + _event.type);
        console.log("target", _event.target);
        console.log("currentTarget", _event.currentTarget);
        console.log("wholeEvent", _event);
    }
    function handleClick(_event) {
        logInfo(_event);
    }
    function handleKeyup(_event) {
        logInfo(_event);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=Event_Inspector.js.map