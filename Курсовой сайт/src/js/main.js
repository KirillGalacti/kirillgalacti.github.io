const hover = document.querySelectorAll('.hover');
const imgParent = document.querySelectorAll('.img-parent');

hover.forEach((s, i) => {
  s.addEventListener('mouseenter', () => {
    hover.forEach((s, i) => {
      imgParent[i].classList.remove('.z');
    })
    imgParent[i].classList.add('.z');

  });
});