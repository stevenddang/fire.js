// Instantiate a Fire class
var Fire = function() {};

// Calculates number of months until retirement
Fire.prototype.RetiredDate = function(annualSpending, currentSavings, monthlySavings) {

    var estimatedMonths = (annualSpending/.04 - currentSavings) / monthlySavings;

    return estimatedMonths;
};


if (typeof exports !== 'undefined' && typeof module !== 'undefined' && module.exports) {
    module.exports = Fire;
    module.exports.Fire = Fire;
}

var testFire = new Fire();
console.log(testFire.RetiredDate(40000, 100000, 5000));