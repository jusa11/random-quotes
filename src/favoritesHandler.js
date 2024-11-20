// Меняет цвет иконки в зависимости от есть цитата в избранном или нет
import qoutes from './qoutes.js';
let qouteText;

const updateFavoriteButton = (qoute, btn) =>
  btn.classList.toggle('active', qoute.isFavorite);

// Убирает карточку с избранное цитатой
function hideFavoriteCard(qoute, btn) {
  qoute.isFavorite = false;
  const favoritesQoute = document.querySelector(
    `.favorites-qoute[data-qoute-id = '${qoute.id}']`
  );
  console.log(favoritesQoute);
  favoritesQoute.remove();
  updateFavoriteButton(qoute, btn);
}

// Показывает карточку с избранной цитатой
function showFavoriteCard(qoute, btn) {
  qoute.isFavorite = true;
  const favoritesCard = document.querySelector('.favorites-qoutes-item');
  const favoritesQoute = document.createElement('div');
  qouteText = document.querySelector('.quotes-content-text');
  qouteText.setAttribute('data-qoute-id', qoute.id);
  favoritesQoute.classList.add('favorites-qoute');
  favoritesQoute.setAttribute('data-qoute-id', qoute.id);
  favoritesQoute.innerHTML = `${qoute.text} (${qoute.author}) <span class="remove-btn">★</span>`;
  favoritesCard.prepend(favoritesQoute);
  updateFavoriteButton(qoute, btn);
}

function initFavoritesHandler(btn) {
  const favoriteItem = document.querySelector('.favorites-qoutes-item');
  favoriteItem.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
      const quoteElement = event.target.parentElement;
      const idQoute = quoteElement.getAttribute('data-qoute-id');
      const qouteInArr = qoutes.find((el) => el.id === +idQoute);
      let IdQouteText = qouteText.getAttribute('data-qoute-id');
      if (+IdQouteText === qouteInArr.id) {
        btn.classList.toggle('active');
      }

      qouteInArr.isFavorite = false;
      quoteElement.remove();
    }
  });
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
