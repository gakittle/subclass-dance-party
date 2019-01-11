$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    console.log(window.dancers);
    $('body').append(dancer.$node);
  });

  $('.lineup').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i].$node;
      var t = $("body").height() / 2;
      var l = $("body").width() / (window.dancers.length + 1) * i;
      dancer.animate({top: t, left: l}, 1000);
    }
  });

  $('.characterButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      -200,
      -200,
      Math.random() * 1000
    );
    var fighter = dancer.$node;
    $('body').append(fighter);
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].$node.hasClass('blinky')) {
        // get position of nearest smashball
        var positions = window.dancers[i].$node.attr('style').split(': ');
        var top = positions[1].split('.');
        var topPosition = top[0];
        var bottom = positions[2].split('.');
        var bottomPosition = bottom[0];
        // animate moving there
        fighter.animate({top: topPosition, left: bottomPosition}, 1500);
        fighter.animate({height: 175, width: 155}, 1000);
        // remove smash ball from window.dancers, and body
        var target = window.dancers[i].$node;
        setTimeout(function() {target.remove('.blinky');}, 2100);
        window.dancers.splice(i, 1);
        // animate character gets bigger
      }
    }
    var targetIndex = [];

    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].$node.hasClass('kirby') || window.dancers[i].$node.hasClass('pika')) {
        // get position of nearest opponent
        var positions = window.dancers[i].$node.attr('style').split(': ');
        var top = positions[1].split('.');
        var topPosition = top[0];
        var bottom = positions[2].split('.');
        var bottomPosition = bottom[0];
        // animate moving there
        fighter.animate({top: topPosition, left: bottomPosition}, 500);
        // remove smash ball from window.dancers, and body
        window.dancers[i].$node.animate({top: -200}, 500);
        targetIndex.push(i);
      }
    }
    for (var i = 0; i < targetIndex.length; i++) {
      window.dancers.splice(i, 1);
    }




    window.dancers.push(dancer);
  });
});

