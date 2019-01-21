var spaces = function(input){
    var a = ""
    var i = 0
    while (i < input){
        a = a + " "
        i++
    } return a
};

var result1 = spaces(0);
var result2 = spaces(1);
var result3 = spaces(2);

var test1 = ''
var test2 = ' '
var test3 = '  '

var testResult1 = result1 === test1
var testResult2 = result2 === test2
var testresult3 = result3 === test3

document.write('<br>' + result1 + ' >> expected: ' + test1);
document.write('<br>' + result2 + ' >> expected: ' + test2);
document.write('<br>' + result3 + ' >> expected: ' + test3);

document.write('<br><br>test1 >> ' + testResult1);
document.write('<br>    test2 >> ' + testResult2);
document.write('<br>    test3 >> ' + testresult3);