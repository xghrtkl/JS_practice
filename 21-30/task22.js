var midrange = function(input1, input2, input3){
    return (Math.max(input1, input2, input3) + 
            Math.min(input1, input2, input3)) / 2
};

var result = midrange(3, 9, 1);
document.write(result);