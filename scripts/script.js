// teto audio
const img = document.getElementById('hoverAudio');
const sound = document.getElementById('hoverSound');

img.addEventListener('mouseenter', () => {
  sound.currentTime = 0;
  sound.play();
});

const image = document.querySelector('.wide-image');
const wrapper = document.querySelector('.wide-wrapper');

window.addEventListener('scroll', () => {
  const wrapperStart = wrapper.getBoundingClientRect().top + window.scrollY;

  const topLimit = wrapperStart;
  const bottomLimit = wrapperStart + window.innerHeight;
  const scroll = window.scrollY;

  if (scroll >= topLimit && scroll <= bottomLimit) {
    image.style.position = 'fixed';
    image.style.top = '0';
  } else if (scroll < topLimit) {
    image.style.position = 'absolute';
    image.style.top = '0';
  } else {
    image.style.position = 'absolute';
    image.style.top = (wrapper.offsetHeight - image.offsetHeight) + 'px';
  }
});