Object.prototype.hash = function(string) {
try{
return [this].concat(string.split('.')).reduce(function(a, b) { return a[b] });
}
catch (TypeError ){
return undefined;
}
  
}
