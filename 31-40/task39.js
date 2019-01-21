var getLastElement = function(input){
    return input.pop()
};

var result1 = getLastElement([1, 2]);
var result2 = getLastElement(["a", "b", "c"]);

document.write('result1 =     ' + result1);
document.write('<br>result2 = ' + result2);