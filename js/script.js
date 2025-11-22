// teto audio
const img = document.getElementById('hoverAudio');
const sound = document.getElementById('hoverSound');

img.addEventListener('mouseenter', () => {
  sound.currentTime = 0;
  sound.play();
});

const image = document.querySelector('.wide-image');
const wrapper = document.querySelector('#wide-wrapper');

const initialHeight = image.offsetHeight;
const initialWidth = image.offsetWidth;

// bottomLimit must be > animationOffset + topLimit
window.addEventListener('scroll', () => {
  const animationOffset = window.innerHeight * 0.5;
  const topLimit = wrapper.offsetTop;
  const bottomLimit = topLimit + wrapper.offsetHeight - (initialHeight / 2 + window.innerHeight / 2);
  
  const scroll = window.scrollY;

  if (scroll < topLimit) {
    image.style.position = 'absolute';
    image.style.top = '50vh';
    image.style.left = '75vw';
    image.style.opacity = '0';
    image.style.maxHeight = initialHeight + 'px';
    image.width = initialWidth;
  } else if (scroll < topLimit + animationOffset) {
    image.style.position = 'fixed';
    image.style.top = '50vh';
    image.style.left = '75vw';
    image.style.opacity = '0';
    image.style.maxHeight = initialHeight + 'px';
    image.width = initialWidth;
  } else if (scroll < bottomLimit) {
    image.style.position = 'fixed';
    image.style.top = '50vh';
    image.style.left = '50vw';
    image.style.opacity = '1';
    image.style.maxHeight = initialHeight + 'px';
    image.width = initialWidth;
  } else if (scroll < bottomLimit - initialHeight) {
    image.style.position = 'fixed';
    image.style.top = '50vh';
    image.style.left = '50vw';
    image.style.opacity = '1';
    image.style.maxHeight = topLimit + wrapper.offsetHeight - scroll + 'px';
    image.width = initialWidth;
  } else {
    image.style.position = 'absolute';
    image.style.top = (wrapper.offsetHeight - image.offsetHeight / 2) + 'px';
    image.style.left = '50vw';
    image.style.opacity = '1';
    image.style.maxHeight = topLimit + wrapper.offsetHeight - scroll + 'px';
    image.width = initialWidth;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // optional: fade in only once
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));