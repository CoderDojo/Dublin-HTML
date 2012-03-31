window.onload = setup;

var logo;

function setup() {
  logo = document.getElementById('logo');// get the "image" object
  logo.style.left = '0px'; // set its initial position to 0px
  animate(); // start animating
}

function animate()
{
	logo.style.left = parseInt(logo.style.left) + 2 + 'px';
	animator = setTimeout(animate,20);
}