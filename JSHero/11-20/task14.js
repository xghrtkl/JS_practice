var indexOfIgnoreCase = function(input1, input2){
    return input1.toLowerCase().indexOf(input2.toLowerCase())
};

var result = indexOfIgnoreCase('bit', 'It');
document.write(result);