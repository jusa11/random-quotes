'use strict';
import qoutes from './src/qoutes.js';
import {
  hideFavoriteCard,
  showFavoriteCard,
  updateFavoriteButton,
  initFavoritesHandler,
} from './src/favoritesHandler.js';
import { generateRandomInt } from './src/utilits.js';

const generateBtn = document.getElementById('generate-btn');
const favoritesBtn = document.querySelector('.favorites-btn');
let currentQute;

// Показывает цитату
function showQute() {
  const qouteAuthor = document.querySelector('.quotes-content-author');
  const qouteText = document.querySelector('.quotes-content-text');

  const { text, author } = currentQute;
  qouteText.textContent = `"${text}"`;
  qouteAuthor.textContent = author;
}

// Выдает цитату из массива цитат
const generateRandomQoutes = () => {
  currentQute = generateRandomInt(qoutes);
  updateFavoriteButton(currentQute, favoritesBtn);
  showQute();
};

// Добавляет цитату в избранное
const addToFavorites = () => {
  document.querySelector(
    `.favorites-qoute[data-qoute-id = '${currentQute.id}']`
  )
    ? hideFavoriteCard(currentQute, favoritesBtn)
    : showFavoriteCard(currentQute, favoritesBtn);
};

initFavoritesHandler(favoritesBtn);

generateBtn.addEventListener('click', generateRandomQoutes);
favoritesBtn.addEventListener('click', addToFavorites);
generateRandomQoutes();

// сделать в массиве isFavorite: false
// сделать цвет кнопки при удалении (сейчас применяется для всех циатат)
// кинуть qoutes в data
