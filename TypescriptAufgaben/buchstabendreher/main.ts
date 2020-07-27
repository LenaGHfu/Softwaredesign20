

let text: string = prompt('Bitte einen Satz eingeben.');

document.body.innerHTML += "<p>" + text + "</p><br>"
document.body.innerHTML += "<p>" + reverseSentence(text) + "</p>"
document.body.innerHTML += "<p>" + reverseWords(text) + "</p>"
document.body.innerHTML += "<p>" + reverseLetters(text) + "</p>"



function reverseSentence(text: string) {
    let splitText: string[] = text.split(" ")
    let result: string = "";
    for (let word of splitText) {
        let chars = word.split('');
        chars.reverse()
        result += chars.join('')+ " "
    }
    return result
}

function reverseWords(text: string) {
    let splitText: string[] = text.split(" ")
    let result: string = "";
    splitText.reverse()
    for (let word of splitText) {
        result += word + " ";
    }
    return result
}

function reverseLetters(text: string) {
    return reverseSentence(reverseWords(text))
}