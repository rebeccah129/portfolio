function myFunction1() {
var noun1 = prompt("Please enter a noun", "cat");
var verb1 = prompt("Please enter a verb that ends in s", "jumps")
var noun2 = prompt("Please enter a noun", "table")
if (noun1 != null) {
    document.getElementById("demo1").innerHTML =
    "The " + noun1 +" " + verb1 + " over the " + noun2;
  }
}


function myFunction2() {
  var pronoun1 = prompt("Please enter a pronoun", "He");
  var adjective1 = prompt("please enter an adjective", "creamy");
  var noun3 = prompt("Please enter a noun", "milk");
  if (pronoun1 != null) {
    document.getElementById("demo2").innerHTML =
    pronoun1 + " wanted to get to the " + adjective1 + " " + noun3;
  }
}


function myFunction3() {

  var name1 = prompt("Please enter a name", "Jessica");
  var noun4 = prompt("Please enter a song title", "twinkle twinkle little star");
  var name2 = prompt("Please enter a name", "David");
  var pronoun2 = prompt("please enter a pronoun", "he");
  var verb2 = prompt("Please enter a verb in past tense", "smiled");
  if (name1 != null) {
    document.getElementById("demo3").innerHTML =
    name1 + " sang " + noun4 + " to "+ name2+ " and " + pronoun2 +" " + verb2;
  }
}



function myFunction4() {

  var name3 = prompt("Please enter a name", "Mary");
  var noun5 = prompt("Please enter a animal name", "lamb");
  var pronoun3 = prompt("Please enter a pronoun", "his");
  var noun6 = prompt("please enter a body part", "fleece");
  var color1 = prompt("Please enter a color", "white");
  var noun7 = prompt("Please enter a noun", "snow");
  if (name3 != null) {
    document.getElementById("demo4").innerHTML =
    name3 + " had a little " + noun5 + ", little "+ noun5+ ", little " + noun5+ ". "+
     name3+" had a little "+noun5+", "+  pronoun3+" "+ noun6+ " was "+ color1+ " as "+ noun7+".";
  }
}
