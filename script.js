const DINO = document.querySelector('.dino');
const BACKGROUND = document.querySelector('.background');

let isJumping = false;

function handleKeyUp(event){
  if (event.keyCode === 32){
    console.log('pressionou espaço');
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  let position = 0;

  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        position -= 20;
        DINO.style.bottom = position + 'px';
        if (position < 20) {
          clearInterval(downInterval);
          isJumping = false;
        }
      })
    } else {
      position += 20;
      DINO.style.bottom = position + 'px';
    }
   }, 20);   
}

function createCactus(){
  const CACTUS = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;
  console.log(randomTime);

  CACTUS.classList.add('cactus');
  CACTUS.style.left = 1000 + 'px;'
  BACKGROUND.appendChild(CACTUS);

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      BACKGROUND.removeChild(CACTUS);
    } else { 
      cactusPosition -= 10;
      CACTUS.style.left = cactusPosition + 'px';      
    }
  }, 20)

  setTimeout(createCactus, randomTime)
}

createCactus();
document.addEventListener('keyup', handleKeyUp);