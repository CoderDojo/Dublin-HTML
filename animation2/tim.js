var sprite;					// This will hold a reference to image being animated
var offsetSize=4;			// How far to move the image each time
var hOffset=offsetSize;		// Set the initial amount to move the image horizontally
var vOffset=offsetSize;		// Set the initial amount to move the image vertically
var animator;				// We use this to store the id of the timeout so that we can control it.

function setup() {
	sprite = document.createElement("img");		// Create the <IMAGE> tag
	sprite.src = "AmericanPi.gif";				// Then point it to the image file we want to animate
	sprite.height=50;							// Set the height we want the image to have
	sprite.width=50;							// ... and the width
	sprite.style.left='0px';					// Initial horizontal position - right against the left edge of the browser
	// Calculate the position of the top of the image to position it half way down the browser window.
	// Position is the height of the browser (document.body.clientHeight) divided by 2 
	// less the height of our image (sprite.height) divided by 2
	sprite.style.top= (document.body.clientHeight / 2) - (sprite.height / 2) + 'px';	// Position the image half way down the left
	sprite.style.position='absolute';			// Set absolute positioning on the image element
	
	// Define the functionality to execute when when the image is clicked.
	sprite.onclick = function() {
		// If the image is being animated then animator will be greater than zero
		if ( animator>0 ) {
			clearTimeout(animator);		// Stop executing the animation function
			animator = 0;				// Set clear the animator so that we know it's been stopped.
		} else { // Animation is not running, so start the animation.
			animator = setTimeout(animate,20);
		}
	}
	// Add the <IMAGE> tag to the document.
	document.body.appendChild(sprite);
	animate();
}

// This function is executed to move the image about the screen
function animate() {
	// Calculate the position of the right hand side of the image - sprite.offsetLeft + hOffset + sprite.clientWidth
	// If the right hand side of the image exceeds the width of the screen (sprite.parentElement.clientWidth)
	// then we want to start going backwards - so set the amount to move horizontally to be negative.
	if ( (sprite.offsetLeft + hOffset + sprite.clientWidth) > sprite.parentElement.clientWidth )
		hOffset = -offsetSize;
	// If the left hand side of the image tries to go too far to the left, then set the amount to move horizontally to be positive
	else if ( ( sprite.offsetLeft + hOffset ) < 0 )
		hOffset = offsetSize;

	// Calculate the position of the bottom of the image (sprite.offsetTop + vOffset + sprite.clientHeight).
	// If this exceeds the height of the screen (sprite.parentElement.clientHeight) then set the amount to move to be negative
	if ( (sprite.offsetTop + vOffset + sprite.clientHeight) > sprite.parentElement.clientHeight )
		vOffset = -offsetSize;
	// If the top of the image tries to go too far up the browser then set the amount to move to be positive.
	if ( (sprite.offsetTop + vOffset ) < 0 )
		vOffset = offsetSize;
		
	// With our calculated horizontal and vertical offsets set the new left and top position of the image
	sprite.style.left = parseInt(sprite.style.left) + hOffset + 'px';
	sprite.style.top = parseInt(sprite.style.top) + vOffset + 'px';
	// And set the function to run again 
	animator = setTimeout(animate,20);
}

window.onload = function() {
	setup();
};