// STILL WRONG SOLUTION

var unequal = function(input1, input2, input3){
    return (input1 !== input2) && (input2!== input3)
};

var result1 = unequal(1, 2, 3);  //
var result2 = unequal(1, 1, 2);  //
var result3 = unequal(2, 1, 1);  //
var result4 = unequal(1, 2, 1);  //

document.write(result1 +          ' ==> should return true');
document.write('<br>' + result2 + ' ==> should return false');
document.write('<br>' + result3 + ' ==> should return false');
document.write('<br>' + result4 + ' ==> should return false');

// unequal(1, 2, 3) should return true
// unequal(1, 1, 2) should return false
// unequal(2, 1, 1) should return false
// unequal(1, 2, 1) should return false 