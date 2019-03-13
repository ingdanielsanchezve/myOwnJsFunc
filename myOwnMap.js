var arrNumbers = [9, 25, 64];

Array.prototype.myOwnMap = function(callback) {
    arr = [];
    for (var i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};
	
var squareRoot = arrNumbers.myOwnMap(function(num) {
	Math.sqrt(num);
});

console.log(squareRoot)