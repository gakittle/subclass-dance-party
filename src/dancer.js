// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.time = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  // this.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(this.step, timeBetweenSteps);
  // };
  console.log('2. invoking blinkyDancer step in Dancer');
  debugger;
  Dancer.prototype.step.call(this, this.time);

  // this.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   this.$node.css(styleSettings);
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  // return dancer;
};

Dancer.prototype.step = function() {
  // var timeBetweenSteps = arguments[0];
  setTimeout(this.step.bind(this), this.time);
  console.log('4. set timeout in dancer.step');
  // console.log('4.5: timeBetweenSteps = ' + timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};