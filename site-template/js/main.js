// Бургер-меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  // закрытие при клике по ссылке
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Пример обработки формы (без отправки на сервер)
const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Сообщение отправлено! (подключи бэкенд для реальной отправки)');
    form.reset();
  });
}
