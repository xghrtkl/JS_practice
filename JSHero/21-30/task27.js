var nor = function(input1, input2){
    return !(input1 || input2)
};

var result1 = nor(true, true);    //false
var result2 = nor(true, false);   //false
var result3 = nor(false, true);   //false
var result4 = nor(false, false);  //true
document.write(result1 + ' ==> should return false');
document.write('<br>' + result2 + ' ==> should return false');
document.write('<br>' + result3 + ' ==> should return false');
document.write('<br>' + result4 + ' ==> should return true');

// nor(false, false)  should return true
// nor(true, false)   should return false
// nor(false, true)   should return false
// nor(true, true)    should return false