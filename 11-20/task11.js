var toCase = function(someWord){
    return someWord.toLowerCase() //turn parameter into lowercase
    + '-' +                       //add '-' as delimiter
    someWord.toUpperCase()        //turn parameter into uppercase
};