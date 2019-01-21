var equals = function(input1, input2){
    if (input1 === input2){
        return 'EQUAL'
    } else
        return 'UNEQUAL'     
};

var result1 = equals(1, 1);
var result2 = equals(1, 2);
var result3 = equals('JS', 'JS');
var result4 = equals('Left', 'Right');

document.write(result1 +          ' ==> should return equal');
document.write('<br>' + result2 + ' ==> should return unequal');
document.write('<br>' + result3 + ' ==> should return equal');
document.write('<br>' + result4 + ' ==> should return unequal');