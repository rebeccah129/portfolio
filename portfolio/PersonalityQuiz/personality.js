
  var myvar2 = 0;
  var myvar1 = 0;
  var myvar3 = 0;
  var myvar4 = 0;

function myFunction1(){
  myvar1 += 0;
}

function myFunction2(){
  myvar2 += 10;
}

function myFunction3(){
  myvar3 += 5;
}

function myFunction4(){
  myvar4 += 20;
}



function meanname(){
  var result = (myvar1 + myvar2 + myvar3 + myvar4)/5;

  if (result <= 5) {
    document.getElementById('answer').innerHTML= "You are a loser!"
  }
  else if (result > 5 && result <= 10) {
    document.getElementById('answer').innerHTML= "Rewatch the movie"
  }
  else if (result > 10 && result <= 15) {
    document.getElementById('answer').innerHTML= "Almost there"
  }
  else if (result > 15 && result <= 20) {
    document.getElementById('answer').innerHTML= "EXPERT!!!!!!!!!"
  }
}
