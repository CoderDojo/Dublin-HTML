// When the window loads, run the setup() function
window.onload = setup;

// Some default window sizes
// var winW = 630, winH = 460;

// Initial ball position, horizontal
var x = 0;

// Initial ball position, vertical
var y = 0;

// Number of pixels to move horizontally with each animation
var h = 10;

// Number of pixels to move vertically with each animation: changes with "gravity"
var v = 0;

// gravity factor
var g = 4;


// How bouncy is the ball:
// 1.0 means it bounces perfectly, < 1 means it will eventually slow down and stop
// > 1, well ... : what do you think that will do :-) 
var bouncy = 1.0;


function setup() {
    
    // "Register" for keypress events
    document.body.onkeypress = slowDown;
    
    // Make a container to hold the ball
    container = document.createElement('div');
    container.id = 'ball';
    
    // Make the ball
    image = document.createElement('img');
    image.src = "../images/football.jpg";
    
    // Use CSS to set the size of the ball
    image.setAttribute("class", "medium");
    
    // Add the ball into the container
    container.appendChild(image);
    
    // Add the container to the page: this shows the ball too
    document.body.appendChild(container);
  
    // Start bouncing
    bounce(); 
}

//
// Simulate a bouncing ball
// 
 
function bounce() {

    // Get the ball by searching for it by id 
    var e = document.getElementById('ball');
     
    // Very simple "bounce" simulation: velocity increases with "gravity" over time
    // This isn't exactly perfect for small values of v
    v=v+g;
   
    // Move horizontally
    x=x+h;
    
    // Move vertically
    y=y+v;
    
    // If the vertical movement is nearly zero, and the vertical position is the bottom of the window, we've stopped bouncing
    if( y >= (winH-50) && v <= 1) return;
    
    // If outside the window to the right, reverse direction
    if(x > (winW - 50))
    {
        x=winW-50;
        h=h*-1;
    }
    
    // If outside the window to the left, reverse direction
    if(x < 0)
    {   x=0;
        h=h*-1;
    }
    
    // ... simarly, bounce on the bottom of the window
    if( y > (winH - 50))
    {
        y=(winH - 50);
        v = Math.floor((v*-1)*bouncy);
    } 
    
    // Change the ball position
    e.style.top = y + 'px';
    e.style.left = x + 'px';
    
    // And run this animation again
    t=setTimeout("bounce()",20);
}	 

// Slow the ball down by making the bounce less than 100% perfect: some "energy" is lost from the ball on each vertical bounce
// But not on each horizontal bounce
function slowDown()
{
    bouncy = bouncy * 0.95;
}

// Figure out what the window dimensions are
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
