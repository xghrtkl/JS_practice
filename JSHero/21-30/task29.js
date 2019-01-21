var equals = function(input1, input2){
    return input1 === input2
};

var result1 = equals(1, 1);
var result2 = equals(1, 2);
document.write(result1 +          ' ==> should return true');
document.write('<br>' + result2 + ' ==> should return false');
 
// Write a function equals that checks two values for strict equality
// equals(1, 1) should return true
// equals(1, 2) should return false