function prefill(n, v) {
  var num = Number(n);
    var value = v;
    if (Object.prototype.toString.call(n).indexOf('Number') != -1 || Object.prototype.toString.call(n).indexOf('String') != -1) {
    if (!(n % 2 == 0 || n % 2 == 1) ) {
        throw new TypeError(n+" is invalid");
    }
} else {
    throw new TypeError(n+" is invalid");
}

  return num? Array(num).join().split(',').map(function(){return value;}): [];
}
