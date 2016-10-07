console.log("loaded!");
window.onload = load;

function load() {
  /*access DOM elements*/
  var outerContainer = $("#outer-container");
  var header = $("#header");
  var row = $(".feature-row");
  var box = $(".box");
  var featureBoxWidth = 33.33 + "%"; /*the original width of the feature boxes*/
  var newFeatureBoxWidth = 40; /*the width the boxes should scale to*/
  var numberOfSiblings = 2;
  var mobile = 769;

  /*on load, fade in content */
  TweenLite.to(outerContainer,1,{opacity:1});

  /*set the width of the boxes, called on mouse enter*/
  function setWidth() {
    /*determind the siblings of the box in focus*/
    var boxSiblings = $(this).siblings();
    /*count the number of siblings a box has*/
    var numberOfSiblings = boxSiblings.length;
    /*determine the size the box should scale to*/
    var lg = newFeatureBoxWidth;
    var lgString = lg + "%";
    /*determine the remaining space int eh row after the box has scaled*/
    var rem = (100 - lg) / numberOfSiblings;
    var remString = rem + "%";
    /*determine which box should be scaled*/
    var boxFocus = $(this);

    /*disable box scaling on mobile/devices smaller than 769px*/
    if ($(window).width() >= 769) {
      TweenLite.to(boxFocus, 0.5, {width: lgString});
      TweenLite.to(boxSiblings, 0.5, {width: remString});
    }
  }

  /*when the mouse leaves the row, reset the siblings to their inital position*/
  function resetWidth() {
    var resetChildren = $(this).children(box);
    var resetWidthString = featureBoxWidth + "%";

    if ($(window).width() >= 769) {
      TweenLite.to(resetChildren, 0.5, {width: featureBoxWidth});
    }
  }

  /*call the functions on mouse enter and leave*/
  box.mouseenter(setWidth);
  row.mouseleave(resetWidth);
}

//caluclate the size the box should
//expand and shrink to based on the number of siblings
/*

lg = 40%
numSiblings = row.getNumberOfSiblings(); //look for proper function
sm = (100% - lg) / (numSiblings - 1) //take away the lg sibling
*/
