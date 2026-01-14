const main = document.querySelector('#mainvisual');
const textAbout = document.querySelector('.left-about');
const imageAbout = document.querySelector('.right-about');

main.animate(
  {
    opacity: [0, 1]
  },
  {
    duration: 2400,
    fill: 'forwards',
    easing: 'ease',
  }
);

const show = (entries) => {
  const keyframes = {
    opacity: [0,1],
    translate: ['0 200px', 0],
  }
  entries[0].target.animate(keyframes, 2000);
}

const observer = new IntersectionObserver(show);
observer.observe(textAbout);

const show2 = (entries) => {
  const key = {
    opacity: [0,1],
    translate: ['150px 0', 0],
  }
  entries[0].target.animate(key, 2400);
}

const observer2 = new IntersectionObserver(show2);
observer2.observe(imageAbout);