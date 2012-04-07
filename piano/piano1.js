window.onload = setup;

var winW = 630;
var winH = 460;
var logo;
var key;


function setup() {

  make_logo();
  get_window_size();
  
  make_white_key(1 );
  make_white_key(2 );
  make_white_key(3 );
  make_white_key(4 );
  make_white_key(5 );
  make_white_key(6 );
  make_white_key(7 );

  make_black_key(1);
  make_black_key(2);
  make_black_key(3);
  make_black_key(5);
  make_black_key(6);
  
  make_logo();
}

function make_logo() {
  logo = document.createElement('img');
  logo.src = "../images/coder.png";
  logo.style.left = '0px'; // set its initial position to 0px
  logo.style.width = '50px';
  logo.style.height = '50px';
  logo.style.position = "absolute";
  //logo.onclick = toggleAnimate;
  document.body.appendChild(logo);
}

function make_white_key( i )
{
  key = document.createElement('div')
  key.style.left = 100 + (i*30) + 'px';
  key.className = 'white-key';
  key.onclick = do_action;
  key.keysValue = i;
  document.body.appendChild(key);
}

function make_black_key( x )
{
  key = document.createElement('div')
  key.style.left = 120 + (x*30) + 'px';
  key.className = 'black-key';
  document.body.appendChild(key);
}

function do_action()
{
  var i;
  
  // 'this' is the key that was pressed.
  i = this.keysValue;
  // These two lines move the logo.
  logo.style.left = 90 + (i*30)+'px';
  logo.style.top = '130px';
  
// These two lines don't do anything because they are commented out.  
//  logo.style.width=30+10*i+'px';
//  logo.style.height=30+10*i+'px';

}


function get_window_size()
{
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
}
