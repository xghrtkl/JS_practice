// STILL WRONG SOLUTIONS 

var setFirstElement = function(input1, input2){
    var numberArray = [input1, input2]
    numberArray.reverse()
    numberArray[1] = numberArray.unshift()
  return numberArray
};

var result1 = setFirstElement([1, 2], 3);
var result2 = setFirstElement([], 1);

document.write('result1 =     ' + result1);
document.write('<br>result2 = ' + result2);

// equals([1, 2], 3)  should return [3, 2]
// equals([], 1)      should return [1]
 