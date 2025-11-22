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
const initialWidth = image.offsetWidth;

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
    image.style.position = "absolute";
    image.style.top = "50vh";
    image.style.left = "75vw";
    image.style.opacity = "0";
    image.style.maxHeight = initialHeight + "px";
    image.width = initialWidth;
  } else if (scroll < topLimit + animationOffset) {
    image.style.position = "fixed";
    image.style.top = "50vh";
    image.style.left = "75vw";
    image.style.opacity = "0";
    image.style.maxHeight = initialHeight + "px";
    image.width = initialWidth;
  } else if (scroll < bottomLimit) {
    image.style.position = "fixed";
    image.style.top = "50vh";
    image.style.left = "50vw";
    image.style.opacity = "1";
    image.style.maxHeight = initialHeight + "px";
    image.width = initialWidth;
  } else if (scroll < bottomLimit - initialHeight) {
    image.style.position = "fixed";
    image.style.top = "50vh";
    image.style.left = "50vw";
    image.style.opacity = "1";
    image.style.maxHeight = topLimit + wrapper.offsetHeight - scroll + "px";
    image.width = initialWidth;
  } else {
    image.style.position = "absolute";
    image.style.top = wrapper.offsetHeight - image.offsetHeight / 2 + "px";
    image.style.left = "50vw";
    image.style.opacity = "1";
    image.style.maxHeight = topLimit + wrapper.offsetHeight - scroll + "px";
    image.width = initialWidth;
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

gsap.registerPlugin(MorphSVGPlugin);

const tl = gsap.timeline();
const delay = 0.4;
const fill = "#FF5C5C";

tl.to("#preload-box-1 path", {
  duration: 0,
  fill,
});

tl.to("#preload-box-4 path", {
  duration: 0,
  fill,
  delay,
});

tl.to("#preload-box-2 path", {
  duration: 0,
  fill,
  delay,
});

tl.to("#preload-box-3 path", {
  duration: 0,
  fill,
  delay,
});

tl.to("#left-drill", {
  duration: 0.5,
  morphSVG: "M0,0 H200 V40 H120 V200 H100 H80 V40 H0 Z",
  ease: "power2.inOut",
  delay,
});

tl.to(
  "#right-drill",
  {
    duration: 0.5,
    morphSVG: "M0,0 H200 V40 H120 V200 H100 H80 V40 H0 Z",
    ease: "power2.inOut",
  },
  "<"
);

tl.to(
  "#right-eye",
  {
    duration: 0.5,
    morphSVG:
      "M100,0 A100,100 0 1,1 99.999,0 Z M100,40 A60,60 0 1,1 99.999,40 Z",
    ease: "power2.inOut",
  },
  "<"
);

const theta = Math.PI / 8;
const x1 = 100 * Math.cos(theta);
const x2 = 60 * Math.cos(theta);
const y1 = 100 * Math.sin(theta);
const y2 = 60 * Math.sin(theta);

tl.to(
  "#left-eye",
  {
    duration: 0.5,
    morphSVG: `
    M${100 + x1},${100 - y1} A100,100 0 1,0 ${100 + x1},${100 + y1}
    L${100 + x2},${100 + y2} A60,60 0 1,1 ${100 + x2},${100 - y2} Z
  `,
    ease: "power2.inOut",
  },
  "<"
);

tl.to("#preload-title", {
  duration: 0.5,
  gap: "1vw",
  ease: "power2.inOut",
});

tl.set("#preload-box-1", { order: 1 })
  .set("#preload-box-2", { order: 2 })
  .set("#preload-box-3", { order: 4 })
  .set("#preload-box-4", { order: 3 })
  .to({}, { duration: 0 });

tl.to(
  "#preload-title svg",
  {
    scale: 1.1,
    duration: 0,
  },
  "<"
);

tl.to(
  "#preload-title svg path",
  {
    duration: 0,
    fill: "#ffc2c2",
  },
  "<"
);

tl.to(
  "#preload-title svg",
  {
    scale: 1,
    duration: 1,
    ease: "power1.inOut",
  },
  "<"
);

tl.to(
  "#preload-title svg path",
  {
    duration: 1.5,
    fill,
  },
  "<"
);

tl.to(
  "#preload-bg-cover",
  {
    duration: 1.5,
    y: "100vh",
    ease: "power2.inOut",
  },
  "<"
);

tl.to(
  "#preload-bg-cover",
  {
    duration: 1.5,
    y: "100vh",
    ease: "power2.inOut",
  },
  "<"
);

tl.to(
  "#preload-title",
  {
    duration: 1,
    y: "-50px",
    ease: "power2.inOut",
    delay: 0.7,
  },
  "<"
);

tl.to(
  "#preload-subtitle",
  {
    duration: 1,
    y: "30px",
    opacity: 1,
    ease: "power2.inOut",
  },
  "<"
);
