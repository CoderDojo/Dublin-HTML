window.onload = setup;

var winW = 630, winH = 460;
var logo;
var moveRight = true;
var run = true;



function setup() {
  logo = document.createElement('img');
  logo.src = "../images/coder.png";
  logo.style.left = '0px'; // set its initial position to 0px
  logo.style.width = '50px';
  logo.style.height = '50px';
  logo.style.position = "absolute";
  logo.onclick = toggleAnimate;
  document.body.appendChild(logo);
  
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
	animator = setTimeout(animate,20);
}

function toggleAnimate()
{
	run = !run;

	if(run)
	{
		animator = setTimeout(animate,20);
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
