var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, ...arguments);
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype); //subclass
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this, this.time);
  this.$node.toggle();
};