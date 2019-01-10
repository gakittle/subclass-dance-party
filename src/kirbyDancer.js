var makeKirbyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, ...arguments, 'kirby');
};

makeKirbyDancer.prototype = Object.create(Dancer.prototype);
makeKirbyDancer.prototype.constructor = makeKirbyDancer;

makeKirbyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this, this.time);
  // this.$node.toggle();
};