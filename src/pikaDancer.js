var makePikaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, ...arguments, 'pika');
};

makePikaDancer.prototype = Object.create(Dancer.prototype);
makePikaDancer.prototype.constructor = makePikaDancer;

makePikaDancer.prototype.step = function() {
  Dancer.prototype.step.call(this, this.time);
  // this.$node.toggle();
};