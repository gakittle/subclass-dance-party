// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.time = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  Dancer.prototype.step.call(this, this.time);
  this.setPosition(top, left);

};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.time);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};