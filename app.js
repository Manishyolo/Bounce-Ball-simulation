const container = document.querySelector('.container');
const ball = document.querySelector('.ball');

let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;

// Ball starting position
let PosX = Math.floor(Math.random() * (containerWidth - ball.clientWidth));
let PosY = Math.floor(Math.random() * (containerHeight - ball.clientHeight));

// Velocity (direction + speed)
let velocityX = Math.random() < 0.5 ? -5 : 5; // random left or right
let velocityY = Math.random() < 0.5 ? -5 : 5; // random up or down

let hitCordinates;
let intervalId;

// ---------------------
// MAIN MOVEMENT FUNCTION
// ---------------------
function moveBall() {

    // Move ball
    PosX += velocityX;
    PosY += velocityY;

    // Update UI
    ball.style.left = PosX + "px";
    ball.style.top = PosY + "px";

    ball.innerHTML = `X: ${ball.offsetLeft} Y: ${ball.offsetTop}`;

    // -------------------------
    // COLLISION DETECTION
    // -------------------------

    // RIGHT wall
    if (PosX + ball.clientWidth >= containerWidth) {
        velocityX = -velocityX;  // flip X direction
        PosX = containerWidth - ball.clientWidth; // prevent crossing
        hitCordinates = { X: PosX, Y: PosY };
        console.log("Hit Right:", hitCordinates);
    }

    // LEFT wall
    if (PosX <= 0) {
        velocityX = -velocityX;  
        PosX = 0;
        hitCordinates = { X: PosX, Y: PosY };
        console.log("Hit Left:", hitCordinates);
    }

    // BOTTOM wall
    if (PosY + ball.clientHeight >= containerHeight) {
        velocityY = -velocityY;  // flip Y direction
        PosY = containerHeight - ball.clientHeight;
        hitCordinates = { X: PosX, Y: PosY };
        console.log("Hit Bottom:", hitCordinates);
    }

    // TOP wall
    if (PosY <= 0) {
        velocityY = -velocityY;
        PosY = 0;
        hitCordinates = { X: PosX, Y: PosY };
        console.log("Hit Top:", hitCordinates);
    }

}

intervalId = setInterval(moveBall, 10);
