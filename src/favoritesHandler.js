import {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
} from './utils/localStorage.js';
import qoutes from '/data/qoutes.js';

// Меняет цвет иконки в зависимости от есть цитата в избранном или нет
const updateFavoriteButton = (qoute, btn) => {
  // btn.classList.toggle('active', qoute.isFavorite);
  const favoritesKey = Object.keys(localStorage).filter((key) =>
    key.startsWith('favoriteQoute-')
  );
  const nArr = [];
  favoritesKey.forEach((key) => {
    const qouteInLs = localStorageGetItem(key);
    nArr.push(qouteInLs);
    // btn.classList.toggle('active', qouteInLs.id === qoute.id);
  });
  const res = nArr.find((q) => {
    return q.id === qoute.id;
  });
  btn.classList.toggle('active', res);
};

// Создает карточку для избранной цитаты
function createFavoriteCard(qoute) {
  const favoritesQoute = document.createElement('div');
  const favoritesCard = document.querySelector('.favorites-qoutes-item');
  favoritesQoute.classList.add('favorites-qoute');
  favoritesQoute.setAttribute('data-qoute-id', qoute.id);
  favoritesQoute.innerHTML = `${qoute.text} (${qoute.author}) <span class="remove-btn">★</span>`;
  favoritesCard.prepend(favoritesQoute);
}

// Отрисовывает карточки с избранными цитатами из localStorage
function renderFavoritesCardLocalStorage(btn) {
  const favoritesKey = Object.keys(localStorage).filter((key) =>
    key.startsWith('favoriteQoute-')
  );
  favoritesKey.forEach((key) => {
    const qoute = localStorageGetItem(key);
    console.log(qoute);
    createFavoriteCard(qoute);
  });
}

// Убирает карточку с избранное цитатой
function hideFavoriteCard(qoute, btn) {
  document
    .querySelector(`.favorites-qoute[data-qoute-id = '${qoute.id}']`)
    ?.remove();
  localStorageRemoveItem(`favoriteQoute-${qoute.id}`);
}

// Показывает карточку с избранной цитатой
function showFavoriteCard(qoute, btn) {
  createFavoriteCard(qoute);
  localStorageSetItem(`favoriteQoute-${qoute.id}`, qoute);
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
        const qouteText = document.querySelector('.quotes-content-text');
        let IdQouteText = qouteText.getAttribute('data-qoute-id');
        +IdQouteText === qouteInArr.id ? btn.classList.toggle('active') : false;
        qouteInArr.isFavorite = false;
        localStorageRemoveItem(`favoriteQoute-${qouteInArr.id}`);
        card.remove();
      }
    });
  }
}

export {
  hideFavoriteCard,
  showFavoriteCard,
  updateFavoriteButton,
  initFavoritesHandler,
  renderFavoritesCardLocalStorage,
};

/* 1. Звездочка при обновлении страницы не краснеет если 
цитата из localstorage уже есть  
2. Сделать чтобы было по порядку 
3. Сделать чтобы при генерации цитаты не попадались 2 раза подряд
4. Куда то пропала id текущей цитаты в localstorage
*/

// остановился на updateFavoriteButton хочу
