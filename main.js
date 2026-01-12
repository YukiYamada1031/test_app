const main = document.querySelector('#mainvisual');

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