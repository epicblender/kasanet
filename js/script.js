// teto audio
const img = document.getElementById("hoverAudio");
const sound = document.getElementById("hoverSound");

img.addEventListener("mouseenter", () => {
  sound.currentTime = 0;
  sound.play();
});

const image = document.querySelector("#wide-image");
const wrapper = document.querySelector("#wide-wrapper");

const initialHeight = image.offsetHeight;

function changeStyle(position, top, left, opacity, maxHeight) {
  Object.assign(image.style, { position, top, left, opacity, maxHeight });
}

// bottomLimit must be > animationOffset + topLimit
window.addEventListener("scroll", () => {
  const animationOffset = window.innerHeight * 0.5;
  const topLimit = wrapper.offsetTop;
  const bottomLimit =
    topLimit +
    wrapper.offsetHeight -
    (initialHeight / 2 + window.innerHeight / 2);

  const scroll = window.scrollY;

  if (scroll < topLimit) {
    changeStyle("absolute", "50vh", "75vw", "0", initialHeight + "px");
  } else if (scroll < topLimit + animationOffset) {
    changeStyle("fixed", "50vh", "75vw", "0", initialHeight + "px");
  } else if (scroll < bottomLimit) {
    changeStyle("fixed", "50vh", "50vw", "1", initialHeight + "px");
  } else if (scroll < bottomLimit - initialHeight) {
    changeStyle(
      "fixed",
      "50vh",
      "50vw",
      "1",
      topLimit + wrapper.offsetHeight - scroll + "px"
    );
  } else {
    changeStyle(
      "absolute",
      wrapper.offsetHeight - image.offsetHeight / 2 + "px",
      "50vw",
      "1",
      topLimit + wrapper.offsetHeight - scroll + "px"
    );
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // optional: fade in only once
    }
  });
});

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
