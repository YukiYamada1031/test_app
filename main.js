const header = document.querySelector('#header');

header.animate(
  {
    opacity: [0, 1]
  },
  {
    duration: 2400,
    fill: 'forwards',
    easing: 'ease',
  }
);