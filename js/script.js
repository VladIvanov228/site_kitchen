// Выводим сообщение в консоль
console.log("Скрипт подключён и работает!");

// Изменяем текст приветствия на главной странице
document.addEventListener('DOMContentLoaded', () => {
  const greeting = document.querySelector('.main-content__text');
  if (greeting) {
    greeting.textContent = "Добро пожаловать на сайт с национальными блюдами!";
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('alertButton');
    if (button) {
      button.addEventListener('click', () => {
        alert("Кнопка была нажата!");
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
      });
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        // Сохраняем выбор пользователя
        if(document.body.classList.contains('dark-theme')) {
          localStorage.setItem('theme', 'dark');
        } else {
          localStorage.setItem('theme', 'light');
        }
      });
      // Автоматически устанавливаем тему, если она была выбрана ранее
      if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
      }
    }
  });
  