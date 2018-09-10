var add = (function() {
    var factory = function(value) {
        var fn = function(n) {
            return factory(value + n);
        };
        fn.toString = function() {
            return value;
        };
        return fn;
    };
    return factory(0);
})();