var normalize = function(input){
    return input.replace(/-/g, '/') //global replacement
};

var result = normalize('20-05-2017');
document.write(result);
// source: https://www.w3schools.com/jsref/jsref_replace.asp