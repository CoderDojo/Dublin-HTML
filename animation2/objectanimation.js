var sprites = [];

// Create an object so we can create lots of images easily
function Sprite(left, top, height, width)
{
	var animator;				// We use this to store the id of the timeout so that we can control it.
	var sprite = document.createElement("img");		// Create the <IMAGE> tag
	sprite.offsetSize=4;			// How far to move the image each time
	sprite.hOffset=sprite.offsetSize;		// Set the initial amount to move the image horizontally
	sprite.vOffset=sprite.offsetSize;		// Set the initial amount to move the image vertically
	
	sprite.src = "AmericanPi.gif";				// Then point it to the image file we want to animate
	sprite.height=height;							// Set the height we want the image to have
	sprite.width=width;							// ... and the width
	sprite.style.left=left + 'px';					// Initial horizontal position - right against the left edge of the browser
	// Calculate the position of the top of the image to position it half way down the browser window.
	// Position is the height of the browser (document.body.clientHeight) divided by 2 
	// less the height of our image (sprite.height) divided by 2
	sprite.style.top= top + 'px';	// Position the image half way down the left
	sprite.style.position='absolute';			// Set absolute positioning on the image element
	
	// Define the functionality to execute when when the image is clicked.
	sprite.onclick = function() {
		// If the image is being animated then animator will be greater than zero
		if ( sprite.animator>0 ) {
			clearTimeout(sprite.animator);		// Stop executing the animation function
			sprite.animator = 0;				// Set clear the animator so that we know it's been stopped.
		} else { // Animation is not running, so start the animation.
			sprite.animator = setTimeout(animate,20, sprite);
		}
	}
	document.body.appendChild(sprite);
	return sprite;
}

function setup() {
	// Add the <IMAGE> tag to the document.
	sprites.push(new Sprite(0, (document.body.clientHeight / 2) - (25), 50, 50));
	sprites.push(new Sprite(0, 25, 50, 50));

	for(var iSpriteCounter=0;iSpriteCounter < sprites.length; iSpriteCounter++)
	{
		animate(sprites[iSpriteCounter]);
	}
}

// This function is executed to move the image about the screen
function animate(sprite) {
	// Calculate the position of the right hand side of the image - sprite.offsetLeft + hOffset + sprite.clientWidth
	// If the right hand side of the image exceeds the width of the screen (sprite.parentElement.clientWidth)
	// then we want to start going backwards - so set the amount to move horizontally to be negative.
	if ( (sprite.offsetLeft + sprite.hOffset + sprite.clientWidth) > sprite.parentElement.clientWidth )
		sprite.hOffset = -sprite.offsetSize;
	// If the left hand side of the image tries to go too far to the left, then set the amount to move horizontally to be positive
	else if ( ( sprite.offsetLeft + sprite.hOffset ) < 0 )
		sprite.hOffset = sprite.offsetSize;

	// Calculate the position of the bottom of the image (sprite.offsetTop + vOffset + sprite.clientHeight).
	// If this exceeds the height of the screen (sprite.parentElement.clientHeight) then set the amount to move to be negative
	if ( (sprite.offsetTop + sprite.vOffset + sprite.clientHeight) > sprite.parentElement.clientHeight )
		sprite.vOffset = -sprite.offsetSize;
	// If the top of the image tries to go too far up the browser then set the amount to move to be positive.
	if ( (sprite.offsetTop + sprite.vOffset ) < 0 )
		sprite.vOffset = sprite.offsetSize;
		
	// With our calculated horizontal and vertical offsets set the new left and top position of the image
	sprite.style.left = parseInt(sprite.style.left) + sprite.hOffset + 'px';
	sprite.style.top = parseInt(sprite.style.top) + sprite.vOffset + 'px';
	// And set the function to run again 
	sprite.animator = setTimeout(animate,20, sprite);
}

window.onload = function() {
	setup();
};