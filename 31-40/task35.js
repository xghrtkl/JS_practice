var addWithSurcharge = function(input1, input2){
    if ((input1 <= 10) && (input2 <= 10)){
       return (input1 + 1) + (input2 + 1)
    } if ((input1 > 10) && (input2 > 10)){
       return (input1 + 2) + (input2 + 2)
    } if ((input1 <= 10) && (input2 > 10)){
       return (input1 + 1) + (input2 + 2)
    } else {
       return ((input1 + 2) + (input2 + 1))
    }
}

var result1 = addWithSurcharge(5, 15);
var result2 = addWithSurcharge(10, 10);
var result3 = addWithSurcharge(11, 10);
var result4 = addWithSurcharge(15, 27);

document.write(result1 +          ' ==> should return 23');
document.write('<br>' + result2 + ' ==> should return 22');
document.write('<br>' + result3 + ' ==> should return 24');
document.write('<br>' + result4 + ' ==> should return 46');

// equals( 5, 15) should return 23 (6 + 17)
// equals(10, 10) should return 22 (11 + 11)
// equals(11, 10) should return 24 (13 + 11)
// equals(15, 27) should return 46 (17 + 29)
 