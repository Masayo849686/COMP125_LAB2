(function () {
  "use strict";

  var paragraphArray = [
    document.getElementById("HomeParagraph"),
    document.getElementById("AboutParagraph"),
    document.getElementById("ProjectParagraph")
  ]
  //   var p1 =  documeng.getElementById("HomePragraph");
  //   var p2 =  documeng.getElementById("AboutPragraph");
  //   var p3 =  documeng.getElementById("ProjectsPragraph");

  //   paragraphArray=[p1,p2,p3];

  if (paragraphArray[0]) {
    paragraphArray[0].innerHTML = "An Arm and a Leg<br>Something that is extremely expensive; an idiom meaning the price paid was costly, excessively so.";
  }
  if (paragraphArray[1]) {

    paragraphArray[1].innerHTML = "Beating a Dead Horse<br>Something that is seen as futile; a popular saying used to describe how bringing up older issues that have already been resolved is pointless";
  }
  if (paragraphArray[2]) {
    paragraphArray[2].innerHTML = "Cut To The Chase To get to the point, leaving out all of the unnecessary details. Similar to popular sayings such as 'beating around the bush.'";
  }
})();