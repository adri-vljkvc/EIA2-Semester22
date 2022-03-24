var A01_RandomPoem;
(function (A01_RandomPoem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    // console.log(subjects);
    // console.log(verbs);
    // console.log(objects);
    for (let i = subjects.length; i > 0; i--) {
        let endVerse = getVerse(subjects, verbs, objects);
        console.log(endVerse);
    }
    function getVerse(_subject, _verb, _object) {
        let vers = "";
        let randomNumberSubject = Math.floor(Math.random() * _subject.length);
        // console.log(randomNumberSubject);
        let randomNumberVerb = Math.floor(Math.random() * _verb.length);
        let randomNumberObject = Math.floor(Math.random() * _object.length);
        let line = _subject[randomNumberSubject] + " " + _verb[randomNumberVerb] + " " + _object[randomNumberObject];
        // console.log(line);
        vers += _subject.splice(randomNumberSubject, 1)[0] + " " + _verb.splice(randomNumberVerb, 1)[0] + " " + _object.splice(randomNumberObject, 1);
        // console.log(_subject.splice(randomNumberSubject));    
        return (line);
    }
})(A01_RandomPoem || (A01_RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map