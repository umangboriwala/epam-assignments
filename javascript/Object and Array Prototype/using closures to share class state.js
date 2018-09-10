var numberOfCats = 0;
var totalWeight = 0;

// Let's make a Cat constructor!
var Cat = (function () {
    'use strict';
    return function (name, initWeight) {
        var w = initWeight;
        if (name === undefined || initWeight === undefined) {
            throw new Error("Both name and weight must be specified");
        }
        Object.defineProperty(this, 'weight', {
            set: function (newWeight) {
                totalWeight = totalWeight - w + newWeight;
                w = newWeight;
            }, get: function () {
                return w;
            }
        });

        numberOfCats++;
        totalWeight += initWeight;
        return this;
    };
}());

Cat.averageWeight = function () {
    "use strict";
    return totalWeight / numberOfCats;
};
