var text = prompt('Bitte einen Satz eingeben.');
document.body.innerHTML += "<p>" + text + "</p><br>";
document.body.innerHTML += "<p>" + reverseSentence(text) + "</p>";
document.body.innerHTML += "<p>" + reverseWords(text) + "</p>";
document.body.innerHTML += "<p>" + reverseLetters(text) + "</p>";
function reverseSentence(text) {
    var splitText = text.split(" ");
    var result = "";
    for (var _i = 0, splitText_1 = splitText; _i < splitText_1.length; _i++) {
        var word = splitText_1[_i];
        var chars = word.split('');
        chars.reverse();
        result += chars.join('') + " ";
    }
    return result;
}
function reverseWords(text) {
    var splitText = text.split(" ");
    var result = "";
    splitText.reverse();
    for (var _i = 0, splitText_2 = splitText; _i < splitText_2.length; _i++) {
        var word = splitText_2[_i];
        result += word + " ";
    }
    return result;
}
function reverseLetters(text) {
    return reverseSentence(reverseWords(text));
}
