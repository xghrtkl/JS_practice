var xor = function(input1, input2){
    return !(input1 && input2) && (input1 || input2)
};

var result1 = xor(true, true);    //false
var result2 = xor(true, false);   //true    or
var result3 = xor(false, true);   //true    or
var result4 = xor(false, false);  //false

document.write(result1 +          ' ==> should return false');
document.write('<br>' + result2 + ' ==> should return true');
document.write('<br>' + result3 + ' ==> should return true');
document.write('<br>' + result4 + ' ==> should return false');
  
// xor(true, false)   should return true
// xor(false, true)   should return true
// xor(true, true)    should return false
// xor(false, false)  should return false