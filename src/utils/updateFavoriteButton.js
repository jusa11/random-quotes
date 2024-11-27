// Меняет цвет иконки в зависимости от есть цитата в избранном или нет
const updateFavoriteButton = (qoute, btn) => {
  const favoritesKey = Object.keys(localStorage);

  favoritesKey.find((key) => {
    let res = key === `favoriteQoute-${qoute.id}`;
    return btn.classList.toggle('active', res);
  });
};

export default updateFavoriteButton;
