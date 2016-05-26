var test = [4, 8, 12, 16];

function sillySum(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count += (array[i] * [i]);
  }
  return count;
}

var anotherVar = sillySum(test);

console.log(anotherVar);
