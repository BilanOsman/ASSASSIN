//var things = ['Rock', 'Paper', 'Scissor'];
//var thing = things[Math.floor(Math.random()*things.length)];
//alert('The computer chose: ' + thing);
var names = []

function addName(){
  var newName =  document.getElementById('addPlayer').value;
  names.push(newName);
  document.getElementById('addPlayer').value = "";
  console.log(names);
  localStorage.setItem("names", names)
}
