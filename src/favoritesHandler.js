// Меняет цвет иконки в зависимости от есть цитата в избранном или нет
const updateFavoriteButton = (qoute, btn) =>
  btn.classList.toggle('active', qoute.isFavorite);

// Убирает карточку с избранное цитатой
function hideFavoriteCard(qoute, btn) {
  qoute.isFavorite = false;
  updateFavoriteButton(qoute, btn);
  const favoritesQoute = document.querySelector(`[qouteId = '${qoute.id}']`);
  favoritesQoute.remove();
}

// Показывает карточку с избранной цитатой
function showFavoriteCard(qoute, btn, text) {
  qoute.isFavorite = true;
  updateFavoriteButton(qoute, btn);
  const favoritesQoute = document.createElement('div');
  favoritesQoute.classList.add('favorites-qoute');
  favoritesQoute.setAttribute('qouteId', qoute.id);
  favoritesQoute.textContent = `${qoute.text} (${qoute.author})`;
  text.prepend(favoritesQoute);
}

export {
  hideFavoriteCard,
  showFavoriteCard,
  updateFavoriteButton as checkfavoriteBtn,
};
