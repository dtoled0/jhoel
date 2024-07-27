const openFirstModalBtn = document.querySelector('.popup-false-message');
const openSecondModalBtn = document.getElementById('openSecondModal');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const closeBtns = document.querySelectorAll('.close');

openFirstModalBtn.addEventListener('click', () => {
  modal1.style.display = 'block';
});

openSecondModalBtn.addEventListener('click', () => {
  modal2.style.display = 'block';
});

closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const modal = closeBtn.closest('.modal');
    modal.style.display = 'none';
  });
});

window.addEventListener('click', event => {
  if (event.target === modal1 || event.target === modal2) {
    modal1.style.display = 'none';
    modal2.style.display = 'none';
  }
});
