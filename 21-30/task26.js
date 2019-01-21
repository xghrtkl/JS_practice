var nand = function(a, b) {
    return !(a && b);
};
 
var result1 = nand(true, true);
var result2 = nand(true, false);
var result3 = nand(false, true);
var result4 = nand(false, false);

document.write(result1);
document.write('<br>' + result2);
document.write('<br>' + result3);
document.write('<br>' + result4);

// nand(true, true)   should return false
// nand(true, false)  should return true
// nand(false, true)  should return true
// nand(false, false) should return true