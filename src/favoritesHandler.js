function hideFavoriteCard(qoute, btn) {
  qoute.isFavorite = false;
  btn.classList.remove('active');
  const favoriteCard = document.querySelectorAll('.favorites-qoute');
  favoriteCard.forEach((card) => {
    if (card.textContent.includes(qoute.text)) {
      card.remove();
    }
  });
}

function showFavoriteCard(qoute, btn, text) {
  qoute.isFavorite = true;
  btn.classList.add('active');
  const favoritesQoute = document.createElement('div');
  favoritesQoute.classList.add('favorites-qoute');
  favoritesQoute.textContent = `${qoute.text} (${qoute.author})`;
  text.prepend(favoritesQoute);
}

export { hideFavoriteCard, showFavoriteCard };
