// Меняет цвет иконки в зависимости от есть цитата в избранном или нет
import qoutes from './qoutes.js';
const updateFavoriteButton = (qoute, btn) =>
  btn.classList.toggle(
    'active',
    document.querySelector(`[data-qoute-id = '${qoute.id}']`)
  );

// Убирает карточку с избранное цитатой
function hideFavoriteCard(qoute) {
  const favoritesQoute = document.querySelector(
    `[data-qoute-id = '${qoute.id}']`
  );
  favoritesQoute.remove();
}

// Показывает карточку с избранной цитатой
function showFavoriteCard({ text, author, id }) {
  const favoritesCard = document.querySelector('.favorites-qoutes-item');
  const favoritesQoute = document.createElement('div');
  favoritesQoute.classList.add('favorites-qoute');
  favoritesQoute.setAttribute('data-qoute-id', id);
  favoritesQoute.innerHTML = `${text} (${author}) <span class="remove-btn">★</span>`;
  favoritesCard.prepend(favoritesQoute);
}

/* function initFavoritesHandler() {
  const favoriteItem = document.querySelector('.favorites-qoutes-item');
  favoriteItem.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
      const quoteElement = event.target.parentElement;
      quoteElement.remove();
    }
  });
} */

// удаление из массива (делегирование событий)
function initFavoritesHandler(btn) {
  const favoriteItem = document.querySelector('.favorites-qoutes-item');
  if (!favoriteItem.hasAttribute('data-handler-initialized')) {
    favoriteItem.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-btn')) {
        const quoteElement = event.target.parentElement;
        quoteElement.remove();
        const quoteInArray = quoteElement.getAttribute('data-qoute-id');
        const indexQuote = qoutes.findIndex(
          (qoute) => qoute.id === +quoteInArray
        );
        qoutes.splice(indexQuote, 1);
      }
      btn.classList.toggle('active');
    });
    favoriteItem.setAttribute('data-handler-initialized', 'true');
  }
}

export {
  hideFavoriteCard,
  showFavoriteCard,
  updateFavoriteButton,
  initFavoritesHandler,
};
