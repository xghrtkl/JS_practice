var firstWord = function(input){
    var index = input.indexOf(" ")
    return input.substr(0, index)
};

var result = firstWord('speak you later');
document.write(result);