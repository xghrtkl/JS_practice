var rotate = function(input){
    var arrays = input
    var shifted = arrays.shift()
    var pushed = arrays.push(shifted)
    return arrays
};

var result1 = rotate([1, 2, 3]);
var result2 = rotate([2, 3, 1]);
var result3 = rotate([3, 1, 2]);

document.write('result1 =     ' + result1);
document.write('<br>result2 = ' + result2);
document.write('<br>result3 = ' + result3);