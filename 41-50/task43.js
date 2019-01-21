var halve = function(input){
    return input.slice(0, Math.ceil(input.length / 2))
};

var result1 = halve([1, 2, 3, 4]);
var result2 = halve([1, 2, 3, 4, 5]);

document.write('<br>' + result1 + ' ==> should return [1,2]');
document.write('<br>' + result2 + ' ==> should return [1, 2, 3]');
 