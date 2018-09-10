function construct(Class) {

  let args = Array.call(this,...arguments).slice(1);
  instance = Object.create(Class.prototype);
  if(Class.apply(instance, args) !== null && typeof(Class.apply(instance, args)) === 'object' || typeof(Class.apply(instance, args)) === 'function' && Class.apply(instance, args)) return Class.apply(instance, args);
  else return instance;
}

function Greeting(name) {
  this.name = name;
}

Greeting.prototype.sayHello = function() {
  return "Hello " + this.name;
};


Greeting.prototype.sayBye = function() {
  return "Bye " + this.name;
};
