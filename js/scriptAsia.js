document.addEventListener('DOMContentLoaded', () => {
    // Пример: вывод сообщения о популярности рамена
    const infoSection = document.querySelector('.dish-detail__info');
    if (infoSection) {
      const note = document.createElement('p');
      note.style.fontStyle = 'italic';
      note.textContent = "Рамен один из самых популярных супов Японии!";
      infoSection.appendChild(note);
    }
  });