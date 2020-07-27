let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
let poems: string[] = [];
for (let i = 0; i < 6; i++) {
    poems.push(getVerse());
}


while (poems.length > 0) {
    document.body.innerHTML += "<p>" + poems.pop() + "</p>"
}


function getVerse() {
    let verse: string = ""
    if (subjects.length > 0) {
        let indexes = [getRandomInt(subjects.length), getRandomInt(verbs.length), getRandomInt(objects.length)]
        verse += subjects[indexes[0]] + " " + verbs[indexes[1]] + " " + objects[indexes[2]];
        subjects.splice(indexes[0], 1);
        verbs.splice(indexes[1], 1);
        objects.splice(indexes[2], 1);
    }
    return verse;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}