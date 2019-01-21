var secondIndexOf = function(input1, input2){
    return input1.toLowerCase().indexOf(input2.toLowerCase(), 1)
};

var result = secondIndexOf('White Rabbit', 'bit');
document.write(result);

// Initial solution
// var secondIndexOf = function(input1, input2){
//     var index1 = input1.indexOf(input2)
//     return input1.indexOf(input2, index1 + 1)
// };