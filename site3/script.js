function getRandomNumber(min, max) {
  var seed = new Date().getTime();
  var random = function() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Math.floor(random() * (max - min + 1)) + min;
}

// Example usage: Generating a random number between 1 and 10
var correct = getRandomNumber(1, 10);
console.log(correct);



  for (var i = 0; i < 3; i++) {
  var userinput = prompt('Enter a random number between 1 and 10');
  console.log(userinput);
  if (userinput==correct) {
    alert('You Win!');
    break;
  }
  else if(userinput === null || userinput ==="") {
      alert('Cannot be empty!');
  }
  else if(correct>userinput) {
    alert('Correct answer is greater! ');

  }
  else if(correct<userinput) {
    alert('Correct answer is less! ');
  }
 }
  if(i==3)
  {
    alert('You Lose!');
  }

