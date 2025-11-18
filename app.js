const container = document.querySelector('.container');
const ball = document.querySelector('.ball');

let intervalId;

let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;

let ContainerX = Math.floor(Math.random() * (containerWidth - ball.clientWidth));
let ContainerY = 546;
let PosX = Math.floor(Math.random() * (containerWidth - ball.clientWidth))
let PosY = Math.floor(Math.random() * (containerHeight - ball.clientHeight))
console.log(`X : ${ContainerX} Y : ${ContainerY}`);




function moveBall(){
     
    ball.style.left = `${PosX}px`;
    ball.style.top = `${PosY}px`;
     ball.innerHTML = `X: ${ball.offsetLeft} Y: ${ball.offsetTop}`
    if(ball.offsetLeft + ball.clientWidth >= containerWidth || ball.offsetLeft <= 0 || ball.offsetTop + ball.clientHeight >= containerHeight || ball.offsetTop <= 0){
              
        clearInterval(intervalId);

    }

     
}

intervalId = setInterval(()=>{
    PosX--
    PosY++
    console.log(PosX);
    
    moveBall()
    
     
     
},10)