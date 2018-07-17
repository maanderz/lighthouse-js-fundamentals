function howManyHundreds(var1) {
  var x = var1;
  var y = var1 % 100;
  var z = x - y;
  return (z / 100);
}

console.log(howManyHundreds(520));