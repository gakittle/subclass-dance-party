describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('kirbyDancer', function() {

  var kirbyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    kirbyDancer = new makeKirbyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(kirbyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a class \'kirby\' on each dancer', function() {
    expect(kirbyDancer.$node.hasClass('kirby')).to.equal(true);
  });

  it('should call Dancer function during construction of each new dancer', function() {
    expect(kirbyDancer.dancerCalled).to.equal(true);
  });

});

describe('pikaDancer', function() {

  var pikaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pikaDancer = new makePikaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pikaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a class \'pika\' on each dancer', function() {
    expect(pikaDancer.$node.hasClass('pika')).to.equal(true);
  });

  it('should call Dancer function during construction of each new dancer', function() {
    expect(pikaDancer.dancerCalled).to.equal(true);
  });

});