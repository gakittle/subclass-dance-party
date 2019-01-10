var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // this = Object.create(makeBlinkyDancer.prototype);
  console.log('1. blinky calling dancer');
  Dancer.call(this, ...arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   // blinkyDancer.$node.toggle();
  // };
  // return this;
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype); //subclass
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  console.log('3. blinky dancer\'s step');
  // console.log('3.5 time between steps =' + arguments[2]);
  Dancer.prototype.step.call(this, this.time);
  this.$node.toggle();
};