var concatUp = function(input1, input2){
    if (input1.length < input2.length){
      return input1.concat(input2)
    } if (input1.length > input2.length){
        return input2.concat(input1)
      } else
            return input1.concat(input2)
};

var result1 = concatUp([1, 2], [3]);
var result2 = concatUp([5, 7], [6, 8]);
var result3 = concatUp(["x"], ["a", "b"]);

document.write('<br>' + result1 + ' ==> should return [3, 1, 2]');
document.write('<br>' + result2 + ' ==> should return [5, 7, 6, 8]');
document.write('<br>' + result3 + ' ==> should return [x, a, b]');