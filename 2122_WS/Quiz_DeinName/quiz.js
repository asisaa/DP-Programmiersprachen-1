//Inspiration und Tips für Variablen für dein Quiz
/* 
Aus einer Menge aus Fragen sollen im Quiz Fragen angezeigt werden, dies klingt doch Verdächtig nach einem Array.

Die Runden sollen auf 5 begrenzt sein. Dies läßt sich gut in einer Variablen namens runden festhalten.

Um die Punkte zu merken bietet sich eine Variable names punkte an, in dem wir die Punkte speichern. 

Aus drei Antworten soll eine ausgewählt werden, das wollen wir mit einem Klick überprüfen und hierzu benötigen wir eine Variable.
Zu jeder Frage gehört eine eigene richtige Antwort, daher müssen wir diese auch nocht nicht vorab belegen.

Um nach einer Eingabe alles zu sperren, damit keine weiteren Antworten Ausgewählt werden können, nutzen wir eine Variabel mit true oder false.
*/ 



//Inspiration und Tips für Funktionen für dein Quiz

definiereDirFragen();
/*Aus einer Menge von Fragen sollen zufäller Reihenfolge 5 Frage aufgerufen werden, 
drei Antworten sind jeweils vorgegeben, die Fragen benötigen wir in jedem Fall, daher rufen wir die Funktion auf jeden Fall auf*/

function tippeButton(gewaehlterButton){
  
/*Ist die Antwort richtig, ist Button z.B: grün
Ist die Antwort falsch, ist Button z.B: rot
Sperre die Buttons wenn einer der Antworten geklickt wurde
Wenn eine Antwort in deinem html file ausgewählt wurde, muss dein Programm darauf reagieren
Die Funktion wird daher in deinem html file mit onclick="tippeButton(this); aufgerufen.
*/
    
  
}
function starteNeueRunde(){
/* Gestartet wird das Spiel über einen Klick in das obere Feld. 
Ausserdem wird jede neue Runde über einen Klick auf den "Nächste Frage" Button aufgerufen.
Dies geschieht über dein html file onclick="starteNeueRunde();
Die neue Runde Funktion überprüft auch ob die 5 Runden bereits gespielt sind.
Daher beinhaltet sie auch das hochzählen und Überprüfen deiner Variablen Runden. */

}
function definiereDirFragen(){
/*Aus einer Menge von Fragen sollen zufäller Reihenfolge 5 Frage aufgerufen werden, 
drei Antworten sind jeweils vorgegeben*/


}
