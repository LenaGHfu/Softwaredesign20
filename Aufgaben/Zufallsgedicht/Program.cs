using System;
using System.Collections;
namespace Zufallsgedicht
{
    class Program
    {
        static string[] subjects = { "Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore" };
        static string[] verbs = { "braut", "liebt", "studiert", "hasst", "zaubert", "zerstört" };
        static string[] objects = { "Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren" };

        static void Main(string[] args)
        {
            //initialize array of arrays with lentgh 6
            string[][] poems = new string[6][];
            //fill poems array with verse arrays
            for (int i = 0; i < 6; i++)
            {
                poems[i] = GetVerse();
            }

            //read out each verse for the poem
            for (int i = 0; i < poems.Length; i++)
            {
                Console.WriteLine(poems[i][0] + " " + poems[i][1] + " " + poems[i][2]);
            }

        }

        static string[] GetVerse()
        {
            //initialize verse
            string[] verse = null;
            //only do when words are left for a poem
            if (subjects.Length > 0)
            {
                //initialize random
                Random random = new Random();
                //random indexes with number in bounds
                int[] indexes = new int[] { random.Next(subjects.Length), random.Next(verbs.Length), random.Next(objects.Length) };
                //3 length verse array
                verse = new string[3];

                //fill verse array
                verse[0] = subjects[indexes[0]];
                verse[1] = verbs[indexes[1]];
                verse[2] = objects[indexes[2]];

                //remove used subject and create new array, which is now shorter
                ArrayList subjectsList = new ArrayList(subjects);
                subjectsList.RemoveAt(indexes[0]);
                subjects = (string[])subjectsList.ToArray(typeof(string));
                //same for verbs
                ArrayList verbsList = new ArrayList(verbs);
                verbsList.RemoveAt(indexes[1]);
                verbs = (string[])verbsList.ToArray(typeof(string));
                //same for objects
                ArrayList objectsList = new ArrayList(objects);
                objectsList.RemoveAt(indexes[2]);
                objects = (string[])objectsList.ToArray(typeof(string));

            }
            return verse;


        }
    }
}
