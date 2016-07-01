
var playerTurnCounter = 1;

// These variables keep track of whether or not a box was clicked
var a1Clicked = 0;
var a2Clicked = 0;
var a3Clicked = 0;
var b1Clicked = 0;
var b2Clicked = 0;
var b3Clicked = 0;
var c1Clicked = 0;
var c2Clicked = 0;
var c3Clicked = 0; 

// These function registers the click and places an x or an o
$("#a1").click(function(){
    if (a1Clicked === 0) {
      xo(this);
      a1Clicked++;
    }
});

$("#a2").click(function(){
    if (a2Clicked === 0) {
      xo(this);
      a2Clicked++;
    }
});
$("#a3").click(function(){
    if (a3Clicked === 0) {
      xo(this);
      a3Clicked++;
    }
	
});
$("#b1").click(function(){
    if (b1Clicked === 0) {
      xo(this);
      b1Clicked++;
    }
	
});
$("#b2").click(function(){
    if (b2Clicked === 0) {
      xo(this);
      b2Clicked++;
    }
});
$("#b3").click(function(){
    if (b3Clicked === 0) {
      xo(this);
      b3Clicked++;
    }
});
$("#c1").click(function(){
    if (c1Clicked === 0) {
      xo(this);
      c1Clicked++;
    }
});
$("#c2").click(function(){
    if (c2Clicked === 0) {
      xo(this);
      c2Clicked++;
    }
});
$("#c3").click(function(){
    if (c3Clicked === 0) {
      xo(this);
      c3Clicked++;
    }
});

// This displays the x or o
function xo(element) {
  if ( playerTurnCounter % 2 !== 0 ){
			var x = $(".xo .x").clone();
			$(element).empty();
			$(element).html(x);
			playerTurnCounter++;
		} else {
			var y = $(".xo .o").clone();
			$(element).empty();
			$(element).html(y);
			playerTurnCounter++;
		}
    
}













