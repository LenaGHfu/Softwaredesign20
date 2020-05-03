using System;

namespace Buchstabendreher
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Bitte einen kleinen Satz eingeben");
            Console.Write("> ");
            var text = Console.ReadLine();
            string letters = reverseLetters(text);
            string words = reverseWords(text);
            string sentence = reverseSentence(text);
            Console.WriteLine(sentence + "\n" + words + "\n" + letters);
        }

        static string reverseSentence(string text)
        {
            string[] splitText = text.Split(" "); /* Text wird in Wörter aufgeteilt*/
            string result = ""; /* String result wird erstellt*/
            foreach (string word in splitText) /*schleife iteriert durch jedes wort in splitText*/
            {
                char[] chars = word.ToCharArray(); /*wort wird in Buchstaben aufgeteilt*/
                Array.Reverse(chars); /*Buchstaben werden in umgekerter Reihenfolge angeordnet*/
                result += new string(chars) + " "; /*dem string result wird der kreierte string, sowie ein leerzeichen hinzugefügt*/

            }
            return result; /*übergibt an string sentence*/
        }

        static string reverseWords(string text)
        {
            string[] splitText = text.Split(" ");
            string result = "";
            Array.Reverse(splitText); /*Wörter werden in umgekehrter Reihenfolge angeordnet*/
        foreach (string word in splitText) {
            result += word + " ";  /*dem string result werden die wörter, sowie ein leerzeichen hinzugefügt*/
        }


            return result;
        }

        static string reverseLetters(string text)
        {
            return reverseSentence(reverseWords(text)); /* Funktionen werden wieder verwendet um zuerst die wörter und anschließend den ganzen Satz umzudrehen*/
        }

    }
}
