var words = ["Dog", "Cat", "Pie", "Pizza", "Shoe", "Child", "Girl", "Amazon", "Math", "Boy", "School","Coffee","Iphone"]

//alert('The Assassins word is ' + word);
var names = localStorage.getItem("names");
names = names.split(",");

//alert('The Assassins target is ' + target);
//document.getElementById('ttext').innerHTML = "Target: " + target;


function shuffle(dupNames) {
    var j, x, i;
    for (i = dupNames.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = dupNames[i];
        dupNames[i] = dupNames[j];
        dupNames[j] = x;
    }
    return dupNames;
}

var shuNames;
var noEquals = 0;
var index = 0;
var dupNames = names.slice();
while(noEquals == 0){
  shuNames = shuffle(dupNames);
  noEquals = 1;
  for (index = 0; index < names.length; index++){
    if (names[index] == shuNames[index]){
      noEquals = 0;
      break;
    }
  }
}

words = shuffle(words);


var i;
for (i = 0; i < names.length; i++) {
  var player = document.createElement("div");

  //change the name
  player.innerHTML = names[i];

  //don't change
  player.classList.add("tooltip");
  player.classList.add("playerStyle");
  var tt = document.createElement("span");


//change this to target and word
  tt.innerHTML = "Target: " +shuNames[i] + " " + "Word: " + words[i];

//dont change this
  tt.classList.add("tooltiptext");
  player.appendChild(tt);
  document.getElementById("names").appendChild(player);


}

//var gen = []
