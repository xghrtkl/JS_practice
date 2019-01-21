var isThreeDigit = function(input){
    return (input >= 100) && (input < 1000)
};

var result1 = isThreeDigit(500); //true  true  =t
var result2 = isThreeDigit(50); //false true  =f
var result3 = isThreeDigit(1000); //true  false =f

document.write('<br>result1 = ' + result1); //true
document.write('<br>result2 = ' + result2); //false
document.write('<br>result3 = ' + result3); //false