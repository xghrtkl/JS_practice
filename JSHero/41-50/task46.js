var addTo = function(input){
    var sum = 0
      for (var i = 0; i < input.length; i++){
        sum += input[i]
        document.write('<br> sum:' + sum)
    }
    return sum/input.length
};

var result1 = addTo([1, 2, 3]);
var result2 = addTo([0]);
var result3 = addTo([-2, -4, 17, 34]);

var test1 = 2
var test2 = 0
var test3 = 11.25

var testResult1 = result1 === test1
var testResult2 = result2 === test2
var testresult3 = result3 === test3

document.write('<br>' + result1 + ' >> expected: ' + test1);
document.write('<br>' + result2 + ' >> expected: ' + test2);
document.write('<br>' + result3 + ' >> expected: ' + test3);

document.write('<br><br>test1 >> ' + testResult1);
document.write('<br>    test2 >> ' + testResult2);
document.write('<br>    test3 >> ' + testresult3);