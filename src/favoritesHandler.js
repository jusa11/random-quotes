function checkfavoriteBtn(qoute, btn) {
  if (qoute.isFavorite) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
}

function hideFavoriteCard(qoute, btn) {
  qoute.isFavorite = false;
  checkfavoriteBtn(qoute, btn);
  const favoriteCard = document.querySelectorAll('.favorites-qoute');
  favoriteCard.forEach((card) => {
    if (card.textContent.includes(qoute.text)) {
      card.remove();
    }
  });
}

function showFavoriteCard(qoute, btn, text) {
  qoute.isFavorite = true;
  checkfavoriteBtn(qoute, btn);
  const favoritesQoute = document.createElement('div');
  favoritesQoute.classList.add('favorites-qoute');
  favoritesQoute.textContent = `${qoute.text} (${qoute.author})`;
  text.prepend(favoritesQoute);
}

export { hideFavoriteCard, showFavoriteCard, checkfavoriteBtn };
