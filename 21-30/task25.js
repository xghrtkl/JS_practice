var dice = function(){
    return Math.floor((Math.random() * 6) + 1);
};

var result = dice();
document.write(result);