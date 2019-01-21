var getFirstElement = function(input){
    var numberArray = input
    return numberArray[0]
}

var result1 = getFirstElement([1, 2]);
var result2 = getFirstElement(["Firefox", "Chrome"]);

document.write('result1 =     ' + result1);
document.write('<br>result2 = ' + result2);