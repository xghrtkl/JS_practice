var list = function(input){
    var a = input.slice(0, -1)        //return array except the last
    var b = a.join(', ')              //join the array & add separator
    var c = ' and '+input.slice(-1);  //add 'and' separator and combine it with the last array
  return b + c
};

var result1 = list(["Huey", "Dewey", "Louie"]);
var result2 = list(["Ernie", "Bert"]);
var result3 = list(["C", "C++", "Python", "PHP"]);

var test1 = 'Huey, Dewey and Louie'
var test2 = 'Ernie and Bert'
var test3 = 'C, C++, Python and PHP'

document.write('<br>' + result1 + ' >> expected: ' + test1);
document.write('<br>' + result2 + ' >> expected: ' + test2);
document.write('<br>' + result3 + ' >> expected: ' + test3);

document.write('<br><br>test1 >> ' + testResult1);
document.write('<br>    test2 >> ' + testResult2);
document.write('<br>    test3 >> ' + testresult3);
 