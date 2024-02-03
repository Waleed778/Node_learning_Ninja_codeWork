module.exports.counter = function(arr){
    return 'There are '+ arr.length + ' element in this array';
};

module.exports.adder = function(a,b){
    return `The sum of the 2 number is ${a+b}`;
};

module.exports.pi = 3.142


//another way:

/*module.exports = {
    counter: counter,
    adder : adder,
    pi : pi,
}*/
 