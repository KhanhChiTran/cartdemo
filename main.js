const x = document.querySelectorAll('.color-select span');
const y = document.querySelector('.product-image-wrap');
x.forEach((e) => {
  e.addEventListener('click', (e) => {
    document.body.style.background = e.target.getAttribute('pick_color');
    x.forEach((e) => {
      e.classList.remove('active');
    });
    e.target.classList.add('active');
    y.style.backgroundImage = e.target.getAttribute('pic');
  });
});
