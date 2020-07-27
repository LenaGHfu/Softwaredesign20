var subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
var verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
var objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
var poems = [];
for (var i = 0; i < 6; i++) {
    poems.push(getVerse());
}
while (poems.length > 0) {
    document.body.innerHTML += "<p>" + poems.pop() + "</p>";
}
function getVerse() {
    var verse = "";
    if (subjects.length > 0) {
        var indexes = [getRandomInt(subjects.length), getRandomInt(verbs.length), getRandomInt(objects.length)];
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
