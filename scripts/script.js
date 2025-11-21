// teto audio
const img = document.getElementById('hoverAudio');
const sound = document.getElementById('hoverSound');

img.addEventListener('mouseenter', () => {
  sound.currentTime = 0;
  sound.play();
});

const image = document.querySelector('.wide-image');
const wrapper = document.querySelector('.wide-wrapper');

// bottomLimit must be > animationOffset + topLimit
window.addEventListener('scroll', () => {
  const animationOffset = window.innerHeight * 0.5;
  const topLimit = wrapper.offsetTop;
  const bottomLimit = topLimit + wrapper.offsetHeight - window.innerHeight;
  
  const scroll = window.scrollY;

  if (scroll < topLimit) {
    image.style.position = 'absolute';
    image.style.top = '50vh';
    image.style.left = '75vw';
    image.style.opacity = '0';
  } else if (scroll < topLimit + animationOffset) {
    image.style.position = 'fixed';
    image.style.top = '50vh';
    image.style.left = '75vw';
    image.style.opacity = '0';
  } else if (scroll < bottomLimit) {
    image.style.position = 'fixed';
    image.style.top = '50vh';
    image.style.left = '50vw';
    image.style.opacity = '1';
  } else {
    image.style.position = 'absolute';
    image.style.top = (wrapper.offsetHeight - window.innerHeight / 2) + 'px';
    image.style.left = '50vw';
    image.style.opacity = '1';
  }
});