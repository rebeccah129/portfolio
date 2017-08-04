function translateWord(){
  var word = document.getElementById('demo').value;
  var newWord = "";

  for (i = 0; i < word.length; i++) {
  //what if it is a vowel?????????????
  	if( word.charAt(i) === "a" || word.charAt(i) === "e" || word.charAt(i) === "i"|| word.charAt(i) === "o" || word.charAt(i) === "u"  ){
  		//what do u do????
          newWord+="ub"+word.charAt(i);
      }
  else{
      newWord += word.charAt(i);
  }
  }
  document.getElementById("icecream").innerHTML = newWord;
}
