window.onload = setup;

var winW = 630, winH = 460;
var logo;
var moveRight = true;
var run = true;
var time;


function setup() {
  logo = document.getElementById('logo');; // get the "image" object
  logo.style.left = '0px'; // set its initial position to 0px
  logo.onclick=new Function("toggleAnimate()");
  var tangle = new Tangle(document, {
    initialize: function () { this.time = 3; },
    update:     function () { time = this.time; }
	});
    
  animate(); // start animating
  	  	
}

function animate()
{
	if(parseInt(logo.style.left) + 50 > winW)
	{
		moveRight = false; 
	}
	if(parseInt(logo.style.left) < 1)
	{
		moveRight = true; 
	}
	
	if(moveRight == true)
	{
		logo.style.left = parseInt(logo.style.left) + 2 + 'px';
	}else
	{
		logo.style.left = parseInt(logo.style.left) - 2 + 'px';
		
	}
	animator = setTimeout("animate()",time);
	console.log(time);

}

function toggleAnimate()
{
	run = !run;

	if(run)
	{
		animator = setTimeout("animate()",time);
	}else
	{
		clearTimeout(animator);
	}
}	


if (document.body && document.body.offsetWidth) {
 winW = document.body.offsetWidth;
 winH = document.body.offsetHeight;
}
if (document.compatMode=='CSS1Compat' &&
    document.documentElement &&
    document.documentElement.offsetWidth ) {
 winW = document.documentElement.offsetWidth;
 winH = document.documentElement.offsetHeight;
}
if (window.innerWidth && window.innerHeight) {
 winW = window.innerWidth;
 winH = window.innerHeight;
}
