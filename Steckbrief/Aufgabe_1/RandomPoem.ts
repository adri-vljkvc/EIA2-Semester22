namespace A01_RandomPoem {

    let subjects: string[]  = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    
    // console.log(subjects);
    // console.log(verbs);
    // console.log(objects);


    for (let i: number = subjects.length; i > 0; i--) {
        let endVerse: string = getVerse(subjects, verbs, objects);
        console.log(endVerse);
    }

    function getVerse(_subject: string[], _verb: string[], _object: string[]): string {

        let vers: string = "";
        let randomNumberSubject: number = Math.floor(Math.random() * _subject.length);
        // console.log(randomNumberSubject);
        let randomNumberVerb: number = Math.floor(Math.random() * _verb.length);
        let randomNumberObject: number = Math.floor(Math.random() * _object.length);
        let line: string = _subject[randomNumberSubject] + " " + _verb[randomNumberVerb] + " " + _object[randomNumberObject];
        // console.log(line);

        vers += _subject.splice(randomNumberSubject, 1)[0] + " " + _verb.splice(randomNumberVerb, 1)[0] + " " +  _object.splice(randomNumberObject, 1);
        // console.log(_subject.splice(randomNumberSubject));    
        return(line);
    }

}

