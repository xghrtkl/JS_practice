var equals = function(input1, input2, input3){
    return (input1 === input2) && (input2 === input3)
};

var result1 = equals(1, 1, 1);    //
var result2 = equals(1, 2, 1);    //
var result3 = equals("1", 1, 1);  //
var result4 = equals(1, 1, "1");  //

document.write('<br>result1 = ' + result1);
document.write('<br>result2 = ' + result2);
document.write('<br>result3 = ' + result3);
document.write('<br>result4 = ' + result4);

// equals(1, 1, 1) should return true
// equals(1, 2, 1) should return false
// equals("1", 1, 1) should return false
// equals(1, 1, "1") should return false