
var playerTurnCounter = 1;

// This function registers the click and places an x or an o
$("#a1").click(function(){
	xo(this);
});
$("#a2").click(function(){
	xo(this);
});
$("#a3").click(function(){
	xo(this);
});
$("#b1").click(function(){
	xo(this);
});
$("#b2").click(function(){
	xo(this);
});
$("#b3").click(function(){
	xo(this);
});
$("#c1").click(function(){
	xo(this);
});
$("#c2").click(function(){
	xo(this);
});
$("#c3").click(function(){
	xo(this);
});



function xo(element) {
	if (playerTurnCounter % 2 !== 0) {
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










