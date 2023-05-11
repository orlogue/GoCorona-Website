const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__body');
const lockingDiv = document.querySelector('.lock');

function removeActives() {
  menu.classList.remove('active');
  burger.classList.remove('active');
  lockingDiv.classList.remove('active');
  document.body.classList.remove('overflow-hidden');
}


burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');
  lockingDiv.classList.toggle('active');
})

lockingDiv.addEventListener('click', () => {
  removeActives();
})

document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', () => {
    removeActives();
  })
});