// teto audio
const img = document.getElementById('hoverAudio');
const sound = document.getElementById('hoverSound');

img.addEventListener('mouseenter', () => {
  sound.currentTime = 0;
  sound.play();
});