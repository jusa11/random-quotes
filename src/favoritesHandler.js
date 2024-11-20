// Меняет цвет иконки в зависимости от есть цитата в избранном или нет
import qoutes from '/data/qoutes.js';
let qouteText;

const updateFavoriteButton = (qoute, btn) =>
  btn.classList.toggle('active', qoute.isFavorite);

// Убирает карточку с избранное цитатой
function hideFavoriteCard(qoute, btn) {
  qoute.isFavorite = false;
  document
    .querySelector(`.favorites-qoute[data-qoute-id = '${qoute.id}']`)
    ?.remove();
  updateFavoriteButton(qoute, btn);
}

function createFavoriteCard(qoute) {
  const favoritesQoute = document.createElement('div');
  const favoritesCard = document.querySelector('.favorites-qoutes-item');
  favoritesQoute.classList.add('favorites-qoute');
  favoritesQoute.setAttribute('data-qoute-id', qoute.id);
  favoritesQoute.innerHTML = `${qoute.text} (${qoute.author}) <span class="remove-btn">★</span>`;
  favoritesCard.prepend(favoritesQoute);
}

// Показывает карточку с избранной цитатой
function showFavoriteCard(qoute, btn) {
  qoute.isFavorite = true;
  qouteText = document.querySelector('.quotes-content-text');
  qouteText.setAttribute('data-qoute-id', qoute.id);
  createFavoriteCard(qoute);
  updateFavoriteButton(qoute, btn);
}

// Убирает карточку с избранное цитатой при клике на нее
function initFavoritesHandler(btn) {
  const favoriteItem = document.querySelector('.favorites-qoutes-item');

  if (!favoriteItem.hasAttribute('data-handler-initialized')) {
    favoriteItem.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-btn')) {
        const card = event.target.parentElement;
        const idQoute = card.getAttribute('data-qoute-id');
        const qouteInArr = qoutes.find((q) => q.id === +idQoute);
        let IdQouteText = qouteText.getAttribute('data-qoute-id');
        +IdQouteText === qouteInArr.id ? btn.classList.toggle('active') : false;
        qouteInArr.isFavorite = false;
        card.remove();
      }
    });
  }
}

// удаление из массива (делегирование событий)
/* function initFavoritesHandler(btn) {
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
} */

export {
  hideFavoriteCard,
  showFavoriteCard,
  updateFavoriteButton,
  initFavoritesHandler,
};
