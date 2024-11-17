// Меняет цвет иконки в зависимости от есть цитата в избранном или нет
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
function showFavoriteCard(qoute) {
  const { text, author, id } = qoute;
  const favoritesCard = document.querySelector('.favorites-qoutes-item');
  const favoritesQoute = document.createElement('div');
  favoritesQoute.classList.add('favorites-qoute');
  favoritesQoute.setAttribute('data-qoute-id', id);
  favoritesQoute.textContent = `${text} (${author})`;
  favoritesCard.prepend(favoritesQoute);
}

export { hideFavoriteCard, showFavoriteCard, updateFavoriteButton };
